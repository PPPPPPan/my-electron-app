import { createApp } from 'vue'
import 'normalize.css'
import './assets/common.css'
import App from './App.vue'
import { createPinia } from 'pinia'


createApp(App).use(createPinia()).mount('#app')
