import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/home-page/HomePage.vue'

const routes = [
  {
    path: '/',
    component: () => import('@/app/layouts/MainLayout.vue'),
    children: [
      { path: '', component: HomePage }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router