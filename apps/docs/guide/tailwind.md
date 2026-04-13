# Tailwind integration

hemcss coexists with Tailwind cleanly. Disable hemcss's reset layer and let Tailwind Preflight handle it; everything else drops in underneath your utility classes.

## The one flag

Set `reset: false` on the hemcss PostCSS plugin:

```js
// postcss.config.cjs
module.exports = {
  plugins: [
    require('hemcss/plugin')({
      reset: false,                    // ← Tailwind Preflight handles reset
      themes: ['light', 'dark'],
    }),
    require('postcss-import')(),
    require('postcss-nesting')(),
    require('@tailwindcss/postcss')(),
  ],
}
```

With `reset: false` the `@layer reset` cascade slot is still declared (so the layer order stays intact), but its body is empty — nothing competes with Preflight for element-level resets.

## CSS entry

```css
@import "hemcss";
@import "tailwindcss";
```

**Import order matters**: hemcss before Tailwind. This lets Tailwind's `utilities` layer land after hemcss's `overrides` layer in the cascade, so Tailwind's utility classes beat hemcss's component defaults when they collide.

## Using them together

```html
<button class="btn btn-primary !text-xs">Compact</button>
```

The hemcss component (`btn`, `btn-primary`) sets the base skin. The Tailwind utility (`!text-xs`) overrides just the font size — and since Tailwind's `utilities` layer comes after hemcss's `overrides`, the utility wins without needing any specificity hacks.

## Layer order reference

After import flattening, your CSS looks like this:

```
@layer reset(empty)       ← hemcss layer, empty because reset: false
     , tokens             ← hemcss tokens
     , global             ← hemcss base (narrow, avoids Preflight conflicts)
     , component          ← hemcss btn/card/input
     , themes             ← hemcss theme overrides
     , overrides          ← hemcss escape hatch
     , tailwind.base      ← Tailwind Preflight
     , tailwind.components
     , tailwind.utilities ← Tailwind utilities beat hemcss
;
```

## Things to watch for

- **Don't import Tailwind first.** If Tailwind comes before hemcss, Tailwind's `utilities` layer sits before hemcss's component layer in the cascade — hemcss components will beat Tailwind utilities, which is the opposite of what you usually want.
- **Tailwind Preflight already handles `box-sizing`, margin resets, form element baselines.** You don't want hemcss's reset doubling up on that, hence the `reset: false` flag.
- **Theme switching via `data-theme` is unaffected.** Tailwind's dark mode (via `dark:` utilities, `dark` class on `<html>`) is orthogonal to hemcss's `data-theme` attribute. You can use both if you want, or just stick with `data-theme` and have Tailwind utilities respect it via arbitrary selectors.
