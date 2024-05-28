import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';

const app = createApp(App);

// Configuración de Axios
app.config.globalProperties.$http = axios.create({
    baseURL: 'http://localhost:3000'
});

app.use(store);
app.use(router);

app.mount('#app');

// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'


// createApp(App).use(store).use(router).mount('#app')
