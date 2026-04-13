---
layout: home

hero:
  name: HẻmCSS
  text: Semantic components, zero Tailwind.
  tagline: OKLCH tokens, cascade layers, and a PostCSS plugin that coexists with Tailwind when you want it to.
  actions:
    - theme: brand
      text: Get started
      link: /guide/install
    - theme: alt
      text: Components
      link: /components/button

features:
  - title: OKLCH first
    details: Every color token is OKLCH. Themes can rebind semantic aliases or redefine the whole palette. No HSL, no hex, no perceptual drift.
  - title: Cascade layers
    details: 'reset, tokens, global, component, themes, overrides. User CSS always wins. themes beats component, so theme overrides never fight specificity.'
  - title: Standalone themes
    details: Themes are portable CSS files. Ship one from your own repo, host it on any CDN, load it after the hemcss core.
  - title: Coexists with Tailwind
    details: Turn off hemcss's reset with one flag and let Tailwind Preflight take over. The rest of hemcss drops in cleanly underneath your utility classes.
---
