<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import SiteHeader from '@/components/layout/SiteHeader.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'
import { footer } from '@/data/site'

const route = useRoute()

// The About and Contact pages used a slightly different footer tagline in the
// original site; keep each page faithful to its own copy.
const tagline = computed(() =>
  ['about', 'contact'].includes(route.name) ? footer.taglineWarm : footer.tagline,
)
</script>

<template>
  <div class="layout">
    <SiteHeader />
    <main class="layout__main">
      <RouterView v-slot="{ Component }">
        <Transition name="route-fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>
    <SiteFooter :tagline="tagline" />
  </div>
</template>
