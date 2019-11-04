import Vue from 'vue'
import Vuex from 'vuex'

import state from './store/state'
import mutations from './store/mutations'
import actions from './store/actions'
import getters from './store/getters'

import moduleA from './store/modules/moduleA'
import moduleB from './store/modules/moduleB'

Vue.use(Vuex)


export default new Vuex.Store({
  //状态
  state: state,
  //同步操作方法
  mutations: mutations,
  //异步操作方法
  actions: actions,
  //返回派生状态方法
  getters: getters,
  modules: {
    a: moduleA,
    b: moduleB
  }
});

