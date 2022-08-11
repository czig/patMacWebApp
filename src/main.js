import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import VueMeta from 'vue-meta'
import { createPinia, PiniaVuePlugin } from 'pinia'

Vue.config.productionTip = false

//add pinia for store
Vue.use(PiniaVuePlugin)
const pinia = createPinia()

new Vue({
  router,
  vuetify,
  pinia,
  render: h => h(App)
}).$mount('#app')


//allows adjusting meta tags for google indexing
Vue.use(VueMeta)
