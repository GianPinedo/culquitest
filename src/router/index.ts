import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Login from '@/components/login.vue';
import Empleados from '@/components/empleados.vue'; 

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Login',
        component: Login,
    },
    {
        path: '/empleados',
        name: 'Empleados',
        component: Empleados,
    },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
