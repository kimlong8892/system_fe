import Vue from "vue";
import Vuex from 'vuex';
import VueRouter from "vue-router";
import App from "./App.vue";
import LightBootstrap from "./light-bootstrap-main";
import routes from "./routes/routes";
import "./registerServiceWorker";
import login from './store/auth/login';

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(LightBootstrap);

const router = new VueRouter({
  mode: "history", // Enable HTML5 history mode
  routes,
  linkActiveClass: "nav-item active",
  scrollBehavior: (to) => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
});

new Vue({
  login,
  el: "#app",
  render: (h) => h(App),
  router,
});
