import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import store from '@/store'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'article/:id',
          name: 'modal',
          component: () => import('@/views/Modal.vue'),
          props: true,
          beforeEnter: (to, from, next) => {
            console.log('TCL: to', to)
            console.log('⚡')
            const { id } = to.params
            store.dispatch('setSelectedFromId', id)
            next()
          }
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About.vue')
    }
  ]
})
