// stories/stat.stories.js — hemcss stat component.

const renderStat = ({ title, value, desc }) => {
  const el = document.createElement('div')
  el.className = 'stat'

  const t = document.createElement('div')
  t.className = 'stat-title'
  t.textContent = title

  const v = document.createElement('div')
  v.className = 'stat-value'
  v.textContent = value

  const d = document.createElement('div')
  d.className = 'stat-desc'
  d.textContent = desc

  el.append(t, v, d)
  return el
}

/** @type { import('@storybook/html-vite').Meta } */
const meta = {
  title: 'Components/Stat',
  tags: ['autodocs'],
  render: renderStat,
  argTypes: {
    title: { control: 'text' },
    value: { control: 'text' },
    desc: { control: 'text' },
  },
  args: {
    title: 'Total Users',
    value: '25,600',
    desc: '21% more than last month',
  },
}
export default meta

export const Playground = {}
export const Default = { args: {} }

export const WithFigure = {
  name: 'With figure',
  render: () => {
    const el = document.createElement('div')
    el.className = 'stat'
    el.innerHTML = `
      <div class="stat-figure" style="font-size: 2rem;">📊</div>
      <div class="stat-title">Revenue</div>
      <div class="stat-value">$12,400</div>
      <div class="stat-desc">Jan 1 — Feb 1</div>
    `
    return el
  },
}

export const StatsRow = {
  name: 'Stats row',
  parameters: { controls: { disable: true } },
  render: () => {
    const wrap = document.createElement('div')
    wrap.className = 'stats'
    const items = [
      ['Total Users', '25.6K', '+21%'],
      ['Revenue', '$12,400', '+14%'],
      ['Bounce Rate', '32%', '-8%'],
    ]
    for (const [t, v, d] of items) {
      wrap.appendChild(renderStat({ title: t, value: v, desc: d }))
    }
    return wrap
  },
}

export const StatsVertical = {
  name: 'Stats vertical',
  parameters: { controls: { disable: true } },
  render: () => {
    const wrap = document.createElement('div')
    wrap.className = 'stats stats-vertical'
    const items = [
      ['Downloads', '31K', 'Jan 1 — Feb 1'],
      ['New Users', '4,200', '↗ 400 (22%)'],
      ['New Registers', '1,200', '↘ 90 (14%)'],
    ]
    for (const [t, v, d] of items) {
      wrap.appendChild(renderStat({ title: t, value: v, desc: d }))
    }
    return wrap
  },
}
