// stories/drawer.stories.js — hemcss drawer component.

/** @type { import('@storybook/html-vite').Meta } */
const meta = {
  title: 'Components/Drawer',
  tags: ['autodocs'],
}
export default meta

export const Default = {
  render: () => {
    const wrap = document.createElement('div')
    wrap.innerHTML = `
      <div class="drawer">
        <input type="checkbox" id="sb-drawer-1" class="drawer-toggle" />
        <div class="drawer-content">
          <label for="sb-drawer-1" class="btn btn-primary">Open drawer</label>
        </div>
        <div class="drawer-side">
          <label for="sb-drawer-1" class="drawer-overlay"></label>
          <div class="menu" style="padding: var(--hem-space-4); min-height: 100vh;">
            <h4 class="menu-title">Sidebar</h4>
            <ul>
              <li class="menu-item"><a>Dashboard</a></li>
              <li class="menu-item"><a>Settings</a></li>
              <li class="menu-item"><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    `
    return wrap.firstElementChild
  },
}
