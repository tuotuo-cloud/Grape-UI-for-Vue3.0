<template>
<div>
  Button
  <Button>按钮</Button>
  <Button theme="link">按钮</Button>
  <Button theme="text">按钮</Button>
</div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
export default {
  components: {Button},
  setup(){
    const onClick = ()=>{

    }
    return {onClick}
  }
}
</script>

<style lang='scss' scoped>

</style>
