// Storybook preview config. Runs inside the preview iframe; globals here
// apply to every story.

// Import hemcss via the workspace package specifier. pnpm's workspace
// resolution maps `hemcss` to `packages/hemcss/`, and hemcss's exports
// map sends bare + theme subpaths to pre-built dist files. Vite picks
// them up as normal CSS imports.
import 'hemcss'
import 'hemcss/themes/hanoi-light'
import 'hemcss/themes/hanoi-dark'
import 'hemcss/themes/saigon-light'
import 'hemcss/themes/saigon-dark'

/** @type { import('@storybook/html-vite').Preview } */
const preview = {
  parameters: {
    layout: 'centered',
    backgrounds: { disable: true }, // we control bg via [data-theme], not Storybook's addon
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  // Global toolbar control: flip the hemcss style + color theme without
  // reloading. Four combinations: Hanoi or Saigon layout x light or dark palette.
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'hemcss style + color theme',
      defaultValue: 'hanoi-light',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'hanoi-light',  title: 'Hanoi \u00b7 Light',  icon: 'sun' },
          { value: 'hanoi-dark',   title: 'Hanoi \u00b7 Dark',   icon: 'moon' },
          { value: 'saigon-light', title: 'Saigon \u00b7 Light', icon: 'sun' },
          { value: 'saigon-dark',  title: 'Saigon \u00b7 Dark',  icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },
  },

  // Apply the current theme globals to <html data-theme="..."> inside the
  // preview iframe. Storybook re-invokes decorators when globals change,
  // so flipping the toolbar live re-themes the current story.
  decorators: [
    (story, context) => {
      const theme = context.globals.theme ?? 'hanoi-light'
      document.documentElement.dataset.theme = theme
      return story(context)
    },
  ],
}

export default preview
