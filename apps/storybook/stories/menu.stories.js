// stories/menu.stories.js — hemcss menu component.

const renderMenu = ({ horizontal, compact }) => {
  const ul = document.createElement('ul')
  const classes = ['menu']
  if (horizontal) classes.push('menu-horizontal')
  if (compact) classes.push('menu-compact')
  ul.className = classes.join(' ')

  const title = document.createElement('li')
  const titleSpan = document.createElement('span')
  titleSpan.className = 'menu-title'
  titleSpan.textContent = 'Navigation'
  title.appendChild(titleSpan)
  ul.appendChild(title)

  const items = ['Dashboard', 'Projects', 'Settings']
  for (let i = 0; i < items.length; i++) {
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.className = 'menu-item' + (i === 0 ? ' is-active' : '')
    a.textContent = items[i]
    li.appendChild(a)
    ul.appendChild(li)
  }
  return ul
}

/** @type { import('@storybook/html-vite').Meta } */
const meta = {
  title: 'Components/Menu',
  tags: ['autodocs'],
  render: renderMenu,
  argTypes: {
    horizontal: { control: 'boolean' },
    compact: { control: 'boolean' },
  },
  args: {
    horizontal: false,
    compact: false,
  },
}
export default meta

export const Playground = {}
export const Default = { args: {} }
export const Horizontal = { args: { horizontal: true } }
export const Compact = { args: { compact: true } }
