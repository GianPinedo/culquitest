<template>
  <div id="app2">
      <div id="coluna1">
        <div id="logo">
          <img id="bg" src="../../src/assets/login.png" alt="logo" width="100%" />
        </div>
        <div class="linea"></div>
        <div id="texto">
          <div>
            <div class="izq">
              <img id="logoimg" src="../../src/assets/logo_white.svg" alt="logo" width="50" />
            </div>
            <p id="texto2">Dale más power &#9889; a tus <br>empleados hoy &#x1F4AA;</p>
            <p id="texto3">Te ayudamos a gestionarlos de manera más sencilla</p>
          </div>
        </div>
      </div>
      <div id="coluna2">
        <h2>Inicia sesión</h2>
        <form @submit.prevent="login">
          <div>
            <label for="username">Correo Electrónico:<strong id="strong">*</strong></label>
            <input type="text" id="username" v-model="username" />
          </div>
          <br>
          <div>
            <label for="password">Contraseña: <strong id="strong">*</strong></label>
            <input type="password" id="password" v-model="password" />
            <div v-if="errorMessage" id="error" class="error-message">
              <br>
              <i class="fa fa-exclamation-circle"></i>
              {{ errorMessage }}
            </div>
          </div>
          <br>
          <div id="boxBoton">
            <!--is loading design-->
            <button v-if="isLoading" disabled class="boton">
              <i class="fa fa-spinner fa-spin"></i>
              Iniciando sesión...
            </button>
            <button  v-else class="boton" type="submit">Iniciar Sesión</button>
          </div>
          <div id="footer">
            <p id="foot">¿Eres nuevo aquí? <a id="creacta" href="https://www.culqi.com/" target="_blank">Crea una cuenta</a></p>
          </div>
        </form>
      </div>
  </div>
</template>
<script lang="ts">
import './login.css'
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import { apiUrl } from '@/config';

export default defineComponent({
  name: 'LoginV',
  setup() {
    const username = ref('c.quispe@culqi.com');
    const password = ref('');
    const errorMessage = ref('');
    const isLoading = ref(false);
    const router = useRouter();

    const goToEmpleados = () => {
      router.push('/empleados');
    };

    const login = async () => {
      isLoading.value = true;
      try {
        const response = await axios.post(apiUrl + '/auth/login', {
          correo: username.value,
          password: password.value,
        });
        if (response.data.status === 'error') {
          errorMessage.value = response.data.message;
        } else {
          localStorage.setItem('token', response.data.data.token);
          localStorage.setItem('usuario', response.data.data.user.nombre);
          goToEmpleados();
        }
      } catch (error) {
        errorMessage.value = 'Correo o contraseña incorrectos';
        console.error('Error al iniciar sesión:', error);
      } finally {
        isLoading.value = false;
      }
    };
    return {
      username,
      password,
      errorMessage,
      isLoading,
      goToEmpleados,
      login,
    };
  },
});
</script>

