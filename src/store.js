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
    visitorMessage : {},
    studentData : {}
  },
  //同步操作方法
  mutations: {
    readVisitorMessage(state){
      state.visitorMessage = JSON.parse(localStorage.visitor)
    },
    readStudentData(state){
      state.studentData = JSON.parse(localStorage.student);
    },
    setStudentId(state , message){
      state.visitorMessage.students = message.student;
      state.visitorMessage.groupName = message.groupName;
      state.visitorMessage.grade = message.grade;
    }
  },
  //异步操作方法
  actions: {
    
  },
  //返回派生状态方法
  getters: {

  }
});

