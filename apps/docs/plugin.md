# PostCSS plugin

The hemcss PostCSS plugin is a **config-to-imports translator**. It rewrites your `@import "hemcss"` statement into a sequence of imports that point at pre-built `dist/` files, based on the options you pass. `postcss-import` then flattens those imports into your final CSS bundle.

## Pipeline

```js
// postcss.config.cjs
module.exports = {
  plugins: [
    require('hemcss/plugin')({ /* options */ }),
    require('postcss-import')(),
    require('postcss-nesting')(),
  ],
}
```

::: warning
`hemcss/plugin` **must** run before `postcss-import`. The plugin emits `@import` statements; postcss-import inlines them. Running them in the wrong order leaves unflattened imports in your output.
:::

## Options

### `reset`

`boolean — default true`

Controls whether hemcss's reset layer contributes any rules. When `false`, the `@layer reset` cascade slot is still declared (so cascade order is preserved) but its body is empty — hand off to Tailwind Preflight or your own reset.

```js
require('hemcss/plugin')({ reset: false })
```

See [Tailwind integration](/guide/tailwind) for the canonical `reset: false` recipe.

### `themes`

`Array<string> — default []`

Theme entries to inline into the build output. Each entry is resolved to an `@import` specifier:

- **Bundled theme name** (`'light'`, `'dark'`) → `hemcss/themes/<name>`
- **Absolute or relative path** → passed through untouched; postcss-import resolves it via normal filesystem rules
- **npm package specifier** (`require.resolve('hemcss-theme-foo')`) → same

Order matters: themes loaded later override themes loaded earlier at the same cascade layer.

```js
require('hemcss/plugin')({
  themes: [
    'light',
    'dark',
    './themes/acme-corporate.css',
    require.resolve('hemcss-theme-brutalism-light'),
  ],
})
```

### `focusRing`

`string — default 'primary'`

Override the global focus-ring color by injecting a `:root { --hem-ring: …; }` rule into the tokens layer.

- **Semantic alias name** (`'primary'`, `'secondary'`, `'success'`, `'info'`, `'warning'`, `'error'`, `'neutral'`) → resolves to `var(--hem-<alias>)`
- **Raw OKLCH or color value** (`'oklch(70% 0.2 120)'`) → used verbatim
- **`'primary'` (default)** → no override is emitted (the token already defaults to `var(--hem-primary)`)

```js
require('hemcss/plugin')({ focusRing: 'accent' })
```

### `validateThemes`

`'warn' | 'error' | 'off' — default 'warn'`

For each entry in `themes`, parse the theme file for defined `--hem-*` custom properties and diff against the required token list in `hemcss/tokens/schema`.

- **`'warn'`** — emit a PostCSS warning listing each missing token. Build still succeeds.
- **`'error'`** — throw at build time, blocking the build until the theme is complete.
- **`'off'`** — skip validation entirely.

Validation results are memoized per plugin instance, so a project with multi-entry CSS builds gets exactly one warning per missing token per theme, not one per CSS file processed.

## Reserved options (v2)

Three options exist in the plugin's schema but are no-ops in v1. Passing them emits a warning pointing at v2:

| Option | Purpose (v2) |
|---|---|
| `content` | Scanner content globs (v2 scanner plugin, spec §11.1) |
| `components` | Tree-shake list — emit only the components you use (v2) |
| `prefix` | Add a class name prefix (`hem-btn` etc.) (v2) |

Passing any of these in v1 surfaces a build warning so your config isn't silently ignored.

## How the rewrite actually works

Given:

```css
/* your-app.css */
@import "hemcss";
```

With options `{ reset: false, themes: ['light', 'dark'], focusRing: 'secondary' }`, the plugin walks the stylesheet and replaces the `@import "hemcss"` node with:

```css
@import "hemcss/no-reset";
@import "hemcss/themes/light";
@import "hemcss/themes/dark";
:root { --hem-ring: var(--hem-secondary); }
```

postcss-import then flattens those imports into their actual dist content, producing the final CSS.

Each import target resolves through hemcss's `package.json` `exports` map to a pre-built file in `dist/`. This means the hemcss package must be built before your pipeline runs — which is normal for any npm-installed library.
