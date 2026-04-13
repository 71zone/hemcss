# Toggle

CSS-only switch/toggle using `appearance: none` with a `::before` thumb that slides on `:checked`. Seven color variants and two size modifiers.

## Default

<div class="preview">
  <input type="checkbox" class="toggle" checked />
  <input type="checkbox" class="toggle" />
</div>

```html
<input type="checkbox" class="toggle" checked />
<input type="checkbox" class="toggle" />
```

## Colors

<div class="preview">
  <input type="checkbox" class="toggle toggle-primary" checked />
  <input type="checkbox" class="toggle toggle-secondary" checked />
  <input type="checkbox" class="toggle toggle-success" checked />
  <input type="checkbox" class="toggle toggle-info" checked />
  <input type="checkbox" class="toggle toggle-warning" checked />
  <input type="checkbox" class="toggle toggle-error" checked />
  <input type="checkbox" class="toggle toggle-neutral" checked />
</div>

```html
<input type="checkbox" class="toggle toggle-primary" checked />
<input type="checkbox" class="toggle toggle-secondary" checked />
<input type="checkbox" class="toggle toggle-success" checked />
<input type="checkbox" class="toggle toggle-info" checked />
<input type="checkbox" class="toggle toggle-warning" checked />
<input type="checkbox" class="toggle toggle-error" checked />
<input type="checkbox" class="toggle toggle-neutral" checked />
```

## Sizes

<div class="preview">
  <input type="checkbox" class="toggle toggle-primary toggle-sm" checked />
  <input type="checkbox" class="toggle toggle-primary" checked />
  <input type="checkbox" class="toggle toggle-primary toggle-lg" checked />
</div>

```html
<input type="checkbox" class="toggle toggle-primary toggle-sm" checked />
<input type="checkbox" class="toggle toggle-primary" checked />
<input type="checkbox" class="toggle toggle-primary toggle-lg" checked />
```

## Disabled

<div class="preview">
  <input type="checkbox" class="toggle toggle-primary" disabled checked />
  <input type="checkbox" class="toggle toggle-primary is-disabled" checked />
</div>

```html
<input type="checkbox" class="toggle toggle-primary" disabled checked />
<input type="checkbox" class="toggle toggle-primary is-disabled" checked />
```

## Tokens used

- `--hem-border` — unchecked track background
- `--hem-bg-elevated` — thumb color
- `--hem-primary` through `--hem-neutral` — checked track color
- `--hem-ring` — focus ring
