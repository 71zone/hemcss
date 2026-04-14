// stories/stack.stories.js — hemcss stack layout component.

const box = (text) => {
  const el = document.createElement('div')
  el.className = 'card card-bordered'
  const body = document.createElement('div')
  body.className = 'card-body'
  body.textContent = text
  el.appendChild(body)
  return el
}

const renderStack = ({ direction, wrap, gap, align, justify }) => {
  const el = document.createElement('div')
  const classes = ['stack']
  if (direction === 'row') classes.push('stack-row')
  if (wrap) classes.push('stack-wrap')
  if (align) classes.push(align)
  if (justify) classes.push(justify)
  el.className = classes.join(' ')
  if (gap) el.setAttribute('data-gap', gap)
  for (let i = 1; i <= 5; i++) el.appendChild(box(`Item ${i}`))
  return el
}

/** @type { import('@storybook/html-vite').Meta } */
const meta = {
  title: 'Layout/Stack',
  tags: ['autodocs'],
  render: renderStack,
  argTypes: {
    direction: {
      control: { type: 'inline-radio' },
      options: ['column', 'row'],
    },
    wrap: { control: 'boolean' },
    gap: { control: 'text' },
    align: {
      control: { type: 'select' },
      options: ['', 'items-start', 'items-center', 'items-end', 'items-stretch'],
    },
    justify: {
      control: { type: 'select' },
      options: ['', 'justify-start', 'justify-center', 'justify-end', 'justify-between'],
    },
  },
  args: {
    direction: 'column',
    wrap: false,
    gap: '0.75rem',
    align: '',
    justify: '',
  },
}
export default meta

export const Playground = {}
export const Vertical = { args: { direction: 'column', gap: '0.75rem' } }
export const Horizontal = { args: { direction: 'row', gap: '0.75rem' } }
export const HorizontalCentered = { args: { direction: 'row', gap: '0.75rem', align: 'items-center', justify: 'justify-center' } }
export const SpaceBetween = { args: { direction: 'row', justify: 'justify-between' } }
