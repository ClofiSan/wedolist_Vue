import Vue from 'vue'
import Router from 'vue-router'
import LeftNav from '@/components/LeftNav'
import SideEdit from '@/components/sideEdit'
import ColorSelector from '@/components/ColorSelector'
import todoCard from "../components/todoCard";

import todoView from "../views/todoView"
import historyView from "../views/historyView";
import loginView from "../views/loginView";
import aboutView from "../views/aboutView";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/aboutView',
      name:aboutView,
      component:aboutView
    },
    {
      path:'/loginView',
      name:loginView,
      component:loginView
    },
    {
      path:'/todoView',
      name:todoView,
      component:todoView
    },
    {
      path:'/historyView',
      name:historyView,
      component:historyView
    },
    {
      path:'/leftNav',
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
    {
      path:"*",
      redirect:'/loginView'
    }

  ]
})
