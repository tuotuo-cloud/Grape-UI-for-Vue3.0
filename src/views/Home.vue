<template>
  <TopNav/>
  <div class="banner">
    <h1>Grape-UI</h1>
    <h2>一个基于Vue的UI框架</h2>
    <p class="actions">
      <a href="https://gitee.com">Gitee</a>
      <router-link to="/document">开始</router-link>
    </p>
  </div>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue';
export default{
  components: {TopNav}
}
</script>

<style lang="scss" scoped>
.banner{
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: lightblue;
  > .actions{
    padding: 8px 0;
    a{
      margin: 0 8px;
      background: white;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 8px;
    }
  }
}

</style>
