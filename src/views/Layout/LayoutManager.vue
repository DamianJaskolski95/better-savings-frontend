<template>
<div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
  <side-bar :key="sideBarRenderKey">
    <sidebar-link to="/login">
      <md-icon>account_box</md-icon>
      <p>Login</p>
    </sidebar-link>
    <sidebar-link to="/home">
      <md-icon>dashboard</md-icon>
      <p>Home</p>
    </sidebar-link>
    <sidebar-link v-if="loggedUser() !== null" to="/savings">
      <md-icon>attach_money</md-icon>
      <p>Savings</p>
    </sidebar-link>
    <sidebar-link to="/spendings">
      <md-icon>account_balance_wallet</md-icon>
      <p>Spendings</p>
    </sidebar-link>
    <sidebar-link to="/notes">
      <md-icon>notes</md-icon>
      <p>Notes</p>
    </sidebar-link>
    <sidebar-link to="/user">
      <md-icon>account_box</md-icon>
      <p>User</p>
    </sidebar-link>
    <sidebar-link to="/settings">
      <md-icon>settings_applications</md-icon>
      <p>Settings</p>
    </sidebar-link>
    <sidebar-link to="/faq">
      <md-icon>question_answer</md-icon>
      <p>FAQ</p>
    </sidebar-link>
  </side-bar>

  <div class="main-panel">
    <top-navbar></top-navbar>
    <site-content></site-content>
  </div>
  <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons">
</div>
</template>

<style lang="scss" scoped></style>

<script>
import SiteContent from "./Content.vue";
import TopNavbar from "./TopNavbar.vue";

export default {
  data() {
    return {
      sideBarRenderKey: 0
    }
  },
  methods: {
    loggedUser() {
      var test_token = localStorage.getItem('user-token');
      return test_token;
    },
    forceRerender() {
      ;
    }
  },
  components: {
    SiteContent,
    TopNavbar
  },
  mounted() {
    this.$root.$on('LayoutManager', () => {
      this.sideBarRenderKey += 1
      }
    )
  }
};
</script>
