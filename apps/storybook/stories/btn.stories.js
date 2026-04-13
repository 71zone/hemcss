// stories/btn.stories.js — hemcss button component.

/**
 * Build a <button> element from a set of class-composition args.
 */
const renderBtn = ({ variant, size, loading, disabled, label }) => {
  const classes = ['btn']
  if (variant) classes.push(`btn-${variant}`)
  if (size) classes.push(`btn-${size}`)
  if (loading) classes.push('is-loading')
  if (disabled) classes.push('is-disabled')
  const btn = document.createElement('button')
  btn.type = 'button'
  btn.className = classes.join(' ')
  btn.textContent = label
  if (disabled) btn.disabled = true
  return btn
}

/** @type { import('@storybook/html-vite').Meta } */
const meta = {
  title: 'Components/Button',
  tags: ['autodocs'],
  render: renderBtn,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        '',
        'primary',
        'secondary',
        'success',
        'info',
        'warning',
        'error',
        'neutral',
        'ghost',
        'outline',
        'link',
      ],
      description: 'Skin variant — empty string uses the default bg-elevated skin.',
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['', 'xs', 'sm', 'lg'],
      description: 'Size modifier — empty string is the default md size.',
    },
    loading: {
      control: 'boolean',
      description: '.is-loading — shows the spinner and blocks pointer events.',
    },
    disabled: {
      control: 'boolean',
      description: '.is-disabled — pairs with the native [disabled] attribute.',
    },
    label: { control: 'text' },
  },
  args: {
    variant: 'primary',
    size: '',
    loading: false,
    disabled: false,
    label: 'Button',
  },
}
export default meta

// ---- Playground ----
export const Playground = {}

// ---- Variants ----
export const Default = { args: { variant: '' } }
export const Primary = { args: { variant: 'primary' } }
export const Secondary = { args: { variant: 'secondary' } }
export const Success = { args: { variant: 'success' } }
export const Info = { args: { variant: 'info' } }
export const Warning = { args: { variant: 'warning' } }
export const Error = { args: { variant: 'error' } }
export const Neutral = { args: { variant: 'neutral' } }
export const Ghost = { args: { variant: 'ghost' } }
export const Outline = { args: { variant: 'outline' } }
export const Link = { args: { variant: 'link' } }

// ---- Sizes ----
export const SizeXS = { name: 'Size: xs', args: { variant: 'primary', size: 'xs' } }
export const SizeSM = { name: 'Size: sm', args: { variant: 'primary', size: 'sm' } }
export const SizeMD = { name: 'Size: md (default)', args: { variant: 'primary', size: '' } }
export const SizeLG = { name: 'Size: lg', args: { variant: 'primary', size: 'lg' } }

// ---- States ----
export const Loading = { args: { variant: 'primary', loading: true, label: 'Saving…' } }
export const Disabled = { args: { variant: 'primary', disabled: true } }

// ---- Gallery: every variant side-by-side ----
export const AllVariants = {
  name: 'All variants',
  parameters: { controls: { disable: true } },
  render: () => {
    const wrap = document.createElement('div')
    wrap.style.display = 'flex'
    wrap.style.flexWrap = 'wrap'
    wrap.style.gap = '0.5rem'
    wrap.style.alignItems = 'center'
    const variants = [
      '',
      'primary',
      'secondary',
      'success',
      'info',
      'warning',
      'error',
      'neutral',
      'ghost',
      'outline',
      'link',
    ]
    for (const v of variants) {
      wrap.appendChild(
        renderBtn({
          variant: v,
          size: '',
          loading: false,
          disabled: false,
          label: v || 'default',
        }),
      )
    }
    return wrap
  },
}
