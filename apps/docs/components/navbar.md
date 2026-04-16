# Navbar

Horizontal navigation bar with three sections: start, center, and end.

## Default

<div class="preview">
  <nav class="navbar">
    <div class="navbar-start"><a class="btn btn-ghost">HẻmCSS</a></div>
    <div class="navbar-center"></div>
    <div class="navbar-end"><button class="btn btn-primary btn-sm">Sign in</button></div>
  </nav>
</div>

```html
<nav class="navbar">
  <div class="navbar-start"><a class="btn btn-ghost">Brand</a></div>
  <div class="navbar-center"></div>
  <div class="navbar-end"><button class="btn btn-primary btn-sm">Sign in</button></div>
</nav>
```

## With center links

<div class="preview">
  <nav class="navbar">
    <div class="navbar-start"><a class="btn btn-ghost">HẻmCSS</a></div>
    <div class="navbar-center">
      <a class="btn btn-ghost btn-sm">Docs</a>
      <a class="btn btn-ghost btn-sm">Components</a>
      <a class="btn btn-ghost btn-sm">Tokens</a>
    </div>
    <div class="navbar-end"><button class="btn btn-primary btn-sm">Sign in</button></div>
  </nav>
</div>

```html
<nav class="navbar">
  <div class="navbar-start"><a class="btn btn-ghost">Brand</a></div>
  <div class="navbar-center">
    <a class="btn btn-ghost btn-sm">Docs</a>
    <a class="btn btn-ghost btn-sm">Components</a>
  </div>
  <div class="navbar-end"><button class="btn btn-primary btn-sm">Sign in</button></div>
</nav>
```

## Tokens used

- `--hem-navbar-height` — minimum height
- `--hem-navbar-padding-x` / `--hem-navbar-padding-y` — padding
- `--hem-navbar-gap` — gap between sections
- `--hem-navbar-bg` — background color
- `--hem-navbar-border-color` — bottom border color
