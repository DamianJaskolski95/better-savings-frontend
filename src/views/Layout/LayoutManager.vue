<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">

    <side-bar>
      <sidebar-link to="/home">
        <md-icon>dashboard</md-icon>
        <p>Home</p>
      </sidebar-link>
      <sidebar-link to="/savings">
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

    <div class ="main-panel">
      <site-content></site-content>
      <site-content></site-content>
    </div>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
  </div>
</template>

<style lang="scss" scoped></style>

<script>
  import SiteContent from "./Content.vue";

  export default {
  components: {
    SiteContent,
  }
};
</script>
