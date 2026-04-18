# Countdown

Digit-based countdown display using CSS counters with `decimal-leading-zero`. Set `--value` on each `<span>` via inline style. Animate with JS by updating `--value`.

## Default

<div class="preview">
  <div class="countdown">
    <span style="--value: 15;"></span>:<span style="--value: 30;"></span>:<span style="--value: 45;"></span>
  </div>
</div>

```html
<div class="countdown">
  <span style="--value: 15;"></span>:
  <span style="--value: 30;"></span>:
  <span style="--value: 45;"></span>
</div>
```

## Minutes and seconds only

<div class="preview">
  <div class="countdown">
    <span style="--value: 5;"></span>:<span style="--value: 9;"></span>
  </div>
</div>

```html
<div class="countdown">
  <span style="--value: 5;"></span>:
  <span style="--value: 9;"></span>
</div>
```

## With labels

<div class="preview">
  <div class="countdown">
    <div class="stack items-center" data-gap="0.25rem">
      <span style="--value: 12;"></span>
      <span style="font-size: var(--hem-text-xs); font-weight: normal;">hours</span>
    </div>
    :
    <div class="stack items-center" data-gap="0.25rem">
      <span style="--value: 34;"></span>
      <span style="font-size: var(--hem-text-xs); font-weight: normal;">min</span>
    </div>
    :
    <div class="stack items-center" data-gap="0.25rem">
      <span style="--value: 56;"></span>
      <span style="font-size: var(--hem-text-xs); font-weight: normal;">sec</span>
    </div>
  </div>
</div>

```html
<div class="countdown">
  <div class="stack items-center" data-gap="0.25rem">
    <span style="--value: 12;"></span>
    <span style="font-size: var(--hem-text-xs);">hours</span>
  </div>
  :
  <div class="stack items-center" data-gap="0.25rem">
    <span style="--value: 34;"></span>
    <span style="font-size: var(--hem-text-xs);">min</span>
  </div>
  :
  ...
</div>
```

## How it works

- `@property --value` registers as `<integer>` so CSS `counter()` can read it
- `counter-reset: countdown var(--value)` sets the counter to the value
- `::after { content: counter(countdown, decimal-leading-zero) }` renders it
- JS updates `--value` on each `<span>` to animate the countdown

## Tokens used

- `--hem-countdown-font-size` — digit text size
- `--hem-countdown-font-weight` — digit text weight
- `--hem-countdown-gap` — gap between segments
