// stories/alert.stories.js — hemcss alert component.

const renderAlert = ({ variant, text }) => {
  const classes = ['alert']
  if (variant) classes.push(`alert-${variant}`)
  const el = document.createElement('div')
  el.className = classes.join(' ')
  el.textContent = text
  return el
}

/** @type { import('@storybook/html-vite').Meta } */
const meta = {
  title: 'Components/Alert',
  tags: ['autodocs'],
  render: renderAlert,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['', 'success', 'info', 'warning', 'error'],
    },
    text: { control: 'text' },
  },
  args: {
    variant: '',
    text: 'This is an alert message.',
  },
}
export default meta

export const Playground = {}
export const Default = { args: { variant: '' } }
export const Success = { args: { variant: 'success', text: 'Operation completed successfully.' } }
export const Info = { args: { variant: 'info', text: 'A new version is available.' } }
export const Warning = { args: { variant: 'warning', text: 'Your trial expires in 3 days.' } }
export const Error = { args: { variant: 'error', text: 'Failed to save changes.' } }

export const AllVariants = {
  name: 'All variants',
  parameters: { controls: { disable: true } },
  render: () => {
    const wrap = document.createElement('div')
    wrap.className = 'stack'
    wrap.setAttribute('data-gap', '0.75rem')
    const items = [
      ['', 'Default alert'],
      ['success', 'Success — operation completed.'],
      ['info', 'Info — a new version is available.'],
      ['warning', 'Warning — your trial expires soon.'],
      ['error', 'Error — failed to save changes.'],
    ]
    for (const [v, t] of items) {
      wrap.appendChild(renderAlert({ variant: v, text: t }))
    }
    return wrap
  },
}
