import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import bands from './modules/bands'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    ...bands
  ]
})

export default router
