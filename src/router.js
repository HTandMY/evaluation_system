import Vue from 'vue'
import Router from 'vue-router'

// 一次性加载方法
// ワンタイムロード方法
// import Home from './views/Home.vue'
// import About from './views/About.vue'
// import User from './views/User.vue'

//使用时才加载方法
//使用する時ロード方法
const Home = () => import('./views/Home.vue');
const Visitor = () => import('./views/Visitor.vue');
const Student = () => import('./views/Student.vue');
const Grade_2 = () => import('./components/Grade_2.vue');
const Grade_1 = () => import('./components/Grade_1.vue');

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: Home,
      meta: {title: '評価システム | HOME'}
      // redirect: '/home'
    },
    {
      path: '/visitor',
      component : Visitor,
      children: [
        {
          path: '/',
          redirect: 'grade2'
        },
        {
          path: 'grade2',
          component: Grade_2
        },
        {
          path: 'grade1',
          component: Grade_1
        }
      ],
      meta : {title: '評価システム | 来場者'}
    },
    {
      path: '/student',
      component : Student,
      meta : {title: '評価システム | 学生'}
    }
  ],
  //改变网页地址显示方法，不再显示#号
  //URL変更すると、＃を表示させない
  // mode: 'history',
  //点击后的class
  //クリックされる時表示するclass
  linkActiveClass: 'actived',
})

// 页面跳转时想要执行函数的方法
//　ページ変わる時実行する関数
// router.beforeEach((to , from , next) => {
//   document.title = to.matched[0].meta.title;
//   next()
// });
router.afterEach((to , from) => {
  document.title = to.matched[0].meta.title;
});

export default router;