// stories/textarea.stories.js — hemcss textarea component.

const renderTextarea = ({ variant, size, invalid, disabled, placeholder }) => {
  const classes = ['textarea']
  if (variant) classes.push(`textarea-${variant}`)
  if (size) classes.push(`textarea-${size}`)
  if (invalid) classes.push('is-invalid')
  if (disabled) classes.push('is-disabled')

  const el = document.createElement('textarea')
  el.className = classes.join(' ')
  el.placeholder = placeholder
  if (disabled) el.disabled = true
  return el
}

/** @type { import('@storybook/html-vite').Meta } */
const meta = {
  title: 'Components/Textarea',
  tags: ['autodocs'],
  render: renderTextarea,
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
  },
  args: {
    variant: '',
    size: '',
    invalid: false,
    disabled: false,
    placeholder: 'Type here…',
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
