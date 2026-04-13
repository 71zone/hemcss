# Radio

Custom radio button using `appearance: none` with an inner circle on `:checked`. Seven color variants and two size modifiers. Always use inside a `<label>` with a radio group `name`.

## Default

<div class="preview preview-stack">
  <label style="display:inline-flex;align-items:center;gap:0.5rem">
    <input type="radio" class="radio" name="demo-default" checked />
    <span class="label-text">Option A</span>
  </label>
  <label style="display:inline-flex;align-items:center;gap:0.5rem">
    <input type="radio" class="radio" name="demo-default" />
    <span class="label-text">Option B</span>
  </label>
  <label style="display:inline-flex;align-items:center;gap:0.5rem">
    <input type="radio" class="radio" name="demo-default" />
    <span class="label-text">Option C</span>
  </label>
</div>

```html
<label style="display:inline-flex;align-items:center;gap:0.5rem">
  <input type="radio" class="radio" name="group" checked />
  <span class="label-text">Option A</span>
</label>
<label style="display:inline-flex;align-items:center;gap:0.5rem">
  <input type="radio" class="radio" name="group" />
  <span class="label-text">Option B</span>
</label>
```

## Colors

<div class="preview">
  <label style="display:inline-flex;align-items:center;gap:0.5rem">
    <input type="radio" class="radio radio-primary" checked />
    <span class="label-text">Primary</span>
  </label>
  <label style="display:inline-flex;align-items:center;gap:0.5rem">
    <input type="radio" class="radio radio-secondary" checked />
    <span class="label-text">Secondary</span>
  </label>
  <label style="display:inline-flex;align-items:center;gap:0.5rem">
    <input type="radio" class="radio radio-success" checked />
    <span class="label-text">Success</span>
  </label>
  <label style="display:inline-flex;align-items:center;gap:0.5rem">
    <input type="radio" class="radio radio-info" checked />
    <span class="label-text">Info</span>
  </label>
  <label style="display:inline-flex;align-items:center;gap:0.5rem">
    <input type="radio" class="radio radio-warning" checked />
    <span class="label-text">Warning</span>
  </label>
  <label style="display:inline-flex;align-items:center;gap:0.5rem">
    <input type="radio" class="radio radio-error" checked />
    <span class="label-text">Error</span>
  </label>
  <label style="display:inline-flex;align-items:center;gap:0.5rem">
    <input type="radio" class="radio radio-neutral" checked />
    <span class="label-text">Neutral</span>
  </label>
</div>

```html
<input type="radio" class="radio radio-primary" name="color" checked />
<input type="radio" class="radio radio-secondary" name="color" />
<input type="radio" class="radio radio-success" name="color" />
```

## Sizes

<div class="preview">
  <label style="display:inline-flex;align-items:center;gap:0.5rem">
    <input type="radio" class="radio radio-primary radio-sm" checked />
    <span class="label-text">Small</span>
  </label>
  <label style="display:inline-flex;align-items:center;gap:0.5rem">
    <input type="radio" class="radio radio-primary" checked />
    <span class="label-text">Default</span>
  </label>
  <label style="display:inline-flex;align-items:center;gap:0.5rem">
    <input type="radio" class="radio radio-primary radio-lg" checked />
    <span class="label-text">Large</span>
  </label>
</div>

```html
<input type="radio" class="radio radio-primary radio-sm" />
<input type="radio" class="radio radio-primary" />
<input type="radio" class="radio radio-primary radio-lg" />
```

## Disabled

<div class="preview preview-stack">
  <label style="display:inline-flex;align-items:center;gap:0.5rem;cursor:not-allowed">
    <input type="radio" class="radio radio-primary" disabled checked />
    <span class="label-text">Disabled checked</span>
  </label>
  <label style="display:inline-flex;align-items:center;gap:0.5rem;cursor:not-allowed">
    <input type="radio" class="radio radio-primary" disabled />
    <span class="label-text">Disabled unchecked</span>
  </label>
</div>

```html
<input type="radio" class="radio radio-primary" disabled checked />
<input type="radio" class="radio radio-primary is-disabled" />
```

## Tokens used

- `--hem-bg` — unchecked background
- `--hem-border` — unchecked border
- `--hem-primary` through `--hem-neutral` — checked color variants
- `--hem-ring` — focus ring
