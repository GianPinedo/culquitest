import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importa tu configuración de router

const app = createApp(App);
app.use(router); // Usa el router

app.mount('#app');


