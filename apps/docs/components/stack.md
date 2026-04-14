# Stack

Flex layout primitive for quick vertical/horizontal stacking. Default direction is column.

> **Browser:** Requires Chromium 133+ for native `data-*` attribute support. Load the polyfill for Firefox/Safari.

## Vertical (default)

<div class="preview">
  <div class="stack" data-gap="0.75rem">
    <input class="input input-bordered" placeholder="First name" />
    <input class="input input-bordered" placeholder="Last name" />
    <button class="btn btn-primary">Submit</button>
  </div>
</div>

```html
<div class="stack" data-gap="0.75rem">
  <input class="input input-bordered" placeholder="First name" />
  <input class="input input-bordered" placeholder="Last name" />
  <button class="btn btn-primary">Submit</button>
</div>
```

## Horizontal

<div class="preview">
  <div class="stack stack-row" data-gap="0.5rem">
    <button class="btn btn-primary">Save</button>
    <button class="btn btn-outline">Cancel</button>
  </div>
</div>

```html
<div class="stack stack-row" data-gap="0.5rem">
  <button class="btn btn-primary">Save</button>
  <button class="btn btn-outline">Cancel</button>
</div>
```

## Alignment

<div class="preview">
  <div class="stack stack-row items-center justify-between">
    <span>Notifications</span>
    <button class="btn btn-sm btn-ghost">Manage</button>
  </div>
</div>

```html
<div class="stack stack-row items-center justify-between">
  <span>Notifications</span>
  <button class="btn btn-sm btn-ghost">Manage</button>
</div>
```

## Wrap

<div class="preview">
  <div class="card card-bordered">
    <div class="stack stack-row stack-wrap" data-gap="0.5rem">
      <button class="btn btn-sm">Alpha</button>
      <button class="btn btn-sm">Beta</button>
      <button class="btn btn-sm">Gamma</button>
      <button class="btn btn-sm">Delta</button>
      <button class="btn btn-sm">Epsilon</button>
      <button class="btn btn-sm">Zeta</button>
    </div>
  </div>
</div>

```html
<div class="card card-bordered">
  <div class="stack stack-row stack-wrap" data-gap="0.5rem">
    <button class="btn btn-sm">Alpha</button>
    <button class="btn btn-sm">Beta</button>
    ...
  </div>
</div>
```

## Reference

### Classes

| Class | Description |
|---|---|
| `.stack` | Flex column container (default direction) |
| `.stack-row` | Switch direction to row |
| `.stack-wrap` | Allow children to wrap onto multiple lines |

### Data attributes

| Attribute | Description |
|---|---|
| `data-gap` | Gap between all children (shorthand) |
| `data-gap-x` | Column gap only |
| `data-gap-y` | Row gap only |
