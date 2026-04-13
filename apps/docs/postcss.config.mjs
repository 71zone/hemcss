// PostCSS config for the docs site.
//
// VitePress's default theme CSS is unlayered. In CSS Cascade Layers,
// unlayered styles ALWAYS beat layered styles regardless of specificity
// or order — so hemcss's `@layer component { .btn { … } }` rules lose
// every conflict with VitePress's bare `button { … }` reset. Visible
// symptom: all hemcss components render naked in the docs site.
//
// Fix: unwrap every `@layer <name> { … }` block into its inner rules,
// and drop bare layer-order declarations (`@layer a, b, c;`). After this
// transform, hemcss rules are unlayered and compete on normal specificity
// against VitePress's own unlayered styles — where `.btn-primary` (class,
// 0,1,0) correctly beats `button` (element, 0,0,1).
//
// This only affects the docs site's build pipeline. The packages/hemcss
// dist files on disk are unchanged; VitePress's Vite reprocesses them
// through PostCSS on import, and this plugin rewrites them in-flight.

const unwrapLayers = () => ({
  postcssPlugin: 'unwrap-layers',
  Once(root) {
    root.walkAtRules('layer', (atRule) => {
      if (!atRule.nodes) {
        // Bare layer-order declaration, e.g. `@layer a, b, c;`. Drop it.
        atRule.remove()
        return
      }
      // `@layer name { rules }` — replace the at-rule with its children.
      atRule.replaceWith(...atRule.nodes)
    })
  },
})
unwrapLayers.postcss = true

export default {
  plugins: [unwrapLayers()],
}
