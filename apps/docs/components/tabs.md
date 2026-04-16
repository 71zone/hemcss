# Tabs

Tab navigation with bordered and lifted variants. CSS-only switching via radio inputs inside labels — no JS required.

## Bordered

<div class="preview preview-stack">
  <div class="tabs tab-bordered">
    <label class="tab"><input type="radio" name="demo-bordered" checked />Overview</label>
    <div class="tab-content"><p>Overview content goes here.</p></div>
    <label class="tab"><input type="radio" name="demo-bordered" />Features</label>
    <div class="tab-content"><p>Features content goes here.</p></div>
    <label class="tab"><input type="radio" name="demo-bordered" />Pricing</label>
    <div class="tab-content"><p>Pricing content goes here.</p></div>
  </div>
</div>

```html
<div class="tabs tab-bordered">
  <label class="tab"><input type="radio" name="tabs-1" checked />Overview</label>
  <div class="tab-content">Overview content</div>
  <label class="tab"><input type="radio" name="tabs-1" />Features</label>
  <div class="tab-content">Features content</div>
  <label class="tab"><input type="radio" name="tabs-1" />Pricing</label>
  <div class="tab-content">Pricing content</div>
</div>
```

## Lifted

<div class="preview preview-stack">
  <div class="tabs tab-lifted">
    <label class="tab"><input type="radio" name="demo-lifted" checked />Overview</label>
    <div class="tab-content"><p>Overview panel.</p></div>
    <label class="tab"><input type="radio" name="demo-lifted" />Features</label>
    <div class="tab-content"><p>Features panel.</p></div>
    <label class="tab"><input type="radio" name="demo-lifted" />Pricing</label>
    <div class="tab-content"><p>Pricing panel.</p></div>
  </div>
</div>

```html
<div class="tabs tab-lifted">
  <label class="tab"><input type="radio" name="tabs-2" checked />Overview</label>
  <div class="tab-content">Overview panel</div>
  <label class="tab"><input type="radio" name="tabs-2" />Features</label>
  <div class="tab-content">Features panel</div>
</div>
```

## Tabs only (no content panels)

<div class="preview">
  <div class="tabs tab-bordered">
    <label class="tab"><input type="radio" name="demo-nav" checked />Overview</label>
    <label class="tab"><input type="radio" name="demo-nav" />Features</label>
    <label class="tab"><input type="radio" name="demo-nav" />Pricing</label>
    <label class="tab"><input type="radio" name="demo-nav" />FAQ</label>
  </div>
</div>

```html
<div class="tabs tab-bordered">
  <label class="tab"><input type="radio" name="nav" checked />Overview</label>
  <label class="tab"><input type="radio" name="nav" />Features</label>
  <label class="tab"><input type="radio" name="nav" />Pricing</label>
</div>
```

## With buttons (JS-driven)

For frameworks that manage state, use buttons with `.is-active`:

```html
<div class="tabs tab-bordered">
  <button class="tab is-active">Overview</button>
  <button class="tab">Features</button>
  <button class="tab">Pricing</button>
</div>
```

## Tokens used

- `--hem-tab-padding-x` / `--hem-tab-padding-y` — tab padding
- `--hem-tab-color` — inactive text color
- `--hem-tab-color-active` — active text color
- `--hem-tab-border-color-active` — bordered indicator color
- `--hem-tab-radius` — lifted tab corner radius
- `--hem-tab-bg-active` — lifted active background
