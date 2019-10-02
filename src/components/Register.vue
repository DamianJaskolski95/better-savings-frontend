<template>
  <div class="register-user">
    <h2>
      Register
    </h2>
    <form class="register" @submit.prevent="register()">
      <md-field>
        <md-input v-model="login_r" type="login" placeholder="Login"></md-input>
      </md-field>
      <md-field>
        <md-input v-model="email_r" placeholder="Email"></md-input>
      </md-field>
      <md-field>
        <md-input v-model="password_r" type="password" placeholder="Password" autocomplete="new-password"></md-input>
      </md-field>
      <md-field>
        <md-input v-model="password_confirmation_r" type="password" placeholder="Repeat password"></md-input>
      </md-field>
      <button type="submit">Register</button>
    </form>
  </div>
</template>


<script>
import { USER_REGISTER } from '@/store/actions/user'

export default {
  name: "register-user",
  data() {
    return {
      login_r: null,
      email_r: null,
      password_r: null,
      password_confirmation_r: null
    }
  },
  methods: {
    register() {
      const login = this.login_r
      const email = this.email_r
      const password = this.password_r
      const password_confirmation = this.password_confirmation_r
      this.$store.dispatch(USER_REGISTER, { login, email, password, password_confirmation }).then(() => {
        this.$router.push('/dashboard')
      })
    }
  }
};
</script>
