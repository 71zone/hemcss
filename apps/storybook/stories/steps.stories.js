// stories/steps.stories.js — hemcss steps component.

const renderSteps = ({ completed, color }) => {
  const ol = document.createElement('ol')
  ol.className = 'steps'

  const labels = ['Register', 'Choose plan', 'Payment', 'Complete']
  for (let i = 0; i < labels.length; i++) {
    const li = document.createElement('li')
    const classes = ['step']
    if (i < completed && color) classes.push(`step-${color}`)
    li.className = classes.join(' ')
    const span = document.createElement('span')
    span.textContent = labels[i]
    li.appendChild(span)
    ol.appendChild(li)
  }
  return ol
}

/** @type { import('@storybook/html-vite').Meta } */
const meta = {
  title: 'Components/Steps',
  tags: ['autodocs'],
  render: renderSteps,
  argTypes: {
    completed: {
      control: { type: 'number', min: 0, max: 4 },
      description: 'Number of completed steps',
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'info', 'warning', 'error', 'neutral'],
    },
  },
  args: {
    completed: 2,
    color: 'primary',
  },
}
export default meta

export const Playground = {}
export const Default = { args: { completed: 2, color: 'primary' } }
export const AllComplete = { name: 'All complete', args: { completed: 4, color: 'success' } }
export const NoneComplete = { name: 'None complete', args: { completed: 0, color: 'primary' } }
