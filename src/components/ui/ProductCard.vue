<script setup>
defineProps({
  item: { type: Object, required: true },
})
</script>

<template>
  <article class="product-card">
    <div class="product-card__media">
      <img :src="item.image" :alt="item.name" loading="lazy" decoding="async" />
    </div>
    <div class="product-card__body">
      <h3 class="product-card__title">{{ item.name }}</h3>
      <p class="product-card__text">{{ item.description }}</p>
    </div>
  </article>
</template>

<style scoped>
.product-card {
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid rgba(var(--color-primary-rgb), 0.08);
  border-top: 5px solid var(--color-primary);
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-slow), box-shadow var(--transition-slow),
    border-color var(--transition-slow);
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
  border-color: rgba(var(--color-primary-rgb), 0.25);
}

.product-card__media {
  overflow: hidden;
  aspect-ratio: 5 / 4;
  background: var(--color-surface-muted);
}

.product-card__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.product-card:hover .product-card__media img {
  transform: scale(1.06);
}

.product-card__body {
  padding: var(--space-4) var(--space-4) var(--space-5);
}

.product-card__title {
  color: var(--color-primary-dark);
  font-size: var(--font-size-md);
  margin-bottom: var(--space-2);
}

.product-card__text {
  color: var(--color-text-subtle);
  font-size: var(--font-size-sm);
}
</style>
