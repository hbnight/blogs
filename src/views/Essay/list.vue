<template>
<div class="essay-list_container">
  <div class="essay-list">
    <div class="essay-item">
      <div class="essay-created"></div>
      <div class="essay-title">测试</div>
      <div class="control"></div>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  .essay-list_container{
    .essay-title{
      @include theme_btn()
    }
  }
</style>