import SideBar from "./plugins/SidebarPlugin";

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@/plugins/vuematerial.js";

Vue.use(SideBar);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
