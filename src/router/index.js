import Vue from 'vue'
import Router from 'vue-router'
import login from '@/view/user/login'
import main from '@/view/main/main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/main',
      name: 'main',
      component: main
    }
  ]
})
