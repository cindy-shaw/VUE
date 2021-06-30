import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '../views/Homepage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: Homepage,
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
      },
      {
        path: 'info',
        name: 'info',
        component: () => import(/* webpackChunkName: "info" */ '../views/info.vue')
      },
      {
        path: 'risk',
        name: 'risk',
        component: () => import(/* webpackChunkName: "risk" */ '../views/risk.vue')
      },
      {
        path: 'prev',
        name: 'prev',
        component: () => import(/* webpackChunkName: "prev" */ '../views/prev.vue')
      },
      {
        path: 'diag',
        name: 'diag',
        component: () => import(/* webpackChunkName: "diag" */ '../views/diag.vue')
      },
      {
        path: 'treat',
        name: 'treat',
        component: () => import(/* webpackChunkName: "treat" */ '../views/treat.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes
})

export default router
