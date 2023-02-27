import { createApp } from 'vue';
import './style.scss';
import App from './App.vue';
import route from '@/router';
import { createPinia } from 'pinia';

createApp(App)
.use(route)
.use(createPinia())
.mount('#app');
