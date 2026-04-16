# Tabs

Tab navigation with bordered and lifted variants. Active state via `.is-active` or `.tab-active`.

## Bordered

<div class="preview">
  <div class="tabs tab-bordered">
    <button class="tab is-active">Overview</button>
    <button class="tab">Features</button>
    <button class="tab">Pricing</button>
    <button class="tab">FAQ</button>
  </div>
</div>

```html
<div class="tabs tab-bordered">
  <button class="tab is-active">Overview</button>
  <button class="tab">Features</button>
  <button class="tab">Pricing</button>
</div>
```

## Lifted

<div class="preview">
  <div class="tabs tab-lifted">
    <button class="tab is-active">Overview</button>
    <button class="tab">Features</button>
    <button class="tab">Pricing</button>
    <button class="tab">FAQ</button>
  </div>
</div>

```html
<div class="tabs tab-lifted">
  <button class="tab is-active">Overview</button>
  <button class="tab">Features</button>
</div>
```

## Default (no indicator)

<div class="preview">
  <div class="tabs">
    <button class="tab is-active">Overview</button>
    <button class="tab">Features</button>
    <button class="tab">Pricing</button>
  </div>
</div>

```html
<div class="tabs">
  <button class="tab is-active">Overview</button>
  <button class="tab">Features</button>
</div>
```

## Disabled

<div class="preview">
  <div class="tabs tab-bordered">
    <button class="tab is-active">Active</button>
    <button class="tab" disabled>Disabled</button>
    <button class="tab">Normal</button>
  </div>
</div>

```html
<button class="tab" disabled>Disabled</button>
```

## Tokens used

- `--hem-tab-padding-x` / `--hem-tab-padding-y` — tab padding
- `--hem-tab-color` — inactive text color
- `--hem-tab-color-active` — active text color
- `--hem-tab-border-color-active` — bordered indicator color
- `--hem-tab-radius` — lifted tab corner radius
- `--hem-tab-bg-active` — lifted active background
