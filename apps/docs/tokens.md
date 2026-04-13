# Design Tokens

hemcss tokens are CSS custom properties prefixed `--hem-`. Themes define the values; components consume them. All swatches below are **live** — switch themes with the dropdown in the navbar to see them update.

For the machine-readable schema used by the plugin's `validateThemes` option, see `src/tokens/schema.json`.

## Semantic Colors

The 7 semantic color aliases every theme must define.

<div class="swatch-grid">
  <div class="swatch">
    <div class="swatch-color" style="background: var(--hem-primary)"></div>
    <div class="swatch-label"><code>--hem-primary</code></div>
  </div>
  <div class="swatch">
    <div class="swatch-color" style="background: var(--hem-secondary)"></div>
    <div class="swatch-label"><code>--hem-secondary</code></div>
  </div>
  <div class="swatch">
    <div class="swatch-color" style="background: var(--hem-success)"></div>
    <div class="swatch-label"><code>--hem-success</code></div>
  </div>
  <div class="swatch">
    <div class="swatch-color" style="background: var(--hem-info)"></div>
    <div class="swatch-label"><code>--hem-info</code></div>
  </div>
  <div class="swatch">
    <div class="swatch-color" style="background: var(--hem-warning)"></div>
    <div class="swatch-label"><code>--hem-warning</code></div>
  </div>
  <div class="swatch">
    <div class="swatch-color" style="background: var(--hem-error)"></div>
    <div class="swatch-label"><code>--hem-error</code></div>
  </div>
  <div class="swatch">
    <div class="swatch-color" style="background: var(--hem-neutral)"></div>
    <div class="swatch-label"><code>--hem-neutral</code></div>
  </div>
</div>

## Text Roles

Six text color tokens ranging from dimmed to highlighted, plus an inverted variant for use on colored surfaces.

<div class="preview preview-stack">
  <div class="text-sample-row">
    <span class="text-sample-label"><code>--hem-text</code></span>
    <span style="color: var(--hem-text)">Body text — the default reading color.</span>
  </div>
  <div class="text-sample-row">
    <span class="text-sample-label"><code>--hem-text-dimmed</code></span>
    <span style="color: var(--hem-text-dimmed)">Hints, disabled labels, and placeholder text.</span>
  </div>
  <div class="text-sample-row">
    <span class="text-sample-label"><code>--hem-text-muted</code></span>
    <span style="color: var(--hem-text-muted)">Captions, secondary information.</span>
  </div>
  <div class="text-sample-row">
    <span class="text-sample-label"><code>--hem-text-toned</code></span>
    <span style="color: var(--hem-text-toned)">Between body and headings.</span>
  </div>
  <div class="text-sample-row">
    <span class="text-sample-label"><code>--hem-text-highlighted</code></span>
    <span style="color: var(--hem-text-highlighted)">Headings, emphasis, strong labels.</span>
  </div>
  <div class="text-sample-row">
    <span class="text-sample-label"><code>--hem-text-inverted</code></span>
    <span style="background: var(--hem-bg-inverted); color: var(--hem-text-inverted); padding: 0.25rem 0.75rem; border-radius: var(--hem-radius)">Inverted text on dark surface.</span>
  </div>
</div>

## Backgrounds

Five background roles from page surface to inverted.

<div class="preview preview-stack">
  <div class="bg-sample-card" style="background: var(--hem-bg)">
    <code>--hem-bg</code> — page background
  </div>
  <div class="bg-sample-card" style="background: var(--hem-bg-muted)">
    <code>--hem-bg-muted</code> — subtle surface (code blocks)
  </div>
  <div class="bg-sample-card" style="background: var(--hem-bg-elevated)">
    <code>--hem-bg-elevated</code> — card / popover surface
  </div>
  <div class="bg-sample-card" style="background: var(--hem-bg-accented)">
    <code>--hem-bg-accented</code> — hover / active / pressed
  </div>
  <div class="bg-sample-card" style="background: var(--hem-bg-inverted); color: var(--hem-text-inverted)">
    <code>--hem-bg-inverted</code> — inverted surface
  </div>
</div>

## Borders

Four border intensity levels.

<div class="preview">
  <div class="border-sample-box" style="border: 2px solid var(--hem-border-muted)">
    <code>muted</code>
  </div>
  <div class="border-sample-box" style="border: 2px solid var(--hem-border)">
    <code>border</code>
  </div>
  <div class="border-sample-box" style="border: 2px solid var(--hem-border-accented)">
    <code>accented</code>
  </div>
  <div class="border-sample-box" style="border: 2px solid var(--hem-border-inverted)">
    <code>inverted</code>
  </div>
