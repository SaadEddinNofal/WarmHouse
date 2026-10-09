import { createRouter, createWebHashHistory } from 'vue-router'

import AdoptionView from '@/views/AdoptionView.vue'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'

const routes = [
  // The original default document (index.html) was the adoption catalogue,
  // so it is kept at the site root to preserve existing behaviour.
  {
    path: '/',
    name: 'adoption',
    component: AdoptionView,
    meta: { title: 'Warm House | Animal Adoption' },
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: { title: 'Warm House | Animal Adoption Platform' },
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: { title: 'About Us | Warm House' },
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
    meta: { title: 'Contact Us | Warm House' },
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: { title: 'Login | Warm House' },
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
    meta: { title: 'Register | Warm House' },
  },
  { path: '/:pathMatch(.*)*', redirect: { name: 'adoption' } },
]

const router = createRouter({
  // Hash history keeps the built site openable from any static host (or even
  // directly from the filesystem) without server-side rewrite rules.
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth', top: 96 }
    }
    return { top: 0 }
  },
})

router.afterEach((to) => {
  const base = 'Warm House'
  document.title = to.meta?.title || base
})

export default router
