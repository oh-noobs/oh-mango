import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cart: [
         { sku: '000-000', cid: '猩便利', name: '卫龙辣条', price: 100, img: [], url: '', num: 1 }
    ]
  },
  mutations: {
  }
})

export default store
