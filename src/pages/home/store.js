import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    location: {
      name: '未知',
      x: 0,
      y: 0
    },
    shelfList: [
        { name: '门店1', distance: '0.2km', rank: 1, location: [], id: 123 },
        { name: '门店2', distance: '2km', rank: 2, location: [], id: 234 }
    ]
  },
  mutations: {
    updateCurrentLocation: ({ name, x, y }) => {
      this.location.name = name
      this.location.x = x
      this.location.y = y
    },
    updateShelfList: (shelfList) => {
      this.shelfList = shelfList
    }
  }
})

export default store