import Vue from 'vue'
import Router from 'vue-router'

// 一次性加载方法
// import Home from './views/Home.vue'
// import About from './views/About.vue'
// import User from './views/User.vue'

//使用时才加载方法
const Home = () => import('./views/Home.vue')
const About = () => import('./views/About.vue')
const User = () => import('./views/User.vue')
const Cont2 = () => import('./components/Content2.vue')
const Cont3 = () => import('./components/Content3.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/about',
      component: About,
      children: [
        {
          path: '/',
          redirect: 'cont2'
        },
        {
          path: 'cont2',
          component: Cont2
        },
        {
          path: 'cont3',
          component: Cont3
        }
      ]
    },
    {
      path: '/user/:userid',
      component: User
    }
  ],
  //改变网页地址显示方法，不再显示#号
  mode: 'history',
  //点击后的class
  linkActiveClass: 'active'
})
