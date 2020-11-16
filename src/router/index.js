import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import customerManage from '@/views/bloomfilter/regiter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/customerManage',
      name: '客户管理',
      component: customerManage
    }
  ]
})
