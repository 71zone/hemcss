// stories/collapse.stories.js — hemcss collapse component.

/** @type { import('@storybook/html-vite').Meta } */
const meta = {
  title: 'Components/Collapse',
  tags: ['autodocs'],
}
export default meta

export const Default = {
  render: () => {
    const el = document.createElement('details')
    el.className = 'collapse'
    el.innerHTML = `
      <summary class="collapse-title">Click to expand</summary>
      <div class="collapse-content">
        <p>This is the hidden content that appears when you open the collapse.</p>
      </div>
    `
    return el
  },
}

export const WithArrow = {
  name: 'With arrow',
  render: () => {
    const el = document.createElement('details')
    el.className = 'collapse collapse-arrow'
    el.innerHTML = `
      <summary class="collapse-title">Expandable section</summary>
      <div class="collapse-content">
        <p>Content revealed on open. The arrow rotates to indicate state.</p>
      </div>
    `
    return el
  },
}

export const Accordion = {
  render: () => {
    const wrap = document.createElement('div')
    wrap.className = 'stack'
    wrap.setAttribute('data-gap', '0')

    const items = [
      ['What is HẻmCSS?', 'A semantic-class CSS component library with OKLCH tokens and cascade layers.'],
      ['Do I need JavaScript?', 'No — all components are CSS-only. JS enhances but never gates.'],
      ['What browsers are supported?', 'Chromium 133+ for full feature support.'],
    ]

    for (const [title, content] of items) {
      const details = document.createElement('details')
      details.className = 'collapse collapse-arrow'
      details.innerHTML = `
        <summary class="collapse-title">${title}</summary>
        <div class="collapse-content"><p>${content}</p></div>
      `
      wrap.appendChild(details)
    }
    return wrap
  },
}
