// stories/toast.stories.js — hemcss toast component.

/** @type { import('@storybook/html-vite').Meta } */
const meta = {
  title: 'Components/Toast',
  tags: ['autodocs'],
}
export default meta

export const Default = {
  render: () => {
    const wrap = document.createElement('div')

    const btn = document.createElement('button')
    btn.className = 'btn btn-primary'
    btn.textContent = 'Show toast'

    const toast = document.createElement('div')
    toast.popover = 'manual'
    toast.className = 'toast toast-end'
    toast.innerHTML = `<div class="alert alert-success">File saved successfully.</div>`

    btn.addEventListener('click', () => {
      toast.showPopover()
      setTimeout(() => toast.hidePopover(), 3000)
    })

    wrap.appendChild(btn)
    wrap.appendChild(toast)
    return wrap
  },
}

export const MultipleAlerts = {
  name: 'Multiple alerts',
  render: () => {
    const wrap = document.createElement('div')

    const btn = document.createElement('button')
    btn.className = 'btn btn-primary'
    btn.textContent = 'Show notifications'

    const toast = document.createElement('div')
    toast.popover = 'manual'
    toast.className = 'toast toast-end'
    toast.innerHTML = `
      <div class="alert alert-info">New message received.</div>
      <div class="alert alert-success">Changes saved.</div>
      <div class="alert alert-warning">Connection unstable.</div>
    `

    btn.addEventListener('click', () => {
      toast.showPopover()
      setTimeout(() => toast.hidePopover(), 4000)
    })

    wrap.appendChild(btn)
    wrap.appendChild(toast)
    return wrap
  },
}

export const Positions = {
  render: () => {
    const wrap = document.createElement('div')
    wrap.className = 'stack stack-row stack-wrap'
    wrap.setAttribute('data-gap', '0.5rem')

    const positions = [
      ['toast-top toast-start', 'Top start'],
      ['toast-top toast-center', 'Top center'],
      ['toast-top toast-end', 'Top end'],
      ['toast-start', 'Bottom start'],
      ['toast-center', 'Bottom center'],
      ['toast-end', 'Bottom end'],
    ]

    for (const [pos, label] of positions) {
      const btn = document.createElement('button')
      btn.className = 'btn'
      btn.textContent = label

      const toast = document.createElement('div')
      toast.popover = 'manual'
      toast.className = `toast ${pos}`
      toast.innerHTML = `<div class="alert">${label}</div>`

      btn.addEventListener('click', () => {
        toast.showPopover()
        setTimeout(() => toast.hidePopover(), 2000)
      })

      wrap.appendChild(btn)
      wrap.appendChild(toast)
    }
    return wrap
  },
}

export const CSSOnly = {
  name: 'CSS-only (always visible)',
  render: () => {
    const wrap = document.createElement('div')
    wrap.style.position = 'relative'
    wrap.style.height = '12rem'

    wrap.innerHTML = `
      <div class="toast toast-end" style="position: absolute;">
        <div class="alert alert-success">Always visible toast.</div>
      </div>
    `
    return wrap
  },
}
