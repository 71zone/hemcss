// stories/pagination.stories.js — hemcss pagination component.

const renderPagination = ({ pages, activePage }) => {
  const nav = document.createElement('nav')
  nav.className = 'pagination'

  const prev = document.createElement('button')
  prev.type = 'button'
  prev.textContent = '\u2039'
  if (activePage <= 1) prev.disabled = true
  nav.appendChild(prev)

  for (let i = 1; i <= pages; i++) {
    const btn = document.createElement('button')
    btn.type = 'button'
    btn.textContent = String(i)
    if (i === activePage) btn.classList.add('is-active')
    nav.appendChild(btn)
  }

  const next = document.createElement('button')
  next.type = 'button'
  next.textContent = '\u203A'
  if (activePage >= pages) next.disabled = true
  nav.appendChild(next)

  return nav
}

/** @type { import('@storybook/html-vite').Meta } */
const meta = {
  title: 'Components/Pagination',
  tags: ['autodocs'],
  render: renderPagination,
  argTypes: {
    pages: { control: { type: 'number', min: 1, max: 20 } },
    activePage: { control: { type: 'number', min: 1, max: 20 } },
  },
  args: {
    pages: 5,
    activePage: 1,
  },
}
export default meta

export const Playground = {}
export const Default = { args: { pages: 5, activePage: 1 } }
export const MiddlePage = { name: 'Middle page', args: { pages: 7, activePage: 4 } }
export const LastPage = { name: 'Last page', args: { pages: 5, activePage: 5 } }
