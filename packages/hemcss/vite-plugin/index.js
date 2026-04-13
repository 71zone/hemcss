// vite-plugin/index.js — thin Vite wrapper around the hemcss PostCSS plugin.
// Runs the same PostCSS chain (hemcss → postcss-import → postcss-nesting)
// inside Vite's transform hook for CSS files that mention "hemcss".

import postcss from 'postcss'
import hemcssPostCSS from '../plugin/index.js'

export default function hemcss(options = {}) {
  let postcssImport, postcssNesting

  return {
    name: 'hemcss',
    enforce: 'pre',
    async configResolved() {
      // Lazy-require to avoid hard dependency at module load time.
      postcssImport = (await import('postcss-import')).default
      postcssNesting = (await import('postcss-nesting')).default
    },
    async transform(code, id) {
      if (!id.endsWith('.css')) return null
      if (!code.includes('hemcss')) return null
      const result = await postcss([
        hemcssPostCSS(options),
        postcssImport(),
        postcssNesting(),
      ]).process(code, { from: id, map: { inline: false } })
      return { code: result.css, map: result.map }
    },
  }
}
