import Vue from 'vue'
import Router from 'vue-router'
import Inbox from '@/components/Inbox'
import Email from '@/components/Email'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Inbox',
      component: Inbox
    },
    {
      path: '/item/:id',
      name: 'Email',
      component: Email
    }
  ]
})
