import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import HelloWorld from '@/components/HelloWorld'
import NewTest from '@/components/NewTest'
import LeftNav from '@/components/LeftNav'



Vue.use(Vuex);
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/newtest',
      name: 'NewTest',
      component: NewTest
    },
    {
      path:'/leftnav',
      name:'LeftNav',
      component:LeftNav
    }
  ]
})
