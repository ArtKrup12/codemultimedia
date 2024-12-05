import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/loginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/content',
      name: 'content',
      component: () => import('../views/contentView.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/testView.vue')
    },
    {
      path: '/drug',
      name: 'drug',
      component: () => import('../views/DrugView.vue')
    },
    {
      path: '/check',
      name: 'check',
      component: () => import('../views/CheckView.vue')
    },
    {
      path: '/setting',
      name: 'setting',
      component: () => import('../views/SettingView.vue')
    },
    {
      path: '/lesson',
      name: 'lesson',
      component: () => import('../views/LessonView.vue')
    },
    {
      path: '/student',
      name: 'student',
      component: () => import('../views/StudentView.vue')
    }
  ]
})

export default router
