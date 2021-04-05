<template>
  <div class="vs-button" v-bind:style="{ background: $vs.background }">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Button'
}
</script>

<style lang="scss" scoped>
.vs-button {
  width: 100px;
  height: 100px;
}
</style>
