# Modal

Dialog overlay using the native `<dialog>` element with animated entrance/exit via `@starting-style`.

## Basic modal

<div class="preview">
  <button class="btn btn-primary" onclick="this.nextElementSibling.showModal()">Open modal</button>
  <dialog class="modal">
    <div class="modal-box">
      <h3>Modal title</h3>
      <p>This is a modal dialog using the native &lt;dialog&gt; element.</p>
      <div class="modal-action">
        <form method="dialog">
          <button class="btn">Close</button>
        </form>
      </div>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</div>

```html
<button class="btn btn-primary" onclick="this.nextElementSibling.showModal()">
  Open modal
</button>
<dialog class="modal">
  <div class="modal-box">
    <h3>Modal title</h3>
    <p>Modal content goes here.</p>
    <div class="modal-action">
      <form method="dialog">
        <button class="btn">Close</button>
      </form>
    </div>
  </div>
  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
```

## Confirm dialog

<div class="preview">
  <button class="btn" onclick="this.nextElementSibling.showModal()">Delete item</button>
  <dialog class="modal">
    <div class="modal-box">
      <h3>Are you sure?</h3>
      <p>This action cannot be undone.</p>
      <div class="modal-action">
        <form method="dialog">
          <button class="btn">Cancel</button>
          <button class="btn btn-error">Delete</button>
        </form>
      </div>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</div>

```html
<dialog class="modal">
  <div class="modal-box">
    <h3>Are you sure?</h3>
    <p>This action cannot be undone.</p>
    <div class="modal-action">
      <form method="dialog">
        <button class="btn">Cancel</button>
        <button class="btn btn-error">Delete</button>
      </form>
    </div>
  </div>
  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
```

## How it works

- Uses native `<dialog>` — opened via `showModal()`, closed via `<form method="dialog">`
- `@starting-style` + `transition-behavior: allow-discrete` animate both the dialog and `::backdrop`
- Scale + opacity entrance for a polished feel; backdrop fades in
- `.modal-backdrop` adds click-outside-to-close via a hidden `<form method="dialog">` button
- No JavaScript library needed — just one `onclick` to open

## Tokens used

- `--hem-modal-padding` — box padding
- `--hem-modal-gap` — gap between title, content, and actions
- `--hem-modal-radius` — box border radius
- `--hem-modal-bg` — box background
- `--hem-modal-shadow` — box shadow
- `--hem-modal-backdrop-bg` — backdrop overlay color
- `--hem-modal-action-gap` — gap between action buttons
