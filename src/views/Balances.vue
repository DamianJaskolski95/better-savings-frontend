<template>
  <div class="balances">
    <div class="balance-form">
      <form class="balance-form-inp" @submit.prevent="postBalance()">
        <md-field>
          <label>Income</label>
          <md-input v-model="income_r" type="decimal" min="0"></md-input>
        </md-field>

        <md-field>
          <label>Planned savings</label>
          <md-input v-model="planned_savings_r" type="decimal" min="0"></md-input>
        </md-field>

        <md-field>
          <label>Balance date</label>
          <md-input v-model="balance_date_r" type="date" placeholder="Pickup or type date"></md-input>
        </md-field>
        <button type="submit">Add Balance</button>
      </form>
    </div>
    <div class="md-layout md-gutter md-alignment-center">
      <div v-for="balance in allBalances" :key="balance.id" class="md-layout-item md-size-30 md-medium-size-30 md-small-size-45 md-xsmall-size-100">
        <balance-card>
          <template v-slot:title> Balance {{ getMonth(balance.balance_date) }}</template>
          <template v-slot:income> {{ changeMoneyDown(balance.income) }}zł </template>
          <template v-slot:savings> {{ changeMoneyDown(balance.savings) }}zł </template>
          <template v-slot:planned_savings> {{ changeMoneyDown(balance.planned_savings) }}zł </template>
          <template v-slot:balance_date> {{ balance.balance_date }} </template>
        </balance-card>
      </div>
    </div>
  </div>
</template>

<script>
import { BALANCES_REQUEST, BALANCES_POST } from '@/store/actions/balances'
import BalanceCard from '@/components/Cards/BalanceCard.vue'

export default {
  name: "balances",
  data () {
    return {
      income_r: null,
      planned_savings_r: null,
      balance_date_r: null,
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
    postBalance(){
      const income = (this.income_r * 100).toFixed(2)
      const planned_savings = (this.planned_savings_r * 100).toFixed(2)
      const balance_date = this.balance_date_r
      this.$store.dispatch(BALANCES_POST, {income, planned_savings, balance_date})
      this.$forceUpdate();
    },
    whatPercent(a, b){
      return (a/b * 100).toFixed(2)
    },
    changeMoneyDown(a){
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
    BalanceCard
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
  .balance-form {
    margin: 2%;
  }
}
</style>
