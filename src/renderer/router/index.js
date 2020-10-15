/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/land',
      name: 'landing-page',
      component: require('@/components/LandingPage').default,
    },
    {
      path: '/',
      name: 'Main',
      component: require('@/components/main').default,
    },
    {
      path: '/champion',
      name: 'champion',
      component: require('@/components/champion').default,
    },
    {
      path: '/background',
      name: 'background',
      component: require('@/components/background').default,
    },
    {
      path: '/ranked',
      name: 'ranked',
      component: require('@/components/background').default,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
