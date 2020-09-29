import Vue from "vue";
import VueRouter from 'vue-router'


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
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
    path: '/fourth',
    name: 'Fourth',
    component: () => import(/* webpackChunkName: "about" */ '../components/Fourth.vue')
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
