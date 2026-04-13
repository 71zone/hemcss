# Grid

CSS Grid layout primitive with dynamic columns, rows, gap, and child placement via `data-*` attributes.

> **Browser:** Requires Chromium 133+ for native `data-*` attribute support. Load the polyfill for Firefox/Safari.

## Basic grid

<div class="preview">
  <div class="grid" data-cols="3" data-gap="1rem" style="width:100%">
    <div class="card card-bordered"><div class="card-body">1</div></div>
    <div class="card card-bordered"><div class="card-body">2</div></div>
    <div class="card card-bordered"><div class="card-body">3</div></div>
    <div class="card card-bordered"><div class="card-body">4</div></div>
    <div class="card card-bordered"><div class="card-body">5</div></div>
    <div class="card card-bordered"><div class="card-body">6</div></div>
  </div>
</div>

```html
<div class="grid" data-cols="3" data-gap="1rem">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</div>
```

## Spanning columns

<div class="preview">
  <div class="grid" data-cols="4" data-gap="1rem" style="width:100%">
    <div class="card card-bordered" data-span="2"><div class="card-body">Span 2</div></div>
    <div class="card card-bordered"><div class="card-body">1</div></div>
    <div class="card card-bordered"><div class="card-body">1</div></div>
    <div class="card card-bordered"><div class="card-body">1</div></div>
    <div class="card card-bordered" data-span="3"><div class="card-body">Span 3</div></div>
  </div>
</div>

```html
<div class="grid" data-cols="4" data-gap="1rem">
  <div data-span="2">Spans 2 columns</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div data-span="3">Spans 3 columns</div>
</div>
```

## Placement

Use `data-col-start` and `data-row-start` to explicitly position items on the grid.

<div class="preview">
  <div class="grid" data-cols="3" data-rows="3" data-gap="1rem" style="width:100%">
    <div class="card card-bordered" data-col-start="1" data-row-start="1"><div class="card-body">1,1</div></div>
    <div class="card card-bordered" data-col-start="3" data-row-start="1"><div class="card-body">3,1</div></div>
    <div class="card card-bordered" data-col-start="2" data-row-start="2"><div class="card-body">2,2</div></div>
    <div class="card card-bordered" data-col-start="1" data-row-start="3"><div class="card-body">1,3</div></div>
    <div class="card card-bordered" data-col-start="3" data-row-start="3"><div class="card-body">3,3</div></div>
  </div>
</div>

```html
<div class="grid" data-cols="3" data-rows="3" data-gap="1rem">
  <div data-col-start="1" data-row-start="1">1,1</div>
  <div data-col-start="3" data-row-start="1">3,1</div>
  <div data-col-start="2" data-row-start="2">2,2</div>
  <div data-col-start="1" data-row-start="3">1,3</div>
  <div data-col-start="3" data-row-start="3">3,3</div>
</div>
```

## Flow

`.grid-flow-col` fills columns first. `.grid-flow-dense` backfills gaps left by spanning items.

<div class="preview preview-stack">
  <p style="font-size:0.8rem;color:var(--hem-text-muted);margin:0"><code>grid-flow-col</code> — items fill down columns first</p>
  <div class="grid grid-flow-col" data-rows="2" data-gap="0.75rem" style="width:100%">
    <div class="card card-bordered"><div class="card-body">A</div></div>
    <div class="card card-bordered"><div class="card-body">B</div></div>
    <div class="card card-bordered"><div class="card-body">C</div></div>
    <div class="card card-bordered"><div class="card-body">D</div></div>
  </div>
  <p style="font-size:0.8rem;color:var(--hem-text-muted);margin:0"><code>grid-flow-dense</code> — backfills gaps</p>
  <div class="grid grid-flow-dense" data-cols="3" data-gap="0.75rem" style="width:100%">
    <div class="card card-bordered" data-span="2"><div class="card-body">Wide</div></div>
    <div class="card card-bordered"><div class="card-body">A</div></div>
    <div class="card card-bordered"><div class="card-body">B</div></div>
    <div class="card card-bordered" data-span="2"><div class="card-body">Wide</div></div>
    <div class="card card-bordered"><div class="card-body">C</div></div>
  </div>
</div>

```html
<!-- Fill columns first -->
<div class="grid grid-flow-col" data-rows="2" data-gap="0.75rem">
  <div>A</div>
  <div>B</div>
  <div>C</div>
  <div>D</div>
</div>

<!-- Dense packing -->
<div class="grid grid-flow-dense" data-cols="3" data-gap="0.75rem">
  <div data-span="2">Wide</div>
  <div>A</div>
  <div>B</div>
  <div data-span="2">Wide</div>
  <div>C</div>
</div>
```

## Named areas

Use `data-area` on children. The template declaration requires inline `style` (CSS cannot read arbitrary strings from attributes).

<div class="preview">
  <div class="grid" data-gap="1rem" style="width:100%;grid-template-areas:'header header' 'sidebar main' 'footer footer';grid-template-columns:200px 1fr">
    <div class="card card-bordered" data-area="header"><div class="card-body">Header</div></div>
    <div class="card card-bordered" data-area="sidebar"><div class="card-body">Sidebar</div></div>
    <div class="card card-bordered" data-area="main"><div class="card-body">Main</div></div>
    <div class="card card-bordered" data-area="footer"><div class="card-body">Footer</div></div>
  </div>
