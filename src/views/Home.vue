<template>
  <div class="home">
    <img class="home-logo" alt="Vue logo" src="@/assets/img/bs-logo.png" />
    <WelcomePage msg="Welcome to Better Savings!" />
  </div>
</template>

<script>
import WelcomePage from "@/components/WelcomePage.vue";

export default {
  name: "home",
  components: {
    WelcomePage
  }
};
</script>

<style lang="scss">
.home{
  .home-logo{
    margin-top: 50px;
    height: 200px;
    width: 200px;
  }
}
</style>
