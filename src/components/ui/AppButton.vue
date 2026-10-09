<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  to: { type: [Object, String], default: null },
  href: { type: String, default: '' },
  type: { type: String, default: 'button' },
  variant: { type: String, default: 'primary' }, // primary | outline
  size: { type: String, default: 'md' }, // md | lg
  block: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
})

const tag = computed(() => {
  if (props.to) return RouterLink
  if (props.href) return 'a'
  return 'button'
})

const bindings = computed(() => {
  if (props.to) return { to: props.to }
  if (props.href) return { href: props.href }
  return { type: props.type, disabled: props.disabled }
})

const classes = computed(() => [
  'app-button',
  `app-button--${props.variant}`,
  `app-button--${props.size}`,
  { 'app-button--block': props.block },
])
</script>

<template>
  <component :is="tag" :class="classes" v-bind="bindings">
    <slot />
  </component>
</template>

<style scoped>
.app-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  text-decoration: none;
  font-weight: 700;
  font-size: var(--font-size-base);
  border: 2px solid transparent;
  border-radius: var(--radius-pill);
  cursor: pointer;
  transition: transform var(--transition-slow), background var(--transition-base),
    box-shadow var(--transition-base), color var(--transition-base);
  font-family: inherit;
  line-height: 1.2;
}

.app-button--md {
  padding: 0.7rem 1.7rem;
}

.app-button--lg {
  padding: 0.95rem 2.5rem;
}

.app-button--block {
  width: 100%;
}

.app-button--primary {
  background: var(--color-primary);
  color: var(--color-primary-contrast);
  box-shadow: var(--shadow-primary);
}

.app-button--primary:hover {
  background: var(--color-primary-dark);
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(154, 75, 75, 0.35);
}

.app-button--outline {
  background: transparent;
  border-color: var(--color-primary);
  color: var(--color-primary-dark);
}

.app-button--outline:hover {
  background: var(--color-primary);
  color: var(--color-primary-contrast);
  transform: translateY(-3px);
}

.app-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.app-button:focus-visible {
  outline: 3px solid var(--color-primary-dark);
  outline-offset: 3px;
}
</style>
