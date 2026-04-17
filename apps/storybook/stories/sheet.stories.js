// stories/sheet.stories.js — hemcss sheet component (multi-direction slide-in panel).

let uid = 0

const renderSheet = ({ direction, label }) => {
  const id = `sheet-${++uid}`
  const wrap = document.createElement('div')
  const cls = direction ? `sheet sheet-${direction}` : 'sheet'

  wrap.innerHTML = `
    <div class="${cls}">
      <input type="checkbox" id="${id}" class="sheet-toggle" />
      <div class="sheet-content">
        <label for="${id}" class="btn btn-primary">${label || `Open ${direction || 'left'}`}</label>
      </div>
      <div class="sheet-side">
        <label for="${id}" class="sheet-overlay"></label>
        <div class="menu" style="padding: var(--hem-space-4); min-height: 100%;">
          <h4 class="menu-title">${direction || 'Left'} sheet</h4>
          <ul>
            <li class="menu-item"><a>Dashboard</a></li>
            <li class="menu-item"><a>Settings</a></li>
            <li class="menu-item"><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  `
  return wrap.firstElementChild
}

/** @type { import('@storybook/html-vite').Meta } */
const meta = {
  title: 'Components/Sheet',
  tags: ['autodocs'],
  render: renderSheet,
  argTypes: {
    direction: {
      control: { type: 'select' },
      options: ['', 'right', 'top', 'bottom'],
    },
  },
  args: { direction: '' },
}
export default meta

export const Playground = {}
export const Left = { args: { direction: '' } }
export const Right = { args: { direction: 'right' } }
export const Top = { args: { direction: 'top' } }
export const Bottom = { args: { direction: 'bottom' } }

export const MobileModal = {
  name: 'Bottom sheet (mobile modal)',
  render: () => {
    const id = `sheet-mobile-${++uid}`
    const wrap = document.createElement('div')
    wrap.innerHTML = `
      <div class="sheet sheet-bottom">
        <input type="checkbox" id="${id}" class="sheet-toggle" />
        <div class="sheet-content">
          <label for="${id}" class="btn btn-primary">Open bottom sheet</label>
        </div>
        <div class="sheet-side">
          <label for="${id}" class="sheet-overlay"></label>
          <div style="padding: var(--hem-space-6);">
            <h3 style="margin: 0 0 var(--hem-space-3);">Share this page</h3>
            <div class="stack" data-gap="0.5rem">
              <button class="btn">Copy link</button>
              <button class="btn">Email</button>
              <button class="btn">Message</button>
              <label for="${id}" class="btn btn-neutral">Cancel</label>
            </div>
          </div>
        </div>
      </div>
    `
    return wrap.firstElementChild
  },
}
