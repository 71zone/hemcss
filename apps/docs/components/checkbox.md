# Checkbox

Custom checkbox using `appearance: none` with an SVG checkmark on `:checked`. Seven color variants and two size modifiers.

## Default

<div class="preview">
  <input type="checkbox" class="checkbox" checked />
  <input type="checkbox" class="checkbox" />
</div>

```html
<input type="checkbox" class="checkbox" checked />
<input type="checkbox" class="checkbox" />
```

## Colors

<div class="preview">
  <input type="checkbox" class="checkbox checkbox-primary" checked />
  <input type="checkbox" class="checkbox checkbox-secondary" checked />
  <input type="checkbox" class="checkbox checkbox-success" checked />
  <input type="checkbox" class="checkbox checkbox-info" checked />
  <input type="checkbox" class="checkbox checkbox-warning" checked />
  <input type="checkbox" class="checkbox checkbox-error" checked />
  <input type="checkbox" class="checkbox checkbox-neutral" checked />
</div>

```html
<input type="checkbox" class="checkbox checkbox-primary" checked />
<input type="checkbox" class="checkbox checkbox-secondary" checked />
<input type="checkbox" class="checkbox checkbox-success" checked />
<input type="checkbox" class="checkbox checkbox-info" checked />
<input type="checkbox" class="checkbox checkbox-warning" checked />
<input type="checkbox" class="checkbox checkbox-error" checked />
<input type="checkbox" class="checkbox checkbox-neutral" checked />
```

## Sizes

<div class="preview">
  <input type="checkbox" class="checkbox checkbox-primary checkbox-sm" checked />
  <input type="checkbox" class="checkbox checkbox-primary" checked />
  <input type="checkbox" class="checkbox checkbox-primary checkbox-lg" checked />
</div>

```html
<input type="checkbox" class="checkbox checkbox-primary checkbox-sm" checked />
<input type="checkbox" class="checkbox checkbox-primary" checked />
<input type="checkbox" class="checkbox checkbox-primary checkbox-lg" checked />
```

## Disabled

<div class="preview">
  <input type="checkbox" class="checkbox checkbox-primary" disabled checked />
  <input type="checkbox" class="checkbox checkbox-primary is-disabled" checked />
</div>

```html
<input type="checkbox" class="checkbox checkbox-primary" disabled checked />
<input type="checkbox" class="checkbox checkbox-primary is-disabled" checked />
```

## Tokens used

- `--hem-bg` — unchecked background
- `--hem-border` — unchecked border
- `--hem-primary` through `--hem-neutral` — checked color variants
- `--hem-text-inverted` — checkmark color
- `--hem-ring` — focus ring
