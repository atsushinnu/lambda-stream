import Vue from "vue";
import VueRouter from 'vue-router'


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/lambda_stream/First.vue')
  },
  {
    path: '/second',
    name: 'Second',
    component: () => import(/* webpackChunkName: "about" */ '../views/lambda_stream/Second.vue')
  },
  {
    path: '/third',
    name: 'Third',
    component: () => import(/* webpackChunkName: "about" */ '../views/lambda_stream/Third.vue')
  },
  {
    path: '/fourth',
    name: 'Fourth',
    component: () => import(/* webpackChunkName: "about" */ '../views/lambda_stream/Fourth.vue')
  },
  {
    path: '/fifth',
    name: 'Fifth',
    component: () => import(/* webpackChunkName: "about" */ '../views/lambda_stream/Fifth.vue')
  },
  {
    path: '/sixth',
    name: 'Sixth',
    component: () => import(/* webpackChunkName: "about" */ '../views/lambda_stream/Sixth.vue')
  },
  {
    path: '/question',
    name: 'Question',
    component: () => import(/* webpackChunkName: "about" */ '../views/lambda_stream/Question.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/lambda_stream/Contact.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import(/* webpackChunkName: "about" */ '../views/Signup.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
