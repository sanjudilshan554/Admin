// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import '../vendor/jquery/jquery';
import '../vendor/jquery/jquery.slim';
import '../vendor/bootstrap/js/bootstrap.bundle'
import '../vendor/js/sb-admin-2'

// import '../vendor/chart.js/Chart.min.js'
// import '../vendor/js/demo/chart-area-demo.js'
// import '../vendor/js/demo/chart-pie-demo.js'
// import '../vendor/jquery-easing/jquery.easing'

import '../src/assets/sb-admin-2.css'
import '../src/assets/sb-admin-2.min.css'
import '../vendor/fontawesome-free/css/all.min.css'
import '../vendor/bootstrap/scss/bootstrap.scss'

createApp(App).use(router).mount('#app');
