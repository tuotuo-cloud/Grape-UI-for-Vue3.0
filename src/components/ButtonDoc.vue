<template>
<div>
  Button
  <h3>示例一</h3>
  <Button>Default</Button>
  <Button theme="primary">Primary</Button>
  <Button theme="link">Link</Button>
  <Button theme="text">Text</Button>
  <Button theme="danger">Danger</Button>
  <h3>示例二</h3>
  <Button size="small">small</Button>
  <Button>normal</Button>
  <Button size="large">large</Button>
  <h3>示例三</h3>
  <Button loading>Loading</Button>
  <h3>示例四</h3>
  <Button disabled>Default Disabled</Button>
  <Button theme="primary" disabled>Primary Disabled</Button>
  <Button theme="dashed" disabled>Dashed Disabled</Button>
  <Button theme="link" disabled>Link Disabled</Button>
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
