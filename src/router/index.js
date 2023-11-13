import { createRouter, createWebHistory } from 'vue-router';
import EmployeesPage from '@/pages/EmployeesPage.vue';

const routes = [
  { path: '/', component: EmployeesPage },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
