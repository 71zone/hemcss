// test/plugin.test.js
import { test, expect } from 'vitest'
import postcss from 'postcss'
import hemcss from '../plugin/index.js'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
const __dirname = dirname(fileURLToPath(import.meta.url))

async function run(input, options = {}) {
  const result = await postcss([hemcss(options)]).process(input, { from: undefined })
  return result.css
}

test('plugin is a valid PostCSS plugin', async () => {
  expect(hemcss().postcssPlugin).toBe('hemcss')
  const out = await run('.foo { color: red; }')
  expect(out).toContain('.foo')
})

test('rewrites @import "hemcss" to hemcss/no-reset when reset: false', async () => {
  const out = await run('@import "hemcss";', { reset: false })
  expect(out).toContain('hemcss/no-reset')
  expect(out).not.toMatch(/@import ["']hemcss["'];/)
})

test('with reset: true (default), keeps @import "hemcss" shape', async () => {
  const out = await run('@import "hemcss";')
  // The rewrite still happens (old node replaced by new node), but the
  // resulting specifier is "hemcss" so the serialized output looks identical.
  expect(out).toContain('@import "hemcss"')
  expect(out).not.toContain('hemcss/no-reset')
})

test('appends theme imports for bundled theme names', async () => {
  const out = await run('@import "hemcss";', { themes: ['hanoi-light', 'saigon-dark'] })
  expect(out).toContain('@import "hemcss/themes/hanoi-light"')
  expect(out).toContain('@import "hemcss/themes/saigon-dark"')
})

test('appends theme imports for absolute paths as-is', async () => {
  const out = await run('@import "hemcss";', { themes: ['/abs/path/to/acme.css'] })
  expect(out).toContain('@import "/abs/path/to/acme.css"')
})

test('theme imports come after the core import', async () => {
  const out = await run('@import "hemcss";', { themes: ['hanoi-light'] })
  const coreIdx  = out.indexOf('@import "hemcss"')
  const themeIdx = out.indexOf('@import "hemcss/themes/hanoi-light"')
  expect(coreIdx).toBeGreaterThanOrEqual(0)
  expect(themeIdx).toBeGreaterThan(coreIdx)
})

test('focusRing option injects :root override for --hem-ring', async () => {
  const out = await run('@import "hemcss";', { focusRing: 'secondary' })
  expect(out).toMatch(/:root\s*{\s*--hem-ring:\s*var\(--hem-secondary\)/)
})

test('focusRing option accepts raw OKLCH value', async () => {
  const out = await run('@import "hemcss";', { focusRing: 'oklch(70% 0.2 120)' })
  expect(out).toMatch(/:root\s*{\s*--hem-ring:\s*oklch\(70% 0\.2 120\)/)
})

test('focusRing defaults to primary (no override emitted)', async () => {
  const out = await run('@import "hemcss";')
  // Default is 'primary', which matches the token default, so no override
  // should be injected (DRY — don't emit a no-op rule).
  expect(out).not.toMatch(/--hem-ring:/)
})

test('reserved option `content` emits a warning in v1', async () => {
  const result = await postcss([hemcss({ content: ['./**/*.html'] })])
    .process('@import "hemcss";', { from: undefined })
  const warnings = result.warnings().map(w => w.text)
  expect(warnings.some(t => /content.*v2/i.test(t))).toBe(true)
})

test('reserved option `components` with non-all value emits a warning', async () => {
  const result = await postcss([hemcss({ components: ['btn'] })])
    .process('@import "hemcss";', { from: undefined })
  const warnings = result.warnings().map(w => w.text)
  expect(warnings.some(t => /components.*v2/i.test(t))).toBe(true)
})

test('reserved option `prefix` with non-empty value emits a warning', async () => {
  const result = await postcss([hemcss({ prefix: 'hem-' })])
    .process('@import "hemcss";', { from: undefined })
  const warnings = result.warnings().map(w => w.text)
  expect(warnings.some(t => /prefix.*v2/i.test(t))).toBe(true)
})

test('no warnings when reserved options are omitted', async () => {
  const result = await postcss([hemcss({})])
    .process('@import "hemcss";', { from: undefined })
  expect(result.warnings().length).toBe(0)
})

test('validateThemes=warn emits a warning listing missing tokens', async () => {
  const entry = resolve(__dirname, 'fixtures/missing-tokens-theme.css')
  const result = await postcss([hemcss({ themes: [entry], validateThemes: 'warn' })])
    .process('@import "hemcss";', { from: undefined })
  const warnings = result.warnings().map(w => w.text)
  expect(warnings.some(t => /--hem-primary/.test(t))).toBe(true)
  expect(warnings.some(t => /--hem-text-inverted/.test(t))).toBe(true)
  expect(warnings.some(t => /--hem-bg-elevated/.test(t))).toBe(true)
})

test('validateThemes=warn does not warn on a complete theme', async () => {
  const entry = resolve(__dirname, 'fixtures/valid-theme.css')
  const result = await postcss([hemcss({ themes: [entry], validateThemes: 'warn' })])
    .process('@import "hemcss";', { from: undefined })
  const warnings = result.warnings().map(w => w.text)
  expect(warnings.filter(t => /--hem-/.test(t)).length).toBe(0)
})

test('validateThemes=off skips validation entirely', async () => {
  const entry = resolve(__dirname, 'fixtures/missing-tokens-theme.css')
  const result = await postcss([hemcss({ themes: [entry], validateThemes: 'off' })])
    .process('@import "hemcss";', { from: undefined })
  const warnings = result.warnings().map(w => w.text)
  expect(warnings.filter(t => /--hem-/.test(t)).length).toBe(0)
})

test('validateThemes=error throws on missing tokens', async () => {
  const entry = resolve(__dirname, 'fixtures/missing-tokens-theme.css')
  await expect(
    postcss([hemcss({ themes: [entry], validateThemes: 'error' })])
      .process('@import "hemcss";', { from: undefined })
  ).rejects.toThrow(/--hem-primary/)
})

test('vite plugin export exists and returns a plugin object', async () => {
  const { default: hemcssVite } = await import('../vite-plugin/index.js')
  const plugin = hemcssVite({ reset: false })
  expect(plugin.name).toBe('hemcss')
  expect(typeof plugin.transform).toBe('function')
})
