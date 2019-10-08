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
const News = () => import('./views/News.vue')
const Cont2 = () => import('./components/Content2.vue')
const Cont3 = () => import('./components/Content3.vue')

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      meta: {title: '評価システム | HOME'}
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
      ],
      meta: {title: '評価システム | ABOUT'}
    },
    {
      path: '/user/:userid',
      component: User,
      meta: {title: '評価システム | USER'},
      beforeEnter: (to, from, next) => {
        console.log("enter user page")
        next();
      }
    },
    {
      path: '/news',
      component: News,
      meta: {title: '評価システム | NEWS'}
    }
  ],
  //改变网页地址显示方法，不再显示#号
  mode: 'history',
  //点击后的class
  linkActiveClass: 'active',
})

// 页面跳转时想要执行函数的方法
// router.beforeEach((to , from , next) => {
//   document.title = to.matched[0].meta.title;
//   next()
// });
router.afterEach((to , from) => {
  document.title = to.matched[0].meta.title;
});

export default router;