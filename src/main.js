import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueTheMask from "vue-the-mask";
import VueCarousel from "vue-carousel";

Vue.use(VueTheMask);
Vue.use(VueCarousel);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
