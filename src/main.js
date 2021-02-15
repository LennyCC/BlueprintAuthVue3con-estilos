import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as firebase from 'firebase';

import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/main.css'

Vue.config.productionTip = false

const firebaseConfig = {
    apiKey: "AIzaSyBzEBPH5n8SYpVem0g6vBAcXWnrb6B3uT0",
    authDomain: "blueprint-d8d73.firebaseapp.com",
    projectId: "blueprint-d8d73",
    storageBucket: "blueprint-d8d73.appspot.com",
    messagingSenderId: "809559128776",
    appId: "1:809559128776:web:fbbf08afa7ffd89c2f43fd",
    measurementId: "G-FNVQ4KLZFS"
}

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
