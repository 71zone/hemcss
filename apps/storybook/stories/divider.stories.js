// stories/divider.stories.js — hemcss divider component.

const renderDivider = ({ horizontal, label }) => {
  const classes = ['divider']
  if (horizontal) classes.push('divider-horizontal')
  const el = document.createElement('div')
  el.className = classes.join(' ')
  if (label) el.textContent = label
  return el
}

/** @type { import('@storybook/html-vite').Meta } */
const meta = {
  title: 'Components/Divider',
  tags: ['autodocs'],
  render: renderDivider,
  argTypes: {
    horizontal: { control: 'boolean', description: '.divider-horizontal — vertical line separator' },
    label: { control: 'text' },
  },
  args: {
    horizontal: false,
    label: '',
  },
}
export default meta

export const Playground = {}
export const Default = { args: {} }
export const WithLabel = { args: { label: 'OR' } }

export const InContext = {
  name: 'In context',
  parameters: { controls: { disable: true } },
  render: () => {
    const wrap = document.createElement('div')
    wrap.className = 'stack'
    wrap.setAttribute('data-gap', '0')
    const p1 = document.createElement('p')
    p1.textContent = 'Content above'
    const div = document.createElement('div')
    div.className = 'divider'
    div.textContent = 'OR'
    const p2 = document.createElement('p')
    p2.textContent = 'Content below'
    wrap.appendChild(p1)
    wrap.appendChild(div)
    wrap.appendChild(p2)
    return wrap
  },
}
