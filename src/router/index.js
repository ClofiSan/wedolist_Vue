import Vue from 'vue'
import Router from 'vue-router'
import LeftNav from '@/components/LeftNav'
import SideEdit from '@/components/sideEdit'
import ColorSelector from '@/components/ColorSelector'
import todoCard from "../components/todoCard";


Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/leftnav',
      name:'LeftNav',
      component:LeftNav
    },
    {
      path:'/sideEdit',
      name:'sideEdit',
      component:SideEdit
    },
    {
      path:'/colorSelector',
      name:'ColorSelector',
      component:ColorSelector
    },
    {
      path:'/todoCard',
      name:'todoCard',
      component:todoCard
    },

  ]
})
