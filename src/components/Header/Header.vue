<template>
  <div id="mobile-bar">
    <a class="menu-button" @click="toggleAside"/>
    <a class="logo" href="/"/>
  </div>
  <header id="header">
    <a id="logo" href="/">
      <img src="../../assets/logo.png" :class="{'hide': logoHide}" alt="grape logo"/>
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
    background: url("../../assets/menu.svg") center center no-repeat;
    background-size: 24px;
  }
  >.logo{
    position: absolute;
    width: 30px;
    height: 30px;
    top: 5px;
    left: 50%;
    margin-left: -15px;
    background: url("../../assets/logo.png") center center no-repeat;
    background-size: 30px;
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
    > img {
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
