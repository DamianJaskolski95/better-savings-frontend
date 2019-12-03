<template>
  <div>
    <md-card>
      <md-card-header>
        <div class="md-title">
          <slot name="title">Balance</slot>
        </div>
      </md-card-header>
      <md-card-content>
        <md-table>
          <md-table-row>
            <md-table-cell>
              Income: <slot name="income"></slot>
            </md-table-cell>
          </md-table-row>
          <br />
          <md-table-row>
            <md-table-cell>
              Savings: <slot name="savings"></slot>
            </md-table-cell>
          </md-table-row>
          <br />
          <md-table-row>
            <md-table-cell>
              Planned savings: <slot name="planned_savings"></slot>
            </md-table-cell>
          </md-table-row>
          <br />
          <md-table-row>
            <md-table-cell>
              Date: <slot name="balance_date"></slot>
            </md-table-cell>
          </md-table-row>
        </md-table>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
  export default {
    name: "balance-card",
  }
</script>

<style lang="scss">
</style>
