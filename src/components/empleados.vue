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
      <button class="logout-button" @click="salir()">Salir</button>
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
            <div class="col-4 text-right">
                <button class="download-button m-2"><i class="fa fa-file-download"></i> Descargar</button>
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
                <div class="skeleton-row-h"></div>
              </div>
              <div class="col-2">
                <div class="skeleton-row-h"></div>
              </div>
              <div class="col-2">
                <div class="skeleton-row-h"></div>
              </div>
              <div class="col-1">
                <div class="skeleton-row-h"></div>
              </div>
              <div class="col-2">
                <div class="skeleton-row-h"></div>
              </div>
              <div class="col-1">
                <div class="skeleton-row-h"></div>
              </div>
              <div class="col-2">
                <div class="skeleton-row-h"></div>
              </div>
              <div class="col-1">
                <div class="skeleton-row-h"></div>
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
                    <button class="rounded-button btn btn-success btn-sm m-1" data-toggle="modal" data-target="#viewModal">
                      <span class="material-symbols-outlined">
                        visibility
                      </span>
                    </button>
                    <!--edit button-->
                    <button class="rounded-button btn btn-primary btn-sm" data-toggle="modal" data-target="#viewModal">
                      <span class="material-symbols-outlined">
                        edit
                      </span>
                    </button>
                    <!--delete button-->
                    <button class="rounded-button btn btn-danger btn-sm m-1" data-toggle="modal" data-target="#viewModal">
                      <span class="material-symbols-outlined">
                        delete
                      </span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="row mt-3">
              <div class="col-md-6">
                <!-- Paginador -->
                <nav aria-label="Page navigation">
                  <ul class="pagination">
                    <li class="page-item">
                      <a class="page-link" @click="loadTable(paginaActual-1)" aria-label="Anterior">
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    </li>
                    <li class="page-item" ><a class="page-link" :class="{ 'selected-page': paginaActual === 1 }" @click="loadTable(1)">1</a></li>
                    <li class="page-item" ><a class="page-link" :class="{ 'selected-page': paginaActual === 2 }" @click="loadTable(2)">2</a></li>
                    <li class="page-item" ><a class="page-link" :class="{ 'selected-page': paginaActual === 3 }" @click="loadTable(3)">3</a></li>
                    <li class="page-item" ><a class="page-link" :class="{ 'selected-page': paginaActual === 4 }" @click="loadTable(4)">4</a></li>
                    <li class="page-item" ><a class="page-link" :class="{ 'selected-page': paginaActual === 5 }" @click="loadTable(5)">5</a></li>
                    <li class="page-item" ><a class="page-link" :class="{ 'selected-page': paginaActual === 6 }" @click="loadTable(6)">6</a></li>
                    <li class="page-item" ><a class="page-link" :class="{ 'selected-page': paginaActual === 7 }" @click="loadTable(7)">7</a></li>
                    <li class="page-item" :class="{ 'selected-page': paginaActual === 1 }">
                      <a class="page-link" @click="loadTable(paginaActual+1)" aria-label="Siguiente">
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div class="col-md-6 text-right">
                <!-- Texto "Mostrando X a Y de Z registros" y select -->
                Mostrando {{ paginaActual }} a 8 de {{ totalRegistros }} registros
                <label for="recordsPerPage" class="mr-2"> </label>
                <select id="recordsPerPage" class="p-2">
                  <option>Mostrar 8</option>
                  <option>Mostrar 25</option>
                  <option>Mostrar 50</option>
                  <option>Mostrar 100</option>
                </select>
                
              </div>
            </div>
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
            totalRegistros: 0,
            totalPaginas: 0,
          }
        },
        methods:{
          salir(){
            localStorage.removeItem('token');
            this.$router.push('/');
          },
          async loadTable(page: number){
            if(page < 1){
              return
            }
            this.isLoading = true;
            this.paginaActual = page;
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
            const apiEndpoint = `${apiUrl}/empleados?limit=8&page=${page}`; 
        
            fetch(apiEndpoint, {
              method: 'GET', 
              headers: headers,
            })
              .then((response) => response.json())
              .then((data) => {
                this.empleados = data.data;
                this.totalRegistros = data.total
                this.isLoading = false; 
                // this.$nextTick(() => {
                //   $('#empleados-table').DataTable();
                // });
              })
              .catch((error) => {
                console.error('Error al obtener los datos de la API:', error);
              });
          }
        },
        mounted() {
          this.loadTable(1);
        }, 
    });
  </script>


  
  