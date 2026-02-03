import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/user/register',
      name: 'userRegister',
      component: () => import('../views/UserRegister.vue'),
    },
  ],
})

export default router
