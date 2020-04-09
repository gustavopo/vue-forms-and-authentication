import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import Vuelidate from 'vuelidate';
import router from './router';
import store from './store';

Vue.use(Vuelidate);

/* Axios global configuration */
//Set default baseURL
axios.defaults.baseURL =
  'https://vuejs-forms-and-authentication.firebaseio.com';
//SetHeaders to requests
//axios.defaults.headers.common['Authorization'] = 'authHeader';
//Get Headers from requests
axios.defaults.headers.get['Accepts'] = 'application/json';
//use interceptors to manipulate configuration between requests
const reqInterceptor = axios.interceptors.request.use((config) => {
  console.log('Request Interceptor', config);
  return config;
});

const respInterceptor = axios.interceptors.response.use((response) => {
  console.log('Response Interceptor', response);
  return response;
});

//Hide requests and responses from logs
axios.interceptors.request.eject(reqInterceptor);
axios.interceptors.request.eject(respInterceptor);

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
});
