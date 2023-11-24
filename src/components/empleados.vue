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
          <div class="row">
            <div class="col-8">
              <h2 class="text-bold">Empleados</h2>
              <p>Gestiona tus empleados</p>
            </div>
            <div class="col-4 align-right">
                <button class="download-button m-2"><i class="fa fa-file-excel"></i> Descargar</button>
                <button class="new-button"><i class="fa fa-plus"></i> Nuevo</button>
            </div>
          </div>
         
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
                <div class="col-8 p-0">
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
                  <td><strong class="font-bold">{{ empleado.nombre }}</strong><br>
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
  import './empleados.css'
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


  
  