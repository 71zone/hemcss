/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: ['../stories/**/*.stories.@(js|mjs)'],
  framework: {
    name: '@storybook/html-vite',
    options: {},
  },
  // hemcss has no component framework and no build step of its own that
  // Storybook needs to know about — the stories import pre-built CSS from
  // ../dist and use plain DOM for rendering.
}
export default config
