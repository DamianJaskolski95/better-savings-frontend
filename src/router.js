import LayoutManager from "@/views/Layout/LayoutManager.vue"

import Vue from "vue";
import Router from "vue-router";

import Home from "@/views/Home.vue";
import Spendings from "@/views/Spendings.vue"
import UserProfile from "@/views/UserProfile.vue"
import About from "@/views/About.vue";
import License from "@/views/License.vue"
import store from "@/store/store.js"

Vue.use(Router);

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next()
    return
  }
  next('/')
}

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/dashboard",
      name: "Home",
      component: LayoutManager,
      beforeEnter: ifAuthenticated,
      children: [
        {
          path: "spendings",
          name: "Spendings",
          component: Spendings,
          beforeEnter: ifAuthenticated
        },
        {
          path: "user",
          name: "User",
          component: UserProfile,
          beforeEnter: ifAuthenticated
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