</div>

## Ring

Focus ring color and offset. The ring appears on `:focus-visible` for interactive components.

<div class="preview">
  <div class="swatch" style="width: 140px">
    <div class="swatch-color" style="background: var(--hem-ring)"></div>
    <div class="swatch-label"><code>--hem-ring</code></div>
  </div>
  <div class="swatch" style="width: 140px">
    <div class="swatch-color" style="background: var(--hem-ring-offset)"></div>
    <div class="swatch-label"><code>--hem-ring-offset</code></div>
  </div>
  <button class="btn btn-primary" style="border-color: var(--hem-ring); box-shadow: var(--hem-shadow-ring)">Focus ring demo</button>
</div>

## Color Palette

77 raw OKLCH palette tokens across 7 hues, each with 11 shades. Optional for custom themes — you can define only the semantic aliases above and skip the palette.

<p class="palette-hue-label">Primary</p>
<div class="palette-ramp">
  <div class="palette-shade" style="background: var(--hem-color-primary-50)"><span>50</span></div>
  <div class="palette-shade" style="background: var(--hem-color-primary-100)"><span>100</span></div>
  <div class="palette-shade" style="background: var(--hem-color-primary-200)"><span>200</span></div>
  <div class="palette-shade" style="background: var(--hem-color-primary-300)"><span>300</span></div>
  <div class="palette-shade" style="background: var(--hem-color-primary-400)"><span>400</span></div>
  <div class="palette-shade" style="background: var(--hem-color-primary-500)"><span>500</span></div>
  <div class="palette-shade palette-shade-dark" style="background: var(--hem-color-primary-600)"><span>600</span></div>
  <div class="palette-shade palette-shade-dark" style="background: var(--hem-color-primary-700)"><span>700</span></div>
  <div class="palette-shade palette-shade-dark" style="background: var(--hem-color-primary-800)"><span>800</span></div>
  <div class="palette-shade palette-shade-dark" style="background: var(--hem-color-primary-900)"><span>900</span></div>
  <div class="palette-shade palette-shade-dark" style="background: var(--hem-color-primary-950)"><span>950</span></div>
</div>

<p class="palette-hue-label">Secondary</p>
<div class="palette-ramp">
  <div class="palette-shade" style="background: var(--hem-color-secondary-50)"><span>50</span></div>
  <div class="palette-shade" style="background: var(--hem-color-secondary-100)"><span>100</span></div>
  <div class="palette-shade" style="background: var(--hem-color-secondary-200)"><span>200</span></div>
  <div class="palette-shade" style="background: var(--hem-color-secondary-300)"><span>300</span></div>
  <div class="palette-shade" style="background: var(--hem-color-secondary-400)"><span>400</span></div>
  <div class="palette-shade" style="background: var(--hem-color-secondary-500)"><span>500</span></div>
  <div class="palette-shade palette-shade-dark" style="background: var(--hem-color-secondary-600)"><span>600</span></div>
  <div class="palette-shade palette-shade-dark" style="background: var(--hem-color-secondary-700)"><span>700</span></div>
  <div class="palette-shade palette-shade-dark" style="background: var(--hem-color-secondary-800)"><span>800</span></div>
  <div class="palette-shade palette-shade-dark" style="background: var(--hem-color-secondary-900)"><span>900</span></div>
  <div class="palette-shade palette-shade-dark" style="background: var(--hem-color-secondary-950)"><span>950</span></div>
</div>

<p class="palette-hue-label">Success</p>
<div class="palette-ramp">
  <div class="palette-shade" style="background: var(--hem-color-success-50)"><span>50</span></div>
  <div class="palette-shade" style="background: var(--hem-color-success-100)"><span>100</span></div>
  <div class="palette-shade" style="background: var(--hem-color-success-200)"><span>200</span></div>
  <div class="palette-shade" style="background: var(--hem-color-success-300)"><span>300</span></div>
  <div class="palette-shade" style="background: var(--hem-color-success-400)"><span>400</span></div>
  <div class="palette-shade" style="background: var(--hem-color-success-500)"><span>500</span></div>
  <div class="palette-shade palette-shade-dark" style="background: var(--hem-color-success-600)"><span>600</span></div>
  <div class="palette-shade palette-shade-dark" style="background: var(--hem-color-success-700)"><span>700</span></div>
  <div class="palette-shade palette-shade-dark" style="background: var(--hem-color-success-800)"><span>800</span></div>
  <div class="palette-shade palette-shade-dark" style="background: var(--hem-color-success-900)"><span>900</span></div>
  <div class="palette-shade palette-shade-dark" style="background: var(--hem-color-success-950)"><span>950</span></div>
