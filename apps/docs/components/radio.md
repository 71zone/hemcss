# Radio

Custom radio button using `appearance: none` with an inner circle on `:checked`. Seven color variants and two size modifiers.

## Default

<div class="preview">
  <input type="radio" class="radio" name="demo-default" checked />
  <input type="radio" class="radio" name="demo-default" />
</div>

```html
<input type="radio" class="radio" name="group" checked />
<input type="radio" class="radio" name="group" />
```

## Colors

<div class="preview">
  <input type="radio" class="radio radio-primary" checked />
  <input type="radio" class="radio radio-secondary" checked />
  <input type="radio" class="radio radio-success" checked />
  <input type="radio" class="radio radio-info" checked />
  <input type="radio" class="radio radio-warning" checked />
  <input type="radio" class="radio radio-error" checked />
  <input type="radio" class="radio radio-neutral" checked />
</div>

```html
<input type="radio" class="radio radio-primary" checked />
<input type="radio" class="radio radio-secondary" checked />
<input type="radio" class="radio radio-success" checked />
<input type="radio" class="radio radio-info" checked />
<input type="radio" class="radio radio-warning" checked />
<input type="radio" class="radio radio-error" checked />
<input type="radio" class="radio radio-neutral" checked />
```

## Sizes

<div class="preview">
  <input type="radio" class="radio radio-primary radio-sm" checked />
  <input type="radio" class="radio radio-primary" checked />
  <input type="radio" class="radio radio-primary radio-lg" checked />
</div>

```html
<input type="radio" class="radio radio-primary radio-sm" checked />
<input type="radio" class="radio radio-primary" checked />
<input type="radio" class="radio radio-primary radio-lg" checked />
```

## Disabled

<div class="preview">
  <input type="radio" class="radio radio-primary" disabled checked />
  <input type="radio" class="radio radio-primary is-disabled" checked />
</div>

```html
<input type="radio" class="radio radio-primary" disabled checked />
<input type="radio" class="radio radio-primary is-disabled" checked />
```

## Tokens used

- `--hem-bg` — unchecked background
- `--hem-border` — unchecked border
- `--hem-primary` through `--hem-neutral` — checked color variants
- `--hem-ring` — focus ring
