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
            <span class="initials">{{siglas}}</span>
          </div>
          <span class="user-name">{{ username }}</span>
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
                <div v-if="isLoading" class="">
                  <div class="row">
                    <div class="col-12">
                      <div class="skeleton-row"></div>
                    </div>
                  </div>
                </div>
                <div v-else>
                  <button class="download-button m-2"><i class="fa fa-file-download"></i> Descargar</button>
                  <button class="new-button"><i class="fa fa-plus"></i> Nuevo</button>
                </div>
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
            <!-- ... add a loop for 9 rows ... -->
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
            <!-- ... end loop ... -->
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
                  <th>Nombre</th>
                  <th>Nombre cargo</th>
                  <th>Departamento</th>
                  <th>Oficina</th>
                  <th>Cuenta</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="empleado in employers" :key="empleado.id">
                  <!--<td>{{ empleado.id }}</td>-->
                  <td><strong class="font-bold">{{ empleado.nombre }}</strong><br>
                    <small class="smallemail">{{ empleado.correo }}</small>
                  </td>
                  <td>{{ empleado.cargo }}</td>
                  <td>{{ empleado.departamento }}</td>
                  <td>{{ empleado.oficina }}</td>
                  <td>{{ empleado.estadoCuenta }}</td>
                  <td>
                    <button class="rounded-button btn btn-success btn-sm m-1" data-toggle="modal" data-target="#viewModal">
                      <span class="material-symbols-outlined">
                        visibility
                      </span>
                    </button>
                    <button class="rounded-button btn btn-primary btn-sm" data-toggle="modal" data-target="#viewModal">
                      <span class="material-symbols-outlined">
                        edit
                      </span>
                    </button>
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
                      <a class="page-link" @click="loadTable(currentPage-1,limit)" aria-label="Anterior">
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    </li>
                    <li class="page-item" ><a class="page-link" :class="{ 'selected-page': currentPage === 1 }" @click="loadTable(1,limit)">1</a></li>
                    <li class="page-item" ><a class="page-link" :class="{ 'selected-page': currentPage === 2 }" @click="loadTable(2,limit)">2</a></li>
                    <li class="page-item" ><a class="page-link" :class="{ 'selected-page': currentPage === 3 }" @click="loadTable(3,limit)">3</a></li>
                    <li class="page-item" ><a class="page-link" :class="{ 'selected-page': currentPage === 4 }" @click="loadTable(4,limit)">4</a></li>
                    <li class="page-item" ><a class="page-link" :class="{ 'selected-page': currentPage === 5 }" @click="loadTable(5,limit)">5</a></li>
                    <li class="page-item" ><a class="page-link" :class="{ 'selected-page': currentPage === 6 }" @click="loadTable(6,limit)">6</a></li>
                    <li class="page-item" ><a class="page-link" :class="{ 'selected-page': currentPage === 7 }" @click="loadTable(7,limit)">7</a></li>
                    <li class="page-item" :class="{ 'selected-page': currentPage === 1 }">
                      <a class="page-link" @click="loadTable(currentPage+1,limit)" aria-label="Siguiente">
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div class="col-md-6 text-right">
                <!-- Texto "Mostrando X a Y de Z registros" y select -->
                Mostrando {{ startIndex }} a {{ endIndex }} de {{ totalRegistros }} registros
                <label for="recordsPerPage" class="mr-2"> </label>
                <select id="recordsPerPage" class="p-2" v-model="limit" @change="loadTable(currentPage,limit)">
                  <option value="8">Mostrar 8</option>
                  <option value="16">Mostrar 16</option>
                  <option value="24">Mostrar 24</option>
                  <option value="32">Mostrar 32</option>
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
import { defineComponent, ref, onMounted , computed} from 'vue';
import { useRouter } from 'vue-router';
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import axios from 'axios';
import './empleados.css';
import { apiUrl } from '@/config';


export default defineComponent({
  name: 'EmpleadosL',
  setup() {
    
    const router = useRouter();
    const isLoading = ref(false);
    const employers = ref<any[]>([]);
    const currentPage = ref(1);
    const limit = ref(8);
    const totalRegistros = ref(0);
    
    const username = ref('');
    const siglas = ref('');
    const startIndex = computed(() => ((currentPage.value - 1) * limit.value) + 1);
    const endIndex = computed(() => Math.min(currentPage.value * limit.value, totalRegistros.value));

    const salir = () => {
      localStorage.removeItem('token');
      localStorage.removeItem('usuario');
      router.push('/');
    };

    const loadTable = async (page: number, limitC: number) => {
      if (page < 1  ) {
        return;
      }
      isLoading.value = true;
      currentPage.value = page;
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No se encontró el token en localStorage');
        return;
      }
      const headers = new Headers();
      headers.append('Authorization', `Bearer ${token}`);
      const apiEndpoint = `${apiUrl}/empleados?limit=${limitC}&page=${page}`;
      try {
        const response = await fetch(apiEndpoint, {
          method: 'GET',
          headers: headers,
        });
        const data = await response.json();
        employers.value = data.data;
        totalRegistros.value = data.total;
        isLoading.value = false;
      } catch (error) {
        console.error('Error al obtener los datos de la API:', error);
      }
    };

    onMounted(() => {
      // Initialize Load
      loadTable(currentPage.value,limit.value); 

      //get user name from local storage and set initials letters
      username.value = localStorage.getItem('usuario') || '';
      siglas.value = username.value.split(' ').map((n) => n[0]).join('').toUpperCase();
    });

    return {
      isLoading,
      employers,
      currentPage,
      limit,
      startIndex,
      endIndex,
      totalRegistros,
      username,
      siglas,
      salir,
      loadTable,
    };
  },
});
</script>


  
  