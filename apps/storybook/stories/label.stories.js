// stories/label.stories.js — hemcss label component.

const renderLabel = ({ text, altText, withInput }) => {
  const label = document.createElement('label')
  label.className = 'label'

  const span = document.createElement('span')
  span.className = 'label-text'
  span.textContent = text
  label.appendChild(span)

  if (altText) {
    const alt = document.createElement('span')
    alt.className = 'label-text-alt'
    alt.textContent = altText
    label.appendChild(alt)
  }

  if (!withInput) return label

  const wrap = document.createElement('div')
  wrap.appendChild(label)
  const input = document.createElement('input')
  input.className = 'input input-bordered'
  input.placeholder = 'Type here…'
  wrap.appendChild(input)
  return wrap
}

/** @type { import('@storybook/html-vite').Meta } */
const meta = {
  title: 'Components/Label',
  tags: ['autodocs'],
  render: renderLabel,
  argTypes: {
    text: { control: 'text' },
    altText: { control: 'text' },
    withInput: { control: 'boolean', description: 'Show paired with an input' },
  },
  args: {
    text: 'Email',
    altText: '',
    withInput: false,
  },
}
export default meta

export const Playground = {}
export const Default = { args: { text: 'Email' } }
export const WithAlt = { args: { text: 'Email', altText: 'Required' } }
export const WithInput = { args: { text: 'Email', altText: 'Required', withInput: true } }
