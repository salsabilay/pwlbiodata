import { createRouter, createWebHistory } from 'vue-router';
import BiodataView from '../views/BiodataView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: BiodataView, // sementara home diarahkan ke Biodata
  },
  {
    path: '/biodata',
    name: 'Biodata',
    component: BiodataView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
