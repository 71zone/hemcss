import postcssImport from 'postcss-import'
import postcssNesting from 'postcss-nesting'
import cssnano from 'cssnano'

/**
 * Custom PostCSS plugin: empties the @layer reset block when
 * process.env.HEMCSS_NO_RESET is set. Used by the no-reset build variant.
 *
 * Strategy: after postcss-import inlines everything, walk the tree and
 * remove all child nodes inside any `@layer reset { ... }` block. The
 * layer declaration itself remains so cascade order is preserved.
 *
 * IMPORTANT: Uses Once + walkAtRules rather than the visitor-API form
 * AtRule: { layer: ... }. The visitor form re-invokes mutation visitors
 * after children are modified, and calling removeAll() on a layer
 * visitor triggers an infinite re-visit loop on the same node. Once +
 * walk runs exactly once per build and has no such problem.
 */
const emptyResetLayer = () => ({
  postcssPlugin: 'hemcss-empty-reset-layer',
  Once(root) {
    if (process.env.HEMCSS_NO_RESET !== '1') return
    root.walkAtRules('layer', (atRule) => {
      if (atRule.params !== 'reset') return
      atRule.removeAll()
    })
  },
})
emptyResetLayer.postcss = true

export default (ctx) => ({
  plugins: [
    postcssImport(),
    postcssNesting(),
    emptyResetLayer(),
    ctx.env === 'min' ? cssnano({ preset: 'default' }) : false,
  ].filter(Boolean),
})
