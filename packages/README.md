# packages/

This directory contains the publishable packages in the hemcss monorepo.

## Current packages

- **`hemcss/`** — the CSS library itself. Source, plugin, Vite wrapper, tests, and build config. Published to npm as `hemcss`. See `hemcss/package.json` for the `exports` map.

## Reserved for future packages

The workspace is scaffolded to host these subpackages once they exist:

- `hemcss-theme-<name>` — community or first-party themes (e.g. `hemcss-theme-brutalism-light`, `hemcss-theme-monokai`) published from the monorepo
- `hemcss-scanner` — v2 scanner plugin that tree-shakes unused components (spec §11.1)
- `hemcss-theme-cli` — theme generator CLI (spec §11.4)

## Adding a package

```bash
mkdir packages/<name>
# write packages/<name>/package.json with a "name" and "version"
pnpm install
```

Packages can cross-depend via the `workspace:*` protocol. The apps in `apps/*` (demo, storybook, docs) already consume `hemcss` this way.
