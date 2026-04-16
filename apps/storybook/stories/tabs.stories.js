// stories/tabs.stories.js — hemcss tabs component.

const renderTabs = ({ variant, activeIndex }) => {
  const div = document.createElement('div')
  const classes = ['tabs']
  if (variant) classes.push(`tab-${variant}`)
  div.className = classes.join(' ')

  const labels = ['Overview', 'Features', 'Pricing', 'FAQ']
  for (let i = 0; i < labels.length; i++) {
    const btn = document.createElement('button')
    btn.type = 'button'
    btn.className = 'tab' + (i === activeIndex ? ' is-active' : '')
    btn.textContent = labels[i]
    div.appendChild(btn)
  }
  return div
}

/** @type { import('@storybook/html-vite').Meta } */
const meta = {
  title: 'Components/Tabs',
  tags: ['autodocs'],
  render: renderTabs,
  argTypes: {
    variant: {
      control: { type: 'inline-radio' },
      options: ['', 'bordered', 'lifted'],
    },
    activeIndex: {
      control: { type: 'number', min: 0, max: 3 },
    },
  },
  args: {
    variant: 'bordered',
    activeIndex: 0,
  },
}
export default meta

export const Playground = {}
export const Default = { args: { variant: '' } }
export const Bordered = { args: { variant: 'bordered' } }
export const Lifted = { args: { variant: 'lifted' } }
