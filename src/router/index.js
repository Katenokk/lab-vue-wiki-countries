// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import index from "../components/index.vue";
import CountriesList from "../components/CountriesList.vue";
import CountryDetails from "../components/CountryDetails.vue";

const routes = [
  {
    path: '/',
    name: 'root',
    component: () => import(/* webpackChunkName: 'index' */ '../components/index.vue')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import(/* webpackChunkName: 'list' */ '../components/CountriesList.vue'),
    children: [
      {
        path: '/details',
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