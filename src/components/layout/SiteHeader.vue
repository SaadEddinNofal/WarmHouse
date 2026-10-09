<script setup>
import { computed, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { brand, primaryNav, homeSectionNav, authNav } from '@/data/site'
import AppIcon from '@/components/ui/AppIcon.vue'

const route = useRoute()
const isOpen = ref(false)

const isHome = computed(() => route.name === 'home')

// On the Home page we keep the original in-page navigation (About / Services /
// Owners); on every other page we show the shared primary navigation.
const navItems = computed(() =>
  isHome.value
    ? [
        { label: 'Home', to: { name: 'home' } },
        ...homeSectionNav,
        { label: 'Contact Us', to: { name: 'contact' } },
      ]
    : primaryNav,
)

watch(
  () => route.fullPath,
  () => {
    isOpen.value = false
  },
)
</script>

<template>
  <header class="site-header" :class="{ 'site-header--open': isOpen }">
    <nav class="site-header__inner" aria-label="Main navigation">
      <RouterLink class="site-header__brand" :to="{ name: 'home' }">
        <span class="site-header__brand-badge">
          <img :src="brand.miniLogo" :alt="brand.logoAlt" />
        </span>
        <span class="site-header__brand-name">{{ brand.name }}</span>
      </RouterLink>

      <button
        type="button"
        class="site-header__toggle"
        :aria-expanded="isOpen"
        aria-controls="primary-navigation"
        aria-label="Toggle navigation menu"
        @click="isOpen = !isOpen"
      >
        <AppIcon :name="isOpen ? 'close' : 'menu'" :size="26" />
      </button>

      <div id="primary-navigation" class="site-header__collapse" :class="{ 'is-open': isOpen }">
        <ul class="site-header__links">
          <li v-for="item in navItems" :key="item.label">
            <RouterLink :to="item.to">{{ item.label }}</RouterLink>
          </li>
        </ul>

        <ul class="site-header__actions">
          <li v-for="item in authNav" :key="item.label">
            <RouterLink
              class="site-header__action"
              :class="`site-header__action--${item.label.toLowerCase()}`"
              :to="item.to"
            >
              {{ item.label }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: var(--gradient-nav);
  box-shadow: var(--shadow-nav);
  border-bottom: 1px solid rgba(255, 255, 255, 0.14);
}

.site-header__inner {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: 0.7rem var(--layout-gutter);
  max-width: var(--layout-max-width);
  margin: 0 auto;
  min-height: var(--header-height);
}

/* Brand ------------------------------------------------------------------- */

.site-header__brand {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  text-decoration: none;
  flex: 0 0 auto;
}

.site-header__brand-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  background: rgba(255, 255, 255, 0.92);
  border-radius: 16px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  transition: transform var(--transition-base);
}

.site-header__brand:hover .site-header__brand-badge {
  transform: rotate(-4deg) scale(1.04);
}

.site-header__brand-badge img {
  width: 40px;
  height: 34px;
  object-fit: contain;
}

.site-header__brand-name {
  color: #fff;
  font-size: 1.55rem;
  font-weight: 800;
  letter-spacing: 0.2px;
  line-height: 1;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.18);
}

/* Collapsible region (links + actions) ------------------------------------ */

.site-header__collapse {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  flex: 1;
  min-width: 0;
}

.site-header__links,
.site-header__actions {
  display: flex;
  align-items: center;
  list-style: none;
}

.site-header__links {
  gap: 0.25rem;
  margin: 0 auto;
}

.site-header__links a {
  display: inline-block;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.92);
  font-weight: 600;
  font-size: 0.98rem;
  padding: 0.5rem 0.9rem;
  border-radius: var(--radius-pill);
  transition: background var(--transition-base), color var(--transition-base);
}

.site-header__links a:hover {
  background: rgba(255, 255, 255, 0.16);
  color: #fff;
}

.site-header__links a.router-link-active {
  background: rgba(255, 255, 255, 0.22);
  color: #fff;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.25);
}

/* Auth actions ------------------------------------------------------------ */

.site-header__actions {
  gap: 0.55rem;
  flex: 0 0 auto;
}

.site-header__action {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-weight: 700;
  font-size: var(--font-size-sm);
  padding: 0.5rem 1.15rem;
  border-radius: var(--radius-pill);
  border: 2px solid transparent;
  transition: transform var(--transition-base), background var(--transition-base),
    color var(--transition-base), box-shadow var(--transition-base);
  white-space: nowrap;
}

.site-header__action--login {
  color: #fff;
  border-color: rgba(255, 255, 255, 0.55);
}

.site-header__action--login:hover {
  background: rgba(255, 255, 255, 0.16);
  border-color: #fff;
}

.site-header__action--register {
  background: #fff;
  color: var(--color-primary-dark);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.15);
}

.site-header__action--register:hover {
  transform: translateY(-2px);
  color: var(--color-primary-deep);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}

/* Mobile toggle ----------------------------------------------------------- */

.site-header__toggle {
  display: none;
  margin-left: auto;
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: #fff;
  cursor: pointer;
  padding: 0.45rem;
  border-radius: 12px;
  transition: background var(--transition-base);
}

.site-header__toggle:hover {
  background: rgba(255, 255, 255, 0.26);
}

.site-header__toggle:focus-visible {
  outline: 3px solid #fff;
  outline-offset: 2px;
}

/* Responsive -------------------------------------------------------------- */

@media (max-width: 900px) {
  .site-header__inner {
    flex-wrap: wrap;
  }

  .site-header__toggle {
    display: inline-flex;
  }

  .site-header__brand-name {
    font-size: 1.35rem;
  }

  .site-header__brand-badge {
    width: 46px;
    height: 46px;
    border-radius: 14px;
  }

  .site-header__brand-badge img {
    width: 36px;
    height: 30px;
  }

  .site-header__collapse {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    gap: var(--space-4);
    padding: 0 var(--layout-gutter);
    background: var(--color-primary-dark);
    box-shadow: var(--shadow-lg);
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    pointer-events: none;
    transition: max-height var(--transition-slow), opacity var(--transition-base),
      padding var(--transition-base);
  }

  .site-header__collapse.is-open {
    max-height: 640px;
    opacity: 1;
    pointer-events: auto;
    padding: var(--space-5) var(--layout-gutter) var(--space-6);
  }

  .site-header__links,
  .site-header__actions {
    flex-direction: column;
    align-items: stretch;
    gap: 0.4rem;
    margin: 0;
  }

  .site-header__links a {
    font-size: var(--font-size-md);
    padding: 0.7rem 0.9rem;
  }

  .site-header__actions {
    border-top: 1px solid rgba(255, 255, 255, 0.18);
    padding-top: var(--space-4);
    gap: 0.6rem;
  }

  .site-header__action {
    width: 100%;
    padding: 0.75rem 1.15rem;
  }
}
</style>
