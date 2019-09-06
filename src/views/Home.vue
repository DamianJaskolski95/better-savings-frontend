<template>
  <div class="home">
    <img class="home-logo" alt="Vue logo" src="@/assets/img/bs-logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>

<style lang="scss">
.home{
  margin-top: 50px;

  .home-logo{
    height: 200px;
    width: 200px;
  }
}
</style>
