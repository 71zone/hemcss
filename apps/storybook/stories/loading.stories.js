// stories/loading.stories.js — hemcss loading component.

const renderLoading = ({ variant }) => {
  const classes = ['loading']
  if (variant) classes.push(`loading-${variant}`)
  const el = document.createElement('div')
  el.className = classes.join(' ')
  return el
}

/** @type { import('@storybook/html-vite').Meta } */
const meta = {
  title: 'Components/Loading',
  tags: ['autodocs'],
  render: renderLoading,
  argTypes: {
    variant: {
      control: { type: 'inline-radio' },
      options: ['spinner', 'ring', 'dots'],
    },
  },
  args: {
    variant: 'spinner',
  },
}
export default meta

export const Playground = {}
export const Spinner = { args: { variant: 'spinner' } }
export const Ring = { args: { variant: 'ring' } }
export const Dots = { args: { variant: 'dots' } }

export const AllVariants = {
  name: 'All variants',
  parameters: { controls: { disable: true } },
  render: () => {
    const wrap = document.createElement('div')
    wrap.className = 'stack stack-row items-center'
    wrap.setAttribute('data-gap', '1.5rem')
    for (const v of ['spinner', 'ring', 'dots']) {
      wrap.appendChild(renderLoading({ variant: v }))
    }
    return wrap
  },
}
