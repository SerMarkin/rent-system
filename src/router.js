import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import log from './components/authlogin/login.vue'
import my from './components/profile/my.vue';
import reg from './components/authlogin/registration.vue';
import admin from './components/admin/admin.vue';

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
    {
      path: '/registration',
      name: 'reg',
      component: reg
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin
    },
  ]
});
