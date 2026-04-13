# Label

Form field label wrapper with primary text (`.label-text`) and optional helper text (`.label-text-alt`). Uses flexbox with space-between alignment.

## Default

<div class="preview preview-stack">
  <label class="label">
    <span class="label-text">Email</span>
  </label>
</div>

```html
<label class="label">
  <span class="label-text">Email</span>
</label>
```

## With helper text

<div class="preview preview-stack">
  <label class="label">
    <span class="label-text">Email</span>
    <span class="label-text-alt">Required</span>
  </label>
</div>

```html
<label class="label">
  <span class="label-text">Email</span>
  <span class="label-text-alt">Required</span>
</label>
```

## With input

<div class="preview preview-stack">
  <label class="label">
    <span class="label-text">Email</span>
    <span class="label-text-alt">Required</span>
  </label>
  <input class="input input-bordered" placeholder="email@example.com" />
  <label class="label">
    <span class="label-text-alt">Must be a valid email</span>
  </label>
</div>

```html
<label class="label">
  <span class="label-text">Email</span>
  <span class="label-text-alt">Required</span>
</label>
<input class="input input-bordered" placeholder="email@example.com" />
<label class="label">
  <span class="label-text-alt">Must be a valid email</span>
</label>
```

## Tokens used

- `--hem-text` — label text color
- `--hem-text-muted` — alt text color
- `--hem-label-font-size` — primary text size
- `--hem-label-alt-font-size` — helper text size
- `--hem-label-font-weight` — primary text weight
