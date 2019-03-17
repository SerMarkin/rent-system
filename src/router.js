import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import log from './views/login.vue'
import my from './views/my.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {

      path: '/my',
      name: 'myPath',
      component: my
    },
    {
      path: '/login',
      name: 'log',
      component: log
    },
  ]
});
