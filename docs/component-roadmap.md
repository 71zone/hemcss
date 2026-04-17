# Component Roadmap

Prioritized plan for expanding HẻmCSS beyond the initial components.

## Shipped

- [x] btn — 10 variants, 4 sizes, block, loading, disabled
- [x] card — body, title, actions, bordered, compact, side
- [x] input — bordered, ghost, 3 sizes, invalid, disabled
- [x] textarea — bordered, ghost, 2 sizes, invalid, disabled
- [x] select — bordered, ghost, 2 sizes, disabled
- [x] checkbox — 7 color variants, 2 sizes, disabled
- [x] radio — 7 color variants, 2 sizes, disabled
- [x] toggle — 7 color variants, 2 sizes, disabled
- [x] label — label-text, label-text-alt
- [x] stack — flex layout (column/row), wrap, gap via `data-*`
- [x] grid — CSS Grid, dynamic cols/rows/gap/span via `data-*` + `attr()`, subgrid
- [x] alignment — items-*, justify-* shared utilities
- [x] badge — 7 color variants, outline, 2 sizes
- [x] alert — success, info, warning, error
- [x] avatar — sm, lg, xl, avatar-group
- [x] divider — plain, labeled, horizontal
- [x] loading — spinner, ring, dots
- [x] kbd — sm, lg, monospace
- [x] navbar — start, center, end sections
- [x] menu — item, title, horizontal, compact
- [x] breadcrumb — auto separators, last-child active
- [x] tabs — bordered (CSS Anchor sliding indicator), lifted, radio + label CSS-only switching, tab-content panels
- [x] steps — CSS counters, 7 color variants
- [x] pagination — ghost-button items, aria-current support
- [x] modal — native `<dialog>`, `::backdrop`, modal-box, modal-action, backdrop close
- [x] sheet — multi-direction slide-in panel (left, right, top, bottom), checkbox-toggle, bottom sheet mobile modal
- [x] dropdown — `:focus-within`, 4 directions, end-aligned
- [x] collapse — `<details>`/`<summary>`, collapse-arrow with rotation
- [x] tooltip — `data-tip` + `::before`/`::after`, 4 directions, 6 color variants
- [x] toast — fixed-position container, 6 positions (top/bottom × start/center/end)

## ~~Batch 2 — Feedback & decoration~~ (shipped)

| Component | Classes | Notes |
|---|---|---|
| **badge** | `.badge` `.badge-{primary,...}` `.badge-{sm,lg}` `.badge-outline` | Inline status indicator |
| **alert** | `.alert` `.alert-{success,info,warning,error}` | Feedback banner |
| **avatar** | `.avatar` `.avatar-{sm,lg,xl}` `.avatar-group` | Image/initials circle with group stacking |
| **divider** | `.divider` `.divider-horizontal` | Labeled or plain separator |
| **loading** | `.loading` `.loading-spinner` `.loading-dots` `.loading-ring` | Standalone spinners (not just btn state) |
| **kbd** | `.kbd` `.kbd-{sm,lg}` | Keyboard shortcut display |

## ~~Batch 3 — Navigation & structure~~ (shipped)

Site-level components.

| Component | Classes | Notes |
|---|---|---|
| **navbar** | `.navbar` `.navbar-start` `.navbar-center` `.navbar-end` | Horizontal nav bar |
| **menu** | `.menu` `.menu-item` `.menu-title` `.menu-horizontal` `.menu-compact` | Vertical/horizontal menu list |
| **breadcrumb** | `.breadcrumb` | Path navigation |
| **tabs** | `.tabs` `.tab` `.tab-active` `.tab-bordered` `.tab-lifted` | Tab navigation |
| **steps** | `.steps` `.step` `.step-{primary,...}` | Progress steps indicator |
| **pagination** | `.pagination` | Page navigation |

## ~~Batch 4 — Overlays & disclosure~~ (shipped)

Interactive patterns (CSS-only where possible).

