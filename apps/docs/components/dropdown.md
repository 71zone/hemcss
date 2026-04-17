# Dropdown

Click-triggered dropdown using Popover API (`popover` + `popovertarget`) and CSS Anchor Positioning. Light-dismiss (click outside, Escape key) built in.

## Basic dropdown

<div class="preview" style="min-height: 12rem;">
  <div class="dropdown">
    <button class="btn dropdown-trigger" popovertarget="demo-dd-1" style="anchor-name: --demo-dd-1">Click me</button>
    <div id="demo-dd-1" popover class="dropdown-content" style="position-anchor: --demo-dd-1">
      <ul class="menu">
        <li class="menu-item"><a>Item 1</a></li>
        <li class="menu-item"><a>Item 2</a></li>
        <li class="menu-item"><a>Item 3</a></li>
      </ul>
    </div>
  </div>
</div>

```html
<div class="dropdown">
  <button class="btn dropdown-trigger" popovertarget="dd-1" style="anchor-name: --dd-1">
    Click me
  </button>
  <div id="dd-1" popover class="dropdown-content" style="position-anchor: --dd-1">
    <ul class="menu">
      <li class="menu-item"><a>Item 1</a></li>
      <li class="menu-item"><a>Item 2</a></li>
    </ul>
  </div>
</div>
```

## Directions

<div class="preview" style="padding: 6rem 2rem; display: flex; gap: 2rem; flex-wrap: wrap; justify-content: center;">
  <div class="dropdown">
    <button class="btn dropdown-trigger" popovertarget="demo-dd-bot" style="anchor-name: --demo-dd-bot">Bottom</button>
    <div id="demo-dd-bot" popover class="dropdown-content" style="position-anchor: --demo-dd-bot">
      <ul class="menu">
        <li class="menu-item"><a>Item 1</a></li>
        <li class="menu-item"><a>Item 2</a></li>
      </ul>
    </div>
  </div>
  <div class="dropdown dropdown-top">
    <button class="btn dropdown-trigger" popovertarget="demo-dd-top" style="anchor-name: --demo-dd-top">Top</button>
    <div id="demo-dd-top" popover class="dropdown-content" style="position-anchor: --demo-dd-top">
      <ul class="menu">
        <li class="menu-item"><a>Item 1</a></li>
        <li class="menu-item"><a>Item 2</a></li>
      </ul>
    </div>
  </div>
  <div class="dropdown dropdown-left">
    <button class="btn dropdown-trigger" popovertarget="demo-dd-left" style="anchor-name: --demo-dd-left">Left</button>
    <div id="demo-dd-left" popover class="dropdown-content" style="position-anchor: --demo-dd-left">
      <ul class="menu">
        <li class="menu-item"><a>Item 1</a></li>
        <li class="menu-item"><a>Item 2</a></li>
      </ul>
    </div>
  </div>
  <div class="dropdown dropdown-right">
    <button class="btn dropdown-trigger" popovertarget="demo-dd-right" style="anchor-name: --demo-dd-right">Right</button>
    <div id="demo-dd-right" popover class="dropdown-content" style="position-anchor: --demo-dd-right">
      <ul class="menu">
        <li class="menu-item"><a>Item 1</a></li>
        <li class="menu-item"><a>Item 2</a></li>
      </ul>
    </div>
  </div>
</div>

```html
<div class="dropdown dropdown-top">...</div>
<div class="dropdown dropdown-left">...</div>
<div class="dropdown dropdown-right">...</div>
```

## End-aligned

<div class="preview" style="min-height: 10rem; display: flex; justify-content: flex-end;">
  <div class="dropdown dropdown-end">
    <button class="btn dropdown-trigger" popovertarget="demo-dd-end" style="anchor-name: --demo-dd-end">Menu</button>
    <div id="demo-dd-end" popover class="dropdown-content" style="position-anchor: --demo-dd-end">
      <ul class="menu">
        <li class="menu-item"><a>Profile</a></li>
        <li class="menu-item"><a>Settings</a></li>
      </ul>
    </div>
  </div>
</div>

```html
<div class="dropdown dropdown-end">...</div>
```

## How it works

- `popovertarget` toggles the dropdown on click — no JavaScript
- `popover="auto"` provides light-dismiss (click outside, Escape key, only one open at a time)
- CSS Anchor Positioning places the panel relative to the trigger
- `position-try-fallbacks: flip-block` auto-flips when there's no room
- `@starting-style` provides smooth fade-in entrance

## Tokens used

- `--hem-dropdown-padding` — content padding
- `--hem-dropdown-radius` — content border radius
- `--hem-dropdown-bg` — content background
- `--hem-dropdown-shadow` — content shadow
- `--hem-dropdown-min-width` — minimum content width
- `--hem-dropdown-offset` — gap between trigger and content
