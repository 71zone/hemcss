# Badge

Inline status indicator. Seven color variants, two size modifiers, and an outline style.

## Default

<div class="preview">
  <div class="stack stack-row stack-wrap items-center" data-gap="0.5rem">
    <span class="badge">Default</span>
    <span class="badge badge-primary">Primary</span>
    <span class="badge badge-secondary">Secondary</span>
  </div>
</div>

```html
<span class="badge">Default</span>
<span class="badge badge-primary">Primary</span>
<span class="badge badge-secondary">Secondary</span>
```

## Colors

<div class="preview">
  <div class="stack stack-row stack-wrap items-center" data-gap="0.5rem">
    <span class="badge badge-primary">Primary</span>
    <span class="badge badge-secondary">Secondary</span>
    <span class="badge badge-success">Success</span>
    <span class="badge badge-info">Info</span>
    <span class="badge badge-warning">Warning</span>
    <span class="badge badge-error">Error</span>
    <span class="badge badge-neutral">Neutral</span>
  </div>
</div>

```html
<span class="badge badge-primary">Primary</span>
<span class="badge badge-secondary">Secondary</span>
<span class="badge badge-success">Success</span>
```

## Outline

<div class="preview">
  <div class="stack stack-row stack-wrap items-center" data-gap="0.5rem">
    <span class="badge badge-outline">Outline</span>
  </div>
</div>

```html
<span class="badge badge-outline">Outline</span>
```

## Sizes

<div class="preview">
  <div class="stack stack-row items-center" data-gap="0.5rem">
    <span class="badge badge-primary badge-sm">Small</span>
    <span class="badge badge-primary">Default</span>
    <span class="badge badge-primary badge-lg">Large</span>
  </div>
</div>

```html
<span class="badge badge-primary badge-sm">Small</span>
<span class="badge badge-primary">Default</span>
<span class="badge badge-primary badge-lg">Large</span>
```

## Tokens used

- `--hem-bg-elevated` — default background
- `--hem-border` — default border
- `--hem-primary` through `--hem-neutral` — color variants
- `--hem-text-inverted` — text on color variants
