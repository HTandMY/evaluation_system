import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'
import * as firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCi2pj67bUejaR1VCXqOYJ_gZ0ufqqQQs8",
  authDomain: "evaluation-system-34106.firebaseapp.com",
  databaseURL: "https://evaluation-system-34106.firebaseio.com",
  projectId: "evaluation-system-34106",
  storageBucket: "evaluation-system-34106.appspot.com",
  messagingSenderId: "964676946210",
  appId: "1:964676946210:web:784b204d504bfda2ef7d7b",
  measurementId: "G-CS85S6NSKM"
};
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
