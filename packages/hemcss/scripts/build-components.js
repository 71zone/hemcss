import { readdirSync } from 'node:fs'
import { execSync } from 'node:child_process'
import { basename } from 'node:path'

const entries = readdirSync('src/entries')
  .filter((f) => f.endsWith('.css'))
  .map((f) => basename(f, '.css'))

for (const name of entries) {
  const src = `src/entries/${name}.css`
  const out = `dist/components/${name}.css`
  const min = `dist/components/${name}.min.css`
  execSync(`postcss ${src} -o ${out} && postcss ${src} -o ${min} --env min`, {
    stdio: 'inherit',
  })
}
