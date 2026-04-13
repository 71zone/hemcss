# hemcss Token Reference

This is the human-readable reference for hemcss's token schema. For the machine-readable version used by the plugin's `validateThemes` option, see `src/tokens/schema.json`.

hemcss tokens are OKLCH color values and sizing/typography primitives, all prefixed `--hem-`. Themes define the values; components consume them.

## Token categories

### Semantic color aliases (required)

Each is a single OKLCH value, bound to a mid-contrast palette shade by default.

| Token | Default (light) | Notes |
|---|---|---|
| `--hem-primary`   | `var(--hem-color-primary-500)`   | brand primary |
| `--hem-secondary` | `var(--hem-color-secondary-500)` | brand secondary |
| `--hem-success`   | `var(--hem-color-success-500)`   | green for confirmations |
| `--hem-info`      | `var(--hem-color-info-500)`      | cyan for informational |
| `--hem-warning`   | `var(--hem-color-warning-500)`   | amber for warnings |
| `--hem-error`     | `var(--hem-color-error-500)`     | red for errors |
| `--hem-neutral`   | `var(--hem-color-neutral-700)`   | neutral surface/action color |

### Text role tokens (required)

| Token | Purpose |
|---|---|
| `--hem-text`             | body text |
| `--hem-text-dimmed`      | hints, disabled labels |
| `--hem-text-muted`       | captions, secondary |
| `--hem-text-toned`       | between body and headings |
| `--hem-text-highlighted` | headings, emphasis |
| `--hem-text-inverted`    | text on colored or inverted surfaces |

### Background role tokens (required)

| Token | Purpose |
|---|---|
| `--hem-bg`          | page background |
| `--hem-bg-muted`    | subtle surface (code blocks) |
| `--hem-bg-elevated` | card/popover/modal surface |
| `--hem-bg-accented` | hover/active/pressed state |
| `--hem-bg-inverted` | inverted surface (dark bar in light mode) |

### Border role tokens (required)

| Token | Purpose |
|---|---|
| `--hem-border`          | default divider/outline |
| `--hem-border-muted`    | weakest |
| `--hem-border-accented` | stronger (focused input) |
| `--hem-border-inverted` | on inverted surfaces |

### Ring tokens (required)

| Token | Default | Purpose |
|---|---|---|
| `--hem-ring`        | `var(--hem-primary)` | focus ring color |
| `--hem-ring-offset` | `var(--hem-bg)`      | ring offset color |

Override `--hem-ring` to change the focus color (or use the plugin's `focusRing` option).

### Radius tokens

| Token | Default | Purpose |
|---|---|---|
| `--hem-radius`        | `0.375rem`                           | base (required) |
| `--hem-radius-btn`    | `var(--hem-radius)`                  | button radius (optional alias) |
| `--hem-radius-field`  | `var(--hem-radius)`                  | input/select (optional alias) |
| `--hem-radius-box`    | `calc(var(--hem-radius) * 2)`        | card/modal (optional alias) |
| `--hem-radius-badge`  | `9999px`                             | pill (optional alias) |

### Size tokens (required)

| Token | Default | Purpose |
|---|---|---|
| `--hem-size-field`    | `0.25rem` | base unit for btn/input/select |
| `--hem-size-selector` | `0.2rem`  | base unit for checkbox/radio/switch |

Size modifiers override a component's private `--_size` derived from these.

### Shadow tokens (required)

`--hem-shadow-sm`, `--hem-shadow-md`, `--hem-shadow-lg`.

### Typography tokens (required)

`--hem-font-sans`, `--hem-font-mono`, `--hem-text-size`, `--hem-text-weight`, `--hem-line-height`.

### Raw palette (optional)

77 tokens across 7 hues, each with 11 shades (50/100/200/300/400/500/600/700/800/900/950):

`--hem-color-{hue}-{shade}` where hue ∈ { primary, secondary, success, info, warning, error, neutral }.

Optional because custom themes can define only the semantic aliases above and skip the palette entirely. The bundled `light` and `dark` themes define the full palette as a working reference.

## Authoring a custom theme

1. Create a CSS file that declares `@layer themes { [data-theme="your-name"] { ... } }`.
2. Define every required token listed above.
3. Load your theme file after hemcss core: `<link rel="stylesheet" href="hemcss">` then `<link rel="stylesheet" href="your-theme">`.
4. Set `data-theme="your-name"` on `<html>`.
5. Optionally publish as `hemcss-theme-your-name` on npm or host the file anywhere.

Validate coverage by configuring the plugin:

```js
hemcss({ themes: ['./your-theme.css'], validateThemes: 'warn' })
```

Missing required tokens will emit a build warning.

## Versioning

Adding an optional token is a minor bump. Adding a required token is a **major** bump — existing themes will break. Renaming or removing a token is major. See the Versioning Policy in the main spec.
