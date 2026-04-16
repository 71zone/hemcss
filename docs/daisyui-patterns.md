# DaisyUI CSS-only interaction patterns

Reference for HẻmCSS component authors. We adopt DaisyUI's proven CSS-only interaction structures and re-skin them with HẻmCSS design tokens. This means **no inventing new interaction patterns** — use what DaisyUI has battle-tested.

## Core principle

> Copy the HTML structure and CSS technique. Replace all hard-coded values with `--hem-{component}-*` tokens.

## Pattern catalog

### 1. Radio toggle (tabs, segmented control)

**Technique:** `<label class="tab"><input type="radio" checked />Label</label>`
**CSS:** `:has(:checked)` on the label drives active state. Radio input is visually hidden inside the label.

```html
<div class="tabs tab-bordered">
  <label class="tab"><input type="radio" name="t" checked />Tab 1</label>
  <div class="tab-content">Panel 1</div>
  <label class="tab"><input type="radio" name="t" />Tab 2</label>
  <div class="tab-content">Panel 2</div>
</div>
```

**Used by:** tabs, tab-content

### 2. Checkbox toggle (drawer, swap)

**Technique:** Hidden checkbox + sibling selector. Clicking a label toggles the checkbox; `:checked` state drives visibility.

```html
<div class="drawer">
  <input type="checkbox" id="drawer-1" class="drawer-toggle" />
  <div class="drawer-content">
    <label for="drawer-1" class="btn">Open drawer</label>
    <!-- page content -->
  </div>
  <div class="drawer-side">
    <label for="drawer-1" class="drawer-overlay"></label>
    <!-- sidebar content -->
  </div>
</div>
```

**Used by:** drawer, swap, mobile menu

### 3. `<details>` / `<summary>` (collapse, accordion)

**Technique:** Native browser disclosure widget. Style with `[open]` attribute.

```html
<details class="collapse collapse-arrow">
  <summary class="collapse-title">Click to expand</summary>
  <div class="collapse-content">
    <p>Hidden content here.</p>
  </div>
</details>
```

**Used by:** collapse, accordion

### 4. `<dialog>` (modal)

**Technique:** Native `<dialog>` element with `::backdrop`. Open via `showModal()` or checkbox hack. Close via `<form method="dialog">`.

```html
<dialog class="modal">
  <div class="modal-box">
    <h3>Modal title</h3>
    <p>Modal content</p>
    <div class="modal-action">
      <form method="dialog">
        <button class="btn">Close</button>
      </form>
    </div>
  </div>
  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
```

**Used by:** modal

### 5. `:focus-within` (dropdown)

**Technique:** Container uses `:focus-within` to show dropdown content. Clicking outside removes focus and hides it.

```html
<div class="dropdown">
  <div tabindex="0" role="button" class="btn">Click</div>
  <ul tabindex="0" class="dropdown-content menu">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```

**Used by:** dropdown

### 6. `data-tip` + `::before`/`::after` (tooltip)

**Technique:** `data-tip` attribute holds the tooltip text. `::before` renders it, `::after` renders the arrow. Shown on `:hover` / `:focus`.

```html
<div class="tooltip" data-tip="Hello">
  <button class="btn">Hover me</button>
</div>
```

**Used by:** tooltip

### 7. Fixed positioning (toast)

**Technique:** Fixed position container at a screen edge. Children are alerts or any content.

```html
<div class="toast toast-end">
  <div class="alert alert-success">Saved!</div>
</div>
```

**Used by:** toast

## Rules for HẻmCSS implementation

1. **Copy DaisyUI's HTML structure exactly** — same class names on same element types where possible
2. **Replace all values with `--hem-{component}-*` tokens** — no hard-coded colors, sizes, or spacing
3. **Add Saigon overrides** for density (smaller padding, tighter gaps, smaller text)
4. **Max specificity 0,2,0** — use `:where()` to lower pseudo-classes
5. **Wrap in `@layer component { }`** — all component rules are layered
6. **States:** `:has(:checked)` for CSS-only, `.is-*` for JS-driven (support both)
7. **No JS in the library** — JS is only used in docs demos where CSS-only isn't possible (like pagination)
8. **Target Chromium 133+** — `:has()` is well supported, no polyfill needed

## Component mapping (Batch 4)

| Component | DaisyUI pattern | CSS technique |
|---|---|---|
| modal | `<dialog>` | Native dialog + `::backdrop` |
| drawer | Checkbox toggle | Hidden checkbox + `:checked` sibling |
| dropdown | `:focus-within` | Tabindex + focus state |
| collapse | `<details>` | Native disclosure + `[open]` |
| tooltip | `data-tip` attr | `::before`/`::after` on `:hover` |
| toast | Fixed positioning | Fixed container + alert children |
