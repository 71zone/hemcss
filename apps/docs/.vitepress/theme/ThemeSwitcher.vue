<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const styles = [
  { id: 'hanoi', label: 'Hanoi', description: 'Spacious, formal' },
  { id: 'saigon', label: 'Saigon', description: 'Compact, dense' },
]

const current = ref('hanoi')
const open = ref(false)

const currentLabel = computed(() =>
  styles.find(s => s.id === current.value)?.label ?? current.value
)

function getStyle() {
  const theme = document.documentElement.dataset.theme || ''
  for (const s of styles) {
    if (theme.startsWith(s.id + '-')) return s.id
  }
  return 'hanoi'
}

function pick(id) {
  current.value = id
  const isDark = document.documentElement.classList.contains('dark')
  document.documentElement.dataset.theme = `${id}-${isDark ? 'dark' : 'light'}`
  open.value = false
}

function onClickOutside(e) {
  if (!e.target.closest('.theme-switcher')) open.value = false
}

let themeObserver

onMounted(() => {
  current.value = getStyle()

  themeObserver = new MutationObserver(() => {
    current.value = getStyle()
  })
  themeObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme'],
  })

  document.addEventListener('click', onClickOutside)
})

onUnmounted(() => {
  themeObserver?.disconnect()
  document.removeEventListener('click', onClickOutside)
})
</script>

<template>
  <div class="theme-switcher">
    <button class="theme-trigger" @click="open = !open">
      {{ currentLabel }}
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <path d="M3 5l3 3 3-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <div v-show="open" class="theme-menu">
      <button
        v-for="s in styles"
        :key="s.id"
        class="theme-option"
        :class="{ active: s.id === current }"
        @click="pick(s.id)"
      >
        <span class="theme-option-label">{{ s.label }}</span>
        <span class="theme-option-desc">{{ s.description }}</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.theme-switcher {
  position: relative;
}

.theme-trigger {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  padding: 0 10px;
  height: 32px;
  font-size: 13px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  background-color: transparent;
  cursor: pointer;
  transition: color 0.25s, border-color 0.25s;
  white-space: nowrap;
}
.theme-trigger:hover {
  color: var(--vp-c-text-1);
  border-color: var(--vp-c-text-2);
}

.theme-menu {
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  min-width: 160px;
  padding: 4px;
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 100;
}

.theme-option {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 8px 10px;
  border: none;
  border-radius: 6px;
  background: transparent;
  cursor: pointer;
  text-align: left;
  transition: background-color 0.15s;
}
.theme-option:hover {
  background: var(--vp-c-bg-soft);
}
.theme-option.active {
  background: var(--vp-c-brand-soft);
}

.theme-option-label {
  font-size: 13px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  line-height: 1.4;
}
.theme-option-desc {
  font-size: 11px;
  color: var(--vp-c-text-3);
  line-height: 1.4;
}
</style>
