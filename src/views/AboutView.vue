<script setup>
import { about } from '@/data/about'
import { brand } from '@/data/site'
</script>

<template>
  <section class="about page-section">
    <div class="about__card">
      <img :src="brand.logo" :alt="brand.logoAlt" class="about__logo" />
      <h1 class="about__title">{{ about.title }}</h1>
      <p v-for="(paragraph, index) in about.paragraphs" :key="index">
        {{ paragraph }}
      </p>
    </div>
  </section>
</template>

<style scoped>
.about {
  max-width: var(--layout-max-width);
  margin: 0 auto;
  width: 100%;
}

.about__card {
  background: var(--color-surface);
  padding: var(--space-10);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
  border: 1px solid rgba(var(--color-primary-rgb), 0.08);
}

.about__logo {
  width: 600px;
  max-width: 100%;
  margin: 0 auto var(--space-8);
}

.about__title {
  text-align: center;
  color: var(--color-primary-dark);
  margin-bottom: var(--space-5);
  font-size: var(--font-size-2xl);
}

.about__card p {
  margin-bottom: var(--space-4);
  color: var(--color-text-muted);
  font-size: 1.05rem;
}

@media (max-width: 768px) {
  .about__card {
    padding: var(--space-5);
  }
}
</style>
