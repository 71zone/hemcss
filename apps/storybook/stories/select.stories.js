// stories/select.stories.js — hemcss select component.

const renderSelect = ({ variant, size, disabled }) => {
  const classes = ['select']
  if (variant) classes.push(`select-${variant}`)
  if (size) classes.push(`select-${size}`)
  if (disabled) classes.push('is-disabled')

  const el = document.createElement('select')
  el.className = classes.join(' ')
  if (disabled) el.disabled = true

  const options = ['Pick a framework', 'React', 'Vue', 'Svelte', 'Angular']
  for (const opt of options) {
    const o = document.createElement('option')
    o.textContent = opt
    if (opt === options[0]) o.disabled = true
    el.appendChild(o)
  }
  return el
}

/** @type { import('@storybook/html-vite').Meta } */
const meta = {
  title: 'Components/Select',
  tags: ['autodocs'],
  render: renderSelect,
  argTypes: {
    variant: {
      control: { type: 'inline-radio' },
      options: ['', 'bordered', 'ghost'],
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['', 'sm', 'lg'],
    },
    disabled: { control: 'boolean', description: '.is-disabled — muted bg + muted text' },
  },
  args: {
    variant: '',
    size: '',
    disabled: false,
  },
}
export default meta

export const Playground = {}
export const Default = { args: { variant: '' } }
export const Bordered = { args: { variant: 'bordered' } }
export const Ghost = { args: { variant: 'ghost' } }
export const SizeSM = { name: 'Size: sm', args: { variant: 'bordered', size: 'sm' } }
export const SizeLG = { name: 'Size: lg', args: { variant: 'bordered', size: 'lg' } }
export const Disabled = { args: { variant: 'bordered', disabled: true } }
