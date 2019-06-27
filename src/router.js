import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/event',
      name: 'event',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () { 
        return import(/* webpackChunkName: "about" */ './views/1/Event.vue')
      }
    },
    {
      path: '/slot',
      name: 'slot',
      component: function () { 
        return import('./views/1/Slot.vue')
      }
    },
    {
      path: '/bindData',
      name: 'bindData',
      component: function () { 
        return import('./views/1/BindData.vue')
      }
    },
    {
      path: '/toindex',
      name: 'toindex',
      component: function () { 
        return import('./views/1/index.vue')
      }
    },
    {
      path: '/toupdate',
      name: 'toupdate',
      component: function () { 
        return import('./views/1/Update.vue')
      }
    },{
      path: '/compute',
      name: 'compute',
      component: function () { 
        return import('./views/1/Compute.vue')
      }
      
    },{
      path: '/funccomp',
      name: 'funccomp',
      component: function () { 
        return import('./views/1/Funccomp.vue')
      }
      
    }
    

  ]
})
