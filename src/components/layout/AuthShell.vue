<script setup>
import { brand } from '@/data/site'

defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
})
</script>

<template>
  <section class="auth">
    <div class="auth__container">
      <div class="auth__image">
        <img :src="brand.logo" :alt="brand.name" />
      </div>

      <div class="auth__form">
        <h1>{{ title }}</h1>
        <p>{{ subtitle }}</p>

        <slot />

        <div class="auth__footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.auth {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--space-10) var(--space-5);
}

.auth__container {
  width: 100%;
  max-width: 1100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: var(--color-surface);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
}

.auth__image {
  position: relative;
  overflow: hidden;
  background: linear-gradient(150deg, var(--color-primary-soft), var(--color-primary-tint));
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--space-8);
}

.auth__image::after {
  content: "";
  position: absolute;
  width: 320px;
  height: 320px;
  border-radius: 50%;
  bottom: -120px;
  right: -100px;
  background: radial-gradient(circle, rgba(var(--color-primary-rgb), 0.35), transparent 70%);
}

.auth__image img {
  position: relative;
  z-index: 1;
  width: 80%;
  filter: drop-shadow(0 16px 26px rgba(154, 75, 75, 0.22));
  animation: float 4s ease-in-out infinite;
}

.auth__form {
  padding: var(--space-10);
}

.auth__form h1 {
  color: var(--color-primary-dark);
  margin-bottom: 0.5rem;
  font-size: var(--font-size-xl);
}

.auth__form > p {
  color: var(--color-text-subtle);
  margin-bottom: var(--space-6);
}

.auth__footer {
  margin-top: var(--space-5);
  text-align: center;
  color: var(--color-text-subtle);
  font-size: var(--font-size-sm);
}

@media (max-width: 900px) {
  .auth__container {
    grid-template-columns: 1fr;
  }

  .auth__image {
    display: none;
  }

  .auth__form {
    padding: var(--space-6);
  }
}
</style>
