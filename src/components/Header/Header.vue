<template>
  <div id="mobile-bar">
    <a class="menu-button" @click="toggleAside">
      <svg class="icon"><use xlink:href="#icon-menu"></use></svg>
    </a>
    <a class="logo" href="/">
      <svg class="icon"><use xlink:href="#icon-logo"></use></svg>
    </a>
  </div>
  <header id="header">
    <a id="logo" href="/">
      <svg class="icon" :class="{'hide': logoHide}"><use xlink:href="#icon-logo"></use></svg>
      <span>Grape-UI</span>
    </a>
    <Header-nav/>
  </header>
</template>

<script lang="ts">
import { inject, Ref } from 'vue'
import HeaderNav from "./Header-nav.vue"
export default {
  components: {HeaderNav},
  props: {
    logoHide: Boolean,
    default: false
  },
  setup(props){
    const asideVisible = inject<Ref<boolean>>('asideVisible')
    const toggleAside = ()=>{
      asideVisible.value = !asideVisible.value
    }
    const {logoHide} = props
    return { toggleAside, logoHide }
  }
}
</script>

<style lang='scss'>
@import "../../index.scss";
@media screen and (max-width: 900px ) {
  #mobile-bar {display: block}
  #header {display: none}
}
#mobile-bar{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background-color: #ffffff;
  box-shadow: none;
  z-index: 20;
  >.menu-button{
    position: absolute;
    width: 24px;
    height: 24px;
    top: 8px;
    left: 12px;
    > .icon {
      width: 24px;
      height: 24px;
      fill: #304455;
    }
  }
  >.logo{
    position: absolute;
    width: 30px;
    height: 30px;
    top: 5px;
    left: 50%;
    margin-left: -15px;
    > .icon{
      width: 30px;
      height: 30px;
    }
  }
}
#header{
  position: fixed;
  width: 100%;
  top: 0;
  box-shadow: 0 0 1px rgba(0,0,0,0.25);
  transition: background-color .3s ease-in-out;
  background-color: #fff;
  height: 40px;
  padding: 10px 60px;
  z-index: 20;
  > #logo{
    display: inline-block;
    font-size: 1.5em;
    line-height: 40px;
    color: $font-color;
    font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
    font-weight: 500;
    > svg {
      vertical-align: middle;
      margin-right: 6px;
      width: 40px;
      height: 40px;
      border: none;
      &.hide{
        display: none;
      }
    }
  }
}
</style>
