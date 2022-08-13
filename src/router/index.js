// src/router.js
import { createRouter, createWebHistory } from 'vue-router';

import CountriesList from "../components/CountriesList.vue";
import CountryDetails from "../components/CountryDetails.vue";

const routes = [

  {
    path: '/list',
    name: 'list',
    component: () => import(/* webpackChunkName: 'list' */ '../components/CountriesList.vue'),
    children: [
      {
        path: '/details/:id',
        name: 'details',
        component: () => import(/* webpackChunkName: 'details' */ '../components/CountryDetails.vue')
      },
    ]
  }
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
});

export default router;