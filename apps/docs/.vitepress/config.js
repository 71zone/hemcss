import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/hemcss/',
  title: 'hemcss',
  description:
    'A semantic-class CSS component library with OKLCH tokens, cascade layers, and zero Tailwind dependency.',
  cleanUrls: true,
  lastUpdated: true,

  themeConfig: {
    logo: undefined,

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
      ],
    },

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/…/hemcss' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 hemcss contributors',
    },
  },
})
