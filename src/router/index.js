import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    // path: '/',
    // component: () => import('@/views/Main.vue'),
    // children: [
    //   {
    //     path: 'home',
    //     name: 'home',
    //     component: () => import('@/views/Home/Home.vue')
    //   },
    //   {
    //     path: 'user',
    //     name: 'user',
    //     component: () => import('@/views/UserManage/UserManage.vue')
    //   },
    //   {
    //     path: 'video',
    //     name: 'video',
    //     component: () => import('@/views/VideoManage/VideoManage.vue')
    //   },
    //   {
    //     path: 'one',
    //     name: 'one',
    //     component: () => import('@/views/Other/PageOne.vue')
    //   },
    //   {
    //     path: 'two',
    //     name: 'two',
    //     component: () => import('@/views/Other/PageTwo.vue')
    //   }
    // ]
    // 根据后台返回的参数动态生成路由参数
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/Login')

  }]
})
