<script setup>
import AppIcon from './AppIcon.vue'

defineProps({
  service: { type: Object, required: true },
})
</script>

<template>
  <article class="service-card">
    <span class="service-card__icon" aria-hidden="true">
      <AppIcon :name="service.icon" :size="34" />
    </span>
    <h3 class="service-card__title">{{ service.title }}</h3>
    <p class="service-card__text">{{ service.description }}</p>
  </article>
</template>

<style scoped>
.service-card {
  background: var(--color-surface);
  padding: var(--space-6) var(--space-5);
  text-align: center;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(var(--color-primary-rgb), 0.1);
  border-top: 5px solid var(--color-primary);
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-slow), box-shadow var(--transition-slow),
    border-color var(--transition-slow);
  height: 100%;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
  border-color: rgba(var(--color-primary-rgb), 0.3);
}

.service-card:hover .service-card__icon {
  background: var(--color-primary);
  color: #fff;
  transform: translateY(-2px) scale(1.05);
}

.service-card__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 68px;
  height: 68px;
  margin-bottom: var(--space-4);
  border-radius: 50%;
  background: var(--color-primary-tint);
  color: var(--color-primary-dark);
  transition: background var(--transition-base), color var(--transition-base),
    transform var(--transition-base);
}

.service-card__title {
  color: var(--color-primary-dark);
  margin-bottom: var(--space-2);
  font-size: var(--font-size-md);
}

.service-card__text {
  color: var(--color-text-subtle);
  font-size: var(--font-size-sm);
}
</style>
