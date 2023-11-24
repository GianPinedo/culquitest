<template>
  
  <div class="app-container">
    <nav class="sidebar">
      <div class="logo">
        <img src="../assets/logo_black.svg" alt="Logo" />
      </div>
      <ul class="menu">
        <li>Menú 1</li>
        <li>Menú 2</li>
      </ul>
      <button class="logout-button">Salir</button>
    </nav>
    <div id="maincontent">
      <div class="app-header">
        <div class="user-info-right">
          <div class="circle">
            <span class="initials">CQ</span>
          </div>
          <span class="user-name">Christian Quispe</span>
        </div>
      </div>
      <div class="content">
        <div class="card">
          <h2>Empleados</h2>
          <table id="empleados-table" class="display">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Correo Electrónico</th>
                <th>Cargo</th>
                <th>Departamento</th>
                <th>Oficina</th>
                <th>Estado de Cuenta</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="empleado in empleados" :key="empleado.id">
                <td>{{ empleado.id }}</td>
                <td>{{ empleado.nombre }}</td>
                <td>{{ empleado.correo }}</td>
                <td>{{ empleado.cargo }}</td>
                <td>{{ empleado.departamento }}</td>
                <td>{{ empleado.oficina }}</td>
                <td>{{ empleado.estadoCuenta }}</td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>
    </div>
  </div>
</template>
<!-- Agrega las hojas de estilo y scripts de DataTables y jQuery -->
  <script lang="ts">
  /* global $ */
  import {defineComponent} from 'vue';
  import $ from 'jquery';
  import 'datatables.net';
  import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';

    export default defineComponent({
        name: 'EmpleadosL',
        data() {
        return {
          empleados: [] as any[], 
        }
      },
      mounted() {
        // Obtén el token de localStorage
        const token = localStorage.getItem('token'); // Reemplaza 'mi_token' con la clave real de tu token

        if (!token) {
          console.error('No se encontró el token en localStorage');
          return;
        }
        console.log(token)
        const headers = new Headers();
        headers.append('Authorization', `Bearer ${token}`);
        fetch('https://fepruebatecnicaculqi-backend-production.up.railway.app/empleados?limit=10&page=4', {
          method: 'GET', // Puedes ajustar el método según tu API
          headers: headers,
        })
          .then((response) => response.json())
          .then((data) => {
            this.empleados = data.data; 
            this.$nextTick(() => {
              $('#empleados-table').DataTable();
            });
          })
          .catch((error) => {
            console.error('Error al obtener los datos de la API:', error);
          });
      },
    });

  </script>
  <style scoped>
  /* Estilos para el círculo naranja */
  .user-name{
    color: #333;
  }
.circle {
  width: 20px;
  height: 20px;
  background-color: orange; /* Color naranja */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
}

.initials {
  font-size: 10px;
  font-weight: bold;
  color: white; /* Texto blanco */
}

  #maincontent{
   width: 100%; 
   font-family: 'Roboto', sans-serif;
  }
  /* Estilos generales */
  .app-container {
    display: flex;
    flex-direction: row;
    height: 100vh;
    background-color: #F8F8F8; /* Fondo gris */
    color: #fff; /* Texto blanco */
  }
  
  /* Estilos de la barra lateral */
  .sidebar {
    display: flex;
    width: 280px;
    height: 900;
    padding: 24px 32px;
    flex-direction: column;
    align-items: flex-start;
    border-right: 1px solid var(--greyscale-300, #E9EAEC);
    background: var(--others-white, #FFF);
  }
  
  .logo img {
    width: 80px;
    height: 80px;
    margin-bottom: 20px;
  }
  
  .menu {
    list-style: none;
    padding: 0;
  }
  
  .menu li {
    margin-bottom: 10px;
  }
  
  .logout-button {
    background-color: #fff; /* Fondo blanco */
    color: #333; /* Texto gris */
    border: 2px solid #333; /* Borde gris */
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  /* Estilos del encabezado */
  .app-header {
    display: flex;
    justify-content: space-between;
    align-items: end;
    height: 50px;;
    width: 100%;
    border-right: 1px solid var(--greyscale-300, #E9EAEC);
    background: var(--others-white, #FFF);
    border-bottom: 1px solid var(--greyscale-300, #E9EAEC);
    background: var(--others-white, #FFF);
  }
  
  .user-info-right {
    width: 100%;
    display: flex;
    align-items: center;
  }
  
  .user-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }
  
  /* Estilos del contenido */
  .content {
    
    flex: 2;
    padding: 20px;
    overflow: auto;
  }
  
  .card {
    color: #333;
    background-color: #fff; /* Fondo blanco */
    /*border: 1px solid #333; /* Borde gris */
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 20px;
  }
  
  /* Estilos de la tabla */
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  table th,
  table td {
    padding: 10px;
    text-align: left;
    /*border-bottom: 1px solid #333; /* Borde inferior gris */
  }
  
  table th {

    background-color: #FAFAFA; /* Fondo gris */
    color: #333; /* Texto blanco */
  }
  
  /* Otros estilos según tus necesidades */
  </style>
  
  