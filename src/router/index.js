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
      path: '/content/:id',
      name: 'content',
      component: () => import('../views/contentView.vue'),
      props: true,
    },
    {
      path: '/content_pdf/:id',
      name: 'content_pdf',
      component: () => import('../views/contentPdfView.vue'),
      props: true,
    },
    {
      path: '/infor',
      name: 'infor',
      component: () => import('../views/inforView.vue')
    },
    {
      path: '/test/:id',
      name: 'test',
      component: () => import('../views/testView.vue')
    },
    {
      path: '/pre_test/:id',
      name: 'pre_test',
      component: () => import('../views/preTestView.vue')
    },
    {
      path: '/assign',
      name: 'assign',
      component: () => import('../views/assignView.vue')
    },
    {
      path: '/manageStudent',
      name: 'manageStudent',
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
