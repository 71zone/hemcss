// stories/tabs.stories.js — hemcss tabs component.

const renderTabs = ({ variant, activeIndex }) => {
  const div = document.createElement('div')
  const classes = ['tabs']
  if (variant) classes.push(`tab-${variant}`)
  div.className = classes.join(' ')

  const name = `tabs-${Date.now()}`
  const labels = ['Overview', 'Features', 'Pricing', 'FAQ']
  for (let i = 0; i < labels.length; i++) {
    const label = document.createElement('label')
    label.className = 'tab'
    const radio = document.createElement('input')
    radio.type = 'radio'
    radio.name = name
    if (i === activeIndex) radio.checked = true
    label.appendChild(radio)
    label.appendChild(document.createTextNode(labels[i]))
    div.appendChild(label)
  }

  if (variant === 'bordered' || variant === '') {
    const indicator = document.createElement('div')
    indicator.className = 'tab-indicator'
    div.appendChild(indicator)
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
