<script setup>
import { computed } from 'vue'
import AppIcon from './AppIcon.vue'

const props = defineProps({
  variant: { type: String, default: 'success' }, // success | error
  message: { type: String, required: true },
})

const icon = computed(() => (props.variant === 'error' ? 'alert' : 'check'))
</script>

<template>
  <div
    class="status-message"
    :class="`status-message--${variant}`"
    role="status"
    aria-live="polite"
  >
    <AppIcon :name="icon" :size="20" />
    <span>{{ message }}</span>
  </div>
</template>

<style scoped>
.status-message {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: 0.8rem 1rem;
  border-radius: var(--radius-sm);
  font-size: var(--font-size-sm);
  font-weight: 600;
  margin-bottom: var(--space-4);
}

.status-message--success {
  background: var(--color-success-soft);
  color: var(--color-success);
}

.status-message--error {
  background: var(--color-error-soft);
  color: var(--color-error);
}
</style>
