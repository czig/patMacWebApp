import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import VueMeta from 'vue-meta'
import { createPinia, PiniaVuePlugin } from 'pinia'
import axios from 'axios'

Vue.config.productionTip = false

//add pinia for store
Vue.use(PiniaVuePlugin)
const pinia = createPinia()

//set axios defaults
axios.defaults.baseURL = 'http://localhost:5005/api'
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

new Vue({
  router,
  vuetify,
  pinia,
  render: h => h(App)
}).$mount('#app')


//allows adjusting meta tags for google indexing
Vue.use(VueMeta)
