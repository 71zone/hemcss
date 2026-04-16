# Steps

Horizontal progress steps indicator with automatic numbering via CSS counters.

## Default

<div class="preview">
  <ol class="steps">
    <li class="step step-primary"><span>Register</span></li>
    <li class="step step-primary"><span>Choose plan</span></li>
    <li class="step"><span>Payment</span></li>
    <li class="step"><span>Complete</span></li>
  </ol>
</div>

```html
<ol class="steps">
  <li class="step step-primary"><span>Register</span></li>
  <li class="step step-primary"><span>Choose plan</span></li>
  <li class="step"><span>Payment</span></li>
  <li class="step"><span>Complete</span></li>
</ol>
```

## Colors

<div class="preview preview-stack">
  <ol class="steps">
    <li class="step step-success"><span>Step 1</span></li>
    <li class="step step-success"><span>Step 2</span></li>
    <li class="step step-warning"><span>Step 3</span></li>
    <li class="step"><span>Step 4</span></li>
  </ol>
</div>

```html
<li class="step step-success"><span>Done</span></li>
<li class="step step-warning"><span>In progress</span></li>
<li class="step"><span>Pending</span></li>
```

## All complete

<div class="preview">
  <ol class="steps">
    <li class="step step-success"><span>Register</span></li>
    <li class="step step-success"><span>Choose plan</span></li>
    <li class="step step-success"><span>Payment</span></li>
    <li class="step step-success"><span>Complete</span></li>
  </ol>
</div>

```html
<ol class="steps">
  <li class="step step-success"><span>Register</span></li>
  <li class="step step-success"><span>Choose plan</span></li>
  <li class="step step-success"><span>Payment</span></li>
  <li class="step step-success"><span>Complete</span></li>
</ol>
```

## Tokens used

- `--hem-step-circle-size` — circle diameter
- `--hem-step-circle-bg` — default circle background
- `--hem-step-circle-color` — default circle text
- `--hem-step-line-thickness` — connecting line thickness
- `--hem-step-line-color` — default line color
- `--hem-step-label-font-size` — label text size
- `--hem-primary` through `--hem-neutral` — color variants
