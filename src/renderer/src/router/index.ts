import { createRouter, createWebHashHistory } from 'vue-router'
import { useAuthStore } from '@/store/auth'

const router = createRouter({
  //  hash 模式。
  history: createWebHashHistory(),
  routes: [
    // 设置首页
    {
      path: '/',
      meta: {
        needLogin: true
      },
      component: () => import('@/pages/home/index.vue')
    },
    {
      name: 'login',
      path: '/login',
      component: () => import('@/pages/login/index.vue')
    },
    {
      name: 'register',
      path: '/register',
      component: () => import('@/pages/register/index.vue')
    },
    {
      name: 'forget',
      path: '/forget',
      component: () => import('@/pages/forget/index.vue')
    }
  ]
})

router.beforeEach((_to, _from, next) => {
  const authStore = useAuthStore()
  if (!authStore.token && _to?.meta?.needLogin && !authStore.guestMode) {
    next({ name: 'login' })
    return
  }
  next()
})

export default router
