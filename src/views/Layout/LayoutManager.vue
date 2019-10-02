 r<template>
<div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
  <side-bar>
    <sidebar-link to="/dashboard">
      <md-icon>dashboard</md-icon>
      <p>Dashboard</p>
    </sidebar-link>
    <sidebar-link v-if="loggedUser() !== null" to="/savings">
      <md-icon>attach_money</md-icon>
      <p>Savings</p>
    </sidebar-link>
    <sidebar-link to="/dashboard/spendings">
      <md-icon>account_balance_wallet</md-icon>
      <p>Spendings</p>
    </sidebar-link>
    <sidebar-link to="/dashboard/notes">
      <md-icon>notes</md-icon>
      <p>Notes</p>
    </sidebar-link>
    <sidebar-link to="/dashboard/user">
      <md-icon>account_box</md-icon>
      <p>User</p>
    </sidebar-link>
    <sidebar-link to="/dashboard/settings">
      <md-icon>settings_applications</md-icon>
      <p>Settings</p>
    </sidebar-link>
    <sidebar-link to="/dashboard/faq">
      <md-icon>question_answer</md-icon>
      <p>FAQ</p>
    </sidebar-link>
  </side-bar>

  <div class="main-panel">
    <top-navbar></top-navbar>
    <site-content class="page-content"></site-content>
  </div>
  <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons">
</div>
</template>

<style lang="scss" scoped>
.page-content {
}
</style>

<script>
import SiteContent from "./Content.vue";
import TopNavbar from "./TopNavbar.vue";

export default {
  methods: {
    loggedUser() {
      var test_token = localStorage.getItem('user-token');
      return test_token;
    }
  },
  components: {
    SiteContent,
    TopNavbar
  }
};
</script>
