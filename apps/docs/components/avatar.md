# Avatar

Circular image or initials display with size variants and group stacking.

## Default

<div class="preview">
  <div class="stack stack-row items-center" data-gap="0.5rem">
    <div class="avatar">AB</div>
    <div class="avatar">CD</div>
    <div class="avatar">EF</div>
  </div>
</div>

```html
<div class="avatar">AB</div>
<div class="avatar">CD</div>
```

## Sizes

<div class="preview">
  <div class="stack stack-row items-center" data-gap="0.5rem">
    <div class="avatar avatar-sm">SM</div>
    <div class="avatar">MD</div>
    <div class="avatar avatar-lg">LG</div>
    <div class="avatar avatar-xl">XL</div>
  </div>
</div>

```html
<div class="avatar avatar-sm">SM</div>
<div class="avatar">MD</div>
<div class="avatar avatar-lg">LG</div>
<div class="avatar avatar-xl">XL</div>
```

## With image

<div class="preview">
  <div class="avatar"><img src="https://i.pravatar.cc/64?img=1" alt="User" /></div>
</div>

```html
<div class="avatar">
  <img src="avatar.jpg" alt="User" />
</div>
```

## Avatar group

Overlapping avatars using `.avatar-group`. Items are visually reversed (last in DOM appears first visually).

<div class="preview">
  <div class="avatar-group">
    <div class="avatar">A</div>
    <div class="avatar">B</div>
    <div class="avatar">C</div>
    <div class="avatar">D</div>
  </div>
</div>

```html
<div class="avatar-group">
  <div class="avatar">A</div>
  <div class="avatar">B</div>
  <div class="avatar">C</div>
  <div class="avatar">D</div>
</div>
```

## Tokens used

- `--hem-bg-elevated` — default background
- `--hem-border` — border
- `--hem-avatar-size` — default size (2rem)
- `--hem-avatar-group-overlap` — negative margin for group stacking
