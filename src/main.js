/* Import main layouts */

/* Import core components */
import Vue from 'vue';
import './jquery';

/* import scss and less styles */
import './assets/styles.scss'

import App from './App.vue'
import VueRouter from 'vue-router'
import Homepage from "./components/Homepage";
import Services from "./components/Services";


/* import vue router */
Vue.use(VueRouter);
Vue.config.productionTip = false;
const router = new VueRouter({
  routes: [
    {
      path: '',
      component: Homepage
    },
    {
      path: '/services',
      component: Services
    }
  ],
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');