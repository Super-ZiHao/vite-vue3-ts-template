import { createApp } from 'vue';
import './style.scss';
import App from './App.vue';
import route from '@/router';
import { createPinia } from 'pinia';
import { registerStore } from './store';

createApp(App)
.use(route)
.use(createPinia())
.mount('#app');

registerStore();