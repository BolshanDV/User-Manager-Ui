import Vue from 'vue'
import App from './App.vue'
import VCalendar from 'v-calendar';
import Preloader from "./components/preloader";
import store from './store'
import router from './router'
import axios from "axios";
import AirDatepicker from 'air-datepicker';
import 'materialize-css/dist/js/materialize.min'


Vue.config.productionTip = false
Vue.use(VCalendar);

Vue.component('Preloader', Preloader)
new Vue({
  router,
  axios,
  store,
  AirDatepicker,
  render: h => h(App),
}).$mount('#app')
