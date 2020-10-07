<template>
  <Header />
  <main id="main" class="fix-sidebar">
    <aside class="sidebar" v-if="asideVisible">
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
    <main class="content guide" :class="{'with-sidebar': asideVisible}">
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
    console.log('Doc!!!!!!!!!!!!!!!!!')
    // const current = ref(menu[0]['title'])
    // const toggle = (e)=>{
    //   now.value = e.target.innerHTML
    // }
    const asideVisible = inject<Ref<boolean>>('asideVisible');
    return {asideVisible, menu, current};
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

.sidebar {
  box-shadow: 1px 0 6px rgba(0, 0, 0, 0.2);
}
.sidebar > .sidebar-inner {
  width: 200px;
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

.content{
  position: relative;
  padding: 35px 0 35px 50px;
  max-width: 700px;
  margin: 0 auto;
}
</style>
