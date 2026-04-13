// stories/input.stories.js — hemcss text input component.

const renderInput = ({ variant, size, invalid, disabled, placeholder, type }) => {
  const classes = ['input']
  if (variant) classes.push(`input-${variant}`)
  if (size) classes.push(`input-${size}`)
  if (invalid) classes.push('is-invalid')
  if (disabled) classes.push('is-disabled')

  const el = document.createElement('input')
  el.className = classes.join(' ')
  el.type = type
  el.placeholder = placeholder
  if (disabled) el.disabled = true
  return el
}

/** @type { import('@storybook/html-vite').Meta } */
const meta = {
  title: 'Components/Input',
  tags: ['autodocs'],
  render: renderInput,
  argTypes: {
    variant: {
      control: { type: 'inline-radio' },
      options: ['', 'bordered', 'ghost'],
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['', 'sm', 'lg'],
    },
    invalid: { control: 'boolean', description: '.is-invalid — red border' },
    disabled: { control: 'boolean', description: '.is-disabled — muted bg + muted text' },
    placeholder: { control: 'text' },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'search', 'url'],
    },
  },
  args: {
    variant: '',
    size: '',
    invalid: false,
    disabled: false,
    placeholder: 'Type here…',
    type: 'text',
  },
}
export default meta

export const Playground = {}
export const Default = { args: { variant: '' } }
export const Bordered = { args: { variant: 'bordered' } }
export const Ghost = { args: { variant: 'ghost' } }
export const SizeSM = { name: 'Size: sm', args: { variant: 'bordered', size: 'sm' } }
export const SizeLG = { name: 'Size: lg', args: { variant: 'bordered', size: 'lg' } }
export const Invalid = { args: { variant: 'bordered', invalid: true, placeholder: 'required' } }
export const Disabled = { args: { variant: 'bordered', disabled: true, placeholder: 'disabled' } }
