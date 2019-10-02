<template>
  <div>
    <md-card>
      <md-card-header>
        <div class="md-title">
          <slot name="title"></slot>
        </div>
      </md-card-header>
      <md-card-content>
        <slot name="content">
          
        </slot>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
  export default {
    name: "category-card",
  }
</script>
