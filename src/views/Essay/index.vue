<template>
  <div class="essay-list_contain">
    <router-link  
      :to="item.url" v-for="(item, i) in links" 
      :class="['essay-nav-item', $route.path === item.url && 'is-active']"
      >
      {{item.name}}
    </router-link>
    <router-view class="essay-children-views"></router-view>
  </div>
</template>

<script setup lang="ts">
  interface Link {
    url: string,
    name: string
  }

  const links:Array<Link> = [
    {
      url: '/essay/create',
      name: 'Create'
    },
    {
      url: '/essay/list',
      name: 'List'
    },
    {
      url: '/essay/detail/123',
      name: 'Detail'
    },
  ]
  
</script>

<style lang="scss" scoped>
  .essay-list_contain{
    padding: 20px;
    background: $theme_bg;
    .essay-nav-item{
      margin: 0 10px;
      color: #000;
      border: 0;
      text-decoration: none;
      &.is-active{
        color: $theme;
      }
    }
    .essay-children-views{
      margin-top: 20px;
    }
  }
</style>
