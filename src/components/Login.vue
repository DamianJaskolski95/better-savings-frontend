<template>
  <div class="login-user">
    <h2>
      Login
    </h2>
    <form class="login" @submit.prevent="loginUser()">
      <md-field>
        <md-input v-model="email" placeholder="Email"></md-input>
      </md-field>
      <md-field>
        <md-input v-model="password" type="password" placeholder="Password"></md-input>
      </md-field>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { AUTH_REQUEST } from '@/store/actions/auth'

export default {
  name: "login-user",
  data() {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    loginUser() {
      const { email, password } = this
      this.$store.dispatch(AUTH_REQUEST, { email, password }).then(() => {
        this.$router.push('/dashboard')
      })
    },
  }
};
</script>
