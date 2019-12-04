<template>
  <div class="spendings">
    <div v-for="cycle in allCycles" :key="cycle.id" class="cycles">
      <cycle-card>
        <template v-slot:title>Cycle {{ cycle.start_day }} to {{ cycle.end_day }} </template>
        <template v-slot:content>
          <div class="md-layout md-gutter md-alignment-center">
            <div v-for="category in allCategories" :key="category.id" v-if="category.cycle_id === cycle.id" class="md-layout-item md-size-30 md-medium-size-30 md-small-size-45 md-xsmall-size-100">
              <category-card>
                <template v-slot:title>
                  {{ category.name }}
                </template>
                <template v-slot:value>
                  Curret value: {{ changeMoney(category.category_savings) }}zł ({{ whatPercent(category.category_savings, category.category_planned_savings)}}%)
                  <br />
                  Planned value: {{ changeMoney(category.category_planned_savings) }}zł
                </template>
                <template v-slot:content>
                  <md-table class="expenses-table md-scrollbar">
                    <md-table-row>
                      <md-table-head>Date</md-table-head>
                      <md-table-head>Value</md-table-head>
                    </md-table-row>
                    <md-table-row v-for="expense in category.expenses" :key="expense.id">
                      <md-table-cell> {{ expense.expense_day }} </md-table-cell>
                      <md-table-cell> {{ changeMoney(expense.value) }} </md-table-cell>
                    </md-table-row>
                  </md-table>
                </template>
              </category-card>
            </div>
          </div>
        </template>
      </cycle-card>
    </div>
  </div>
</template>

<script>
import { CATEGORIES_REQUEST } from '@/store/actions/categories'
import { CYCLES_REQUEST } from '@/store/actions/cycles'
import { COUNTS_REQUEST } from '@/store/actions/counts'
import CategoryCard from '@/components/Cards/CategoryCard.vue'
import CycleCard from '@/components/Cards/CycleCard.vue'

export default {
  name: "spendings",
  data () {
    return {
    };
  },
  props: ['categoryId'],
  methods: {
    getCategories() {
      this.$store.dispatch(CATEGORIES_REQUEST)
    },
    getCycles(){
      this.$store.dispatch(CYCLES_REQUEST)
    },
    getCount(categoryId){
      this.$store.dispatch(COUNTS_REQUEST, {category_id:categoryId} )
    },
    whatPercent(a, b){
      return (a/b * 100).toFixed(2)
    },
    changeMoney(a){
      return (a / 100).toFixed(2)
    }
  },
  computed: {
    allCycles () {
      return this.$store.getters.getCycles
    },
    allCategories () {
      return this.$store.getters.getCategories
    },
    expensesCount(){
      return this.$store.getters.getCounts
    }
  },
  beforeMount() {
    this.getCycles(),
    this.getCategories()
  },
  components: {
    CategoryCard,
    CycleCard,
  },
};
</script>

<style lang="scss">
.spendings {
  .cycles {
    margin: 2%;
    .md-layout {
      width: 100%;
      margin: 45px;
      .md-layout-item {
        margin-left: 2%;
        .expenses-table {
          position: relative;
          margin: auto;
          margin-top: 25px;
          max-height: 500px;
          width: 90%
        }
      }
    }
  }
}
</style>
