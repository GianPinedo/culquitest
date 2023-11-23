<template>
  <div>
    <h2>Iniciar sesión</h2>
    <form @submit.prevent="login">
      <div>
        <label for="username">Nombre de usuario:</label>
        <input type="text" id="username" v-model="username" />
      </div>
      <div>
        <label for="password">Contraseña:</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <div>
        <button type="submit">Iniciar sesión</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LoginV',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      // Aquí puedes agregar la lógica de inicio de sesión
      // Por ejemplo, enviar los datos de inicio de sesión a un servidor
      // y manejar la respuesta.
    },
  },
});
</script>

<style scoped>
/* Estilos CSS específicos del componente Login */
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
