import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import test from '@/views/test'
import home from '@/views/home'
import register from '@/views/register'
import login from '@/views/login'
import mailList from '@/views/mailList'
import contact from '@/views/contact'
import add from '@/views/add'
import personal from '@/views/personal'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/test',
      name:'test',
      component:test
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path:'/home',
    	name:'home',
    	component:home,
      children:[
        {
          path:'register',
          name:'register',
          component:register
        },
        {
          path:'login',
          name:'login',
          component:login
        }
      ]
    },
    {
      path:'/mailList',
      name:'mailList',
      component:mailList,
      children:[
        {
          path:'',
          name:'contact',
          component:contact
        },
        {
          path:'add',
          name:'add',
          component:add
        },
        {
          path:'personal',
          name:'personal',
          component:personal
        }
      ]
    }
  ]
})
