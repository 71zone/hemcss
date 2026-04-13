# Card

The `card` component is a container with parts (`card-body`, `card-title`, `card-actions`) and modifiers (`card-bordered`, `card-compact`, `card-side`). No color variants in v1 — cards take the default elevated surface and stay out of the way of whatever's inside.

## Default

<div class="preview">
  <div class="card" style="max-width: 320px;">
    <div class="card-body">
      <h3 class="card-title">Welcome back</h3>
      <p>Your project is ready for review. You can approve or request changes.</p>
      <div class="card-actions">
        <button class="btn btn-primary btn-sm">Approve</button>
        <button class="btn btn-ghost btn-sm">Request changes</button>
      </div>
    </div>
  </div>
</div>

```html
<div class="card">
  <div class="card-body">
    <h3 class="card-title">Welcome back</h3>
    <p>Your project is ready for review. You can approve or request changes.</p>
    <div class="card-actions">
      <button class="btn btn-primary btn-sm">Approve</button>
      <button class="btn btn-ghost btn-sm">Request changes</button>
    </div>
  </div>
</div>
```

## Bordered

A stronger border using `--hem-border-accented`:

<div class="preview">
  <div class="card card-bordered" style="max-width: 320px;">
    <div class="card-body">
      <h3 class="card-title">Bordered</h3>
      <p>Heavier outline for strong emphasis.</p>
    </div>
  </div>
</div>

```html
<div class="card card-bordered">
  <div class="card-body">
    <h3 class="card-title">Bordered</h3>
    <p>Heavier outline for strong emphasis.</p>
  </div>
</div>
```

## Compact

Tighter padding for dense layouts:

<div class="preview">
  <div class="card card-compact" style="max-width: 320px;">
    <div class="card-body">
      <h3 class="card-title">Compact</h3>
      <p>Reduced padding and gap inside card-body.</p>
    </div>
  </div>
</div>

```html
<div class="card card-compact">
  <div class="card-body">
    <h3 class="card-title">Compact</h3>
    <p>Reduced padding and gap inside card-body.</p>
  </div>
</div>
```

## Parts

- **`.card`** — the container. Elevated background, border, `--hem-radius-box`, `overflow: hidden`.
- **`.card-body`** — flex-column inner padding area. Gap-separated children.
- **`.card-title`** — heading with `--hem-text-highlighted` color and semi-bold weight.
- **`.card-actions`** — row container for buttons in the card footer.

## Tokens used

- `--hem-bg-elevated` — card surface
- `--hem-text` — body text
- `--hem-text-highlighted` — card title
- `--hem-border`, `--hem-border-accented` — default and bordered modifier
- `--hem-radius-box` → `calc(var(--hem-radius) * 2)` — container corner radius