</div>

<p class="palette-hue-label">Info</p>
<div class="palette-ramp">
  <div class="palette-shade" style="background: var(--hem-color-info-50)"><span>50</span></div>
  <div class="palette-shade" style="background: var(--hem-color-info-100)"><span>100</span></div>
  <div class="palette-shade" style="background: var(--hem-color-info-200)"><span>200</span></div>
  <div class="palette-shade" style="background: var(--hem-color-info-300)"><span>300</span></div>
  <div class="palette-shade" style="background: var(--hem-color-info-400)"><span>400</span></div>
  <div class="palette-shade" style="background: var(--hem-color-info-500)"><span>500</span></div>
  <div class="palette-shade palette-shade-dark" style="background: var(--hem-color-info-600)"><span>600</span></div>
  <div class="palette-shade palette-shade-dark" style="background: var(--hem-color-info-700)"><span>700</span></div>
  <div class="palette-shade palette-shade-dark" style="background: var(--hem-color-info-800)"><span>800</span></div>
  <div class="palette-shade palette-shade-dark" style="background: var(--hem-color-info-900)"><span>900</span></div>
  <div class="palette-shade palette-shade-dark" style="background: var(--hem-color-info-950)"><span>950</span></div>
</div>

<p class="palette-hue-label">Warning</p>
<div class="palette-ramp">
  <div class="palette-shade" style="background: var(--hem-color-warning-50)"><span>50</span></div>
  <div class="palette-shade" style="background: var(--hem-color-warning-100)"><span>100</span></div>
  <div class="palette-shade" style="background: var(--hem-color-warning-200)"><span>200</span></div>
  <div class="palette-shade" style="background: var(--hem-color-warning-300)"><span>300</span></div>
  <div class="palette-shade" style="background: var(--hem-color-warning-400)"><span>400</span></div>
  <div class="palette-shade" style="background: var(--hem-color-warning-500)"><span>500</span></div>
  <div class="palette-shade palette-shade-dark" style="background: var(--hem-color-warning-600)"><span>600</span></div>
  <div class="palette-shade palette-shade-dark" style="background: var(--hem-color-warning-700)"><span>700</span></div>
  <div class="palette-shade palette-shade-dark" style="background: var(--hem-color-warning-800)"><span>800</span></div>
  <div class="palette-shade palette-shade-dark" style="background: var(--hem-color-warning-900)"><span>900</span></div>
  <div class="palette-shade palette-shade-dark" style="background: var(--hem-color-warning-950)"><span>950</span></div>
</div>

<p class="palette-hue-label">Error</p>
<div class="palette-ramp">
  <div class="palette-shade" style="background: var(--hem-color-error-50)"><span>50</span></div>
  <div class="palette-shade" style="background: var(--hem-color-error-100)"><span>100</span></div>
  <div class="palette-shade" style="background: var(--hem-color-error-200)"><span>200</span></div>
  <div class="palette-shade" style="background: var(--hem-color-error-300)"><span>300</span></div>
  <div class="palette-shade" style="background: var(--hem-color-error-400)"><span>400</span></div>
  <div class="palette-shade" style="background: var(--hem-color-error-500)"><span>500</span></div>
  <div class="palette-shade palette-shade-dark" style="background: var(--hem-color-error-600)"><span>600</span></div>
  <div class="palette-shade palette-shade-dark" style="background: var(--hem-color-error-700)"><span>700</span></div>
  <div class="palette-shade palette-shade-dark" style="background: var(--hem-color-error-800)"><span>800</span></div>
  <div class="palette-shade palette-shade-dark" style="background: var(--hem-color-error-900)"><span>900</span></div>
  <div class="palette-shade palette-shade-dark" style="background: var(--hem-color-error-950)"><span>950</span></div>
</div>

