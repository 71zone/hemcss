# hemcss

Semantic-class CSS components. OKLCH tokens. Cascade layers. Zero Tailwind dependency.

## Quick start

```bash
pnpm add hemcss
```

```css
/* All components + base */
@import "hemcss";
@import "hemcss/themes/hanoi-light";

/* Or pick only what you need */
@import "hemcss/base";
@import "hemcss/components/btn";
@import "hemcss/components/card";
@import "hemcss/themes/hanoi-light";
```

```html
<html data-theme="hanoi-light">
  <button class="btn btn-primary">Save</button>
  <button class="btn btn-error btn-sm">Delete</button>
  <button class="btn btn-ghost btn-block">Full width</button>
</html>
```

## Themes

Four bundled themes — two styles x two color modes:

| Theme | Style | Palette |
|---|---|---|
| `hanoi-light` | Spacious | Warm cream, black primary (caramellatte) |
| `hanoi-dark` | Spacious | Deep dark, gold text, white primary (luxury) |
| `saigon-light` | Compact | Clean white, cyan/magenta (cmyk) |
| `saigon-dark` | Compact | Purple-tinted dark, pink primary (dracula) |

Switch at runtime:

```js
document.documentElement.dataset.theme = 'saigon-dark'
```

## Components

| Component | Classes |
|---|---|
| **Button** | `.btn` `.btn-{primary,secondary,success,info,warning,error,neutral}` `.btn-{ghost,outline,link}` `.btn-{xs,sm,lg}` `.btn-block` `.is-loading` `.is-disabled` |
| **Card** | `.card` `.card-body` `.card-title` `.card-actions` `.card-bordered` `.card-compact` `.card-side` |
| **Input** | `.input` `.input-{bordered,ghost}` `.input-{sm,lg}` `.is-invalid` `.is-disabled` |

## Exports

| Import | Contents |
|---|---|
| `hemcss` | Everything bundled |
| `hemcss/base` | Tokens, reset, global styles (no components) |
| `hemcss/components/btn` | Button only |
| `hemcss/components/card` | Card only |
| `hemcss/components/input` | Input only |
| `hemcss/themes/{name}` | Color theme |
| `hemcss/plugin` | PostCSS plugin |
| `hemcss/vite` | Vite plugin wrapper |

Minified variants available at `hemcss/min`, `hemcss/base/min`, `hemcss/components/btn/min`, etc.

## Development

```bash
node -v               # >= 22 (see .nvmrc)
corepack enable pnpm  # pnpm >= 10

pnpm install
pnpm build            # build hemcss -> dist/
pnpm dev              # watch mode
pnpm test             # vitest
pnpm lint             # stylelint

pnpm storybook        # component explorer on :6006
pnpm docs:dev         # VitePress docs on :5173
```

## Repo layout

```
hemcss/
├── packages/hemcss/     # the library (published to npm)
├── apps/
│   ├── demo/            # static demo page
│   ├── storybook/       # Storybook v9 (HTML)
│   └── docs/            # VitePress docs
├── pnpm-workspace.yaml
└── package.json
```

## License

MIT
