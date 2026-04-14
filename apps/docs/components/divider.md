# Divider

Labeled or plain separator. Default is horizontal; use `.divider-horizontal` for vertical.

## Default

<div class="preview">
  <div class="stack" data-gap="0">
    <p>Content above</p>
    <div class="divider"></div>
    <p>Content below</p>
  </div>
</div>

```html
<div class="divider"></div>
```

## With label

<div class="preview">
  <div class="stack" data-gap="0">
    <p>Content above</p>
    <div class="divider">OR</div>
    <p>Content below</p>
  </div>
</div>

```html
<div class="divider">OR</div>
```

## Horizontal (vertical line)

<div class="preview">
  <div class="stack stack-row items-center" data-gap="1rem">
    <span>Left</span>
    <div class="divider divider-horizontal"></div>
    <span>Right</span>
  </div>
</div>

```html
<div class="stack stack-row items-center" data-gap="1rem">
  <span>Left</span>
  <div class="divider divider-horizontal"></div>
  <span>Right</span>
</div>
```

## Tokens used

- `--hem-divider-color` — line color
- `--hem-divider-thickness` — line thickness
- `--hem-divider-gap` — gap around label text
- `--hem-divider-color-text` — label text color
