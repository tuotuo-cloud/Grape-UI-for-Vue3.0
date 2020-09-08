<template>
  <div id="mobile-bar">
<!--    <Icon class="menu-button" name="menu"/>-->
    <img class="logo" src="../assets/logo.png" alt="logo"/>
  </div>
  <header id="header">
    <div id="logo">
      <img src="../assets/logo.png" alt="vue logo">
      <span>Grape-UI</span>
    </div>
    <ul id="nav">
      <li class="nav-dropdown-container learn">
        <a class="nav-link current">学习</a><span class="arrow"></span>
        <ul class="nav-dropdown">
          <li><h4>文档</h4></li>
          <li><h4>视频教程</h4></li>
        </ul>
      </li>

    </ul>
  </header>
</template>

<script lang="ts">
export default {
}
</script>

<style lang='scss' scoped>
#mobile-bar{
  >.menu-button{
    position: absolute;
    width: 24px;
    height: 24px;
    top: 8px;
    left: 12px;
  }
  >.logo{
    position: absolute;
    width: 30px;
    height: 30px;
    top: 5px;
    left: 50%;
    margin-left: -15px;
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
}
</style>
