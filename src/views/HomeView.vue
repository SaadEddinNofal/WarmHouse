<script setup>
import { aboutProject, hero, owners, services } from '@/data/home'
import { brand } from '@/data/site'
import AppButton from '@/components/ui/AppButton.vue'
import ServiceCard from '@/components/ui/ServiceCard.vue'
import OwnerCard from '@/components/ui/OwnerCard.vue'
</script>

<template>
  <div class="home">
    <!-- Hero -->
    <section class="hero">
      <span class="hero__glow hero__glow--one" aria-hidden="true" />
      <span class="hero__glow hero__glow--two" aria-hidden="true" />

      <div class="hero__content">
        <img :src="brand.logo" :alt="brand.logoAlt" class="hero__logo" />
        <h1>{{ hero.title }}</h1>
        <p>{{ hero.description }}</p>
        <AppButton :to="hero.cta.to" size="lg">{{ hero.cta.label }}</AppButton>
      </div>
    </section>

    <!-- About -->
    <section id="about" class="home__section">
      <div class="home__card">
        <h2 class="home__heading">{{ aboutProject.title }}</h2>
        <p v-for="(paragraph, index) in aboutProject.paragraphs" :key="index">
          {{ paragraph }}
        </p>
      </div>
    </section>

    <!-- Services -->
    <section id="services" class="home__section">
      <div class="home__card">
        <h2 class="home__heading">{{ services.title }}</h2>
        <div class="home__services">
          <ServiceCard
            v-for="service in services.items"
            :key="service.id"
            :service="service"
          />
        </div>
      </div>
    </section>

    <!-- Owners -->
    <section id="owners" class="home__section">
      <div class="home__card">
        <h2 class="home__heading">{{ owners.title }}</h2>
        <div class="home__owners">
          <OwnerCard
            v-for="owner in owners.items"
            :key="owner.id"
            :owner="owner"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Hero -------------------------------------------------------------------- */

.hero {
  position: relative;
  overflow: hidden;
  min-height: calc(100vh - var(--header-height));
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: var(--space-10) var(--space-5);
  background: var(--gradient-hero);
}

.hero__glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(10px);
  opacity: 0.55;
  pointer-events: none;
}

.hero__glow--one {
  width: 340px;
  height: 340px;
  top: -80px;
  left: -60px;
  background: radial-gradient(circle, rgba(215, 111, 111, 0.4), transparent 70%);
}

.hero__glow--two {
  width: 420px;
  height: 420px;
  bottom: -140px;
  right: -80px;
  background: radial-gradient(circle, rgba(154, 75, 75, 0.28), transparent 70%);
}

.hero__content {
  position: relative;
  z-index: 1;
  max-width: 900px;
  animation: fadeUp 0.9s ease both;
}

.hero__logo {
  width: 560px;
  max-width: 88%;
  margin: 0 auto var(--space-5);
  filter: drop-shadow(0 18px 28px rgba(154, 75, 75, 0.25));
  animation: float 4s ease-in-out infinite;
}

.hero h1 {
  color: var(--color-primary-dark);
  font-size: var(--font-size-4xl);
  font-weight: 800;
  letter-spacing: -0.5px;
  margin-bottom: var(--space-4);
}

.hero p {
  color: var(--color-text-muted);
  font-size: var(--font-size-md);
  max-width: 62ch;
  margin: 0 auto var(--space-6);
}

/* Sections ---------------------------------------------------------------- */

.home__section {
  padding: var(--space-6) var(--layout-gutter);
  scroll-margin-top: calc(var(--header-height) + 20px);
  max-width: var(--layout-max-width);
  margin: 0 auto;
}

.home__card {
  background: var(--color-surface);
  padding: var(--space-10);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
  border: 1px solid rgba(var(--color-primary-rgb), 0.08);
}

.home__heading {
  text-align: center;
  color: var(--color-primary-dark);
  margin-bottom: var(--space-6);
  font-size: var(--font-size-2xl);
  font-weight: 800;
}

.home__heading::after {
  content: "";
  display: block;
  width: 64px;
  height: 4px;
  margin: var(--space-3) auto 0;
  border-radius: var(--radius-pill);
  background: var(--color-primary);
}

.home__card p {
  color: var(--color-text-muted);
  margin-bottom: var(--space-3);
}

.home__services {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-5);
  margin-top: var(--space-5);
}

.home__owners {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: var(--space-6);
}

@media (max-width: 768px) {
  .hero__logo {
    width: 240px;
  }

  .hero p {
    font-size: var(--font-size-base);
  }

  .home__card {
    padding: var(--space-6) var(--space-5);
  }
}
</style>
