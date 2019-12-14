import Vue from 'vue'
import Vuex from 'vuex'

// import state from './store/state'
// import mutations from './store/mutations'
// import actions from './store/actions'
// import getters from './store/getters'


Vue.use(Vuex)


export default new Vuex.Store({
  //状态
  state:{
    visitorMessage : []
  },
  //同步操作方法
  mutations: {
    readVisitorMessage(state){
      state.visitorMessage = JSON.parse(localStorage.visitor)
    }
  },
  //异步操作方法
  actions: {
    
  },
  //返回派生状态方法
  getters: {

  }
});

