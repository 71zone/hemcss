// Custom VitePress theme — extends the default theme and loads hemcss.
//
// VitePress's built-in dark-mode toggle flips a `.dark` class on <html>.
// hemcss uses [data-theme="hanoi-light"|"hanoi-dark"|"saigon-light"|"saigon-dark"].
// A MutationObserver watches VitePress's class and mirrors it onto the
// data-theme attribute, keeping the active hemcss STYLE (hanoi/saigon)
// and flipping only the color side when the user toggles dark mode.

import DefaultTheme from 'vitepress/theme'
import { inBrowser } from 'vitepress'

import 'hemcss'
import 'hemcss/themes/hanoi-light'
import 'hemcss/themes/hanoi-dark'
import 'hemcss/themes/saigon-light'
import 'hemcss/themes/saigon-dark'

import './custom.css'
import Layout from './Layout.vue'

// Default hemcss style for the docs site.
const DEFAULT_STYLE = 'hanoi'

/** @type { import('vitepress').Theme } */
export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp() {
    if (!inBrowser) return

    const sync = () => {
      const isDark = document.documentElement.classList.contains('dark')
      // Preserve the current style (hanoi or saigon) across the light/dark flip.
      const current = document.documentElement.dataset.theme || ''
      const style = current.startsWith('saigon-') ? 'saigon' : DEFAULT_STYLE
      document.documentElement.dataset.theme = `${style}-${isDark ? 'dark' : 'light'}`
    }

    sync()

    const observer = new MutationObserver(sync)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })
  },
}
