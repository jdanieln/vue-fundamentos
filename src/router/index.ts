import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import LandingView from '../views/LandingView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: 'landing',
        component: LandingView
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  console.log("ROUTE GUARDS", to.name);

  const token = getToken();

  //if(!token && to.name === 'about') return next({ name: 'login' });

  next();
});

const getToken = () => {
  return ''
}

export default router
