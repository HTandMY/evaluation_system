import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('./views/Home.vue');
const Visitor = () => import('./views/Visitor.vue');
const VisitorSignin = () => import('./views/VisitorSignin.vue');
const Student = () => import('./views/Student.vue');
const StudentSignin = () => import('./views/StudentSignin.vue');
const Evaluate = () => import('./views/Evaluate.vue');

const Grade_2 = () => import('./components/Grade_2.vue');
const Grade_1 = () => import('./components/Grade_1.vue');

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: Home,
      meta: {title: '評価システム | HOME'}
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
      meta : {title: '評価システム | 評価ページ'}
    },
    {
      path: '/visitorsignin',
      component : VisitorSignin,
      meta : {title: '評価システム | 来場者登録'}
    },
    {
      path: '/evaluate',
      component : Evaluate,
      meta : {title: '評価システム | 評価ページ'}
    }, 
    {
      path: '/student',
      component : Student,
      meta : {title: '評価システム | 学生ページ'}
    },
    {
      path: '/studentsignin',
      component : StudentSignin,
      meta : {title: '評価システム | 学生ログイン'}
    },
  ],
});

router.afterEach((to , from) => {
  document.title = to.matched[0].meta.title;
  window.scrollTo(0,0);
});

export default router;