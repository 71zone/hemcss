// stories/kbd.stories.js — hemcss kbd component.

const renderKbd = ({ size, label }) => {
  const classes = ['kbd']
  if (size) classes.push(`kbd-${size}`)
  const el = document.createElement('kbd')
  el.className = classes.join(' ')
  el.textContent = label
  return el
}

/** @type { import('@storybook/html-vite').Meta } */
const meta = {
  title: 'Components/Kbd',
  tags: ['autodocs'],
  render: renderKbd,
  argTypes: {
    size: {
      control: { type: 'inline-radio' },
      options: ['', 'sm', 'lg'],
    },
    label: { control: 'text' },
  },
  args: {
    size: '',
    label: '⌘ K',
  },
}
export default meta

export const Playground = {}
export const Default = { args: { label: '⌘ K' } }
export const SizeSM = { name: 'Size: sm', args: { size: 'sm', label: 'Esc' } }
export const SizeLG = { name: 'Size: lg', args: { size: 'lg', label: 'Enter' } }

export const Shortcut = {
  name: 'Keyboard shortcut',
  parameters: { controls: { disable: true } },
  render: () => {
    const wrap = document.createElement('div')
    wrap.className = 'stack stack-row items-center'
    wrap.setAttribute('data-gap', '0.25rem')
    for (const k of ['⌘', 'Shift', 'P']) {
      wrap.appendChild(renderKbd({ size: '', label: k }))
    }
    return wrap
  },
}
