// stories/radio.stories.js — hemcss radio button component.

const createRadioWithLabel = (name, classes, label, checked, disabled) => {
  const wrapper = document.createElement('label')
  wrapper.className = 'stack stack-row items-center'
  wrapper.setAttribute('data-gap', '0.5rem')
  if (disabled) wrapper.style.cursor = 'not-allowed'

  const el = document.createElement('input')
  el.type = 'radio'
  el.name = name
  el.className = classes.join(' ')
  if (checked) el.checked = true
  if (disabled) el.disabled = true

  const span = document.createElement('span')
  span.className = 'label-text'
  span.textContent = label

  wrapper.appendChild(el)
  wrapper.appendChild(span)
  return wrapper
}

const renderRadio = ({ color, size, checked, disabled }) => {
  const classes = ['radio']
  if (color) classes.push(`radio-${color}`)
  if (size) classes.push(`radio-${size}`)
  if (disabled) classes.push('is-disabled')

  const group = document.createElement('div')
  group.className = 'stack'
  group.setAttribute('data-gap', '0.5rem')

  const name = `radio-${Date.now()}`
  group.appendChild(createRadioWithLabel(name, classes, 'Option A', checked, disabled))
  group.appendChild(createRadioWithLabel(name, classes, 'Option B', false, disabled))
  group.appendChild(createRadioWithLabel(name, classes, 'Option C', false, disabled))
  return group
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
    wrap.className = 'stack stack-row items-center'
    wrap.setAttribute('data-gap', '1rem')
    const colors = ['', 'primary', 'secondary', 'success', 'info', 'warning', 'error', 'neutral']
    for (const c of colors) {
      const cls = ['radio']
      if (c) cls.push(`radio-${c}`)
      wrap.appendChild(
        createRadioWithLabel(`all-colors`, cls, c || 'default', c === '', false),
      )
    }
    return wrap
  },
}
