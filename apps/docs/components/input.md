# Input

Text input with two variants (`input-bordered`, `input-ghost`), two size modifiers, and state classes for `is-invalid` / `is-disabled` that pair with the native `:invalid` / `:disabled` selectors.

## Default

<div class="preview preview-stack">
  <input class="input" placeholder="email@example.com" />
  <input class="input input-bordered" placeholder="input-bordered" />
  <input class="input input-ghost" placeholder="input-ghost" />
</div>

```html
<input class="input" placeholder="email@example.com" />
<input class="input input-bordered" placeholder="input-bordered" />
<input class="input input-ghost" placeholder="input-ghost" />
```

## Sizes

<div class="preview preview-stack">
  <input class="input input-bordered input-sm" placeholder="sm" />
  <input class="input input-bordered" placeholder="md (default)" />
  <input class="input input-bordered input-lg" placeholder="lg" />
</div>

```html
<input class="input input-bordered input-sm" placeholder="sm" />
<input class="input input-bordered" placeholder="md (default)" />
<input class="input input-bordered input-lg" placeholder="lg" />
```

## States

### Invalid

Use `.is-invalid` or the native `:invalid` selector (which only fires on non-empty fields thanks to the `:not(:placeholder-shown)` guard):

<div class="preview preview-stack">
  <input class="input input-bordered is-invalid" placeholder="is-invalid" />
  <input class="input input-bordered" type="email" placeholder="type='email' — invalid when filled" />
</div>

```html
<input class="input input-bordered is-invalid" placeholder="is-invalid" />
<input class="input input-bordered" type="email" placeholder="fills with bad data" />
```

### Disabled

<div class="preview preview-stack">
  <input class="input input-bordered" disabled placeholder="disabled attr" />
  <input class="input input-bordered is-disabled" placeholder="is-disabled class" />
</div>

```html
<input class="input input-bordered" disabled placeholder="disabled attr" />
<input class="input input-bordered is-disabled" placeholder="is-disabled class" />
```

Disabled inputs use `--hem-bg-muted` as their background and `--hem-text-muted` as their text color (no opacity override). This keeps disabled controls legible in dark themes where an opacity blur would collapse `bg-muted` back into the page background.

## Tokens used

- `--hem-bg` — default inset background (NOT `bg-elevated` — inputs are surfaces that recede)
- `--hem-text`, `--hem-text-muted` — text and disabled/placeholder
- `--hem-border`, `--hem-border-accented` — default and bordered
- `--hem-error` — invalid border
- `--hem-bg-muted` — disabled background
- `--hem-radius-field`, `--hem-size-field` — corner and sizing
- `--hem-ring` — focus ring
