# Alert

Feedback banner for success, info, warning, and error states.

## Default

<div class="preview">
  <div class="alert">This is an alert message.</div>
</div>

```html
<div class="alert">This is an alert message.</div>
```

## Variants

<div class="preview preview-stack">
  <div class="alert alert-success">Operation completed successfully.</div>
  <div class="alert alert-info">A new version is available.</div>
  <div class="alert alert-warning">Your trial expires in 3 days.</div>
  <div class="alert alert-error">Failed to save changes.</div>
</div>

```html
<div class="alert alert-success">Success message.</div>
<div class="alert alert-info">Info message.</div>
<div class="alert alert-warning">Warning message.</div>
<div class="alert alert-error">Error message.</div>
```

## Tokens used

- `--hem-bg-elevated` — default background
- `--hem-border` — default border
- `--hem-success`, `--hem-info`, `--hem-warning`, `--hem-error` — variant tints via `color-mix()`