</div>

```html
<div class="grid" data-gap="1rem"
     style="grid-template-areas: 'header header' 'sidebar main' 'footer footer';
            grid-template-columns: 200px 1fr">
  <div data-area="header">Header</div>
  <div data-area="sidebar">Sidebar</div>
  <div data-area="main">Main</div>
  <div data-area="footer">Footer</div>
</div>
```

## Subgrid

Subgrid lets nested grids inherit the parent's track sizing. The killer use case: cards with varying content where titles, bodies, and actions **stay aligned across columns**.

### Row alignment with subgrid

Each card below is a `.subgrid-row` spanning 3 row tracks. Despite different content lengths, the titles, bodies, and buttons align across all 3 cards.

<div class="preview">
  <div class="grid" data-cols="3" data-gap="1rem" style="width:100%;grid-template-rows:auto auto auto">
    <div class="subgrid-row card card-bordered" data-row-span="3" style="row-gap:0.5rem">
      <div class="card-body" style="padding:0.75rem"><strong>Quick Start</strong></div>
      <div class="card-body" style="padding:0.75rem">Get up and running in 2 minutes.</div>
      <div class="card-body" style="padding:0.75rem"><button class="btn btn-primary btn-sm">Install</button></div>
    </div>
    <div class="subgrid-row card card-bordered" data-row-span="3" style="row-gap:0.5rem">
      <div class="card-body" style="padding:0.75rem"><strong>Advanced Configuration Guide</strong></div>
      <div class="card-body" style="padding:0.75rem">Deep dive into tokens, themes, cascade layers, and the PostCSS plugin. Covers Saigon density, custom palettes, and Tailwind coexistence.</div>
      <div class="card-body" style="padding:0.75rem"><button class="btn btn-primary btn-sm">Read docs</button></div>
    </div>
    <div class="subgrid-row card card-bordered" data-row-span="3" style="row-gap:0.5rem">
      <div class="card-body" style="padding:0.75rem"><strong>Components</strong></div>
      <div class="card-body" style="padding:0.75rem">Browse the full component library.</div>
      <div class="card-body" style="padding:0.75rem"><button class="btn btn-primary btn-sm">Explore</button></div>
    </div>
  </div>
</div>

```html
<!-- Parent: 3 columns, 3 explicit row tracks -->
<div class="grid" data-cols="3" data-gap="1rem"
     style="grid-template-rows: auto auto auto">

  <!-- Each card inherits parent row tracks via subgrid -->
  <div class="subgrid-row card" data-row-span="3">
    <div>Quick Start</div>
    <div>Get up and running in 2 minutes.</div>
    <div><button class="btn btn-primary btn-sm">Install</button></div>
  </div>

  <div class="subgrid-row card" data-row-span="3">
    <div>Advanced Configuration Guide</div>
    <div>Deep dive into tokens, themes, cascade layers...</div>
    <div><button class="btn btn-primary btn-sm">Read docs</button></div>
  </div>

  <div class="subgrid-row card" data-row-span="3">
    <div>Components</div>
    <div>Browse the full component library.</div>
    <div><button class="btn btn-primary btn-sm">Explore</button></div>
  </div>
</div>
```

Without subgrid, the "Advanced Configuration" card would push its button down while the other cards' buttons float higher. With `.subgrid-row`, each card's 3 sections snap to the parent's row tracks — buttons align perfectly.

### Column inheritance

`.subgrid-col` inherits column tracks. Useful for nested content that should align to the parent's column grid.

```html
<div class="grid" data-cols="4" data-gap="1rem">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <!-- Spans all 4 cols, children align to parent columns -->
  <div class="subgrid-col" data-span="4" data-gap="1rem">
    <div>Aligned A</div>
    <div>Aligned B</div>
    <div>Aligned C</div>
    <div>Aligned D</div>
  </div>
</div>
```

### Both axes

`.subgrid` inherits both column and row tracks.

## Reference

### Container classes

| Class | Description |
|---|---|
| `.grid` | Grid container |
| `.grid-flow-col` | Fill columns before rows |
| `.grid-flow-dense` | Dense packing algorithm |
| `.subgrid` | Inherit both column and row tracks |
| `.subgrid-col` | Inherit parent column tracks only |
| `.subgrid-row` | Inherit parent row tracks only |

### Container data attributes

| Attribute | Description |
|---|---|
| `data-cols` | Number of equal-width columns |
| `data-rows` | Number of equal-height rows |
| `data-gap` | Gap between all cells |
| `data-gap-x` | Column gap only |
| `data-gap-y` | Row gap only |

### Child data attributes

| Attribute | Description |
|---|---|
| `data-span` | Columns to span |
| `data-row-span` | Rows to span |
| `data-col-start` | Column start line |
| `data-row-start` | Row start line |
| `data-area` | Named grid area |

> For shared alignment classes (`items-center`, `justify-between`, etc.), see [Stack](/components/stack).
