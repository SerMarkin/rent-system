import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    url: 'localhost:3000' + '/api/',
    user:{},
    auth:false
  },
  mutations: {

  },
  actions: {

  }
})
