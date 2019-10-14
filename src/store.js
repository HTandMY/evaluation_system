import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //状态
  state: {
    counter: 100,
    students: [
      {id: 101, name: "aaa", age: 15},
      {id: 102, name: "bbb", age: 18},
      {id: 103, name: "ccc", age: 22},
    ]
  },
  //同步操作方法
  mutations: {
    add(state){
      state.counter++
    },
    min(state){
      state.counter--
    },
    add_num(state , num){
      state.counter += Number(num)
    },
    min_num(state , num){
      state.counter -= Number(num)
    },
  },
  //异步操作方法
  actions: {

  },
  //返回派生状态方法
  getters: {
    getAge(state){
      return state.students.filter((s) => {return s.age >= 18})
    },
    getAgeLength(state , getters){
      return getters.getAge.length
    }
  }
})
