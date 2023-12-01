<template>
  <div id="app">
    <RouterView />   
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router'; 
import '@fortawesome/fontawesome-free/css/all.css';
import Login from './components/login.vue';
import Empleados from './components/empleados.vue';
import { createRouter, createWebHistory } from 'vue-router';

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

export default defineComponent({
  name: 'LoginPage',
  router,
  data() {
    return {
      username: 'c.quispe@culqi.com',
      password: '',
      errorMessage: '',
      isloading: false,
    };
  },
  setup() {
    const router = useRouter();
    const goToEmpleados = () => {
      router.push('/empleados');
    };

    return {
      goToEmpleados,
    };
  },
 
});
</script>

