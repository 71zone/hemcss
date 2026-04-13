# Toggle

CSS-only switch/toggle using `appearance: none` with a `::before` thumb that slides on `:checked`. Seven color variants and two size modifiers. Always wrap in a `<label>` for usability.

## Default

<div class="preview preview-stack">
  <label style="display:inline-flex;align-items:center;gap:0.5rem">
    <input type="checkbox" class="toggle" checked />
    <span class="label-text">Dark mode</span>
  </label>
  <label style="display:inline-flex;align-items:center;gap:0.5rem">
    <input type="checkbox" class="toggle" />
    <span class="label-text">Notifications</span>
  </label>
</div>

```html
<label style="display:inline-flex;align-items:center;gap:0.5rem">
  <input type="checkbox" class="toggle" checked />
  <span class="label-text">Dark mode</span>
</label>
<label style="display:inline-flex;align-items:center;gap:0.5rem">
  <input type="checkbox" class="toggle" />
  <span class="label-text">Notifications</span>
</label>
```

## Colors

<div class="preview">
  <label style="display:inline-flex;align-items:center;gap:0.5rem">
    <input type="checkbox" class="toggle toggle-primary" checked />
    <span class="label-text">Primary</span>
  </label>
  <label style="display:inline-flex;align-items:center;gap:0.5rem">
    <input type="checkbox" class="toggle toggle-secondary" checked />
    <span class="label-text">Secondary</span>
  </label>
  <label style="display:inline-flex;align-items:center;gap:0.5rem">
    <input type="checkbox" class="toggle toggle-success" checked />
    <span class="label-text">Success</span>
  </label>
  <label style="display:inline-flex;align-items:center;gap:0.5rem">
    <input type="checkbox" class="toggle toggle-info" checked />
    <span class="label-text">Info</span>
  </label>
  <label style="display:inline-flex;align-items:center;gap:0.5rem">
    <input type="checkbox" class="toggle toggle-warning" checked />
    <span class="label-text">Warning</span>
  </label>
  <label style="display:inline-flex;align-items:center;gap:0.5rem">
    <input type="checkbox" class="toggle toggle-error" checked />
    <span class="label-text">Error</span>
  </label>
  <label style="display:inline-flex;align-items:center;gap:0.5rem">
    <input type="checkbox" class="toggle toggle-neutral" checked />
    <span class="label-text">Neutral</span>
  </label>
</div>

```html
<label style="display:inline-flex;align-items:center;gap:0.5rem">
  <input type="checkbox" class="toggle toggle-primary" checked />
  <span class="label-text">Primary</span>
</label>
```

## Sizes

<div class="preview">
  <label style="display:inline-flex;align-items:center;gap:0.5rem">
    <input type="checkbox" class="toggle toggle-primary toggle-sm" checked />
    <span class="label-text">Small</span>
  </label>
  <label style="display:inline-flex;align-items:center;gap:0.5rem">
    <input type="checkbox" class="toggle toggle-primary" checked />
    <span class="label-text">Default</span>
  </label>
  <label style="display:inline-flex;align-items:center;gap:0.5rem">
    <input type="checkbox" class="toggle toggle-primary toggle-lg" checked />
    <span class="label-text">Large</span>
  </label>
</div>

```html
<input type="checkbox" class="toggle toggle-primary toggle-sm" checked />
<input type="checkbox" class="toggle toggle-primary" checked />
<input type="checkbox" class="toggle toggle-primary toggle-lg" checked />
```

## Disabled

<div class="preview preview-stack">
  <label style="display:inline-flex;align-items:center;gap:0.5rem;cursor:not-allowed">
    <input type="checkbox" class="toggle toggle-primary" disabled checked />
    <span class="label-text">Disabled on</span>
  </label>
  <label style="display:inline-flex;align-items:center;gap:0.5rem;cursor:not-allowed">
    <input type="checkbox" class="toggle toggle-primary" disabled />
    <span class="label-text">Disabled off</span>
  </label>
</div>

```html
<input type="checkbox" class="toggle toggle-primary" disabled checked />
<input type="checkbox" class="toggle toggle-primary is-disabled" />
```

## Tokens used

- `--hem-border` — unchecked track background
- `--hem-bg-elevated` — thumb color
- `--hem-primary` through `--hem-neutral` — checked track color
- `--hem-ring` — focus ring
