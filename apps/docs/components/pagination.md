# Pagination

Page navigation. Direct `<a>` or `<button>` children are styled automatically. Active state via `.is-active` or `aria-current="page"`.

## Default

<div class="preview">
  <nav class="pagination">
    <button disabled>&#8249;</button>
    <button class="is-active">1</button>
    <button>2</button>
    <button>3</button>
    <button>4</button>
    <button>5</button>
    <button>&#8250;</button>
  </nav>
</div>

```html
<nav class="pagination">
  <button disabled>&#8249;</button>
  <button class="is-active">1</button>
  <button>2</button>
  <button>3</button>
  <button>&#8250;</button>
</nav>
```

## Middle page

<div class="preview">
  <nav class="pagination">
    <button>&#8249;</button>
    <button>1</button>
    <button>2</button>
    <button class="is-active">3</button>
    <button>4</button>
    <button>5</button>
    <button>&#8250;</button>
  </nav>
</div>

```html
<nav class="pagination">
  <button>&#8249;</button>
  <button>1</button>
  <button class="is-active">3</button>
  <button>5</button>
  <button>&#8250;</button>
</nav>
```

## With links

<div class="preview">
  <nav class="pagination">
    <a href="#">&#8249;</a>
    <a href="#" class="is-active">1</a>
    <a href="#">2</a>
    <a href="#">3</a>
    <a href="#">&#8250;</a>
  </nav>
</div>

```html
<nav class="pagination">
  <a href="#">&#8249;</a>
  <a href="#" class="is-active">1</a>
  <a href="#">2</a>
  <a href="#">&#8250;</a>
</nav>
```

## Tokens used

- `--hem-pagination-gap` — gap between items
- `--hem-pagination-item-size` — minimum item width/height
- `--hem-pagination-item-radius` — item border radius
- `--hem-pagination-active-bg` — active item background
- `--hem-pagination-active-color` — active item text color
