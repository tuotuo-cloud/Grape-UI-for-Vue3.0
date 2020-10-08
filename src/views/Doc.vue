<template>
  <Header />
  <main id="main">
    <aside class="sidebar" :class="{'open': asideVisible}">
      <div class="sidebar-inner">
        <h2>文档</h2>
        <ul class="menu-root">
          <li v-for="title1 in menu" :key="title1.title">
            <template v-if="title1.path">
              <router-link :to="`/document/${title1.path}`" :class="{'active': current===title1.path}"><h3>{{ title1.title }}</h3></router-link>
            </template>
            <template v-else>
              <h3>{{ title1.title }}</h3>
              <ul class="menu-sub">
                <li v-for="title2 in title1.children" :key="title2.title">
                  <router-link :to="`/document/${title2.path}`" :class="{'active': current===title2.path}">{{ title2.title }}</router-link>
                </li>
              </ul>
            </template>
          </li>
        </ul>
      </div>
    </aside>
    <main id="page" :class="{'with-sidebar': asideVisible}">
      <router-view></router-view>
    </main>
  </main>
</template>

<script lang="ts">
import Header from '../components/Header/Header.vue';
import {menu} from '../constant.ts'
import {inject, ref, Ref} from 'vue';
import {useRoute} from 'vue-router';
import {router} from '../router';

export default {
  components: {Header},
  setup() {
    const route = useRoute()
    const current = ref(route.path.split('/')[2])
    router.afterEach(()=>{
      current.value = route.path.split('/')[2]
    })
    const asideVisible = inject<Ref<boolean>>('asideVisible');
    return {asideVisible, menu, current};
  }
};
</script>

<style lang="scss" scoped>
.sidebar {
  box-sizing: border-box;
  position: fixed;
  z-index: 10;
  top: 61px;
  left: 0;
  bottom: 0;
  width: 18em;
  overflow-x: hidden;
  overflow-y: auto;
  box-shadow: 1px 3px 6px rgba(0, 0, 0, 0.2);
  background-color: rgba(255,255,255,0.95);
}

#page{
  padding: 35px 0 35px 50px;
  max-width: 700px;
  margin: 0 auto;
}

@media (min-width: 900px){
  #page {
    margin-left: 260px;
  }
  #main {
    padding-top: 61px;
  }
}
@media (max-width: 900px){
  #main {
    padding-top: 40px;
  }
  .sidebar {
    top: 40px;
    transform: translate(-18em, 0);
    transition: all 0.4s cubic-bezier(0.4, 0, 0, 1);
  }
  .sidebar.open{
    transform: translate(0, 0);
  }
  #page.with-sidebar{
    margin-left: 260px;
  }
}

.sidebar > .sidebar-inner {
  box-sizing: border-box;
  width: 100%;
  padding: 35px 0 60px 20px;
}
.sidebar h2 {
  margin-top: .2em;
}
.sidebar ul{
  padding-left: 1em;
  margin: 0;
  line-height: 1.5em;
  list-style-type: none;
}
.sidebar li {
  margin-top: 0.5em;
}
.sidebar .menu-root {
  padding-left: 0;
}
.active {
  color: #aa8dd8;
}
</style>
