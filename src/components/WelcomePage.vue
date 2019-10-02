<template>
<div class="welcome">
  <h1>{{ msg }}</h1>
  <h3>
    This is web application that can help you with your savings.
  </h3>
  <p>
    You can keep track of your spendings on specific type of products,
    which can help you to reduce money spend on unnecessary things and
    maximalize savings.
  </p>
  <div class="md-layout">
    <div class="md-layout-item">
      <login-user></login-user>
    </div>
    <div class="md-layout-item">
      <register-user></register-user>
    </div>
  </div>
</div>
</template>

<script>
import { AUTH_REQUEST } from '@/store/actions/auth'
import { USER_REGISTER } from '@/store/actions/user'
import LoginUser from '@/components/Login.vue'
import RegisterUser from '@/components/Register.vue'

export default {
  name: "WelcomePage",
  props: {
    msg: String
  },
  components: {
    LoginUser,
    RegisterUser
  }
};
</script>

<style scoped lang="scss">
.welcome {
  .md-layout {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    .md-layout-item {
      .login-user,
      .register-user {
        width: 80%;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
}
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
</style>
