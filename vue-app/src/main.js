import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';

const app = createApp(App);

// Configuración de Axios como prop global para solicitudes http
app.config.globalProperties.$http = axios.create({
    baseURL: 'http://localhost:3000' // Direccion para las peticiones a la api
})

app.use(store);
app.use(router);

app.mount('#app');