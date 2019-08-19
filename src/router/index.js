import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import Login from '@/views/Login'

import tab1 from '@/components/tab1'
import tab2 from '@/components/tab2'
import tab3 from '@/components/tab3'

Vue.use(Router)

export default new Router({
  routes: [
  {
    path: '/Login',
    name: 'Login',
    component: Login,
    hidden: false
  },
   {
     path: '/',
     name: 'Home',
     component: Home,
     hidden: true,
     children:[
       { path: '/tab1', component: tab1, name: 'tab1', hidden: false,},
       {path: '/tab2', component: tab2, name: 'tab2', hidden: false,},
       { path: '/tab3', component: tab3, name: 'tab3', hidden: false, }
      ]
   },


]
})
