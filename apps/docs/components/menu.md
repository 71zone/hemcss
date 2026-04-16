# Menu

Vertical or horizontal list menu for sidebar navigation. Section headers with `.menu-title`, interactive items with `.menu-item`.

## Default

<div class="preview">
  <ul class="menu">
    <li><span class="menu-title">Navigation</span></li>
    <li><a class="menu-item is-active">Dashboard</a></li>
    <li><a class="menu-item">Projects</a></li>
    <li><a class="menu-item">Settings</a></li>
  </ul>
</div>

```html
<ul class="menu">
  <li><span class="menu-title">Navigation</span></li>
  <li><a class="menu-item is-active">Dashboard</a></li>
  <li><a class="menu-item">Projects</a></li>
  <li><a class="menu-item">Settings</a></li>
</ul>
```

## Horizontal

<div class="preview">
  <ul class="menu menu-horizontal">
    <li><a class="menu-item is-active">Dashboard</a></li>
    <li><a class="menu-item">Projects</a></li>
    <li><a class="menu-item">Settings</a></li>
  </ul>
</div>

```html
<ul class="menu menu-horizontal">
  <li><a class="menu-item is-active">Dashboard</a></li>
  <li><a class="menu-item">Projects</a></li>
</ul>
```

## Compact

<div class="preview">
  <ul class="menu menu-compact">
    <li><span class="menu-title">Navigation</span></li>
    <li><a class="menu-item is-active">Dashboard</a></li>
    <li><a class="menu-item">Projects</a></li>
    <li><a class="menu-item">Settings</a></li>
  </ul>
</div>

```html
<ul class="menu menu-compact">
  <li><a class="menu-item">Dashboard</a></li>
</ul>
```

## Disabled

<div class="preview">
  <ul class="menu">
    <li><a class="menu-item">Active item</a></li>
    <li><a class="menu-item is-disabled">Disabled item</a></li>
  </ul>
</div>

```html
<a class="menu-item is-disabled">Disabled item</a>
```

## Tokens used

- `--hem-menu-padding` — container padding
- `--hem-menu-gap` — gap between items
- `--hem-menu-item-padding-x` / `--hem-menu-item-padding-y` — item padding
- `--hem-menu-item-radius` — item border radius
- `--hem-menu-title-color` — section header color
