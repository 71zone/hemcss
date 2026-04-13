# Textarea

Multiline text input with two variants (`textarea-bordered`, `textarea-ghost`), two size modifiers, and state classes for `is-invalid` / `is-disabled` that pair with native selectors.

## Default

<div class="preview preview-stack">
  <textarea class="textarea" placeholder="Type here…"></textarea>
  <textarea class="textarea textarea-bordered" placeholder="textarea-bordered"></textarea>
  <textarea class="textarea textarea-ghost" placeholder="textarea-ghost"></textarea>
</div>

```html
<textarea class="textarea" placeholder="Type here…"></textarea>
<textarea class="textarea textarea-bordered" placeholder="textarea-bordered"></textarea>
<textarea class="textarea textarea-ghost" placeholder="textarea-ghost"></textarea>
```

## Sizes

<div class="preview preview-stack">
  <textarea class="textarea textarea-bordered textarea-sm" placeholder="sm"></textarea>
  <textarea class="textarea textarea-bordered" placeholder="md (default)"></textarea>
  <textarea class="textarea textarea-bordered textarea-lg" placeholder="lg"></textarea>
</div>

```html
<textarea class="textarea textarea-bordered textarea-sm" placeholder="sm"></textarea>
<textarea class="textarea textarea-bordered" placeholder="md (default)"></textarea>
<textarea class="textarea textarea-bordered textarea-lg" placeholder="lg"></textarea>
```

## States

### Invalid

<div class="preview preview-stack">
  <textarea class="textarea textarea-bordered is-invalid" placeholder="is-invalid"></textarea>
</div>

```html
<textarea class="textarea textarea-bordered is-invalid" placeholder="is-invalid"></textarea>
```

### Disabled

<div class="preview preview-stack">
  <textarea class="textarea textarea-bordered" disabled placeholder="disabled attr"></textarea>
  <textarea class="textarea textarea-bordered is-disabled" placeholder="is-disabled class"></textarea>
</div>

```html
<textarea class="textarea textarea-bordered" disabled placeholder="disabled attr"></textarea>
<textarea class="textarea textarea-bordered is-disabled" placeholder="is-disabled class"></textarea>
```

## Tokens used

- `--hem-bg` — default inset background
- `--hem-text`, `--hem-text-muted` — text and disabled/placeholder
- `--hem-border`, `--hem-border-accented` — default and bordered
- `--hem-error` — invalid border
- `--hem-bg-muted` — disabled background
- `--hem-ring` — focus ring
