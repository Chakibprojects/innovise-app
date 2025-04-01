import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ImageEditor from '../views/ImageEditor.vue'
import Dashboard from '../views/Dashboard.vue'
import Auth from '../views/Auth.vue'
import Pricing from '../views/Pricing.vue'
import Legal from '../views/Legal.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/editor',
      name: 'editor',
      component: ImageEditor,
      meta: { requiresAuth: true }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: { requiresAuth: true }
    },
    {
      path: '/auth',
      name: 'auth',
      component: Auth
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: Pricing
    },
    {
      path: '/legal/:type',
      name: 'legal',
      component: Legal
    },
    {
      path: '/support',
      name: 'support',
      component: () => import('../views/Support.vue')
    }
  ]
})

// Navigation guard
router.beforeEach((to, from, next) => {
  // TODO: Implement proper auth check
  const isAuthenticated = false
  
  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next('/auth')
  } else {
    next()
  }
})

export default router
