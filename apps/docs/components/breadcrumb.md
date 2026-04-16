# Breadcrumb

Path navigation with automatic separators between items.

## Default

<div class="preview">
  <ol class="breadcrumb">
    <li><a href="#">Home</a></li>
    <li><a href="#">Components</a></li>
    <li>Breadcrumb</li>
  </ol>
</div>

```html
<ol class="breadcrumb">
  <li><a href="#">Home</a></li>
  <li><a href="#">Components</a></li>
  <li>Breadcrumb</li>
</ol>
```

## Long path

<div class="preview">
  <ol class="breadcrumb">
    <li><a href="#">Home</a></li>
    <li><a href="#">Products</a></li>
    <li><a href="#">Electronics</a></li>
    <li><a href="#">Phones</a></li>
    <li>iPhone 16</li>
  </ol>
</div>

```html
<ol class="breadcrumb">
  <li><a href="#">Home</a></li>
  <li><a href="#">Products</a></li>
  <li><a href="#">Electronics</a></li>
  <li><a href="#">Phones</a></li>
  <li>iPhone 16</li>
</ol>
```

## Tokens used

- `--hem-breadcrumb-gap` — gap between items
- `--hem-breadcrumb-color` — default text color (muted)
- `--hem-breadcrumb-color-active` — last item color
- `--hem-breadcrumb-separator` — separator character (default "/")
- `--hem-breadcrumb-separator-color` — separator color
