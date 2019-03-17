import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueLocalStorage from 'vue-localstorage'
Vue.use(VueLocalStorage)
Vue.use(VueLocalStorage, {
  name: 'ls',
  bind: true //created computed members from your variable declarations
})
Vue.use(Vuetify);

Vue.config.productionTip = false;
console.log(router);
router.beforeEach((to, from, next) => {
  console.log('Проверяем токен');
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
