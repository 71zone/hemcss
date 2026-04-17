# Table

Styled data table with zebra striping, compact density, and sticky headers.

## Default

<div class="preview">
  <table class="table">
    <thead>
      <tr><th>Name</th><th>Role</th><th>Status</th></tr>
    </thead>
    <tbody>
      <tr><td>Alice</td><td>Engineer</td><td>Active</td></tr>
      <tr><td>Bob</td><td>Designer</td><td>On leave</td></tr>
      <tr><td>Carol</td><td>PM</td><td>Active</td></tr>
    </tbody>
  </table>
</div>

```html
<table class="table">
  <thead>
    <tr><th>Name</th><th>Role</th><th>Status</th></tr>
  </thead>
  <tbody>
    <tr><td>Alice</td><td>Engineer</td><td>Active</td></tr>
    <tr><td>Bob</td><td>Designer</td><td>On leave</td></tr>
  </tbody>
</table>
```

## Zebra striping

Alternating row backgrounds for readability.

<div class="preview">
  <table class="table table-zebra">
    <thead>
      <tr><th>Product</th><th>Price</th><th>Stock</th></tr>
    </thead>
    <tbody>
      <tr><td>Widget A</td><td>$12.00</td><td>340</td></tr>
      <tr><td>Widget B</td><td>$8.50</td><td>120</td></tr>
      <tr><td>Widget C</td><td>$24.00</td><td>58</td></tr>
      <tr><td>Widget D</td><td>$6.00</td><td>210</td></tr>
    </tbody>
  </table>
</div>

```html
<table class="table table-zebra">...</table>
```

## Compact

Tighter padding for data-dense layouts.

<div class="preview">
  <table class="table table-compact">
    <thead>
      <tr><th>ID</th><th>Event</th><th>Date</th></tr>
    </thead>
    <tbody>
      <tr><td>001</td><td>Deploy</td><td>2026-04-15</td></tr>
      <tr><td>002</td><td>Rollback</td><td>2026-04-16</td></tr>
      <tr><td>003</td><td>Deploy</td><td>2026-04-17</td></tr>
    </tbody>
  </table>
</div>

```html
<table class="table table-compact">...</table>
```

## Pin rows (sticky header)

Header stays visible when scrolling.

<div class="preview">
  <div style="max-height: 10rem; overflow: auto;">
    <table class="table table-pin-rows">
      <thead>
        <tr><th>#</th><th>Item</th><th>Qty</th></tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>Apples</td><td>12</td></tr>
        <tr><td>2</td><td>Bananas</td><td>6</td></tr>
        <tr><td>3</td><td>Cherries</td><td>24</td></tr>
        <tr><td>4</td><td>Dates</td><td>8</td></tr>
        <tr><td>5</td><td>Elderberries</td><td>3</td></tr>
        <tr><td>6</td><td>Figs</td><td>15</td></tr>
        <tr><td>7</td><td>Grapes</td><td>20</td></tr>
      </tbody>
    </table>
  </div>
</div>

```html
<div style="max-height: 10rem; overflow: auto;">
  <table class="table table-pin-rows">...</table>
</div>
```

## Tokens used

- `--hem-table-font-size` — body text size
- `--hem-table-padding-x`, `--hem-table-padding-y` — cell padding
- `--hem-table-compact-padding-x`, `--hem-table-compact-padding-y` — compact cell padding
- `--hem-table-border-width`, `--hem-table-border-color` — row dividers
- `--hem-table-head-font-size`, `--hem-table-head-font-weight` — header text
- `--hem-table-head-color` — header text color
- `--hem-table-head-bg` — header and sticky background
- `--hem-table-hover-bg` — row hover background
- `--hem-table-stripe-bg` — zebra stripe background
