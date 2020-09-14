<template>
  <Header />
  <main id="main" class="fix-sidebar">
    <aside class="sidebar" v-if="asideVisible">
      <div class="sidebar-inner">
        <div class="list">
          <h2>组件列表</h2>
          <ul class="menu-root">
            <li>
              <router-link to="/document/button">Button 按钮</router-link>
            </li>
            <li>
              <router-link to="/document/switch">Switch 按钮</router-link>
            </li>
            <li>
              <router-link to="/document/dialog">Dialog 按钮</router-link>
            </li>
            <li>
              <router-link to="/document/tabs">Tabs 按钮</router-link>
            </li>
          </ul>
        </div>
      </div>
    </aside>
    <main class="content guide">
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
.sidebar, .sidebar-inner{
  width: 260px;
}
.sidebar-inner{
  padding: 60px 10px 30px 20px;
}
@media screen and (max-width: 1300px){
  .content{
    margin-left: 290px;
  }
}
.content{
  position: relative;
  padding: 35px 0 35px 50px;
  max-width: 700px;
  margin: 0 auto;
}
</style>
