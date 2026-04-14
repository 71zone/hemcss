// stories/avatar.stories.js — hemcss avatar component.

const renderAvatar = ({ size, initials }) => {
  const classes = ['avatar']
  if (size) classes.push(`avatar-${size}`)
  const el = document.createElement('div')
  el.className = classes.join(' ')
  el.textContent = initials
  return el
}

/** @type { import('@storybook/html-vite').Meta } */
const meta = {
  title: 'Components/Avatar',
  tags: ['autodocs'],
  render: renderAvatar,
  argTypes: {
    size: {
      control: { type: 'inline-radio' },
      options: ['sm', '', 'lg', 'xl'],
    },
    initials: { control: 'text' },
  },
  args: {
    size: '',
    initials: 'AB',
  },
}
export default meta

export const Playground = {}
export const Default = { args: { size: '' } }
export const SizeSM = { name: 'Size: sm', args: { size: 'sm' } }
export const SizeLG = { name: 'Size: lg', args: { size: 'lg' } }
export const SizeXL = { name: 'Size: xl', args: { size: 'xl' } }

export const Group = {
  name: 'Avatar group',
  parameters: { controls: { disable: true } },
  render: () => {
    const group = document.createElement('div')
    group.className = 'avatar-group'
    const names = ['AB', 'CD', 'EF', 'GH']
    for (const n of names) {
      group.appendChild(renderAvatar({ size: '', initials: n }))
    }
    return group
  },
}

export const AllSizes = {
  name: 'All sizes',
  parameters: { controls: { disable: true } },
  render: () => {
    const wrap = document.createElement('div')
    wrap.className = 'stack stack-row items-center'
    wrap.setAttribute('data-gap', '0.5rem')
    const sizes = ['sm', '', 'lg', 'xl']
    for (const s of sizes) {
      wrap.appendChild(renderAvatar({ size: s, initials: 'AB' }))
    }
    return wrap
  },
}