<p class="palette-hue-label">Neutral</p>
<div class="palette-ramp">
  <div class="palette-shade" style="background: var(--hem-color-neutral-50)"><span>50</span></div>
  <div class="palette-shade" style="background: var(--hem-color-neutral-100)"><span>100</span></div>
  <div class="palette-shade" style="background: var(--hem-color-neutral-200)"><span>200</span></div>
  <div class="palette-shade" style="background: var(--hem-color-neutral-300)"><span>300</span></div>
  <div class="palette-shade" style="background: var(--hem-color-neutral-400)"><span>400</span></div>
  <div class="palette-shade" style="background: var(--hem-color-neutral-500)"><span>500</span></div>
  <div class="palette-shade palette-shade-dark" style="background: var(--hem-color-neutral-600)"><span>600</span></div>
  <div class="palette-shade palette-shade-dark" style="background: var(--hem-color-neutral-700)"><span>700</span></div>
  <div class="palette-shade palette-shade-dark" style="background: var(--hem-color-neutral-800)"><span>800</span></div>
  <div class="palette-shade palette-shade-dark" style="background: var(--hem-color-neutral-900)"><span>900</span></div>
  <div class="palette-shade palette-shade-dark" style="background: var(--hem-color-neutral-950)"><span>950</span></div>
</div>

## Radius

<div class="preview">
  <div class="radius-sample-box" style="border-radius: var(--hem-radius-sm)">sm</div>
  <div class="radius-sample-box" style="border-radius: var(--hem-radius-md)">md</div>
  <div class="radius-sample-box" style="border-radius: var(--hem-radius)">base</div>
  <div class="radius-sample-box" style="border-radius: var(--hem-radius-box)">box</div>
  <div class="radius-sample-box" style="border-radius: var(--hem-radius-badge)">badge</div>
</div>

| Token | Default | Purpose |
|---|---|---|
| `--hem-radius` | `0.625rem` | base radius (required) |
| `--hem-radius-sm` | `base * 0.6` | small elements |
| `--hem-radius-md` | `base * 0.8` | buttons (Saigon) |
| `--hem-radius-btn` | `base` | button alias |
| `--hem-radius-field` | `base` | input/select alias |
| `--hem-radius-box` | `base * 1.4` | cards, modals |
| `--hem-radius-badge` | `9999px` | pill shape |

## Shadows

<div class="preview">
  <div class="shadow-sample-card" style="box-shadow: var(--hem-shadow-sm)">sm</div>
  <div class="shadow-sample-card" style="box-shadow: var(--hem-shadow-md)">md</div>
  <div class="shadow-sample-card" style="box-shadow: var(--hem-shadow-lg)">lg</div>
  <div class="shadow-sample-card" style="box-shadow: var(--hem-shadow-ring)">ring</div>
</div>

## Typography

### Font Families

<div class="preview preview-stack">
  <div style="font-family: var(--hem-font-sans); font-size: 1rem">
    <strong>Sans</strong> — The quick brown fox jumps over the lazy dog. 0123456789
  </div>
  <div style="font-family: var(--hem-font-mono); font-size: 1rem">
    <strong>Mono</strong> — The quick brown fox jumps over the lazy dog. 0123456789
  </div>
</div>

### Text Sizes

<div class="preview preview-stack">
  <div class="type-sample-row">
    <span class="type-sample-label"><code>--hem-text-2xs</code> 0.625rem</span>
    <span style="font-size: var(--hem-text-2xs)">The quick brown fox jumps over the lazy dog</span>
  </div>
  <div class="type-sample-row">
    <span class="type-sample-label"><code>--hem-text-xs</code> 0.75rem</span>
    <span style="font-size: var(--hem-text-xs)">The quick brown fox jumps over the lazy dog</span>
  </div>
  <div class="type-sample-row">
    <span class="type-sample-label"><code>--hem-text-sm</code> 0.875rem</span>
    <span style="font-size: var(--hem-text-sm)">The quick brown fox jumps over the lazy dog</span>
  </div>
  <div class="type-sample-row">
    <span class="type-sample-label"><code>--hem-text-base</code> 1rem</span>
    <span style="font-size: var(--hem-text-base)">The quick brown fox jumps over the lazy dog</span>
  </div>
  <div class="type-sample-row">
    <span class="type-sample-label"><code>--hem-text-lg</code> 1.125rem</span>
    <span style="font-size: var(--hem-text-lg)">The quick brown fox jumps over the lazy dog</span>
  </div>
  <div class="type-sample-row">
    <span class="type-sample-label"><code>--hem-text-xl</code> 1.25rem</span>
    <span style="font-size: var(--hem-text-xl)">The quick brown fox jumps over the lazy dog</span>
  </div>
  <div class="type-sample-row">
    <span class="type-sample-label"><code>--hem-text-2xl</code> 1.5rem</span>
    <span style="font-size: var(--hem-text-2xl)">The quick brown fox jumps over the lazy dog</span>
  </div>
