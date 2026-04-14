# Checkbox

Custom checkbox using `appearance: none` with an SVG checkmark on `:checked`. Seven color variants and two size modifiers. Always wrap in a `<label>` for usability.

## Default

<div class="preview preview-stack">
  <label class="stack stack-row items-center" data-gap="0.5rem">
    <input type="checkbox" class="checkbox" checked />
    <span class="label-text">Accept terms</span>
  </label>
  <label class="stack stack-row items-center" data-gap="0.5rem">
    <input type="checkbox" class="checkbox" />
    <span class="label-text">Subscribe to newsletter</span>
  </label>
</div>

```html
<label class="stack stack-row items-center" data-gap="0.5rem">
  <input type="checkbox" class="checkbox" checked />
  <span class="label-text">Accept terms</span>
</label>
<label class="stack stack-row items-center" data-gap="0.5rem">
  <input type="checkbox" class="checkbox" />
  <span class="label-text">Subscribe to newsletter</span>
</label>
```

## Colors

<div class="preview">
  <label class="stack stack-row items-center" data-gap="0.5rem">
    <input type="checkbox" class="checkbox checkbox-primary" checked />
    <span class="label-text">Primary</span>
  </label>
  <label class="stack stack-row items-center" data-gap="0.5rem">
    <input type="checkbox" class="checkbox checkbox-secondary" checked />
    <span class="label-text">Secondary</span>
  </label>
  <label class="stack stack-row items-center" data-gap="0.5rem">
    <input type="checkbox" class="checkbox checkbox-success" checked />
    <span class="label-text">Success</span>
  </label>
  <label class="stack stack-row items-center" data-gap="0.5rem">
    <input type="checkbox" class="checkbox checkbox-info" checked />
    <span class="label-text">Info</span>
  </label>
  <label class="stack stack-row items-center" data-gap="0.5rem">
    <input type="checkbox" class="checkbox checkbox-warning" checked />
    <span class="label-text">Warning</span>
  </label>
  <label class="stack stack-row items-center" data-gap="0.5rem">
    <input type="checkbox" class="checkbox checkbox-error" checked />
    <span class="label-text">Error</span>
  </label>
  <label class="stack stack-row items-center" data-gap="0.5rem">
    <input type="checkbox" class="checkbox checkbox-neutral" checked />
    <span class="label-text">Neutral</span>
  </label>
</div>

```html
<label class="stack stack-row items-center" data-gap="0.5rem">
  <input type="checkbox" class="checkbox checkbox-primary" checked />
  <span class="label-text">Primary</span>
</label>
```

## Sizes

<div class="preview">
  <label class="stack stack-row items-center" data-gap="0.5rem">
    <input type="checkbox" class="checkbox checkbox-primary checkbox-sm" checked />
    <span class="label-text">Small</span>
  </label>
  <label class="stack stack-row items-center" data-gap="0.5rem">
    <input type="checkbox" class="checkbox checkbox-primary" checked />
    <span class="label-text">Default</span>
  </label>
  <label class="stack stack-row items-center" data-gap="0.5rem">
    <input type="checkbox" class="checkbox checkbox-primary checkbox-lg" checked />
    <span class="label-text">Large</span>
  </label>
</div>

```html
<input type="checkbox" class="checkbox checkbox-primary checkbox-sm" checked />
<input type="checkbox" class="checkbox checkbox-primary" checked />
<input type="checkbox" class="checkbox checkbox-primary checkbox-lg" checked />
```

## Disabled

<div class="preview preview-stack">
  <label class="stack stack-row items-center" data-gap="0.5rem">
    <input type="checkbox" class="checkbox checkbox-primary" disabled checked />
    <span class="label-text">Disabled checked</span>
  </label>
  <label class="stack stack-row items-center" data-gap="0.5rem">
    <input type="checkbox" class="checkbox checkbox-primary" disabled />
    <span class="label-text">Disabled unchecked</span>
  </label>
</div>

```html
<input type="checkbox" class="checkbox checkbox-primary" disabled checked />
<input type="checkbox" class="checkbox checkbox-primary is-disabled" />
```

## Tokens used

- `--hem-bg` — unchecked background
- `--hem-border` — unchecked border
- `--hem-primary` through `--hem-neutral` — checked color variants
- `--hem-text-inverted` — checkmark color
- `--hem-ring` — focus ring
