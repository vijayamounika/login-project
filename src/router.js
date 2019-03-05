import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'


Vue.use(Router)

export default new Router({
  //mode: 'history',
  //base: process.env.BASE_URL,
  routes: [{
      path: '/',
      redirect: {
        name: 'Register'
      }
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: Dashboard,
      beforeEnter: (to, from, next) => {
        var token = localStorage.getItem('token');
        if (token) {
          next();
        } else {
          next('/Login');
        }

      }
    }
  ]
})