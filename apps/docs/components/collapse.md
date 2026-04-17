# Collapse

Accordion section using native `<details>` / `<summary>`.

## Default

<div class="preview">
  <details class="collapse">
    <summary class="collapse-title">Click to expand</summary>
    <div class="collapse-content">
      <p>This is the hidden content that appears when you open the collapse.</p>
    </div>
  </details>
</div>

```html
<details class="collapse">
  <summary class="collapse-title">Click to expand</summary>
  <div class="collapse-content">
    <p>Hidden content here.</p>
  </div>
</details>
```

## With arrow

<div class="preview">
  <details class="collapse collapse-arrow">
    <summary class="collapse-title">Expandable section</summary>
    <div class="collapse-content">
      <p>Content revealed on open. The arrow rotates to indicate state.</p>
    </div>
  </details>
</div>

```html
<details class="collapse collapse-arrow">
  <summary class="collapse-title">Expandable section</summary>
  <div class="collapse-content">
    <p>Content here.</p>
  </div>
</details>
```

## Accordion group

<div class="preview">
  <div class="stack" data-gap="0">
    <details class="collapse collapse-arrow">
      <summary class="collapse-title">What is HẻmCSS?</summary>
      <div class="collapse-content"><p>A semantic-class CSS component library with OKLCH tokens and cascade layers.</p></div>
    </details>
    <details class="collapse collapse-arrow">
      <summary class="collapse-title">Do I need JavaScript?</summary>
      <div class="collapse-content"><p>No — all components are CSS-only. JS enhances but never gates.</p></div>
    </details>
    <details class="collapse collapse-arrow">
      <summary class="collapse-title">What browsers are supported?</summary>
      <div class="collapse-content"><p>Chromium 133+ for full feature support.</p></div>
    </details>
  </div>
</div>

```html
<div class="stack" data-gap="0">
  <details class="collapse collapse-arrow">
    <summary class="collapse-title">Question 1</summary>
    <div class="collapse-content"><p>Answer 1.</p></div>
  </details>
  <details class="collapse collapse-arrow">
    <summary class="collapse-title">Question 2</summary>
    <div class="collapse-content"><p>Answer 2.</p></div>
  </details>
</div>
```

## Tokens used

- `--hem-collapse-padding` — section padding
- `--hem-collapse-radius` — border radius
- `--hem-collapse-bg` — background color
- `--hem-collapse-border-width`, `--hem-collapse-border-color` — border
- `--hem-collapse-title-font-weight` — title weight
