<template>
    <div>
      <h2>Lista de Empleados</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo Electrónico</th>
            <th>Puesto</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="empleado in empleados" :key="empleado.id">
            <td>{{ empleado.id }}</td>
            <td>{{ empleado.nombre }}</td>
            <td>{{ empleado.correo }}</td>
            <td>{{ empleado.puesto }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script lang="ts">
  import {defineComponent} from 'vue';
  
    export default defineComponent({
        name: 'ListaEmpleados',
        data() {
        return {
            empleados: [
            {
                id: 1,
                nombre: 'Juan',
                correo: 'abc@gmai.com',
                puesto: 'Desarrollador'
            },
            {
                id: 2,
                nombre: 'Pedro',
                correo: 'abc2@gmail.com',
                puesto: 'Diseñador'
            },
        ]
        }
    }
    });

  </script>
  
  