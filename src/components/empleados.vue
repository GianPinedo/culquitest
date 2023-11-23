<template>
  
  <div class="app-container">
    <nav class="sidebar">
      <div class="logo">
        <img src="../assets/logo_black.svg" alt="Logo" />
      </div>
      <ul class="menu">
        <li class="active"><i class="fa fa-users"></i>  Empleados</li>
        <li><i class="fa fa-briefcase"></i> Reclutamiento</li>
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
          <p>Gestiona tus empleados</p>
          <div v-if="isLoading" class="skeleton-loading">
            <!-- Aquí puedes agregar elementos de Skeleton -->
            <div class="skeleton-row"></div>
            <div class="skeleton-row"></div>
            <div class="skeleton-row"></div>
            <!-- ... Agrega más filas según sea necesario ... -->
          </div>
          <table v-else id="empleados-table" class="display">
            <thead>
              <tr>
                <!--<th>ID</th>-->
                <th>Nombre</th>
                <th>Nombre cargo</th>
                <th>Departamento</th>
                <th>Oficina</th>
                <th>Cuenta</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="empleado in empleados" :key="empleado.id">
                <!--<td>{{ empleado.id }}</td>-->
                <td>{{ empleado.nombre }}</td>
                <!--<td>{{ empleado.correo }}</td>-->
                <td>{{ empleado.cargo }}</td>
                <td>{{ empleado.departamento }}</td>
                <td>{{ empleado.oficina }}</td>
                <td>{{ empleado.estadoCuenta }}</td>
                <td>
                  <!--buton view-->
                  <button class="btn btn-primary btn-sm m-1" data-toggle="modal" data-target="#viewModal">
                    <i class="fa fa-eye"></i>
                  </button>
                  <!--edit buton-->
                  <button class="btn btn-success btn-sm" data-toggle="modal" data-target="#viewModal">
                    <i class="fa fa-pen"></i>
                  </button>
                  <!--edit buton-->
                  <button class="btn btn-danger btn-sm m-1" data-toggle="modal" data-target="#viewModal">
                    <i class="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>
    </div>
  </div>
</template>

  <script lang="ts">
  /* global $ */
  import {defineComponent} from 'vue';
  import $ from 'jquery';
  import 'datatables.net';
  import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';
  import '@fortawesome/fontawesome-free/css/all.css';
  import 'bootstrap/dist/css/bootstrap.css'; 
  import 'bootstrap/dist/js/bootstrap.bundle.min.js';

    export default defineComponent({
        name: 'EmpleadosL',
        data() {
        return {
          isLoading : false,
          empleados: [] as any[], 
        }
      },
      mounted() {
        this.isLoading = true;
        const token = localStorage.getItem('token');
        if (!token) {
          console.error('No se encontró el token en localStorage');
          return;
        }
        console.log(token)
        const headers = new Headers();
        headers.append('Authorization', `Bearer ${token}`);
        fetch('https://fepruebatecnicaculqi-backend-production.up.railway.app/empleados?limit=10&page=4', {
          method: 'GET', 
          headers: headers,
        })
          .then((response) => response.json())
          .then((data) => {
            this.empleados = data.data;
            this.isLoading = false; 
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
  .skeleton-loading {
    height: 700px;  
    background-color: #f3f3f3;
    padding: 20px;
    border-radius: 4px;
    margin-bottom: 20px;
  }

.skeleton-row {
  height: 20px;
  width: 100%;
  margin-bottom: 10px;
  background-color: #e0e0e0;
}
  /* Estilos para el círculo naranja */
  .active{
    color: #00A19B !important;
  }
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
   font-family: 'system-ui';
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
    height: 100%;
    list-style: none;
    padding: 0;
  }
  
  .menu li {
    padding: 25px;
    font-family: 'system-ui';
    color: #333;
    margin-bottom: 10px;
  }
  /**hover */
  .menu li:hover{
    color: #00A19B !important;
  }
  
  .logout-button {
    width: 100%;
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
  align-items: end;
  height: 50px;
  width: 100%;
  border-right: 1px solid var(--greyscale-300, #E9EAEC);
  background: var(--others-white, #FFF);
  border-bottom: 1px solid var(--greyscale-300, #E9EAEC);
  background: var(--others-white, #FFF);
}
  
  .user-info-right {
    padding: 20px;
    display: flex;
    align-items: center;
    margin-left: auto; /* Moverá el elemento a la derecha */
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
  
  