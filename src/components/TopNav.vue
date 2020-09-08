<template>
  <div class="topNav">
    <div class="logo">LOGO</div>
    <ul class="menu">
      <li>菜单</li>
      <li>菜单</li>
    </ul>
    <span class="toggleAside" @click="toggleAside"></span>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue'
export default {
  setup(){
    const asideVisible = inject<Ref<boolean>>('asideVisible')
    const toggleAside = ()=>{
      asideVisible.value = !asideVisible.value
    }
    return { toggleAside }
  }
}
</script>

<style lang='scss' scoped>
.topNav{
  background: pink;
  display: flex;
  padding: 16px;
  position: sticky;
  top: 0;
  justify-content: center;
  align-items: center;
  z-index: 10;
  >.logo{
    max-width: 6em;
    margin-right: auto;
    cursor: pointer;
  }
  >.menu{
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    >.li{
      margin: 0 1em;
    }
  }
  > .toggleAside{
    display: none;
  }
  @media (max-width: 500px){
    > .menu{
      display: none;
    }
    > .logo{
      margin: 0 auto;
    }
    > .toggleAside{
      display: inline-block;
      width: 24px;
      height: 24px;
      background-color: red;
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>
