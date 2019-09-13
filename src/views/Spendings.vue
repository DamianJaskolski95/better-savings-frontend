<template>
  <div class="spendings">
    <md-table md-card class="categories-table">
      <md-table-toolbar>
        <h1 class="md-title">Categories</h1>
      </md-table-toolbar>
      <md-table-row>
        <md-table-head>Name</md-table-head>
        <md-table-head>Created by</md-table-head>
      </md-table-row>
      <md-table-row v-for="category in $store.getters.getCategories">
        <md-table-cell> {{ category.name }} </md-table-cell>
        <md-table-cell> {{ category.created_by }} </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import { CATEGORIES_REQUEST } from '@/store/actions/categories'

export default {
  name: "spendings",
  methods: {
    getCategories() {
      this.$store.dispatch(CATEGORIES_REQUEST)
    }
  },
  beforeMount() {
    this.getCategories()
  }
};
</script>

<style lang="scss">
.spendings {
  .categories-table {
    width: 90%
  }
}
</style>
