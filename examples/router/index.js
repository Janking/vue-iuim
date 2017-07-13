import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  // mode: 'history',
  routes: [{
      path: '/',
      redirect: '/welcome'
    },
    {
      path: '/welcome',
      component: resolve => require(['../pages/Welcome.vue'], resolve),
      meta: {
        title: '欢饮体验vue-iuim'
      }
    }, {
      path: '/home',
      component: resolve => require(['../pages/Index.vue'], resolve),
      meta: {
        title: '组件列表'
      }
    }
  ]
});