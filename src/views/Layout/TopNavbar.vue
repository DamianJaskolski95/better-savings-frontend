<template>
  <md-toolbar md-elevation="0" class="md-transparent">
    <div class="md-toolbar-row">
      <div class="md-toolbar-section-start">
        <h3 class="md-title">{{ $route.name }}</h3>
      </div>
      <div class="md-toolbar-section-end">
        <div class="md-collapse">
          <md-list>
            <md-list-item href="#/">
              <i class="material-icons">dashboard</i>
              <p class="hidden-lg hidden-md">Dashboard</p>
            </md-list-item>
            <md-list-item href="#/user">
              <i class="material-icons">person</i>
              <p class="hidden-lg hidden-md">Profile</p>
            </md-list-item>
            <md-list-item>
              <button v-on:click="logout()">Logout</button>
            </md-list-item>
          </md-list>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
import {AUTH_REQUEST, AUTH_LOGOUT} from '@/store/actions/auth'

export default {
  data: () => ({
    email: null,
    password: null,
  }),
  methods: {
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    logout() {
      this.$store.dispatch(AUTH_LOGOUT)
      .then(() => {
        this.$router.push('/')
      })
    }
  }
};
</script>

<style lang="css"></style>
