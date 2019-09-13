import SideBar from "@/components/SidebarPlugin";
import GlobalComponents from "@/globalComponents.js";
import GlobalDirectives from "@/globalDirectives.js";

import Vue from "vue";
import '@/plugins/axios.js'
import App from "@/App.vue";
import router from "@/router.js";
import "@/plugins/vuematerial.js";
import store from '@/store/store.js'

Vue.use(SideBar);
Vue.use(GlobalComponents);
Vue.use(GlobalDirectives);

Vue.config.productionTip = false;

const token = localStorage.getItem('user-token');
if (token) {
  axios.defaults.headers.common['Authorization'] = token;
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
