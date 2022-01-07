import Layout from '@/layout'
import {createRouter, createWebHashHistory} from "vue-router"

export const routes = [
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    meta: {title: 'Menu1', icon: 'icon-apps'},
    children: [{
      path: '/dashboard',
      component: import('@/views'),
      meta: {title: 'Dashboard', icon: 'icon-face-smile-fill'}
    }, {
      path: '/form',
      component: import('@/views'),
      meta: {title: 'Form', icon: 'icon-face-smile-fill'}
    }]
  },

  {path: '/:catchAll(.*)', redirect: '/404', hidden: true}
]

const buildRouter = () => createRouter({
  history: createWebHashHistory(),
  routes
})

const router = buildRouter()

export default router
