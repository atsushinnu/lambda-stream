import Vue from "vue";
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/first',
    name: 'First',
    component: () => import(/* webpackChunkName: "about" */ '../components/First.vue')
  },
  {
    path: '/second',
    name: 'Second',
    component: () => import(/* webpackChunkName: "about" */ '../components/Second.vue')
  },
  {
    path: '/third',
    name: 'Third',
    component: () => import(/* webpackChunkName: "about" */ '../components/Third.vue')
  },
  {
    path: '/question',
    name: 'Question',
    component: () => import(/* webpackChunkName: "about" */ '../components/Question.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
