import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router/router";
import dateFilter from "./filter/date.filter";
import store from "./store";
import "materialize-css/dist/js/materialize";

Vue.filter("date", dateFilter);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
