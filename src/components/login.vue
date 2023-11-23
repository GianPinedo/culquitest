<template>
  <div id="app2">
      <div id="coluna1" class="row">
        <div id="logo">
          <img id="bg" src="../../src/assets/login.png" alt="logo" width="800" />
        </div>
        <div id="texto">
          <div class="izq">
            <img id="logoimg" src="../../src/assets/logo_white.svg" alt="logo" width="50" />
          </div>
          <p id="texto2">Dale más power &#9889; a tus <br>empleados hoy &#x1F4AA;</p>
          <p id="texto3">Te ayudamos a gestionarlos de manera más sencilla</p>
        </div>
      </div>
      <div id="coluna2">
        <h2>Inicia sesión</h2>
        <form @submit.prevent="login">
          <div>
            <label for="username">Correo Electrónico:<strong id="strong">*</strong></label>
            <input type="text" id="username" v-model="username" />
          </div>
          <div>
            <label for="password">Contraseña: <strong id="strong">*</strong></label>
            <input type="password" id="password" v-model="password" />
            <div v-if="errorMessage" id="error" class="error-message">
              <i class="fa fa-exclamation-circle"></i>
              {{ errorMessage }}
            </div>
          </div>
          <div id="boxBoton">
            <!--is loading design-->
            <button v-if="isloading" disabled class="boton">
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
import { apiUrl } from '@/config';
import axios from 'axios';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'LoginV',
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
  methods: {
    async login() {
      this.isloading = true;
      
      try {
        const response = await axios.post(apiUrl+'/auth/login', {
          correo: this.username,//c.quispe@culqi.com
          password: this.password,//admin123
        });
        if (response.data.status === 'error') {
          this.errorMessage = response.data.message;
        } else {
          localStorage.setItem('token', response.data.data.token);
          this.$router.push('/empleados'); 
        }
      } catch (error) {
        this.errorMessage = 'Correo o contraseña incorrectos';
        console.error('Error al iniciar sesión:', error);
      } finally {
        this.isloading = false; 
      }
      
    },
  },
});
</script>

<style scoped>
/* Estilos CSS específicos del componente Login */
.izq{
  margin-left: 60px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 10px;
}
#logoimg {
  margin-top: 25px;
  width: 100px;
  flex-direction: column;
  align-items: start;
  gap: 32px;
}
#error {
  color: red;
  margin-bottom: 10px;
}
#texto2{
  margin-left: 25px;
  font-size: 30px;
  font-weight: bold;
}
#texto{
  /**todo el ancho */
  width: 100%;
  color: #fff;
  background-color: #111827;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}
#strong{
  color: red;
}
#footer{
  
  display: flex;
  width: 490px;
  flex-direction: column;
  align-items: center;
  gap: 32px;
}
#creacta{
  /*sin subrayar*/
  text-decoration: none;
  color: #0CAF60;
}
#boxBoton{
  display: flex;
  width: 490px;
  flex-direction: column;
  align-items: flex-end;
  gap: 32px;
}
.boton{
  width: 100%;
  display: flex;
  height: 56px;
  padding: 21px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: 10px;
  background: var(--greyscale-900, #111827);
}
#app2 {
  /*modificar fuente*/
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: row;
  /*justify-content: space-between; /* Espacio entre las dos columnas */
  align-items: center; /* Centra verticalmente los elementos en la fila */
}

#coluna1 {

  flex: 1;
  display: flex;
  height: 100%;
  flex-direction: column; /* Alinea elementos en columna en lugar de fila */
  align-items: center; /* Centra verticalmente los elementos en esta columna */
}

#bg {
  /* Estilos para la imagen en la primera columna */
  max-width: 100%; /* Ajusta el ancho máximo de la imagen si es necesario */
  height: 700px; /* Ajusta la altura de la imagen automáticamente */
}

#coluna2 {
  flex: 1;
  display: flex;
  width: 720px;
  height: 1024px;
  padding: 24px 10px;
  /**margin end */
  margin-right: 25px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}
#username, #password {
  display: flex;
  padding: 16px 20px;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  border-radius: 10px;
  border: 1px solid var(--alerts-success-base, #0CAF60);
}
h2 {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
}

button {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>

