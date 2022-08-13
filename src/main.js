import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import { createPinia } from 'pinia';

const pinia = createPinia();
// src/main.js

import 'bootstrap/dist/css/bootstrap.css';

createApp(App).use(router).use(pinia).mount('#app')

