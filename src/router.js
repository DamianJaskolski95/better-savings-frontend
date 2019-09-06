import LayoutManager from "@/views/Layout/LayoutManager.vue"

import Vue from "vue";
import Router from "vue-router";

import Home from "./views/Home.vue";
import UserProfile from "@/views/UserProfile.vue"
import About from "@/views/About.vue";
import License from "@/views/License.vue"

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
          path: "home",
          name: "Home",
          component: Home
        },
        {
          path: "user",
          name: "User",
          component: UserProfile
        },
        {
          path: "about",
          name: "About",
          component: About
        },
        {
          path: "license",
          name: "License",
          component: License
        }
      ]
    }
  ]
});
