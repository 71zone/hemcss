// stories/table.stories.js — hemcss table component.

const sampleHead = ['Name', 'Role', 'Status']
const sampleRows = [
  ['Alice', 'Engineer', 'Active'],
  ['Bob', 'Designer', 'On leave'],
  ['Carol', 'PM', 'Active'],
  ['Dave', 'QA', 'Active'],
]

const buildTable = (classes) => {
  const table = document.createElement('table')
  table.className = classes
  const thead = table.createTHead()
  const headRow = thead.insertRow()
  for (const h of sampleHead) {
    const th = document.createElement('th')
    th.textContent = h
    headRow.appendChild(th)
  }
  const tbody = table.createTBody()
  for (const row of sampleRows) {
    const tr = tbody.insertRow()
    for (const cell of row) {
      const td = tr.insertCell()
      td.textContent = cell
    }
  }
  return table
}

const renderTable = ({ zebra, compact, pinRows }) => {
  const classes = ['table']
  if (zebra) classes.push('table-zebra')
  if (compact) classes.push('table-compact')
  if (pinRows) classes.push('table-pin-rows')
  return buildTable(classes.join(' '))
}

/** @type { import('@storybook/html-vite').Meta } */
const meta = {
  title: 'Components/Table',
  tags: ['autodocs'],
  render: renderTable,
  argTypes: {
    zebra: { control: 'boolean' },
    compact: { control: 'boolean' },
    pinRows: { control: 'boolean' },
  },
  args: {
    zebra: false,
    compact: false,
    pinRows: false,
  },
}
export default meta

export const Playground = {}
export const Default = { args: {} }
export const Zebra = { args: { zebra: true } }
export const Compact = { args: { compact: true } }
export const PinRows = { args: { pinRows: true } }

export const AllVariants = {
  name: 'All variants',
  parameters: { controls: { disable: true } },
  render: () => {
    const wrap = document.createElement('div')
    wrap.className = 'stack'
    wrap.setAttribute('data-gap', '1.5rem')

    const variants = [
      ['table', 'Default'],
      ['table table-zebra', 'Zebra'],
      ['table table-compact', 'Compact'],
      ['table table-zebra table-compact', 'Zebra + Compact'],
    ]
    for (const [cls, label] of variants) {
      const section = document.createElement('div')
      const h = document.createElement('h4')
      h.textContent = label
      section.appendChild(h)
      section.appendChild(buildTable(cls))
      wrap.appendChild(section)
    }
    return wrap
  },
}
