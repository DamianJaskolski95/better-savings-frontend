<template>
  <div class="balances">
    <div class="md-layout md-gutter md-alignment-center">
      <div v-for="balance in allBalances" :key="balance.id" class="md-layout-item md-size-30 md-medium-size-30 md-small-size-45 md-xsmall-size-100">
        <balance-card>
          <template v-slot:title> Balance {{ getMonth(balance.balance_date) }}</template>
          <template v-slot:income> {{ changeMoney(balance.income) }}zł </template>
          <template v-slot:savings> {{ changeMoney(balance.savings) }}zł </template>
          <template v-slot:planned_savings> {{ changeMoney(balance.planned_savings) }}zł </template>
          <template v-slot:balance_date> {{ balance.balance_date }} </template>
        </balance-card>
      </div>
    </div>
  </div>
</template>

<script>
import { BALANCES_REQUEST } from '@/store/actions/balances'
import BalanceCard from '@/components/Cards/BalanceCard.vue'

export default {
  name: "balances",
  data () {
    return {
    };
  },
  methods: {
    getBalances() {
      this.$store.dispatch(BALANCES_REQUEST)
    },
    getMonth(balance_date){
      var month = balance_date.split("-");
      return month[0] + "-" + month[1];
    },
    whatPercent(a, b){
      return (a/b * 100).toFixed(2)
    },
    changeMoney(a){
      return (a / 100).toFixed(2)
    }
  },
  computed: {
    allBalances () {
      return this.$store.getters.getBalances
    }
  },
  beforeMount() {
    this.getBalances()
  },
  components: {
    BalanceCard,
  },
};
</script>

<style lang="scss">
.balances {
  .md-layout {
    width: 100%;
    margin: 45px;
    .md-layout-item {
      margin-left: 2%;
    }
  }
}
</style>