| Component | Classes | Notes |
|---|---|---|
| **modal** | `.modal` `.modal-box` `.modal-action` `.modal-backdrop` | Native `<dialog>` + `::backdrop` |
| **sheet** | `.sheet` `.sheet-side` `.sheet-content` `.sheet-toggle` `.sheet-overlay` `.sheet-{right,top,bottom}` | Multi-direction slide-in panel via checkbox hack |
| **dropdown** | `.dropdown` `.dropdown-content` `.dropdown-{top,bottom,left,right}` `.dropdown-end` | CSS-only via `:focus-within` |
| **collapse** | `.collapse` `.collapse-title` `.collapse-content` `.collapse-arrow` | Accordion via `<details>` |
| **tooltip** | `.tooltip` `.tooltip-{bottom,left,right}` `.tooltip-{primary,...}` | CSS-only via `data-tip` + `::before`/`::after` |
| **toast** | `.toast` `.toast-top` `.toast-{start,center,end}` | Fixed position container for alerts |

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
6. **Exports + build** — add to `package.json` (build auto-discovers entries)
7. **Story** — `apps/storybook/stories/{name}.stories.js`
8. **Docs page** — `apps/docs/components/{name}.md`

## Layout components

HẻmCSS ships `.stack` and `.grid` layout primitives. Use them in stories and docs to present components in realistic layouts instead of bare inline elements.

```html
<!-- Use stack to present form fields vertically -->
<div class="stack" data-gap="0.75rem">
  <label class="label"><span class="label-text">Email</span></label>
  <input class="input input-bordered" placeholder="email@example.com" />
  <button class="btn btn-primary">Submit</button>
</div>

<!-- Use grid to present cards or badges side by side -->
<div class="grid" data-cols="3" data-gap="1rem">
  <div class="card card-bordered"><div class="card-body">Card 1</div></div>
  <div class="card card-bordered"><div class="card-body">Card 2</div></div>
  <div class="card card-bordered"><div class="card-body">Card 3</div></div>
</div>

<!-- Use stack-row for inline groups -->
<div class="stack stack-row stack-wrap" data-gap="0.5rem">
  <span class="badge badge-primary">New</span>
  <span class="badge badge-secondary">Beta</span>
</div>
```

## TODO — Eliminate inline styles

Existing docs and stories use `style=` attributes for layout that should use `.stack`/`.grid` instead. No `style=` in source.

- [x] **radio.md** — replace 17× `style="display:inline-flex;align-items:center;gap:0.5rem"` labels with `.stack-row items-center` + `data-gap`
- [x] **checkbox.md** — same as radio (17×)
- [x] **toggle.md** — same as radio (17×)
- [x] **stack.md** — replace inline width/border styles on wrap demo with a CSS class
- [x] **grid.md** — replace inline `width:100%`, `grid-template-rows`, `grid-template-areas`, `row-gap` with classes or `data-*` where possible (some like `grid-template-areas` genuinely need inline style)
- [x] **Stories** — replace `style.cssText` box/cell styling in stories with hemcss classes

## Cross-cutting improvements (shipped)

- [x] **Inline style cleanup** — all docs and stories use `.stack`/`.grid` layout classes
- [x] **VitePress isolation** — `.preview` containers reset VP leaks (list-style, margins, button resets)
- [x] **Focus ring redesign** — soft glow with offset gap, keyboard-only (`:focus-visible`), no ring on click
- [x] **DaisyUI patterns** — CSS-only interaction reference (`docs/daisyui-patterns.md`)
- [x] **CSS Anchor Positioning** — tabs sliding indicator tracks active tab with smooth transitions

## Principles

- **CSS-only** — no JS runtime. Use `<details>`, `<dialog>`, checkbox hacks, `:has(:checked)`, CSS Anchor Positioning
- **OOCSS** — structure in base class, skin in variant, size in modifier, state in `.is-*`
- **Token-driven** — components reference only `--hem-{component}-*` tokens
- **Progressive** — every component works with zero JS; JS enhances but never gates
- **Browser target** — Chromium 133+ (`attr()` with `type()`, `:has()`, CSS Anchor Positioning)
