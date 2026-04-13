# Install

hemcss ships as a pure CSS bundle with an optional PostCSS plugin for build-time configuration. Pick whichever consumption path fits your setup.

## npm / pnpm / yarn

```bash
pnpm add hemcss
```

Then in your CSS entry:

```css
@import "hemcss";
@import "hemcss/themes/dark";
```

The bare `hemcss` specifier resolves to `dist/hemcss.css` via the package's `exports` map; `hemcss/themes/dark` resolves to the dark theme file.

Set the theme attribute on the root element so the theme's `[data-theme="dark"]` block takes effect:

```html
<html data-theme="dark">
```

## HTML `<link>`

```html
<link rel="stylesheet" href="node_modules/hemcss/dist/hemcss.css" />
<link rel="stylesheet" href="node_modules/hemcss/dist/themes/dark.css" />
```

## CDN

```html
<link rel="stylesheet" href="https://cdn.example.com/hemcss@1/hemcss.min.css" />
<link rel="stylesheet" href="https://cdn.example.com/hemcss@1/themes/dark.min.css" />
```

## PostCSS plugin

For build-time configuration (reset toggle, bundled themes, focus-ring override, theme validation), install the plugin and wire it into your PostCSS pipeline:

```bash
pnpm add -D hemcss postcss postcss-import postcss-nesting
```

```js
// postcss.config.cjs
module.exports = {
  plugins: [
    require('hemcss/plugin')({
      reset: true,
      themes: ['light', 'dark'],
      focusRing: 'primary',
    }),
    require('postcss-import')(),
    require('postcss-nesting')(),
  ],
}
```

::: warning
The `hemcss/plugin` **must** run before `postcss-import`. hemcss rewrites `@import "hemcss"` into a sequence of imports; postcss-import then flattens them.
:::

In your CSS:

```css
@import "hemcss";
```

See [Plugin options](/plugin) for the full option reference.

## Vite

```js
// vite.config.js
import hemcss from 'hemcss/vite'

export default {
  plugins: [hemcss({ reset: true, themes: ['light', 'dark'] })],
}
```
