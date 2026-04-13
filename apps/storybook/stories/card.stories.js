// stories/card.stories.js — hemcss card container component.

const renderCard = ({ modifier, title, body, showActions }) => {
  const classes = ['card']
  if (modifier) classes.push(`card-${modifier}`)

  const card = document.createElement('div')
  card.className = classes.join(' ')
  card.style.width = '280px'

  const bodyEl = document.createElement('div')
  bodyEl.className = 'card-body'

  const h3 = document.createElement('h3')
  h3.className = 'card-title'
  h3.textContent = title
  bodyEl.appendChild(h3)

  const p = document.createElement('p')
  p.textContent = body
  bodyEl.appendChild(p)

  if (showActions) {
    const actions = document.createElement('div')
    actions.className = 'card-actions'
    const ok = document.createElement('button')
    ok.type = 'button'
    ok.className = 'btn btn-primary btn-sm'
    ok.textContent = 'OK'
    const cancel = document.createElement('button')
    cancel.type = 'button'
    cancel.className = 'btn btn-ghost btn-sm'
    cancel.textContent = 'Cancel'
    actions.appendChild(ok)
    actions.appendChild(cancel)
    bodyEl.appendChild(actions)
  }

  card.appendChild(bodyEl)
  return card
}

/** @type { import('@storybook/html-vite').Meta } */
const meta = {
  title: 'Components/Card',
  tags: ['autodocs'],
  render: renderCard,
  argTypes: {
    modifier: {
      control: { type: 'inline-radio' },
      options: ['', 'bordered', 'compact'],
      description: 'Structural modifier. Empty = default skin.',
    },
    title: { control: 'text' },
    body: { control: 'text' },
    showActions: { control: 'boolean', description: 'Render a .card-actions row' },
  },
  args: {
    modifier: '',
    title: 'Card title',
    body: 'Card body content. Edit the args in the Controls panel.',
    showActions: true,
  },
}
export default meta

export const Playground = {}
export const Default = { args: { modifier: '' } }
export const Bordered = { args: { modifier: 'bordered' } }
export const Compact = { args: { modifier: 'compact' } }
