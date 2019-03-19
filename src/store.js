import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    url: window.origin + '/api/',
    user:{}
  },
  mutations: {

  },
  actions: {

  }
})
