// stories/tooltip.stories.js — hemcss tooltip component (CSS hover + Anchor Positioning).

let uid = 0

const renderTooltip = ({ position, variant, text }) => {
  const id = `tip-${++uid}`
  const wrap = document.createElement('div')
  wrap.style.padding = '4rem'
  wrap.style.display = 'flex'
  wrap.style.justifyContent = 'center'

  const classes = ['tooltip']
  if (position) classes.push(`tooltip-${position}`)
  if (variant) classes.push(`tooltip-${variant}`)

  wrap.innerHTML = `
    <span class="${classes.join(' ')}" style="anchor-name: --${id}">
      <button class="btn">Hover me</button>
      <span class="tooltip-content" style="position-anchor: --${id}">${text}</span>
    </span>
  `
  return wrap
}

/** @type { import('@storybook/html-vite').Meta } */
const meta = {
  title: 'Components/Tooltip',
  tags: ['autodocs'],
  render: renderTooltip,
  argTypes: {
    position: {
      control: { type: 'select' },
      options: ['', 'bottom', 'left', 'right'],
    },
    variant: {
      control: { type: 'select' },
      options: ['', 'primary', 'secondary', 'success', 'info', 'warning', 'error'],
    },
    text: { control: 'text' },
  },
  args: { position: '', variant: '', text: 'Hello tooltip' },
}
export default meta

export const Playground = {}
export const Top = { args: { position: '' } }
export const Bottom = { args: { position: 'bottom' } }
export const Left = { args: { position: 'left' } }
export const Right = { args: { position: 'right' } }

export const ColorVariants = {
  name: 'Color variants',
  parameters: { controls: { disable: true } },
  render: () => {
    const wrap = document.createElement('div')
    wrap.className = 'stack stack-row stack-wrap'
    wrap.setAttribute('data-gap', '1rem')
    wrap.style.padding = '3rem'

    const variants = ['primary', 'secondary', 'success', 'info', 'warning', 'error']
    for (const v of variants) {
      const id = `tip-color-${v}`
      const span = document.createElement('span')
      span.className = `tooltip tooltip-${v}`
      span.style.anchorName = `--${id}`
      span.innerHTML = `
        <button class="btn btn-${v}">${v}</button>
        <span class="tooltip-content" style="position-anchor: --${id}">${v}</span>
      `
      wrap.appendChild(span)
    }
    return wrap
  },
}
