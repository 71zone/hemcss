# Tabs

Tab navigation with a sliding indicator that physically moves between tabs. CSS-only switching via radio inputs — no JS required. The indicator uses CSS Anchor Positioning for smooth transitions.

## Bordered

<div class="preview preview-stack">
  <div class="tabs tab-bordered">
    <label class="tab"><input type="radio" name="demo-bordered" checked />Overview</label>
    <label class="tab"><input type="radio" name="demo-bordered" />Features</label>
    <label class="tab"><input type="radio" name="demo-bordered" />Pricing</label>
    <div class="tab-indicator"></div>
    <div class="tab-content"><p>Overview content goes here.</p></div>
    <div class="tab-content"><p>Features content goes here.</p></div>
    <div class="tab-content"><p>Pricing content goes here.</p></div>
  </div>
</div>

```html
<div class="tabs tab-bordered">
  <label class="tab"><input type="radio" name="tabs-1" checked />Overview</label>
  <label class="tab"><input type="radio" name="tabs-1" />Features</label>
  <label class="tab"><input type="radio" name="tabs-1" />Pricing</label>
  <div class="tab-indicator"></div>
  <div class="tab-content">Overview content</div>
  <div class="tab-content">Features content</div>
  <div class="tab-content">Pricing content</div>
</div>
```

## Tabs only (no content panels)

<div class="preview">
  <div class="tabs tab-bordered">
    <label class="tab"><input type="radio" name="demo-nav" checked />Overview</label>
    <label class="tab"><input type="radio" name="demo-nav" />Features</label>
    <label class="tab"><input type="radio" name="demo-nav" />Pricing</label>
    <label class="tab"><input type="radio" name="demo-nav" />FAQ</label>
    <div class="tab-indicator"></div>
  </div>
</div>

```html
<div class="tabs tab-bordered">
  <label class="tab"><input type="radio" name="nav" checked />Overview</label>
  <label class="tab"><input type="radio" name="nav" />Features</label>
  <label class="tab"><input type="radio" name="nav" />Pricing</label>
  <label class="tab"><input type="radio" name="nav" />FAQ</label>
  <div class="tab-indicator"></div>
</div>
```

## Lifted

<div class="preview preview-stack">
  <div class="tabs tab-lifted">
    <label class="tab"><input type="radio" name="demo-lifted" checked />Overview</label>
    <label class="tab"><input type="radio" name="demo-lifted" />Features</label>
    <label class="tab"><input type="radio" name="demo-lifted" />Pricing</label>
    <div class="tab-content"><p>Overview panel.</p></div>
    <div class="tab-content"><p>Features panel.</p></div>
    <div class="tab-content"><p>Pricing panel.</p></div>
  </div>
</div>

```html
<div class="tabs tab-lifted">
  <label class="tab"><input type="radio" name="tabs-2" checked />Overview</label>
  <label class="tab"><input type="radio" name="tabs-2" />Features</label>
  <div class="tab-content">Overview panel</div>
  <div class="tab-content">Features panel</div>
</div>
```

## With buttons (JS-driven)

For frameworks that manage state, use buttons with `.is-active`:

```html
<div class="tabs tab-bordered">
  <button class="tab is-active">Overview</button>
  <button class="tab">Features</button>
  <button class="tab">Pricing</button>
  <div class="tab-indicator"></div>
</div>
```

## Tokens used

- `--hem-tab-padding-x` / `--hem-tab-padding-y` — tab padding
- `--hem-tab-color` — inactive text color
- `--hem-tab-color-active` — active text color
- `--hem-tab-border-color-active` — indicator color
- `--hem-tab-border-width` — indicator thickness
- `--hem-tab-radius` — lifted tab corner radius
- `--hem-tab-bg-active` — lifted active background
