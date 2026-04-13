# Select

Native `<select>` styling with custom caret, two variants (`select-bordered`, `select-ghost`), two size modifiers, and disabled state.

## Default

<div class="preview preview-stack">
  <select class="select">
    <option disabled selected>Pick a framework</option>
    <option>React</option>
    <option>Vue</option>
    <option>Svelte</option>
  </select>
  <select class="select select-bordered">
    <option disabled selected>select-bordered</option>
    <option>React</option>
    <option>Vue</option>
  </select>
  <select class="select select-ghost">
    <option disabled selected>select-ghost</option>
    <option>React</option>
    <option>Vue</option>
  </select>
</div>

```html
<select class="select">
  <option disabled selected>Pick a framework</option>
  <option>React</option>
  <option>Vue</option>
  <option>Svelte</option>
</select>
<select class="select select-bordered">
  <option disabled selected>select-bordered</option>
  <option>React</option>
  <option>Vue</option>
</select>
```

## Sizes

<div class="preview preview-stack">
  <select class="select select-bordered select-sm">
    <option>sm</option>
  </select>
  <select class="select select-bordered">
    <option>md (default)</option>
  </select>
  <select class="select select-bordered select-lg">
    <option>lg</option>
  </select>
</div>

```html
<select class="select select-bordered select-sm"><option>sm</option></select>
<select class="select select-bordered"><option>md (default)</option></select>
<select class="select select-bordered select-lg"><option>lg</option></select>
```

## Disabled

<div class="preview preview-stack">
  <select class="select select-bordered" disabled>
    <option>disabled attr</option>
  </select>
  <select class="select select-bordered is-disabled">
    <option>is-disabled class</option>
  </select>
</div>

```html
<select class="select select-bordered" disabled><option>disabled</option></select>
<select class="select select-bordered is-disabled"><option>is-disabled</option></select>
```

## Tokens used

- `--hem-bg` — default inset background
- `--hem-text`, `--hem-text-muted` — text and disabled
- `--hem-border`, `--hem-border-accented` — default and bordered
- `--hem-bg-muted` — disabled background
- `--hem-ring` — focus ring
