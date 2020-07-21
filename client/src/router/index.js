import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import LearnPage from '../views/LearnPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/learning',
    name: 'LearnPage',
    component: LearnPage
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
