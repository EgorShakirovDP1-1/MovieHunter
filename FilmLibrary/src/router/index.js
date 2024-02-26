import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home-s.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home},
      {
        path: '/login',
        name: 'login',
        component: () => import('../views/login.vue')},
    { path: '/signup',
    name: 'signup',
    component: () => import('../views/signup.vue')}
      
    
  ]
})

export default router
