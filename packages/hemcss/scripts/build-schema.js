// scripts/build-schema.js — copies src/tokens/schema.json to dist/tokens/schema.json.
// Independent of the PostCSS build; order in `npm run build` is arbitrary.

import { copyFileSync, mkdirSync, existsSync, readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

const src = resolve(root, 'src/tokens/schema.json')
const destDir = resolve(root, 'dist/tokens')
const dest = resolve(destDir, 'schema.json')

if (!existsSync(src)) {
  console.error(`[build-schema] source not found: ${src}`)
  process.exit(1)
}

// Fail fast on a corrupted schema rather than shipping broken JSON.
try {
  JSON.parse(readFileSync(src, 'utf8'))
} catch (err) {
  console.error(`[build-schema] invalid JSON in ${src}: ${err.message}`)
  process.exit(1)
}

mkdirSync(destDir, { recursive: true })
copyFileSync(src, dest)
console.log(`[build-schema] copied ${src} -> ${dest}`)
