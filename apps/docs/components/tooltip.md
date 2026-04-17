# Tooltip

CSS-only hover tooltip with CSS Anchor Positioning for smart placement and auto-flip.

## Default (top)

<div class="preview" style="padding: 3rem;">
  <span class="tooltip" style="anchor-name: --demo-t1">
    <button class="btn">Hover me</button>
    <span class="tooltip-content" style="position-anchor: --demo-t1">Hello tooltip</span>
  </span>
</div>

```html
<span class="tooltip" style="anchor-name: --my-tip">
  <button class="btn">Hover me</button>
  <span class="tooltip-content" style="position-anchor: --my-tip">
    Hello tooltip
  </span>
</span>
```

## Directions

<div class="preview" style="padding: 4rem; display: flex; gap: 2rem; flex-wrap: wrap; justify-content: center;">
  <span class="tooltip" style="anchor-name: --demo-dt">
    <button class="btn">Top</button>
    <span class="tooltip-content" style="position-anchor: --demo-dt">Top</span>
  </span>
  <span class="tooltip tooltip-bottom" style="anchor-name: --demo-db">
    <button class="btn">Bottom</button>
    <span class="tooltip-content" style="position-anchor: --demo-db">Bottom</span>
  </span>
  <span class="tooltip tooltip-left" style="anchor-name: --demo-dl">
    <button class="btn">Left</button>
    <span class="tooltip-content" style="position-anchor: --demo-dl">Left</span>
  </span>
  <span class="tooltip tooltip-right" style="anchor-name: --demo-dr">
    <button class="btn">Right</button>
    <span class="tooltip-content" style="position-anchor: --demo-dr">Right</span>
  </span>
</div>

```html
<span class="tooltip" style="anchor-name: --tip">
  <button>Top</button>
  <span class="tooltip-content" style="position-anchor: --tip">Top</span>
</span>

<span class="tooltip tooltip-bottom" style="anchor-name: --tip">
  ...
  <span class="tooltip-content tooltip-bottom" ...>Bottom</span>
</span>
```

## Color variants

<div class="preview" style="padding: 3rem; display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center;">
  <span class="tooltip tooltip-primary" style="anchor-name: --demo-cp">
    <button class="btn btn-primary">Primary</button>
    <span class="tooltip-content" style="position-anchor: --demo-cp">Primary</span>
  </span>
  <span class="tooltip tooltip-secondary" style="anchor-name: --demo-cs">
    <button class="btn btn-secondary">Secondary</button>
    <span class="tooltip-content" style="position-anchor: --demo-cs">Secondary</span>
  </span>
  <span class="tooltip tooltip-success" style="anchor-name: --demo-csu">
    <button class="btn btn-success">Success</button>
    <span class="tooltip-content" style="position-anchor: --demo-csu">Success</span>
  </span>
  <span class="tooltip tooltip-warning" style="anchor-name: --demo-cw">
    <button class="btn btn-warning">Warning</button>
    <span class="tooltip-content" style="position-anchor: --demo-cw">Warning</span>
  </span>
</div>

```html
<span class="tooltip tooltip-primary" style="anchor-name: --tip">
  <button class="btn btn-primary">Primary</button>
  <span class="tooltip-content" style="position-anchor: --tip">Primary</span>
</span>
```

## How it works

- Wrapper `.tooltip` triggers show on `:hover` and `:focus-within`
- `.tooltip-content` is positioned via CSS Anchor Positioning (`position-area`)
- `position-try-fallbacks: flip-block` auto-flips when there's no room
- Smooth opacity + transform transition on show/hide
- No JavaScript, no Popover API — pure CSS

## Tokens used

- `--hem-tooltip-padding-x`, `--hem-tooltip-padding-y` — bubble padding
- `--hem-tooltip-radius` — bubble border radius
- `--hem-tooltip-bg` — bubble background (overridden by color variants)
- `--hem-tooltip-color` — bubble text color
- `--hem-tooltip-offset` — distance from trigger
