<template>
  <router-view />
</template>

<script lang="ts">
import { ref, provide } from 'vue'
import { router } from './router';
export default {
  name: 'App',
  setup(){
    const deviceWidth = document.documentElement.clientWidth
    const asideVisible = ref(deviceWidth < 900)
    provide('asideVisible', asideVisible)
    router.afterEach(()=>{
      if(deviceWidth<=900){
        asideVisible.value && (asideVisible.value = false)
      }
    })
  }
}
</script>
