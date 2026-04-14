// stories/badge.stories.js — hemcss badge component.

const renderBadge = ({ variant, size, outline, label }) => {
  const classes = ['badge']
  if (variant) classes.push(`badge-${variant}`)
  if (size) classes.push(`badge-${size}`)
  if (outline) classes.push('badge-outline')
  const el = document.createElement('span')
  el.className = classes.join(' ')
  el.textContent = label
  return el
}

/** @type { import('@storybook/html-vite').Meta } */
const meta = {
  title: 'Components/Badge',
  tags: ['autodocs'],
  render: renderBadge,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['', 'primary', 'secondary', 'success', 'info', 'warning', 'error', 'neutral'],
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['', 'sm', 'lg'],
    },
    outline: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: {
    variant: 'primary',
    size: '',
    outline: false,
    label: 'Badge',
  },
}
export default meta

export const Playground = {}
export const Default = { args: { variant: '' } }
export const Primary = { args: { variant: 'primary' } }
export const Secondary = { args: { variant: 'secondary' } }
export const Success = { args: { variant: 'success' } }
export const Info = { args: { variant: 'info' } }
export const Warning = { args: { variant: 'warning' } }
export const Error = { args: { variant: 'error' } }
export const Neutral = { args: { variant: 'neutral' } }
export const Outline = { args: { variant: '', outline: true } }
export const SizeSM = { name: 'Size: sm', args: { variant: 'primary', size: 'sm' } }
export const SizeLG = { name: 'Size: lg', args: { variant: 'primary', size: 'lg' } }

export const AllVariants = {
  name: 'All variants',
  parameters: { controls: { disable: true } },
  render: () => {
    const wrap = document.createElement('div')
    wrap.className = 'stack stack-row stack-wrap items-center'
    wrap.setAttribute('data-gap', '0.5rem')
    const variants = ['', 'primary', 'secondary', 'success', 'info', 'warning', 'error', 'neutral']
    for (const v of variants) {
      wrap.appendChild(renderBadge({ variant: v, size: '', outline: false, label: v || 'default' }))
    }
    return wrap
  },
}
