# Stat

Dashboard metric card with title, value, description, and optional figure.

## Default

<div class="preview">
  <div class="stat">
    <div class="stat-title">Total Users</div>
    <div class="stat-value">25,600</div>
    <div class="stat-desc">21% more than last month</div>
  </div>
</div>

```html
<div class="stat">
  <div class="stat-title">Total Users</div>
  <div class="stat-value">25,600</div>
  <div class="stat-desc">21% more than last month</div>
</div>
```

## With figure

<div class="preview">
  <div class="stat">
    <div class="stat-figure" style="font-size: 2rem;">📊</div>
    <div class="stat-title">Revenue</div>
    <div class="stat-value">$12,400</div>
    <div class="stat-desc">Jan 1 — Feb 1</div>
  </div>
</div>

```html
<div class="stat">
  <div class="stat-figure">📊</div>
  <div class="stat-title">Revenue</div>
  <div class="stat-value">$12,400</div>
  <div class="stat-desc">Jan 1 — Feb 1</div>
</div>
```

## Stats row

Multiple stats side by side with dividers.

<div class="preview">
  <div class="stats">
    <div class="stat">
      <div class="stat-title">Total Users</div>
      <div class="stat-value">25.6K</div>
      <div class="stat-desc">+21%</div>
    </div>
    <div class="stat">
      <div class="stat-title">Revenue</div>
      <div class="stat-value">$12,400</div>
      <div class="stat-desc">+14%</div>
    </div>
    <div class="stat">
      <div class="stat-title">Bounce Rate</div>
      <div class="stat-value">32%</div>
      <div class="stat-desc">-8%</div>
    </div>
  </div>
</div>

```html
<div class="stats">
  <div class="stat">
    <div class="stat-title">Total Users</div>
    <div class="stat-value">25.6K</div>
    <div class="stat-desc">+21%</div>
  </div>
  <div class="stat">...</div>
  <div class="stat">...</div>
</div>
```

## Stats vertical

<div class="preview">
  <div class="stats stats-vertical">
    <div class="stat">
      <div class="stat-title">Downloads</div>
      <div class="stat-value">31K</div>
      <div class="stat-desc">Jan 1 — Feb 1</div>
    </div>
    <div class="stat">
      <div class="stat-title">New Users</div>
      <div class="stat-value">4,200</div>
      <div class="stat-desc">↗ 400 (22%)</div>
    </div>
    <div class="stat">
      <div class="stat-title">New Registers</div>
      <div class="stat-value">1,200</div>
      <div class="stat-desc">↘ 90 (14%)</div>
    </div>
  </div>
</div>

```html
<div class="stats stats-vertical">
  <div class="stat">...</div>
  <div class="stat">...</div>
</div>
```

## Tokens used

- `--hem-stat-padding` — card padding
- `--hem-stat-gap` — gap between content and figure
- `--hem-stat-border-width`, `--hem-stat-border-color` — divider between stats
- `--hem-stat-title-font-size`, `--hem-stat-title-color` — title text
- `--hem-stat-value-font-size`, `--hem-stat-value-font-weight` — value text
- `--hem-stat-desc-font-size`, `--hem-stat-desc-color` — description text
