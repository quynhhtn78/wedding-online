import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import DashboardView from '../views/DashboardView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardView
    }
  ]
})

export default router
