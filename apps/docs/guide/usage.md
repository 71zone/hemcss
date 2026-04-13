# Usage

hemcss gives you semantic class names — `.btn`, `.card`, `.input` — that you drop onto plain HTML. There is no JS framework, no runtime, no build step required on your end.

## The basics

```html
<button class="btn btn-primary">Save</button>
<button class="btn btn-outline">Cancel</button>
```

<div class="preview">
  <button class="btn btn-primary">Save</button>
  <button class="btn btn-outline">Cancel</button>
</div>

## Class composition

hemcss follows an **OOCSS pattern**:

- **Base class** (`.btn`) holds the structure — layout, padding, radius, transition, focus ring.
- **Variant classes** (`.btn-primary`, `.btn-ghost`, `.btn-outline`, …) hold the skin — background, text color, border.
- **Size modifiers** (`.btn-xs`, `.btn-sm`, `.btn-lg`) override a component-private `--_size` unit.
- **State classes** use the `is-*` prefix (`.is-loading`, `.is-disabled`, `.is-invalid`) and are paired with native attribute equivalents so `<button disabled>` and `<button class="is-disabled">` render identically.

## Theme switching

Every theme is a standalone CSS file you load alongside the core. Toggle between them by flipping the `data-theme` attribute on `<html>`:

```html
<html data-theme="light">
<!-- … -->
<html data-theme="dark">
```

```js
document.documentElement.dataset.theme =
  document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'
```

The `@layer themes` cascade slot lets a theme override every token without fighting component specificity.

## Focus rings

All interactive components share a single focus-ring mechanism driven by `--hem-ring`:

```css
.btn:focus-visible,
.input:focus-visible,
.card:focus-visible {
  outline: 2px solid var(--hem-ring);
  outline-offset: 2px;
}
```

`--hem-ring` defaults to `var(--hem-primary)`. Change it globally by overriding the token, or via the plugin's `focusRing` option.

## What's in v1

- `btn` — 10 variants, 3 sizes, 2 states, CSS-only spinner
- `card` — modifiers for bordered/compact/side, parts for body/title/actions
- `input` — 2 variants, 2 sizes, `is-invalid`/`is-disabled` states paired with native `:invalid`/`:disabled`

Full component roster is documented in the [spec roadmap](https://github.com/hoangvan/hemcss/blob/main/docs/superpowers/specs/2026-04-11-hemcss-bootstrap-design.md).
