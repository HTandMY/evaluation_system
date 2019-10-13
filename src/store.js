import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //状态
  state: {
    counter : 100
  },
  //同步操作
  mutations: {
    add(state){
      state.counter++
    },
    min(state){
      state.counter--
    }
  },
  //异步操作
  actions: {

  }
})
