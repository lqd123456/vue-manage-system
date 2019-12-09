import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: {
    path: '/',
    component: () => import('@/views/Main.vue'),
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/Home/Home.vue')
      },
      {
        path: 'user',
        name: 'user',
        component: () => import('@/views/UserManage/UserManage.vue')
      },
      {
        path: 'video',
        name: 'video',
        component: () => import('@/views/VideoManage/VideoManage.vue')
      },
      {
        path: 'one',
        name: 'one',
        component: () => import('@/views/Other/PageOne.vue')
      },
      {
        path: 'two',
        name: 'two',
        component: () => import('@/views/Other/PageTwo.vue')
      }
    ]
  }
})

export default router
