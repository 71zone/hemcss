# Toast

Fixed-position notification container using `popover="manual"` for top-layer stacking with slide-in animation.

## Basic toast

<div class="preview" style="min-height: 4rem;">
  <button class="btn btn-primary" onclick="const t=this.nextElementSibling; t.showPopover(); setTimeout(()=>t.hidePopover(),3000)">Show toast</button>
  <div popover="manual" class="toast toast-end">
    <div class="alert alert-success">File saved successfully.</div>
  </div>
</div>

```html
<button onclick="toast.showPopover(); setTimeout(()=>toast.hidePopover(), 3000)">
  Show toast
</button>
<div id="toast" popover="manual" class="toast toast-end">
  <div class="alert alert-success">File saved successfully.</div>
</div>
```

## Multiple alerts

<div class="preview" style="min-height: 4rem;">
  <button class="btn btn-primary" onclick="const t=this.nextElementSibling; t.showPopover(); setTimeout(()=>t.hidePopover(),4000)">Show notifications</button>
  <div popover="manual" class="toast toast-end">
    <div class="alert alert-info">New message received.</div>
    <div class="alert alert-success">Changes saved.</div>
    <div class="alert alert-warning">Connection unstable.</div>
  </div>
</div>

```html
<div id="toast" popover="manual" class="toast toast-end">
  <div class="alert alert-info">New message received.</div>
  <div class="alert alert-success">Changes saved.</div>
</div>
```

## Positions

Combine `.toast-top` and `.toast-start` / `.toast-center` / `.toast-end`:

```html
<div class="toast toast-top toast-start" popover="manual">...</div>
<div class="toast toast-top toast-center" popover="manual">...</div>
<div class="toast toast-top toast-end" popover="manual">...</div>
<div class="toast toast-start" popover="manual">...</div>
<div class="toast toast-center" popover="manual">...</div>
<div class="toast toast-end" popover="manual">...</div>
```

## How it works

- `popover="manual"` renders in the top layer — no z-index wars
- Manual popovers stay open until explicitly closed (no light-dismiss)
- `@starting-style` provides a slide-in entrance animation
- Child alerts get a shadow for visual separation from the page
- Show via `el.showPopover()`, hide via `el.hidePopover()`

## Tokens used

- `--hem-toast-padding` — container padding from viewport edge
- `--hem-toast-gap` — gap between stacked alerts
- `--hem-toast-z-index` — stacking order