</div>

### Font Weights

<div class="preview preview-stack">
  <div class="type-sample-row">
    <span class="type-sample-label"><code>--hem-font-weight-normal</code> 400</span>
    <span style="font-weight: var(--hem-font-weight-normal)">The quick brown fox jumps over the lazy dog</span>
  </div>
  <div class="type-sample-row">
    <span class="type-sample-label"><code>--hem-font-weight-medium</code> 500</span>
    <span style="font-weight: var(--hem-font-weight-medium)">The quick brown fox jumps over the lazy dog</span>
  </div>
  <div class="type-sample-row">
    <span class="type-sample-label"><code>--hem-font-weight-semibold</code> 600</span>
    <span style="font-weight: var(--hem-font-weight-semibold)">The quick brown fox jumps over the lazy dog</span>
  </div>
  <div class="type-sample-row">
    <span class="type-sample-label"><code>--hem-font-weight-bold</code> 700</span>
    <span style="font-weight: var(--hem-font-weight-bold)">The quick brown fox jumps over the lazy dog</span>
  </div>
</div>

### Tracking (Letter Spacing)

<div class="preview preview-stack">
  <div class="type-sample-row">
    <span class="type-sample-label"><code>--hem-tracking-tight</code> -0.015em</span>
    <span style="letter-spacing: var(--hem-tracking-tight)">The quick brown fox jumps over the lazy dog</span>
  </div>
  <div class="type-sample-row">
    <span class="type-sample-label"><code>--hem-tracking-normal</code> 0</span>
    <span style="letter-spacing: var(--hem-tracking-normal)">The quick brown fox jumps over the lazy dog</span>
  </div>
  <div class="type-sample-row">
    <span class="type-sample-label"><code>--hem-tracking-wide</code> 0.025em</span>
    <span style="letter-spacing: var(--hem-tracking-wide)">The quick brown fox jumps over the lazy dog</span>
  </div>
</div>

### Line Heights

<div class="preview preview-stack">
  <div class="bg-sample-card" style="background: var(--hem-bg-muted); line-height: var(--hem-leading-tight)">
    <code>--hem-leading-tight</code> 1.25<br>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
  </div>
  <div class="bg-sample-card" style="background: var(--hem-bg-muted); line-height: var(--hem-leading-normal)">
    <code>--hem-leading-normal</code> 1.5<br>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
  </div>
  <div class="bg-sample-card" style="background: var(--hem-bg-muted); line-height: var(--hem-leading-relaxed)">
    <code>--hem-leading-relaxed</code> 1.625<br>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
  </div>
</div>

## Size & Spacing

| Token | Default | Purpose |
|---|---|---|
| `--hem-size-field` | `0.25rem` | base unit for btn/input/select |
| `--hem-size-selector` | `0.2rem` | base unit for checkbox/radio/toggle |
| `--hem-border-width` | `1px` | default border width |
| `--hem-ring-width` | `2px` | focus ring width |
| `--hem-ring-offset-width` | `2px` | focus ring offset |

**Spacing scale** (4px base):

| Token | Value |
|---|---|
| `--hem-space-0` | `0` |
| `--hem-space-1` | `0.25rem` (4px) |
| `--hem-space-2` | `0.5rem` (8px) |
| `--hem-space-3` | `0.75rem` (12px) |
| `--hem-space-4` | `1rem` (16px) |
| `--hem-space-5` | `1.25rem` (20px) |
| `--hem-space-6` | `1.5rem` (24px) |
| `--hem-space-7` | `1.75rem` (28px) |
| `--hem-space-8` | `2rem` (32px) |

## Motion & Opacity

| Token | Value | Purpose |
|---|---|---|
| `--hem-transition-fast` | `.15s ease-out` | hover, focus, color changes |
| `--hem-transition-base` | `.2s ease-out` | general transitions |
| `--hem-transition-slow` | `.3s ease-out` | layout shifts, overlays |
| `--hem-opacity-disabled` | `0.5` | disabled controls |
| `--hem-opacity-loading` | `0.7` | loading state |

## Authoring a Custom Theme

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
