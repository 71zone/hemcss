// stories/grid.stories.js — hemcss grid layout component.

const cell = (text, span) => {
  const el = document.createElement('div')
  el.className = 'card card-bordered'
  const body = document.createElement('div')
  body.className = 'card-body'
  body.style.textAlign = 'center'
  body.textContent = text
  el.appendChild(body)
  if (span) el.setAttribute('data-span', span)
  return el
}

const renderGrid = ({ cols, rows, gap }) => {
  const el = document.createElement('div')
  el.className = 'grid'
  if (cols) el.setAttribute('data-cols', cols)
  if (rows) el.setAttribute('data-rows', rows)
  if (gap) el.setAttribute('data-gap', gap)
  for (let i = 1; i <= 6; i++) el.appendChild(cell(`${i}`))
  return el
}

/** @type { import('@storybook/html-vite').Meta } */
const meta = {
  title: 'Layout/Grid',
  tags: ['autodocs'],
  render: renderGrid,
  argTypes: {
    cols: { control: 'text' },
    rows: { control: 'text' },
    gap: { control: 'text' },
  },
  args: {
    cols: '3',
    rows: '',
    gap: '1rem',
  },
}
export default meta

export const Playground = {}
export const ThreeColumns = { args: { cols: '3', gap: '1rem' } }
export const FourColumns = { args: { cols: '4', gap: '0.75rem' } }
export const TwoByThree = { args: { cols: '3', rows: '2', gap: '1rem' } }

export const WithSpan = {
  name: 'With data-span',
  parameters: { controls: { disable: true } },
  render: () => {
    const el = document.createElement('div')
    el.className = 'grid'
    el.setAttribute('data-cols', '4')
    el.setAttribute('data-gap', '1rem')
    el.appendChild(cell('Spans 2', '2'))
    el.appendChild(cell('1'))
    el.appendChild(cell('1'))
    el.appendChild(cell('1'))
    el.appendChild(cell('Spans 3', '3'))
    return el
  },
}

export const NamedAreas = {
  name: 'Named areas',
  parameters: { controls: { disable: true } },
  render: () => {
    const el = document.createElement('div')
    el.className = 'grid'
    el.setAttribute('data-gap', '1rem')
    el.style.gridTemplateAreas = "'header header' 'sidebar main' 'footer footer'"
    el.style.gridTemplateColumns = '200px 1fr'

    const areas = ['header', 'sidebar', 'main', 'footer']
    for (const name of areas) {
      const c = cell(name)
      c.setAttribute('data-area', name)
      el.appendChild(c)
    }
    return el
  },
}
