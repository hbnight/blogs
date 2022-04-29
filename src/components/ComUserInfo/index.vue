<template>
<div class="com_user_info">
  <div class="user_icon">

  </div>
  <div class="user_info">
    <div class="user_name">
      Admin
    </div>
    <p class="user_created">
      2022-04-25
    </p>
  </div>
  <div class="user_control" v-if="isControl">
    <el-button>关注</el-button>
    <el-button>拉黑</el-button>
    <el-button>举报</el-button>
  </div>
</div>
</template>

<script setup lang="ts">
import { } from "@vue/runtime-core"

</script>

<style scoped>

</style>