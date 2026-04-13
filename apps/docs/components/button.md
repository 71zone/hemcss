# Button

The `btn` component covers every button you need: 10 color variants, 3 size modifiers, loading and disabled states, plus a ghost/outline/link family. OOCSS class composition throughout.

## Variants

<div class="preview">
  <button class="btn">Default</button>
  <button class="btn btn-primary">Primary</button>
  <button class="btn btn-secondary">Secondary</button>
  <button class="btn btn-success">Success</button>
  <button class="btn btn-info">Info</button>
  <button class="btn btn-warning">Warning</button>
  <button class="btn btn-error">Error</button>
  <button class="btn btn-neutral">Neutral</button>
  <button class="btn btn-ghost">Ghost</button>
  <button class="btn btn-outline">Outline</button>
  <button class="btn btn-link">Link</button>
</div>

```html
<button class="btn">Default</button>
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-info">Info</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-error">Error</button>
<button class="btn btn-neutral">Neutral</button>
<button class="btn btn-ghost">Ghost</button>
<button class="btn btn-outline">Outline</button>
<button class="btn btn-link">Link</button>
```

## Sizes

<div class="preview">
  <button class="btn btn-primary btn-xs">xs</button>
  <button class="btn btn-primary btn-sm">sm</button>
  <button class="btn btn-primary">md (default)</button>
  <button class="btn btn-primary btn-lg">lg</button>
</div>

```html
<button class="btn btn-primary btn-xs">xs</button>
<button class="btn btn-primary btn-sm">sm</button>
<button class="btn btn-primary">md (default)</button>
<button class="btn btn-primary btn-lg">lg</button>
```

Size modifiers override a component-private `--_size` custom property. Everything else — padding, min-height, font-size — derives from it via `calc()`, so a single number change rescales the whole button.

## States

### Loading

<div class="preview">
  <button class="btn btn-primary is-loading">Saving…</button>
</div>

```html
<button class="btn btn-primary is-loading">Saving…</button>
```

A CSS-only spinner appears after the label, pointer events are blocked, and opacity drops to 0.7. No JS needed.

### Disabled

The `.is-disabled` class and the native `[disabled]` attribute render identically:

<div class="preview">
  <button class="btn btn-primary" disabled>Disabled attr</button>
  <button class="btn btn-primary is-disabled">Disabled class</button>
</div>

```html
<button class="btn btn-primary" disabled>Native disabled</button>
<button class="btn btn-primary is-disabled">Class-based disabled</button>
```

The underlying selector uses `:where(...)` for zero specificity:

```css
.btn:where(:disabled, [disabled], .is-disabled) {
  pointer-events: none;
  opacity: 0.5;
  cursor: not-allowed;
}
```

## Tokens used

- `--hem-bg-elevated` — default background
- `--hem-text` — default text color
- `--hem-border` — default border
- `--hem-radius-btn` → `var(--hem-radius)` — corner radius
- `--hem-size-field` — private `--_size` fallback
- `--hem-primary`, `--hem-secondary`, … — variant backgrounds
- `--hem-text-inverted` — text color on colored variants
- `--hem-ring` — focus ring color
- `--hem-bg-accented` — ghost-hover background
