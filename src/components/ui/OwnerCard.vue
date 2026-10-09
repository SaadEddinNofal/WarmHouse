<script setup>
defineProps({
  owner: { type: Object, required: true },
})
</script>

<template>
  <article class="owner-card">
    <span class="owner-card__avatar" aria-hidden="true">
      {{ owner.name.charAt(0) }}
    </span>
    <h3 class="owner-card__name">{{ owner.name }}</h3>
    <p class="owner-card__role">{{ owner.role }}</p>
  </article>
</template>

<style scoped>
.owner-card {
  width: 280px;
  max-width: 100%;
  background: var(--color-surface);
  padding: var(--space-6) var(--space-5);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(var(--color-primary-rgb), 0.1);
  border-top: 5px solid var(--color-primary);
  text-align: center;
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-slow), box-shadow var(--transition-slow);
}

.owner-card:hover {
  transform: scale(1.04);
  box-shadow: var(--shadow-md);
}

.owner-card__avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  margin-bottom: var(--space-4);
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
  color: var(--color-primary-contrast);
  font-size: var(--font-size-xl);
  font-weight: 700;
  box-shadow: var(--shadow-primary);
}

.owner-card__name {
  color: var(--color-primary-dark);
  margin-bottom: var(--space-1, 0.25rem);
}

.owner-card__role {
  color: var(--color-text-subtle);
  font-size: var(--font-size-sm);
}
</style>
