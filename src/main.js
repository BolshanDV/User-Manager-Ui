import Vue from 'vue'
import App from './App.vue'
import VCalendar from 'v-calendar';
import router from './router'
import 'materialize-css/dist/js/materialize.min'


Vue.config.productionTip = false
Vue.use(VCalendar);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
