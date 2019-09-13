<template>
<form class="login" @submit.prevent="login()">
  <md-field>
    <md-input v-model="email" placeholder="Email"></md-input>
  </md-field>
  <md-field>
    <md-input v-model="password" type="password" placeholder="Password"></md-input>
  </md-field>
  <button type="submit">Login</button>
</form>
</template>

<script>
  import {AUTH_REQUEST} from '@/store/actions/auth'

  export default {
    data() {
      return {
        email: null,
        password: null
      }
    },
    methods: {
      login() {
        const { email, password } = this
        this.$store.dispatch(AUTH_REQUEST, { email, password }).then(() => {
          this.$router.push('/')
        })
        this.$root.$emit('LayoutManager');
      }
    }
  }
</script>
