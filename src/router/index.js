import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import Home from '@/components/Home'
import nous from '@/components/nous'
import diet from '@/components/diet'
import disease from '@/components/disease'

import sporthealth from '@/components/sporthealth'
import livinghealth from '@/components/livinghealth'
import seasonhealth from '@/components/seasonhealth'
import populationhealth from '@/components/populationhealth'
import healthcultivation from '@/components/healthcultivation'
import special from '@/components/special'

import login from '@/components/login'
import register from '@/components/register'
import reset from '@/components/reset'
import communicate from '@/components/communicate'

import userCenter from '@/components/userCenter'
import collect from '@/components/collect'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect: Home
    },
    
    {
      path: '/index',
      name: 'index',
      component:index,
      children:[
        {
          path: '/Home',
          name: 'Home',
          component: Home
        },
        {
          path: '/collect',
          name: 'collect',
          component: collect
        },
        {
          path: '/userCenter',
          name: 'userCenter',
          component: userCenter
        },
        {
          path: '/nous',
          name: 'nous',
          component: nous
        },
        {
          path: '/diet',
          name: 'diet',
          component: diet
        },
        {
          path: '/disease',
          name: 'disease',
          component: disease
        },
        
        {
          path: '/seasonhealth',
          name: 'seasonhealth',
          component: seasonhealth,
        },
        {
          path: '/populationhealth',
          name: 'populationhealth',
          component: populationhealth,
        },
        {
          path: '/sporthealth',
          name: 'sporthealth',
          component: sporthealth,
        },
        {
          path: '/livinghealth',
          name: 'livinghealth',
          component: livinghealth,
        },
        {
          path: '/healthcultivation',
          name: 'healthcultivation',
          component: healthcultivation,
        },
        {
          path: '/special',
          name: 'special',
          component: special
        },
        {
          path: '/login',
          name: 'login',
          component: login
        },
        {
          path: '/register',
          name: 'register',
          component: register
        },
        {
          path: '/reset',
          name: 'reset',
          component: reset
        },
        {
          path: '/communicate',
          name: 'communicate',
          component: communicate
        },
      ]
    },
  ]
})
