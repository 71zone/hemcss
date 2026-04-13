// plugin/index.js — hemcss PostCSS plugin.
// v1 responsibility: rewrite `@import "hemcss"` into pre-built dist imports
// based on config (reset, themes, focusRing, validateThemes). Reserved
// options (content, components, prefix) warn as no-ops.

import { readFileSync, existsSync } from 'node:fs'
import { resolve as resolvePath, isAbsolute, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)

// ---- Schema load ----
// Read the token schema once at module load. Tries the installed-package
// path first (so consumers of hemcss work), falls back to the in-repo src
// path (so the plugin works during hemcss's own development).
const loadSchema = () => {
  try {
    const schemaPath = require.resolve('hemcss/tokens/schema')
    return JSON.parse(readFileSync(schemaPath, 'utf8'))
  } catch {
    const fallback = fileURLToPath(new URL('../src/tokens/schema.json', import.meta.url))
    if (existsSync(fallback)) return JSON.parse(readFileSync(fallback, 'utf8'))
    return { version: 1, tokens: [] }
  }
}

const SCHEMA = loadSchema()
const REQUIRED_TOKENS = SCHEMA.tokens.filter(t => t.required).map(t => t.name)

// ---- Resolvers ----
const BUNDLED_THEMES = new Set(['hanoi-light', 'hanoi-dark', 'saigon-light', 'saigon-dark'])

const SEMANTIC_ALIASES = new Set([
  'primary', 'secondary', 'success', 'info', 'warning', 'error', 'neutral',
])

/**
 * Map a theme entry to an @import specifier string (used inside `@import "..."`).
 *   - Bundled name → "hemcss/themes/<name>"
 *   - Otherwise → passed through untouched; postcss-import resolves it later.
 */
const resolveThemeEntry = (entry) => {
  if (typeof entry !== 'string') {
    throw new Error(`hemcss: theme entry must be a string, got ${typeof entry}`)
  }
  if (BUNDLED_THEMES.has(entry)) return `hemcss/themes/${entry}`
  return entry
}

/**
 * Map a theme entry to an absolute filesystem path for schema validation,
 * or null if it can't be resolved. `baseDir` is the directory used as the
 * base for relative paths — typically `dirname(result.opts.from)` (the
 * directory of the currently-processed CSS entry), falling back to the
 * process cwd when PostCSS has no `from` context.
 */
const resolveThemePath = (entry, baseDir) => {
  if (BUNDLED_THEMES.has(entry)) {
    try {
      return require.resolve(`hemcss/themes/${entry}`)
    } catch {
      const local = fileURLToPath(new URL(`../src/themes/${entry}.css`, import.meta.url))
      return existsSync(local) ? local : null
    }
  }
  if (isAbsolute(entry)) return existsSync(entry) ? entry : null
  const rel = resolvePath(baseDir, entry)
  if (existsSync(rel)) return rel
  try { return require.resolve(entry) } catch { return null }
}

/**
 * Parse a theme CSS file for defined `--hem-*` custom properties.
 * Regex-based (not AST) to keep the plugin fast; theme files are flat
 * declaration blocks, so regex matches the actual format well.
 *
 * Results are memoized by absolute filePath in a module-level cache so
 * multi-entry builds don't re-read the same theme file once per entry.
 * The cache lives for the lifetime of the plugin module (fine for a
 * build-time tool; not a long-running daemon).
 */
const TOKEN_FILE_CACHE = new Map()

const tokensDefinedInFile = (filePath) => {
  const cached = TOKEN_FILE_CACHE.get(filePath)
  if (cached) return cached

  const content = readFileSync(filePath, 'utf8')
  const tokens = new Set()
  const regex = /(--hem-[a-zA-Z0-9-]+)\s*:/g
  let match
  while ((match = regex.exec(content)) !== null) {
    tokens.add(match[1])
  }
  TOKEN_FILE_CACHE.set(filePath, tokens)
  return tokens
}

/**
 * Resolve the focusRing option to a CSS value string, or null if the default
 * 'primary' is used (in which case no override is emitted).
 */
const resolveFocusRing = (value) => {
  if (value === 'primary') return null
  if (SEMANTIC_ALIASES.has(value)) return `var(--hem-${value})`
  return value // treated as a raw OKLCH or color value
}

