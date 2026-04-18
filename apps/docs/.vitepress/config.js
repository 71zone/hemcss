import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/hemcss/',
  title: 'HẻmCSS',
  description:
    'A semantic-class CSS component library with OKLCH tokens, cascade layers, and zero Tailwind dependency.',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/hemcss/favicon.svg' }],
  ],

  themeConfig: {
    logo: '/favicon.svg',

    nav: [
      { text: 'Guide', link: '/guide/install' },
      { text: 'Components', link: '/components/button' },
      { text: 'Tokens', link: '/tokens' },
      { text: 'Plugin', link: '/plugin' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Getting started',
          items: [
            { text: 'Install', link: '/guide/install' },
            { text: 'Usage', link: '/guide/usage' },
          ],
        },
        {
          text: 'Customizing',
          items: [
            { text: 'Theming', link: '/guide/theming' },
            { text: 'Tailwind integration', link: '/guide/tailwind' },
          ],
        },
      ],
      '/components/': [
        {
          text: 'Components',
          items: [
            { text: 'Button', link: '/components/button' },
            { text: 'Card', link: '/components/card' },
            { text: 'Input', link: '/components/input' },
            { text: 'Textarea', link: '/components/textarea' },
            { text: 'Select', link: '/components/select' },
            { text: 'Checkbox', link: '/components/checkbox' },
            { text: 'Radio', link: '/components/radio' },
            { text: 'Toggle', link: '/components/toggle' },
            { text: 'Label', link: '/components/label' },
          ],
        },
        {
          text: 'Feedback & decoration',
          items: [
            { text: 'Badge', link: '/components/badge' },
            { text: 'Alert', link: '/components/alert' },
            { text: 'Avatar', link: '/components/avatar' },
            { text: 'Divider', link: '/components/divider' },
            { text: 'Loading', link: '/components/loading' },
            { text: 'Kbd', link: '/components/kbd' },
          ],
        },
        {
          text: 'Navigation & structure',
          items: [
            { text: 'Navbar', link: '/components/navbar' },
            { text: 'Menu', link: '/components/menu' },
            { text: 'Breadcrumb', link: '/components/breadcrumb' },
            { text: 'Tabs', link: '/components/tabs' },
            { text: 'Steps', link: '/components/steps' },
            { text: 'Pagination', link: '/components/pagination' },
          ],
        },
        {
          text: 'Overlays & disclosure',
          items: [
            { text: 'Modal', link: '/components/modal' },
            { text: 'Sheet', link: '/components/sheet' },
            { text: 'Dropdown', link: '/components/dropdown' },
            { text: 'Collapse', link: '/components/collapse' },
            { text: 'Tooltip', link: '/components/tooltip' },
            { text: 'Toast', link: '/components/toast' },
          ],
        },
        {
          text: 'Data & content',
          items: [
            { text: 'Table', link: '/components/table' },
            { text: 'Stat', link: '/components/stat' },
            { text: 'Countdown', link: '/components/countdown' },
          ],
        },
        {
          text: 'Layout',
          items: [
            { text: 'Stack', link: '/components/stack' },
            { text: 'Grid', link: '/components/grid' },
          ],
        },
      ],
    },

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/…/hemcss' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 HẻmCSS contributors',
    },
  },
})
