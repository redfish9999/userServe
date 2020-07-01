import Vue from 'vue';
import Router from 'vue-router';

import Home from '../view/Home.vue';
import SignInPage from '../view/user/sign_in.vue';
import SignUpPage from '../view/user/sign_up.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'homePage',
    component: Home
  },
  {
    path: '/user/sign_in',
    name: 'signIn',
    component: SignInPage,
  },
  {
    path: '/user/sign_up',
    name: 'signUp',
    component: SignUpPage
  },
  {
    path: '*',
    name: 'defaultPage',
    component: Home
  }
];

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
