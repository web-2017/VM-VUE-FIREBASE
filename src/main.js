import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router/router";
import dateFilter from "./filter/date.filter";
import store from "./store";
import "./registerServiceWorker";
import "materialize-css/dist/js/materialize";

Vue.filter("date", dateFilter);
Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
