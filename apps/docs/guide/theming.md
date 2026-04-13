# Theming

hemcss themes are **standalone CSS files**. Each one is a single `@layer themes { [data-theme="name"] { … } }` block that redefines the semantic tokens. Anyone — first-party, community, your own corporate brand file — can ship one.

## The two bundled themes

hemcss ships with `light` and `dark`. Import them explicitly:

```css
@import "hemcss/themes/light";
@import "hemcss/themes/dark";
```

Then flip them at runtime:

```html
<html data-theme="dark">
```

Or via JS:

```js
document.documentElement.dataset.theme = 'dark'
```

## Authoring a theme

A theme is a single file that looks like this:

```css
@import "hemcss/src/layers.css";

@layer themes {
  [data-theme="acme-corporate"] {
    /* Semantic aliases */
    --hem-primary:   oklch(62% 0.19 259);
    --hem-secondary: oklch(62% 0.19 300);
    --hem-success:   oklch(62% 0.19 155);
    --hem-info:      oklch(62% 0.19 220);
    --hem-warning:   oklch(68% 0.18 80);
    --hem-error:     oklch(62% 0.20 25);
    --hem-neutral:   oklch(35% 0.01 250);

    /* Text roles */
    --hem-text:             oklch(35% 0.01 250);
    --hem-text-dimmed:      oklch(70% 0.01 250);
    --hem-text-muted:       oklch(55% 0.01 250);
    --hem-text-toned:       oklch(45% 0.01 250);
    --hem-text-highlighted: oklch(18% 0.006 250);
    --hem-text-inverted:    oklch(100% 0 0);

    /* Background roles */
    --hem-bg:          oklch(100% 0 0);
    --hem-bg-muted:    oklch(98% 0.002 250);
    --hem-bg-elevated: oklch(95% 0.003 250);
    --hem-bg-accented: oklch(90% 0.005 250);
    --hem-bg-inverted: oklch(18% 0.006 250);

    /* Border roles */
    --hem-border:          oklch(90% 0.005 250);
    --hem-border-muted:    oklch(95% 0.003 250);
    --hem-border-accented: oklch(83% 0.008 250);
    --hem-border-inverted: oklch(18% 0.006 250);

    /* Ring */
    --hem-ring:        var(--hem-primary);
    --hem-ring-offset: var(--hem-bg);
  }
}
```

The `@import "hemcss/src/layers.css"` at the top is what lets the file stand on its own — it declares the cascade layer order, so the theme's `@layer themes { … }` block lands in the correct slot even when loaded without the core.

Every required token is listed on the [Tokens reference page](/tokens). Use the [plugin's `validateThemes` option](/plugin#validatethemes) to catch missing tokens at build time.

## Three ways to add a theme

### 1. Plain CSS loaded at runtime

Drop your theme file anywhere it can be served. Load it after the hemcss core:

```html
<link rel="stylesheet" href="https://cdn.example.com/hemcss/hemcss.min.css" />
<link rel="stylesheet" href="https://acme.example.com/themes/corporate.css" />
<html data-theme="acme-corporate">
```

No plugin, no build integration, no permissions. This is the path community themes should take.

### 2. Inline a theme via the PostCSS plugin

If you're already using the plugin, add the theme to the `themes` array:

```js
require('hemcss/plugin')({
  themes: [
    'light',                                             // bundled name
    './themes/acme-corporate.css',                       // local file
    require.resolve('hemcss-theme-brutalism-light'),     // npm package
  ],
})
```

The plugin resolves each entry and inlines its content into your build output. The plugin also passes each theme through [`validateThemes`](/plugin#validatethemes) so missing tokens get caught at build time.

### 3. Override tokens in your own CSS

If you don't need a separate theme file, just override tokens directly in your project CSS after hemcss loads:

```css
@import "hemcss";

@layer themes {
  [data-theme="dark"] {
    --hem-primary: oklch(65% 0.20 150);
  }
}
```

Because `@layer themes` is already declared by hemcss's core, your override lands in the right cascade slot automatically.

## Publishing a community theme

Themes are just files. Publish them however you want:

- As an npm package named `hemcss-theme-<name>` with the single CSS file as the default export
- As a GitHub gist
- As a file on your own CDN

There is no registration, no approval process. If you publish on npm, users can load your theme via `require.resolve('hemcss-theme-yourname')` in the plugin config or via a plain `@import "hemcss-theme-yourname"` in their own CSS.
