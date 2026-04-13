# Component Roadmap

Prioritized plan for expanding hemcss beyond the initial 3 components (btn, card, input).

## Shipped (v0.1)

- [x] btn — 10 variants, 4 sizes, block, loading, disabled
- [x] card — body, title, actions, bordered, compact, side
- [x] input — bordered, ghost, 3 sizes, invalid, disabled

## Batch 1 — Form essentials

High-impact, simple scope. Completes the form story.

| Component | Classes | Notes |
|---|---|---|
| **textarea** | `.textarea` `.textarea-bordered` `.textarea-ghost` `.textarea-{sm,lg}` | Same token pattern as input |
| **select** | `.select` `.select-bordered` `.select-ghost` `.select-{sm,lg}` | Native `<select>` styling |
| **checkbox** | `.checkbox` `.checkbox-{primary,...}` `.checkbox-{sm,lg}` | Custom appearance via pseudo-elements |
| **radio** | `.radio` `.radio-{primary,...}` `.radio-{sm,lg}` | Same approach as checkbox |
| **toggle** | `.toggle` `.toggle-{primary,...}` `.toggle-{sm,lg}` | Switch/toggle input |
| **label** | `.label` `.label-text` `.label-text-alt` | Form field labels with helper text |

## Batch 2 — Layout & feedback

Common UI patterns that pair with forms and cards.

| Component | Classes | Notes |
|---|---|---|
| **badge** | `.badge` `.badge-{primary,...}` `.badge-{sm,lg}` `.badge-outline` | Inline status indicator |
| **alert** | `.alert` `.alert-{success,info,warning,error}` | Dismissible feedback banner |
| **avatar** | `.avatar` `.avatar-{sm,lg,xl}` `.avatar-group` | Image/initials circle with group stacking |
| **divider** | `.divider` `.divider-horizontal` | Labeled or plain separator |
| **loading** | `.loading` `.loading-spinner` `.loading-dots` `.loading-ring` | Standalone spinners (not just btn state) |
| **kbd** | `.kbd` `.kbd-{sm,lg}` | Keyboard shortcut display |

## Batch 3 — Navigation & structure

Site-level components.

| Component | Classes | Notes |
|---|---|---|
| **navbar** | `.navbar` `.navbar-start` `.navbar-center` `.navbar-end` | Horizontal nav bar |
| **menu** | `.menu` `.menu-item` `.menu-title` `.menu-horizontal` `.menu-compact` | Vertical/horizontal menu list |
| **breadcrumb** | `.breadcrumb` | Path navigation |
| **tabs** | `.tabs` `.tab` `.tab-active` `.tab-bordered` `.tab-lifted` | Tab navigation |
| **steps** | `.steps` `.step` `.step-{primary,...}` | Progress steps indicator |
| **pagination** | `.pagination` | Page navigation |

## Batch 4 — Overlays & disclosure

Interactive patterns (CSS-only where possible).

| Component | Classes | Notes |
|---|---|---|
| **modal** | `.modal` `.modal-box` `.modal-action` `.modal-open` | Uses `<dialog>` + `.modal-open` |
| **drawer** | `.drawer` `.drawer-side` `.drawer-content` `.drawer-toggle` | Sidebar drawer via checkbox hack |
| **dropdown** | `.dropdown` `.dropdown-content` `.dropdown-{top,bottom,left,right}` | CSS-only via `:focus-within` |
| **collapse** | `.collapse` `.collapse-title` `.collapse-content` `.collapse-arrow` | Accordion via `<details>` |
| **tooltip** | `.tooltip` `.tooltip-{top,bottom,left,right}` `.tooltip-{primary,...}` | CSS-only via `data-tip` + `::before` |
| **toast** | `.toast` `.toast-{top,bottom}` `.toast-{start,center,end}` | Fixed position container for alerts |

## Batch 5 — Data & content

Rich content display.

| Component | Classes | Notes |
|---|---|---|
| **table** | `.table` `.table-zebra` `.table-compact` `.table-pin-rows` | Styled tables |
| **stat** | `.stat` `.stat-title` `.stat-value` `.stat-desc` `.stat-figure` | Dashboard metric cards |
| **progress** | `.progress` `.progress-{primary,...}` | Progress bar |
| **radial-progress** | `.radial-progress` | Circular progress via conic-gradient |
| **countdown** | `.countdown` | Digit-based countdown display |
| **diff** | `.diff` `.diff-item-1` `.diff-item-2` | Before/after comparison |

## Architecture rules (same for all)

Every new component follows the existing pattern:

1. **Tokens** — add `--hem-{component}-*` tokens to `src/tokens/components.css`
2. **Saigon overrides** — add compact density overrides to `src/styles/saigon.css`
3. **Component CSS** — `src/components/{name}.css` wrapped in `@layer component { }`
4. **Barrel** — add to `src/components/index.css`
5. **Standalone entry** — `src/entries/{name}.css` with layers import
6. **Exports + build** — add to `package.json`
7. **Story** — `apps/storybook/stories/{name}.stories.js`
8. **Docs page** — `apps/docs/components/{name}.md`

## Principles

- **CSS-only** — no JS runtime. Use `<details>`, `<dialog>`, checkbox hacks, `:focus-within`
- **OOCSS** — structure in base class, skin in variant, size in modifier, state in `.is-*`
- **Token-driven** — components reference only `--hem-{component}-*` tokens
- **Progressive** — every component works with zero JS; JS enhances but never gates
