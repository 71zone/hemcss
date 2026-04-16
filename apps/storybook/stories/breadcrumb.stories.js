// stories/breadcrumb.stories.js — hemcss breadcrumb component.

const renderBreadcrumb = ({ items }) => {
  const ol = document.createElement('ol')
  ol.className = 'breadcrumb'
  const parts = items.split(',').map(s => s.trim())
  for (let i = 0; i < parts.length; i++) {
    const li = document.createElement('li')
    if (i < parts.length - 1) {
      const a = document.createElement('a')
      a.textContent = parts[i]
      a.href = '#'
      li.appendChild(a)
    } else {
      li.textContent = parts[i]
    }
    ol.appendChild(li)
  }
  return ol
}

/** @type { import('@storybook/html-vite').Meta } */
const meta = {
  title: 'Components/Breadcrumb',
  tags: ['autodocs'],
  render: renderBreadcrumb,
  argTypes: {
    items: { control: 'text' },
  },
  args: {
    items: 'Home, Components, Breadcrumb',
  },
}
export default meta

export const Playground = {}
export const Default = { args: { items: 'Home, Components, Breadcrumb' } }
export const Long = { args: { items: 'Home, Products, Electronics, Phones, iPhone 16' } }
