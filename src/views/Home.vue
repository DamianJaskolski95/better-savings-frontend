<template>
  <div class="home">
    <img class="home-logo" alt="Vue logo" src="@/assets/img/bs-logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button v-on:click="getCategories()">Categories</button>
    <h1>List of categories</h1>
    <ul>
      <li v-for="category in $store.getters.getCategories">
        {{ category.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import { CATEGORIES_REQUEST } from '@/store/actions/categories'

export default {
  name: "home",
  methods: {
    getCategories() {
      this.$store.dispatch(CATEGORIES_REQUEST)
    }
  },
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
