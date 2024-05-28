import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'global-map',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/bcbugs',
    name: 'bugs-view',
    component: () => import('../views/BugsView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
