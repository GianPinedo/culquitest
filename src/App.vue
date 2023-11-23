<template>
  <div id="app">
    <!--Dividir en dos colunas-->
    <div id="coluna1" class="row">
      <div id="logo">
        <img src="../src/assets/bg.jpg" alt="logo" width="800" />
      </div>
      <div id="texto">
        <p id="texto2">Dale más power a tus empleados hoy</p>
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
          <button id="boton" type="submit">Iniciar sesión</button>
         
          <!-- <button @click="goToEmpleados">Ir a Empleados</button> -->
        </div>
        <div id="footer">
          <p id="foot">¿Eres nuevo aquí? <a id="creacta" href="https://www.culqi.com/" target="_blank">Crea una cuenta</a></p>
        </div>
      </form>
    </div>
</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router'; 
import '@fortawesome/fontawesome-free/css/all.css';


import axios from 'axios';
export default defineComponent({
  name: 'App',
  data() {
    return {
      username: 'c.quispe@culqi.com',
      password: '',
      errorMessage: '',
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
    
      try {
        
        const response = await axios.post('https://fepruebatecnicaculqi-backend-production.up.railway.app/auth/login', {
          correo: this.username,//c.quispe@culqi.com
          password: this.password,//admin123
        });

        
        if (response.data.status === 'error') {
          this.errorMessage = response.data.message; // Establece el mensaje de error
        } else {
          localStorage.setItem('token', response.data.data.token);
          this.$router.push('/empleados'); 
        }
      } catch (error) {
        // Manejo de errores en caso de problemas con la solicitud HTTP
        this.errorMessage = 'Correo o contraseña incorrectos';
        console.error('Error al iniciar sesión:', error);
      }
    },
  },
});
</script>


<style scoped>
/* Estilos CSS específicos del componente Login */
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
#boton{
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
#app {
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
  height: 1024px;
  flex-direction: column; /* Alinea elementos en columna en lugar de fila */
  align-items: center; /* Centra verticalmente los elementos en esta columna */
}

#coluna1 img {
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


/**

{
  "status": "success",
  "data": {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzAwNzAxMjEwLCJleHAiOjE3MDA3MDQ4MTB9.3Ok7lTvgc44nqUmGFsIc8kPxPxnB43JUSR0i6ps89t4",
      "user": {
          "id": 1,
          "nombre": "Christian Quispe",
          "correo": "c.quispe@culqi.com",
          "cargo": "System Administrator",
          "departamento": "IT Team",
          "oficina": "Culqi Office",
          "estadoCuenta": "Activada"
      }
  }
}
*/
