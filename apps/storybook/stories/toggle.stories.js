// stories/toggle.stories.js — hemcss toggle/switch component.

const createToggleWithLabel = (classes, label, checked, disabled) => {
  const wrapper = document.createElement('label')
  wrapper.style.display = 'inline-flex'
  wrapper.style.alignItems = 'center'
  wrapper.style.gap = '0.5rem'
  wrapper.style.cursor = disabled ? 'not-allowed' : 'pointer'

  const el = document.createElement('input')
  el.type = 'checkbox'
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

const renderToggle = ({ color, size, checked, disabled }) => {
  const classes = ['toggle']
  if (color) classes.push(`toggle-${color}`)
  if (size) classes.push(`toggle-${size}`)
  if (disabled) classes.push('is-disabled')

  const group = document.createElement('div')
  group.style.display = 'flex'
  group.style.flexDirection = 'column'
  group.style.gap = '0.5rem'

  group.appendChild(createToggleWithLabel(classes, 'Dark mode', checked, disabled))
  group.appendChild(createToggleWithLabel(classes, 'Notifications', false, disabled))
  group.appendChild(createToggleWithLabel(classes, 'Auto-save', false, disabled))
  return group
}

/** @type { import('@storybook/html-vite').Meta } */
const meta = {
  title: 'Components/Toggle',
  tags: ['autodocs'],
  render: renderToggle,
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
    wrap.style.gap = '1rem'
    wrap.style.alignItems = 'center'
    const colors = ['', 'primary', 'secondary', 'success', 'info', 'warning', 'error', 'neutral']
    for (const c of colors) {
      const cls = ['toggle']
      if (c) cls.push(`toggle-${c}`)
      wrap.appendChild(createToggleWithLabel(cls, c || 'default', true, false))
    }
    return wrap
  },
}
