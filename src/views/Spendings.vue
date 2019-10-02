<template>
  <div class="spendings">
    <div class="md-layout md-gutter md-alignment-center">
      <div v-for="category in $store.getters.getCategories" class="md-layout-item md-size-30 md-medium-size-30 md-small-size-45 md-xsmall-size-100">
        <category-card>
          <template v-slot:title>
            {{ category.name }}
          </template>
          <template v-slot:content>
            <md-table class="expenses-table md-scrollbar">
              <md-table-row>
                <md-table-head>Id</md-table-head>
                <md-table-head>Date</md-table-head>
              </md-table-row>
              <md-table-row v-for="expense in category.expenses">
                <md-table-cell> {{ expense.id }} </md-table-cell>
                <md-table-cell> {{ expense.expense_day }} </md-table-cell>
              </md-table-row>
              <md-table-row v-for="expense in category.expenses">
                <md-table-cell> {{ expense.id }} </md-table-cell>
                <md-table-cell> {{ expense.expense_day }} </md-table-cell>
              </md-table-row>
            </md-table>
          </template>
        </category-card>
      </div>
    </div>
  </div>
</template>

<script>
import { CATEGORIES_REQUEST } from '@/store/actions/categories'
import CategoryCard from '@/components/Cards/CategoryCard.vue'

export default {
  name: "spendings",
  methods: {
    getCategories() {
      this.$store.dispatch(CATEGORIES_REQUEST)
    }
  },
  beforeMount() {
    this.getCategories()
  },
  components: {
    CategoryCard,
  }
};
</script>

<style lang="scss">
.spendings {
  .md-layout {
    width: 100%;
    margin: 45px;
    .md-layout-item {
      margin-left: 2%;
    }
  }
  .expenses-table {
    position: relative;
    margin: auto;
    margin-top: 25px;
    max-height: 500px;
    width: 90%
  }
}
</style>
