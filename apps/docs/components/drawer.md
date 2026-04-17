# Drawer

Sidebar drawer using the checkbox toggle pattern.

## Basic drawer

<div class="preview">
  <div class="drawer" style="min-height: 20rem;">
    <input type="checkbox" id="doc-drawer-1" class="drawer-toggle" />
    <div class="drawer-content">
      <label for="doc-drawer-1" class="btn btn-primary">Open drawer</label>
    </div>
    <div class="drawer-side">
      <label for="doc-drawer-1" class="drawer-overlay"></label>
      <div class="menu" style="padding: var(--hem-space-4); min-height: 100%;">
        <h4 class="menu-title">Sidebar</h4>
        <ul>
          <li class="menu-item"><a>Dashboard</a></li>
          <li class="menu-item"><a>Settings</a></li>
          <li class="menu-item"><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>

```html
<div class="drawer">
  <input type="checkbox" id="my-drawer" class="drawer-toggle" />
  <div class="drawer-content">
    <label for="my-drawer" class="btn btn-primary">Open drawer</label>
    <!-- page content -->
  </div>
  <div class="drawer-side">
    <label for="my-drawer" class="drawer-overlay"></label>
    <div class="menu">
      <!-- sidebar content -->
    </div>
  </div>
</div>
```

## How it works

- Hidden `<input type="checkbox">` controls open/close state
- `<label for="...">` toggles the checkbox — no JS needed
- `.drawer-overlay` closes the drawer when clicked
- Sidebar slides in from the left with a CSS transition

## Tokens used

- `--hem-drawer-width` — sidebar width
- `--hem-drawer-bg` — sidebar background
- `--hem-drawer-shadow` — sidebar shadow
- `--hem-drawer-overlay-bg` — overlay dimming color
- `--hem-drawer-transition` — slide transition timing
