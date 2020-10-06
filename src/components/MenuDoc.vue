<template>
  <div>Menu示例</div>
  <h1>示例一</h1>
  <Menu v-model:selected="x">
    <Tab title="导航一">内容一</Tab>
    <Tab title="导航二">内容二</Tab>
  </Menu>
</template>

<script lang="ts">
import Menu from '../lib/Menu.vue'
import Tab from '../lib/Tab.vue'
import {ref} from 'vue'
export default {
  components: {Menu, Tab},
  setup(){
    const x = ref('导航二')
    return {x}
  }
}
</script>
