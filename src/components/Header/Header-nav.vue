<template>
  <ul id="nav">
    <li>
      <Search/>
    </li>
    <li class="nav-dropdown-container">
      <a class="nav-link current">文档</a><span class="arrow"></span>
    </li>
  </ul>
</template>

<script lang="ts">
import Search from "./Search.vue"
export default {
  components: {Search},
}
</script>

<style lang='scss' scoped>
  #nav {
  position: fixed;
  list-style: none;
  margin: 0;
  padding: 0;
  right: 30px;
  top: 10px;
  height: 40px;
  line-height: 40px;
  > li{
    display: inline-block;
    position: relative;
    margin: 0 0.6em;
  }
  > .nav-dropdown-container{
    padding-right: 0.8em;
    > .nav-link{
      padding-bottom: 3px;
      white-space: nowrap;
      &:hover, &.current{
        border-bottom: 3px solid #aa8dd8;
      }
    }
    > .arrow{
      pointer-events: none;
      display: inline-block;
      vertical-align: middle;
      margin-top: -1px;
      margin-left: 6px;
      margin-right: -14px;
      width: 0;
      height: 0;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-top: 4px solid #4f5959;
    }
  }
}
</style>
