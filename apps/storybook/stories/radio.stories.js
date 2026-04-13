// stories/radio.stories.js — hemcss radio button component.

let radioId = 0
const renderRadio = ({ color, size, checked, disabled }) => {
  const classes = ['radio']
  if (color) classes.push(`radio-${color}`)
  if (size) classes.push(`radio-${size}`)
  if (disabled) classes.push('is-disabled')

  const el = document.createElement('input')
  el.type = 'radio'
  el.name = `radio-story-${++radioId}`
  el.className = classes.join(' ')
  if (checked) el.checked = true
  if (disabled) el.disabled = true
  return el
}

/** @type { import('@storybook/html-vite').Meta } */
const meta = {
  title: 'Components/Radio',
  tags: ['autodocs'],
  render: renderRadio,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['', 'primary', 'secondary', 'success', 'info', 'warning', 'error', 'neutral'],
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['', 'sm', 'lg'],
    },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {
    color: '',
    size: '',
    checked: true,
    disabled: false,
  },
}
export default meta

export const Playground = {}
export const Default = { args: { color: '' } }
export const Primary = { args: { color: 'primary' } }
export const Secondary = { args: { color: 'secondary' } }
export const Success = { args: { color: 'success' } }
export const Warning = { args: { color: 'warning' } }
export const Error = { args: { color: 'error' } }
export const SizeSM = { name: 'Size: sm', args: { color: 'primary', size: 'sm' } }
export const SizeLG = { name: 'Size: lg', args: { color: 'primary', size: 'lg' } }
export const Disabled = { args: { color: 'primary', disabled: true } }

export const AllColors = {
  name: 'All colors',
  parameters: { controls: { disable: true } },
  render: () => {
    const wrap = document.createElement('div')
    wrap.style.display = 'flex'
    wrap.style.gap = '0.5rem'
    wrap.style.alignItems = 'center'
    const colors = ['', 'primary', 'secondary', 'success', 'info', 'warning', 'error', 'neutral']
    for (const c of colors) {
      wrap.appendChild(renderRadio({ color: c, size: '', checked: true, disabled: false }))
    }
    return wrap
  },
}
