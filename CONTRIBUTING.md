# Contributing

Thanks for your interest in hemcss. Here's how to get involved.

## Setup

```bash
git clone git@github.com:71zone/hemcss.git
cd hemcss
nvm use           # Node >= 22
pnpm install
pnpm build        # required before running apps
```

## Workflow

1. Create a branch from `main`
2. Make changes in `packages/hemcss/src/`
3. Run checks: `pnpm build && pnpm lint && pnpm test`
4. Preview in Storybook: `pnpm storybook`
5. Open a PR

## Adding a component

1. Create `packages/hemcss/src/components/{name}.css` — wrap rules in `@layer component { }`
2. Add component tokens to `packages/hemcss/src/tokens/components.css`
3. Add Saigon overrides to `packages/hemcss/src/styles/saigon.css` (if density differs)
4. Add `@import url("./{name}.css")` to `packages/hemcss/src/components/index.css`
5. Create standalone entry at `packages/hemcss/src/entries/{name}.css`:
   ```css
   @import url("../layers.css");
   @import url("../components/{name}.css");
   ```
6. Add exports + build scripts to `packages/hemcss/package.json`
7. Add a Storybook story at `apps/storybook/stories/{name}.stories.js`
8. Add a docs page at `apps/docs/components/{name}.md`

## Adding a theme

1. Create `packages/hemcss/src/themes/{name}.css` — define all `--hem-*` semantic tokens inside `@layer themes { [data-theme="{name}"] { } }`
2. Add exports + build scripts to `packages/hemcss/package.json`
3. Import in docs/storybook if it should be bundled

## Code style

- **CSS**: Stylelint enforced (`pnpm lint`). Auto-fix with `pnpm lint:fix`
- **Tokens**: Components reference only `--hem-{component}-*` tokens, never primitives
- **Layers**: Always wrap in the correct `@layer` (`tokens`, `component`, `themes`)
- **Selectors**: Max specificity 0,2,0. Use `:where()` to zero-out when needed
- **States**: Use `.is-*` classes paired with native attributes (`:disabled`, `[disabled]`)

## Commits

- Keep messages short and descriptive
- One logical change per commit

## Questions?

Open an issue.
