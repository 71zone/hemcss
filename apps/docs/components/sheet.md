# Sheet

Multi-direction slide-in panel using the checkbox toggle pattern. Slides from any edge — left (default), right, top, or bottom. The bottom sheet is the mobile modal pattern.

## Left (default)

<div class="preview">
  <div class="sheet" style="min-height: 16rem;">
    <input type="checkbox" id="doc-sheet-left" class="sheet-toggle" />
    <div class="sheet-content">
      <label for="doc-sheet-left" class="btn btn-primary">Open left</label>
    </div>
    <div class="sheet-side">
      <label for="doc-sheet-left" class="sheet-overlay"></label>
      <div class="menu" style="padding: var(--hem-space-4); min-height: 100%;">
        <h4 class="menu-title">Sidebar</h4>
        <ul>
          <li class="menu-item"><a>Dashboard</a></li>
          <li class="menu-item"><a>Settings</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>

```html
<div class="sheet">
  <input type="checkbox" id="my-sheet" class="sheet-toggle" />
  <div class="sheet-content">
    <label for="my-sheet" class="btn">Open</label>
  </div>
  <div class="sheet-side">
    <label for="my-sheet" class="sheet-overlay"></label>
    <div class="menu">...</div>
  </div>
</div>
```

## Right

<div class="preview">
  <div class="sheet sheet-right" style="min-height: 16rem;">
    <input type="checkbox" id="doc-sheet-right" class="sheet-toggle" />
    <div class="sheet-content">
      <label for="doc-sheet-right" class="btn btn-primary">Open right</label>
    </div>
    <div class="sheet-side">
      <label for="doc-sheet-right" class="sheet-overlay"></label>
      <div class="menu" style="padding: var(--hem-space-4); min-height: 100%;">
        <h4 class="menu-title">Settings</h4>
        <ul>
          <li class="menu-item"><a>Profile</a></li>
          <li class="menu-item"><a>Preferences</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>

```html
<div class="sheet sheet-right">...</div>
```

## Top

<div class="preview">
  <div class="sheet sheet-top" style="min-height: 16rem;">
    <input type="checkbox" id="doc-sheet-top" class="sheet-toggle" />
    <div class="sheet-content">
      <label for="doc-sheet-top" class="btn btn-primary">Open top</label>
    </div>
    <div class="sheet-side">
      <label for="doc-sheet-top" class="sheet-overlay"></label>
      <div style="padding: var(--hem-space-4);">
        <p>Notification banner or announcement area.</p>
      </div>
    </div>
  </div>
</div>

```html
<div class="sheet sheet-top">...</div>
```

## Bottom (mobile modal)

<div class="preview">
  <div class="sheet sheet-bottom" style="min-height: 16rem;">
    <input type="checkbox" id="doc-sheet-bottom" class="sheet-toggle" />
    <div class="sheet-content">
      <label for="doc-sheet-bottom" class="btn btn-primary">Open bottom sheet</label>
    </div>
    <div class="sheet-side">
      <label for="doc-sheet-bottom" class="sheet-overlay"></label>
      <div style="padding: var(--hem-space-6);">
        <h3 style="margin: 0 0 var(--hem-space-3);">Share this page</h3>
        <div class="stack" data-gap="0.5rem">
          <button class="btn">Copy link</button>
          <button class="btn">Email</button>
          <button class="btn">Message</button>
          <label for="doc-sheet-bottom" class="btn btn-neutral">Cancel</label>
        </div>
      </div>
    </div>
  </div>
</div>

```html
<div class="sheet sheet-bottom">
  <input type="checkbox" id="my-sheet" class="sheet-toggle" />
  <div class="sheet-content">
    <label for="my-sheet" class="btn">Open</label>
  </div>
  <div class="sheet-side">
    <label for="my-sheet" class="sheet-overlay"></label>
    <div>
      <h3>Share this page</h3>
      <button class="btn">Copy link</button>
      <label for="my-sheet" class="btn">Cancel</label>
    </div>
  </div>
</div>
```

## How it works

- Hidden `<input type="checkbox">` controls open/close state
- `<label for="...">` toggles the checkbox — no JS needed
- `.sheet-overlay` closes the sheet when clicked
- Direction variants change the slide axis and grid layout
- Bottom sheet gets rounded top corners via `--hem-sheet-bottom-radius`

## Tokens used

- `--hem-sheet-width` — panel width (left/right)
- `--hem-sheet-height` — panel height (top/bottom)
- `--hem-sheet-bg` — panel background
- `--hem-sheet-shadow` — panel shadow
- `--hem-sheet-overlay-bg` — overlay dimming color
- `--hem-sheet-transition` — slide transition timing
- `--hem-sheet-bottom-radius` — top corner radius for bottom sheet
