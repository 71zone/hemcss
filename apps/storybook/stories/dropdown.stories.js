// stories/dropdown.stories.js — hemcss dropdown component (Popover + Anchor Positioning).

let uid = 0

const renderDropdown = ({ position }) => {
  const id = `dd-${++uid}`
  const wrap = document.createElement('div')
  wrap.style.padding = '6rem'
  wrap.style.display = 'flex'
  wrap.style.justifyContent = 'center'

  const classes = ['dropdown']
  if (position) classes.push(`dropdown-${position}`)

  wrap.innerHTML = `
    <div class="${classes.join(' ')}">
      <button class="btn dropdown-trigger" popovertarget="${id}" style="anchor-name: --${id}">Click me</button>
      <div id="${id}" popover class="dropdown-content" style="position-anchor: --${id}">
        <ul class="menu">
          <li class="menu-item"><a>Item 1</a></li>
          <li class="menu-item"><a>Item 2</a></li>
          <li class="menu-item"><a>Item 3</a></li>
        </ul>
      </div>
    </div>
  `
  return wrap
}

/** @type { import('@storybook/html-vite').Meta } */
const meta = {
  title: 'Components/Dropdown',
  tags: ['autodocs'],
  render: renderDropdown,
  argTypes: {
    position: {
      control: { type: 'select' },
      options: ['', 'top', 'left', 'right'],
    },
  },
  args: { position: '' },
}
export default meta

export const Playground = {}
export const Bottom = { args: { position: '' } }
export const Top = { args: { position: 'top' } }
export const Left = { args: { position: 'left' } }
export const Right = { args: { position: 'right' } }

export const EndAligned = {
  name: 'End-aligned',
  render: () => {
    const id = `dd-end-${++uid}`
    const wrap = document.createElement('div')
    wrap.style.padding = '2rem'
    wrap.style.display = 'flex'
    wrap.style.justifyContent = 'flex-end'

    wrap.innerHTML = `
      <div class="dropdown dropdown-end">
        <button class="btn dropdown-trigger" popovertarget="${id}" style="anchor-name: --${id}">Menu</button>
        <div id="${id}" popover class="dropdown-content" style="position-anchor: --${id}">
          <ul class="menu">
            <li class="menu-item"><a>Profile</a></li>
            <li class="menu-item"><a>Settings</a></li>
            <li class="menu-item"><a>Logout</a></li>
          </ul>
        </div>
      </div>
    `
    return wrap
  },
}
