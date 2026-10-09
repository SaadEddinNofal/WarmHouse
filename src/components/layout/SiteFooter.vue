<script setup>
import { RouterLink } from 'vue-router'
import { contact, footer, primaryNav } from '@/data/site'

defineProps({
  tagline: { type: String, default: footer.tagline },
})
</script>

<template>
  <footer class="site-footer">
    <div class="site-footer__inner">
      <div class="site-footer__brand">
        <h3>{{ footer.name }}</h3>
        <p>{{ tagline }}</p>
      </div>

      <nav class="site-footer__col" aria-label="Footer navigation">
        <h4>Explore</h4>
        <ul>
          <li v-for="item in primaryNav" :key="item.label">
            <RouterLink :to="item.to">{{ item.label }}</RouterLink>
          </li>
        </ul>
      </nav>

      <div class="site-footer__col">
        <h4>Contact</h4>
        <ul>
          <li>
            <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>
          </li>
          <li v-for="phone in contact.phones" :key="phone.value">
            {{ phone.label }} — {{ phone.value }}
          </li>
          <li>{{ contact.location }}</li>
        </ul>
      </div>
    </div>

    <div class="site-footer__bottom">
      <p>{{ footer.copyright }}</p>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background: var(--gradient-footer);
  color: #fff;
  margin-top: var(--space-10);
}

.site-footer__inner {
  display: grid;
  grid-template-columns: 1.6fr 1fr 1.4fr;
  gap: var(--space-8);
  padding: var(--space-10) var(--layout-gutter) var(--space-8);
  max-width: var(--layout-max-width);
  margin: 0 auto;
}

.site-footer__brand h3 {
  font-size: var(--font-size-xl);
  margin-bottom: var(--space-3);
}

.site-footer__brand p {
  color: rgba(255, 255, 255, 0.85);
  max-width: 34ch;
}

.site-footer__col h4 {
  font-size: var(--font-size-sm);
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: var(--space-4);
}

.site-footer__col ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.site-footer__col a {
  color: #fff;
  text-decoration: none;
  transition: color var(--transition-base), padding-left var(--transition-base);
}

.site-footer__col a:hover {
  color: var(--color-primary-soft);
  padding-left: 4px;
}

.site-footer__col li {
  color: rgba(255, 255, 255, 0.85);
  font-size: var(--font-size-sm);
}

.site-footer__bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.16);
  text-align: center;
  padding: var(--space-4) var(--layout-gutter);
}

.site-footer__bottom p {
  font-size: var(--font-size-sm);
  color: rgba(255, 255, 255, 0.72);
}

@media (max-width: 800px) {
  .site-footer__inner {
    grid-template-columns: 1fr;
    gap: var(--space-6);
    padding-top: var(--space-8);
  }
}
</style>
