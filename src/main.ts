import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router'; 
import Login from './components/login.vue';
import Empleados from './components/empleados.vue';
import 'jquery';
import 'datatables.net';
import './index.css'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
        path: '/empleados',
        name: 'EmpleadosL',
        component: Empleados
    }
  ],
});

const app = createApp(App).use(router);

app.mount('#app');