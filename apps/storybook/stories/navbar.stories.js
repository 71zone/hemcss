// stories/navbar.stories.js — hemcss navbar component.

const renderNavbar = () => {
  const nav = document.createElement('nav')
  nav.className = 'navbar'

  const start = document.createElement('div')
  start.className = 'navbar-start'
  const logo = document.createElement('a')
  logo.className = 'btn btn-ghost'
  logo.textContent = 'HẻmCSS'
  start.appendChild(logo)

  const center = document.createElement('div')
  center.className = 'navbar-center'

  const end = document.createElement('div')
  end.className = 'navbar-end'
  const btn = document.createElement('button')
  btn.type = 'button'
  btn.className = 'btn btn-primary btn-sm'
  btn.textContent = 'Sign in'
  end.appendChild(btn)

  nav.appendChild(start)
  nav.appendChild(center)
  nav.appendChild(end)
  return nav
}

/** @type { import('@storybook/html-vite').Meta } */
const meta = {
  title: 'Components/Navbar',
  tags: ['autodocs'],
  render: renderNavbar,
}
export default meta

export const Default = {}

export const WithLinks = {
  name: 'With links',
  parameters: { controls: { disable: true } },
  render: () => {
    const nav = document.createElement('nav')
    nav.className = 'navbar'

    const start = document.createElement('div')
    start.className = 'navbar-start'
    const logo = document.createElement('a')
    logo.className = 'btn btn-ghost'
    logo.textContent = 'HẻmCSS'
    start.appendChild(logo)

    const center = document.createElement('div')
    center.className = 'navbar-center'
    for (const text of ['Docs', 'Components', 'Tokens']) {
      const link = document.createElement('a')
      link.className = 'btn btn-ghost btn-sm'
      link.textContent = text
      center.appendChild(link)
    }

    const end = document.createElement('div')
    end.className = 'navbar-end'
    const btn = document.createElement('button')
    btn.type = 'button'
    btn.className = 'btn btn-primary btn-sm'
    btn.textContent = 'Sign in'
    end.appendChild(btn)

    nav.appendChild(start)
    nav.appendChild(center)
    nav.appendChild(end)
    return nav
  },
}