// ---- Plugin factory ----

/**
 * @typedef {Object} HemcssOptions
 * @property {boolean} [reset=true]
 * @property {Array<string>} [themes=[]]
 * @property {string} [focusRing='primary']
 * @property {'warn'|'error'|'off'} [validateThemes='warn']
 * @property {Array<string>} [content]
 * @property {'all'|Array<string>} [components='all']
 * @property {string} [prefix='']
 */

/** @param {HemcssOptions} [options] */
const hemcss = (options = {}) => {
  const opts = {
    reset: options.reset !== false,
    themes: Array.isArray(options.themes) ? options.themes : [],
    focusRing: options.focusRing ?? 'primary',
    validateThemes: options.validateThemes ?? 'warn',
    content: options.content,
    components: options.components ?? 'all',
    prefix: options.prefix ?? '',
  }

  // Per-plugin-instance guards so reserved-option warnings and theme
  // validation fire once per hemcss({...}) call, not once per input file.
  // In multi-entry PostCSS builds, `Once` runs per source file — without
  // these guards, a user with `themes: ['light','dark']` and 20 CSS
  // entries would see each warning repeated 20 times.
  let reservedWarned = false
  let themesValidated = false

  return {
    postcssPlugin: 'hemcss',
    Once(root, { result, postcss }) {
      // ---- Reserved-option warnings (v1 → v2 upgrade path) ----
      if (!reservedWarned) {
        reservedWarned = true
        if (opts.content !== undefined) {
          result.warn(
            'hemcss: `content` option is reserved for v2 scanner and has no effect in v1.',
            { plugin: 'hemcss' }
          )
        }
        if (opts.components !== 'all') {
          result.warn(
            'hemcss: `components` option is reserved for v2 scanner and has no effect in v1 (default "all" is used).',
            { plugin: 'hemcss' }
          )
        }
        if (opts.prefix !== '') {
          result.warn(
            'hemcss: `prefix` option is reserved for v2 and has no effect in v1.',
            { plugin: 'hemcss' }
          )
        }
      }

      // Base directory for relative theme paths: directory of the current
      // CSS entry when PostCSS provides it, else the process cwd.
      const baseDir = result.opts.from ? dirname(result.opts.from) : process.cwd()

      // ---- Theme schema validation ----
      if (opts.validateThemes !== 'off' && !themesValidated) {
        themesValidated = true
        for (const entry of opts.themes) {
          const filePath = resolveThemePath(entry, baseDir)
          if (!filePath) {
            const msg = `hemcss: could not resolve theme entry "${entry}"`
            if (opts.validateThemes === 'error') throw new Error(msg)
            result.warn(msg, { plugin: 'hemcss' })
            continue
          }
          const defined = tokensDefinedInFile(filePath)
          const missing = REQUIRED_TOKENS.filter(t => !defined.has(t))
          if (missing.length > 0) {
            const msg = `hemcss: theme "${entry}" is missing required tokens: ${missing.join(', ')}`
            if (opts.validateThemes === 'error') throw new Error(msg)
            result.warn(msg, { plugin: 'hemcss' })
          }
        }
      }

      // ---- Rewrite @import "hemcss" to the configured specifier chain ----
      root.walkAtRules('import', (atRule) => {
        if (!/^["']hemcss["']$/.test(atRule.params)) return

        const coreSpecifier = opts.reset ? 'hemcss' : 'hemcss/no-reset'
        const nodes = [
          postcss.atRule({ name: 'import', params: `"${coreSpecifier}"` }),
        ]

        for (const entry of opts.themes) {
          const specifier = resolveThemeEntry(entry)
          nodes.push(
            postcss.atRule({ name: 'import', params: `"${specifier}"` })
          )
        }

        const ringValue = resolveFocusRing(opts.focusRing)
        if (ringValue !== null) {
          const rootRule = postcss.rule({ selector: ':root' })
          rootRule.append(
            postcss.decl({ prop: '--hem-ring', value: ringValue })
          )
          nodes.push(rootRule)
        }

        atRule.replaceWith(...nodes)
      })
    },
  }
}
hemcss.postcss = true

export default hemcss
