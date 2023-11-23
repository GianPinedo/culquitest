<template>
  
  <div class="app-container">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Poppins:wght@200&display=swap" rel="stylesheet">
    <nav class="sidebar">
      <div class="logo">
        <img src="../assets/logo_black.svg" alt="Logo" />
      </div>
      <ul class="menu">
        <li class="active"><span class="material-symbols-outlined">group</span>  Empleados</li>
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
            <div class="row">
              <div class="col-4">
                <div class="skeleton-row"></div>
              </div>
              <div class="col-4">
                <div class="skeleton-row"></div>
              </div>
              <div class="col-4">
                <div class="skeleton-row"></div>
              </div>
            </div>
            <br>
            <div class="row" id="firstrow">
              <div class="col-1">
                <div class="skeleton-row"></div>
              </div>
              <div class="col-2">
                <div class="skeleton-row"></div>
              </div>
              <div class="col-2">
                <div class="skeleton-row"></div>
              </div>
              <div class="col-1">
                <div class="skeleton-row"></div>
              </div>
              <div class="col-2">
                <div class="skeleton-row"></div>
              </div>
              <div class="col-1">
                <div class="skeleton-row"></div>
              </div>
              <div class="col-2">
                <div class="skeleton-row"></div>
              </div>
              <div class="col-1">
                <div class="skeleton-row"></div>
              </div>
            </div>
            <!-- ... generar un bucle para o filas ... -->
            <div v-for="n in 9" :key="n" class="row" id="secondrow">
              <div class="col-1">
                <div class="skeleton-row"></div>
              </div>
              <div class="col-2">
                <div class="skeleton-row"></div>
              </div>
              <div class="col-2">
                <div class="skeleton-row"></div>
              </div>
              <div class="col-1">
                <div class="skeleton-row"></div>
              </div>
              <div class="col-2">
                <div class="skeleton-row"></div>
              </div>
              <div class="col-1">
                <div class="skeleton-row"></div>
              </div>
              <div class="col-2">
                <div class="skeleton-row"></div>
              </div>
              <div class="col-1">
                <div class="skeleton-row"></div>
              </div>
            </div>
            <!-- ... Agrega más filas según sea necesario ... -->
          </div>
          <div v-else>
            <!--filters search input , select input-->
            <div class="filters">
              
                <div class="col-8">
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Buscar empleado">
                    <div class="input-group-append">
                      <button class="btn btn-outline-secondary" id="btn1" type="button">
                        <i class="fa fa-search"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-4">
                  <select class="form-control">
                    <option value="0">Nombre de cargo</option>
                    <option value="1">Activo</option>
                    <option value="2">Inactivo</option>
                  </select>
                </div>
              
            </div>
            <table  id="empleados-table" class="display">
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
                  <td>{{ empleado.nombre }}<br>
                    <small class="smallemail">{{ empleado.correo }}</small>
                  </td>
                  <!--<td>{{ empleado.correo }}</td>-->
                  <td>{{ empleado.cargo }}</td>
                  <td>{{ empleado.departamento }}</td>
                  <td>{{ empleado.oficina }}</td>
                  <td>{{ empleado.estadoCuenta }}</td>
                  <td>
                    <!--buton view-->
                    <button class="btn btn-success btn-sm m-1" data-toggle="modal" data-target="#viewModal">
                      <span class="material-symbols-outlined">
                      visibility
                      </span>
                    </button>
                    <!--edit buton-->
                    <button class="btn btn-primary btn-sm" data-toggle="modal" data-target="#viewModal">
                      <span class="material-symbols-outlined">
                      edit
                      </span>
                    </button>
                    <!--edit buton-->
                    <button class="btn btn-danger btn-sm m-1" data-toggle="modal" data-target="#viewModal">
                      <span class="material-symbols-outlined">
                      delete
                      </span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
           
          

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
  import { apiUrl } from '@/config';

    export default defineComponent({
        name: 'EmpleadosL',
        data() {
        return {
          isLoading : false,
          empleados: [] as any[], 
          paginaActual: 1,
          totalPaginas: 0,
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
        const dataTable = $('#empleados-table').DataTable({
          paging: true,
          lengthChange: false,
          searching: false,
        });
        $('#empleados-table').on('page.dt', () => {
          const pageInfo = dataTable.page.info();
          const currentPage = pageInfo.page + 1; 
          const totalShowing = pageInfo.end - pageInfo.start + 1;
          this.paginaActual = currentPage;
          this.totalPaginas = totalShowing;
          console.log('Número actual de página:', currentPage);
          console.log('Total mostrando:', totalShowing);
        });
        headers.append('Authorization', `Bearer ${token}`);
        const apiEndpoint = `${apiUrl}/empleados?limit=8&page=${this.paginaActual}`; 
    
        fetch(apiEndpoint, {
          method: 'GET', 
          headers: headers,
        })
          .then((response) => response.json())
          .then((data) => {
            this.empleados = data.data;
            this.isLoading = false; 
            // this.$nextTick(() => {
            //   $('#empleados-table').DataTable();
            // });
          })
          .catch((error) => {
            console.error('Error al obtener los datos de la API:', error);
          });
      },
    });

  </script>

  <style scoped>
  #btn1{
    border-radius: 10px;
  }
  .input-group {
      position: relative;
    }

    .input-group-append button {
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      padding: 0.375rem 0.75rem;
      border: none;
      background-color: transparent;
      border-radius: 10px;
      cursor: pointer;
    }
    .form-control{
        border-radius: 10px;
        border: 1px solid #E9EAEC;
        padding: 20px;
        width: 100%;
        height: 60px;
        font-size: 14px;
        color: #111827;
        background-color: #fff;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }
   .filters{
    display: flex ;
    padding-bottom: 25px;
    background-color: #fff;/**/
   }
   .display{
    color: #111827;
    }
    h2 {
      color: #111827;
    }
    .smallemail{
      color: #999;
    }
    #secondrow{
      padding: 10px;
      background-color: #fff;/**/
      }
    #firstrow{
      padding: 10px;
    background-color: #F1F2F4;/**/
      }
    .skeleton-loading {
      height: 700px;  
      background-color: #fff;
      padding: 20px;
      border-radius: 4px;
      margin-bottom: 20px;
    }
    .skeleton-row {
      height: 20px;
      width: 100%;
      margin-bottom: 10px;
      background-color: #F8F8F8;
      /**border circle */
      border-radius: 15px;
    }
  /* Estilos para el círculo naranja */
    .active{
      color: #00A19B !important;
    }
    .user-name{
      font-weight: 600;
      color: #111827;
    }
  .circle {
    width: 25px;
    height: 25px;
    background-color: #EB6F25; /* Color naranja */
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

    #maincontent {
      width: 100%;
      font-family: 'Poppins', sans-serif;
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
      width: 100px;
      height: 80px;
      margin-bottom: 20px;
    }
    
    .menu {
      height: 100%;
      list-style: none;
      padding: 0;
    }
    
    .menu li {
      padding: 10px;
      font-family: 'Poppins', sans-serif;
      color: #687588;
      margin-bottom: 10px;
    }
    /**hover */card
    .menu li:hover{
      color: #00A19B !important;
    }
    
    .logout-button {
      width: 100%;
      background-color: #fff; /* Fondo blanco */
      color: #687588; /* Texto gris */
      border: 2px solid #687588; /* Borde gris */
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
    }
    
    /* Estilos del encabezado */
    .app-header {
    display: flex;
    align-items: end;
    height: 100px;
    width: 100%;
    border-right: 1px solid var(--greyscale-300, #E9EAEC);
    background: var(--others-white, #FFF);
    border-bottom: 1px solid var(--greyscale-300, #E9EAEC);
    background: var(--others-white, #FFF);
  }
    
    .user-info-right {
      margin-top: 10px;
      padding: 25px 25px 25px 25px;
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
      color: #687588;
      background-color: #fff; /* Fondo blanco */
      border: 1px solid #fff; /* Borde gris */
      border-radius: 20px;
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
      border-bottom: 1px solid #F1F2F4; /* Borde inferior gris */
    }
    table th {
      background-color: #FAFAFA; /* Fondo gris */
      color: #687588; /* Texto blanco */
    }
  </style>
  
  