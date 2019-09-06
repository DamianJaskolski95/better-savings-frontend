import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "@/views/About.vue";
import LayoutManager from "@/views/Layout/LayoutManager.vue"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "LayoutManager",
      redirect: "/home",
      component: LayoutManager,
      children: [
        {
          path: "about",
          name: "About",
          component: About
        },
        {
          path: "home",
          name: "Home",
          component: Home
        }
      ]
    }
  ]
});
