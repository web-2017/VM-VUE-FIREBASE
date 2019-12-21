import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";
import dateFilter from "@/filter/date.filter";
import messagePlugin from "@/utils/message.plugin";
import "materialize-css/dist/js/materialize.min";

import firebase from "firebase";
import "firebase/auth";
import "firebase/database";
import { firebaseConfig } from "./firebase/firebase";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// https://www.youtube.com/watch?v=CTLonYohENw&list=PLqKQF2ojwm3njNpksFCi8o-_c-9Vva_W0&index=8

Vue.filter("date", dateFilter);
Vue.use(Vuelidate);
Vue.use(messagePlugin);

Vue.config.productionTip = false;

// Метода onAuthStateChanged вызывается несколько раз, чтоб этого избежать записываем все в app
let app;
// Только при авторизации дает доступ
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
