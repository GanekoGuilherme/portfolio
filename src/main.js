import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import isMobile from "@/plugins/isMobile";
import "./assets/index.scss";
Vue.config.productionTip = false;
Vue.use(isMobile);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
