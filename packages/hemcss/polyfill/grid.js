/**
 * hemcss grid polyfill — syncs data-* attributes to CSS custom properties
 * for browsers that don't support CSS attr() with type().
 *
 * Usage: <script src="https://cdn.jsdelivr.net/npm/@71z/hemcss/polyfill/grid.js"></script>
 *
 * Not needed for Chromium 133+.
 */
;(() => {
  const INT_ATTRS = ['data-cols', 'data-rows', 'data-span', 'data-row-span', 'data-col-start', 'data-row-start']
  const LEN_ATTRS = ['data-gap', 'data-gap-x', 'data-gap-y']
  const STR_ATTRS = ['data-area']
  const ALL_ATTRS = [...INT_ATTRS, ...LEN_ATTRS, ...STR_ATTRS]

  function sync(el) {
    for (const attr of ALL_ATTRS) {
      const val = el.getAttribute(attr)
      const prop = '--' + attr.slice(5)
      if (val != null) {
        el.style.setProperty(prop, val)
      } else {
        el.style.removeProperty(prop)
      }
    }
  }

  function syncAll() {
    const sel = ALL_ATTRS.map(a => `[${a}]`).join(',')
    for (const el of document.querySelectorAll(sel)) sync(el)
  }

  // Feature detect: if attr() with type works, bail out
  if (CSS.supports && CSS.supports('width', 'attr(x type(<length>), 0px)')) return

  syncAll()

  new MutationObserver(mutations => {
    for (const m of mutations) {
      if (m.type === 'attributes') sync(m.target)
      if (m.type === 'childList') {
        for (const n of m.addedNodes) {
          if (n.nodeType === 1) {
            if (ALL_ATTRS.some(a => n.hasAttribute(a))) sync(n)
            const sel = ALL_ATTRS.map(a => `[${a}]`).join(',')
            for (const el of n.querySelectorAll(sel)) sync(el)
          }
        }
      }
    }
  }).observe(document.documentElement, {
    subtree: true,
    childList: true,
    attributes: true,
    attributeFilter: ALL_ATTRS,
  })
})()
