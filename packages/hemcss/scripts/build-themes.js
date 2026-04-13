import { readdirSync } from 'node:fs'
import { execSync } from 'node:child_process'
import { basename } from 'node:path'

const themes = readdirSync('src/themes')
  .filter((f) => f.endsWith('.css'))
  .map((f) => basename(f, '.css'))

for (const name of themes) {
  const src = `src/themes/${name}.css`
  const out = `dist/themes/${name}.css`
  const min = `dist/themes/${name}.min.css`
  execSync(`postcss ${src} -o ${out} && postcss ${src} -o ${min} --env min`, {
    stdio: 'inherit',
  })
}
