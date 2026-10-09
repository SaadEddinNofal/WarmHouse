<script setup>
import { productCategories } from '@/data/products'
import { brand } from '@/data/site'
import ProductCard from '@/components/ui/ProductCard.vue'
import AppIcon from '@/components/ui/AppIcon.vue'
import { useScrollSpy } from '@/composables/useScrollSpy'

const categoryIds = productCategories.map((category) => category.id)
const { activeId } = useScrollSpy(categoryIds)
</script>

<template>
  <div class="adoption">
    <!-- Brand banner -->
    <section class="adoption__banner">
      <img :src="brand.logo" alt="Animal Adoption Logo" />
    </section>

    <div class="adoption__body">
      <!-- Category sidebar -->
      <aside class="sidebar" aria-label="Product categories">
        <div class="sidebar__head">
          <span class="sidebar__head-icon" aria-hidden="true">
            <AppIcon name="paw" :size="22" />
          </span>
          <div>
            <h3>Categories</h3>
            <p>Browse by type</p>
          </div>
        </div>

        <nav class="sidebar__nav">
          <a
            v-for="category in productCategories"
            :key="category.id"
            :href="`#${category.id}`"
            class="sidebar__link"
            :class="{ 'is-active': activeId === category.id }"
          >
            <span class="sidebar__link-icon" aria-hidden="true">
              <AppIcon :name="category.icon" :size="18" />
            </span>
            <span class="sidebar__link-label">{{ category.title }}</span>
            <span class="sidebar__link-count">{{ category.items.length }}</span>
          </a>
        </nav>
      </aside>

      <!-- Products -->
      <div class="adoption__content">
        <section
          v-for="category in productCategories"
          :id="category.id"
          :key="category.id"
          class="adoption__category"
        >
          <h2 class="section-title section-title--underline">{{ category.title }}</h2>

          <p v-if="!category.items.length" class="adoption__empty">
            {{ category.emptyLabel }}
          </p>

          <div v-else class="products">
            <ProductCard
              v-for="item in category.items"
              :key="item.id"
              :item="item"
            />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
.adoption__banner {
  text-align: center;
  padding: var(--space-8) var(--space-5) var(--space-4);
}

.adoption__banner img {
  width: 460px;
  max-width: 88%;
  margin: 0 auto;
  filter: drop-shadow(0 16px 26px rgba(154, 75, 75, 0.22));
  animation: float 4s ease-in-out infinite;
}

.adoption__body {
  display: flex;
  gap: var(--space-5);
  width: auto;
  max-width: none;
  margin: var(--space-3);
  padding: 0 0 var(--space-8);
  align-items: flex-start;
}

/* Sidebar ----------------------------------------------------------------- */

.sidebar {
  flex: 0 0 236px;
  width: 236px;
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(var(--color-primary-rgb), 0.1);
  box-shadow: var(--shadow-md);
  overflow: hidden;
  position: sticky;
  top: calc(var(--header-height) + 16px);
  height: fit-content;
}

.sidebar__head {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-5);
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
  color: #fff;
}

.sidebar__head-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  flex-shrink: 0;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.18);
  border: 1px solid rgba(255, 255, 255, 0.25);
}

.sidebar__head h3 {
  font-size: var(--font-size-md);
  font-weight: 800;
  line-height: 1.1;
}

.sidebar__head p {
  font-size: var(--font-size-xs);
  color: rgba(255, 255, 255, 0.82);
  margin-top: 2px;
}

.sidebar__nav {
  display: flex;
  flex-direction: column;
  padding: var(--space-3);
  gap: 0.3rem;
}

.sidebar__link {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  text-decoration: none;
  color: var(--color-text);
  font-weight: 600;
  font-size: var(--font-size-sm);
  padding: 0.65rem 0.7rem;
  border-radius: var(--radius-sm);
  border: 1px solid transparent;
  transition: background var(--transition-base), color var(--transition-base),
    border-color var(--transition-base), transform var(--transition-base);
}

.sidebar__link-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  flex-shrink: 0;
  border-radius: 10px;
  background: var(--color-primary-tint);
  color: var(--color-primary-dark);
  transition: background var(--transition-base), color var(--transition-base);
}

.sidebar__link-label {
  flex: 1;
  min-width: 0;
}

.sidebar__link-count {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 26px;
  height: 24px;
  padding: 0 0.4rem;
  border-radius: var(--radius-pill);
  background: var(--color-surface-muted);
  color: var(--color-text-subtle);
  font-size: var(--font-size-xs);
  font-weight: 700;
  transition: background var(--transition-base), color var(--transition-base);
}

.sidebar__link:hover {
  background: var(--color-primary-tint);
  color: var(--color-primary-dark);
  transform: translateX(3px);
}

.sidebar__link.is-active {
  background: var(--color-primary);
  color: #fff;
  border-color: var(--color-primary);
  box-shadow: var(--shadow-primary);
}

.sidebar__link.is-active .sidebar__link-icon {
  background: rgba(255, 255, 255, 0.22);
  color: #fff;
}

.sidebar__link.is-active .sidebar__link-count {
  background: #fff;
  color: var(--color-primary-dark);
}

/* Content ----------------------------------------------------------------- */

.adoption__content {
  flex: 1;
  min-width: 0;
}

.adoption__category {
  margin-bottom: var(--space-10);
  scroll-margin-top: calc(var(--header-height) + 20px);
  animation: fadeUp 0.7s ease both;
}

.adoption__category:last-child {
  margin-bottom: 0;
}

.adoption__empty {
  color: var(--color-text-subtle);
}

.products {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-5);
}

/* Responsive -------------------------------------------------------------- */

@media (max-width: 992px) {
  .adoption__body {
    flex-direction: column;
  }

  .sidebar {
    position: static;
    width: 100%;
    flex: none;
  }

  .sidebar__nav {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .sidebar__link {
    flex: 1 1 200px;
  }
}

@media (max-width: 820px) {
  .products {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 560px) {
  .products {
    grid-template-columns: minmax(0, 1fr);
  }

  .sidebar__link {
    flex: 1 1 100%;
  }
}
</style>
