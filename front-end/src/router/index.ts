import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/rank',
    name: 'rank',
    //路由懒加载
    component: () => import(/* webpackChunkName: "rank" */ '../views/Rank.vue')
  },
  {
    path: '/singers',
    name: 'singers',
    component: () => import(/* webpackChunkName: "singers" */ '../views/Singers.vue')
  },
  {
    path: '/songs',
    name: 'songs',
    component: () => import(/* webpackChunkName: "songs" */ '../views/Songs.vue')
  },

]

const router = new VueRouter({
  routes
})

export default router
  
 