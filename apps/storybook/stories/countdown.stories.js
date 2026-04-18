// stories/countdown.stories.js — hemcss countdown component.

const renderCountdown = ({ hours, minutes, seconds }) => {
  const el = document.createElement('div')
  el.className = 'countdown'
  el.innerHTML = `<span style="--value: ${hours};"></span>:<span style="--value: ${minutes};"></span>:<span style="--value: ${seconds};"></span>`
  return el
}

/** @type { import('@storybook/html-vite').Meta } */
const meta = {
  title: 'Components/Countdown',
  tags: ['autodocs'],
  render: renderCountdown,
  argTypes: {
    hours: { control: { type: 'range', min: 0, max: 99 } },
    minutes: { control: { type: 'range', min: 0, max: 59 } },
    seconds: { control: { type: 'range', min: 0, max: 59 } },
  },
  args: {
    hours: 15,
    minutes: 30,
    seconds: 45,
  },
}
export default meta

export const Playground = {}
export const Default = { args: {} }

export const Live = {
  name: 'Live countdown (JS)',
  parameters: { controls: { disable: true } },
  render: () => {
    const el = document.createElement('div')
    el.className = 'countdown'
    el.innerHTML = '<span></span>:<span></span>:<span></span>'
    let total = 3661
    const update = () => {
      const h = Math.floor(total / 3600)
      const m = Math.floor((total % 3600) / 60)
      const s = total % 60
      const spans = el.querySelectorAll('span')
      spans[0].style.setProperty('--value', h)
      spans[1].style.setProperty('--value', m)
      spans[2].style.setProperty('--value', s)
      if (total > 0) total--
    }
    update()
    setInterval(update, 1000)
    return el
  },
}
