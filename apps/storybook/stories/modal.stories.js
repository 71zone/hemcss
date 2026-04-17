// stories/modal.stories.js — hemcss modal component.

/** @type { import('@storybook/html-vite').Meta } */
const meta = {
  title: 'Components/Modal',
  tags: ['autodocs'],
}
export default meta

export const Default = {
  render: () => {
    const wrap = document.createElement('div')
    const btn = document.createElement('button')
    btn.className = 'btn btn-primary'
    btn.textContent = 'Open modal'

    const dialog = document.createElement('dialog')
    dialog.className = 'modal'

    dialog.innerHTML = `
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
    `

    btn.addEventListener('click', () => dialog.showModal())
    wrap.appendChild(btn)
    wrap.appendChild(dialog)
    return wrap
  },
}

export const WithActions = {
  name: 'With actions',
  render: () => {
    const wrap = document.createElement('div')
    const btn = document.createElement('button')
    btn.className = 'btn'
    btn.textContent = 'Confirm action'

    const dialog = document.createElement('dialog')
    dialog.className = 'modal'

    dialog.innerHTML = `
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
    `

    btn.addEventListener('click', () => dialog.showModal())
    wrap.appendChild(btn)
    wrap.appendChild(dialog)
    return wrap
  },
}
