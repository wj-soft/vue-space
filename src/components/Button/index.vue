<template>
  <div class="vs-button">
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
  background: red;
  width: 100px;
  height: 100px;
}
</style>
