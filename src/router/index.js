import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import HTML5 from '@/pages/HTML5'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/',
      name: 'HTML5',
      component: HTML5
    }
  ]
})
