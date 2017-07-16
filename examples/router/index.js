import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const routeMap = {
  routes: [{
    path: '/',
    redirect: '/welcome'
  },
  {
    path: '/welcome',
    component: resolve => require(['../pages/Welcome.vue'], resolve),
    meta: {
      title: '欢迎体验vue-iuim'
    }
  }, {
    path: '/home',
    component: resolve => require(['../pages/Index.vue'], resolve),
    meta: {
      title: '组件列表'
    }
  },
  {
    path: '/home/display',
    component: resolve => require(['../pages/layouts/Display.vue'], resolve),
    meta: {
      title: '演示'
    },
    children: [{
      path: 'loading',
      component: resolve => require(['../components/Loading.vue'], resolve),
      meta: {
        title: 'loading'
      }
    },
    {
      path: 'popover',
      component: resolve => require(['../components/Popover.vue'], resolve),
      meta: {
        title: 'popover'
      }
    }]
  }]
}
export default new Router(routeMap)
