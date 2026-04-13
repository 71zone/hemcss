# hemcss

A semantic-class CSS component library with OKLCH tokens, cascade layers, and zero Tailwind dependency.

```html
<link rel="stylesheet" href="https://cdn/hemcss@1/hemcss.min.css">
<link rel="stylesheet" href="https://cdn/hemcss@1/themes/dark.min.css">

<button class="btn btn-primary">Save</button>
<div class="card">
  <div class="card-body">
    <h3 class="card-title">Hello</h3>
  </div>
</div>
```

## Repo layout

This repository is a pnpm workspace monorepo.

```
hemcss/
├── packages/
│   └── hemcss/          # the CSS library (published to npm as `hemcss`)
├── apps/
│   ├── demo/            # zero-build static demo page
│   ├── storybook/       # Storybook component explorer
│   └── docs/            # VitePress documentation site
├── docs/
│   └── superpowers/     # internal specs and execution plans (not user-facing)
├── pnpm-workspace.yaml
├── package.json         # workspace root — meta scripts only
└── README.md
```

- **`packages/hemcss/`** is the actual library: source, PostCSS plugin, Vite wrapper, tests, token schema, build config. It's the only thing that gets published.
- **`apps/*`** are private workspaces (`"private": true`) that consume `hemcss` via `"hemcss": "workspace:*"`. They never publish.
- **`docs/superpowers/`** holds the spec and implementation plan used to build hemcss. Kept for reference; not shipped.

## Development

**Requirements:**

- Node ≥22 (see `.nvmrc`)
- pnpm ≥10 (via Corepack: `corepack enable pnpm`)

```bash
nvm use                  # picks Node 22 from .nvmrc
pnpm install             # installs every workspace

pnpm build               # build hemcss core → packages/hemcss/dist/
pnpm dev                 # watch-mode rebuild (postcss-cli --watch)
pnpm test                # vitest run on packages/hemcss/test/
pnpm lint                # stylelint on packages/hemcss/src/

pnpm demo                # serve apps/demo/ static page at http://localhost:3000/apps/demo/
pnpm storybook           # start Storybook on :6006
pnpm storybook:build     # static-build Storybook → apps/storybook/storybook-static/

pnpm docs:dev            # VitePress dev server on :5173
                         # (avoids `pnpm docs`, which is pnpm's
                         #  built-in "open package documentation"
                         #  command inherited from npm)
pnpm docs:build          # static-build the docs site
pnpm docs:preview        # preview the built docs locally
```

All scripts at the root delegate into the appropriate workspace via `pnpm --filter`. You can also run package-scoped commands directly:

```bash
pnpm --filter hemcss test
pnpm --filter @hemcss/storybook storybook
pnpm --filter @hemcss/docs dev
```

## First-time build order

The apps (`demo`, `storybook`, `docs`) all import `hemcss` via the workspace protocol, which resolves to `packages/hemcss/dist/`. That directory is gitignored and only exists after `pnpm build`. On a fresh clone:

```bash
pnpm install
pnpm build        # populates packages/hemcss/dist/
pnpm storybook    # or pnpm docs:dev, or pnpm demo
```

If you see a missing-asset error when starting an app, you probably skipped `pnpm build`.

## What's in v1

- Three reference components: `btn` (10 variants, 3 sizes, 2 states), `card` (modifiers + parts), `input` (2 variants, 2 sizes, 2 states).
- OKLCH-based token system following Nuxt UI's role vocabulary (text/bg/border roles), prefixed `--hem-`.
- Cascade layers: `reset, tokens, global, component, themes, overrides`.
- Standalone theme system — themes are portable CSS files, extensible by anyone.
- Two bundled themes: `light` and `dark`.
- PostCSS plugin with `reset`, `themes`, `focusRing`, `validateThemes` options.
- Vite plugin wrapper.
- Tailwind integration via the `reset: false` escape hatch.

Full DaisyUI-level component set is on the roadmap — see `docs/superpowers/specs/2026-04-11-hemcss-bootstrap-design.md` §12.

## Using hemcss in your project

See the full documentation at **apps/docs** (run `pnpm docs:dev` to browse it locally). Quick summary:

```bash
pnpm add hemcss
```

```css
@import "hemcss";
@import "hemcss/themes/dark";
```

```html
<html data-theme="dark">
  <button class="btn btn-primary">Save</button>
</html>
```

For build-time configuration (reset toggle, bundled themes, focus-ring override, theme validation), use the PostCSS plugin:

```js
// postcss.config.cjs
module.exports = {
  plugins: [
    require('hemcss/plugin')({
      reset: true,
      themes: ['light', 'dark'],
      focusRing: 'primary',
    }),
    require('postcss-import')(),
    require('postcss-nesting')(),
  ],
}
```

## License

MIT. See `LICENSE`.
