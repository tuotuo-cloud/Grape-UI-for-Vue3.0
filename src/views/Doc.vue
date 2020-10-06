<template>
  <Header />
  <main id="main" class="fix-sidebar">
    <aside class="sidebar" v-if="asideVisible">
      <div class="sidebar-inner">
        <h2>组件列表</h2>
        <ul class="menu-root">
            <li>
              <router-link to="/document/button">Button 按钮</router-link>
            </li>
            <li>
              <router-link to="/document/switch">Switch 切换开关</router-link>
            </li>
            <li>
              <router-link to="/document/dialog">Dialog 对话框</router-link>
            </li>
            <li>
              <router-link to="/document/menu">Menu 导航菜单</router-link>
            </li>
            <li>
              <router-link to="/document/alert">Alert 提示框</router-link>
            </li>
          </ul>
      </div>
    </aside>
    <main class="content guide" :class="{'with-sidebar': asideVisible}">
      <router-view></router-view>
    </main>
  </main>
</template>

<script lang="ts">
import Header from '../components/Header/Header.vue';
import {inject, Ref} from 'vue';

export default {
  components: {Header},
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible');
    return {asideVisible};
  }
};
</script>

<style lang="scss" scoped>
#main.fix-sidebar .sidebar {
  position: fixed;
  z-index: 10;
  top: 61px;
  left: 0;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: auto;
}

@media screen and (max-width: 900px) {
  .sidebar.open{
    transform: translate(0,0);
  }
}
@media screen and (max-width: 900px) {
  #main{
    padding: 2em 1.4em 0;
  }
  .sidebar {
    background-color: #f9f9f9;
    height: 100%;
    top: 0;
    left: 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    transition: all .4s cubic-bezier(0.4, 0, 0, 1);
  }
}
@media screen and (max-width: 1300px){
  .content.with-sidebar{
    margin-left: 230px;
  }
}
.sidebar{
  box-shadow: 1px 0 6px rgba(0,0,0,0.2);
  > .sidebar-inner{
    width: 200px;
    padding: 35px 0 60px 20px;
    > h2{
      margin-top: .2em;
    }
    > .menu-root{
      padding-left: 0;
      margin: 0;
      line-height: 2em;
    }
  }
}
.content{
  position: relative;
  padding: 35px 0 35px 50px;
  max-width: 700px;
  margin: 0 auto;
}
</style>
