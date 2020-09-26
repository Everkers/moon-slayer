/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/status',
      name: 'landing-page',
      component: require('@/components/LandingPage'),
    },
    {
      path: '/champion',
      name: 'champion',
      component: require('@/components/champion').default,
    },
    {
      path: '/',
      name: 'background',
      component: require('@/components/background').default,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
