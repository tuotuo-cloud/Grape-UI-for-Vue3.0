<template>
<div>Tabs示例</div>
  <h1>示例一</h1>
  <Tabs>
    <Tab title="导航一">内容一</Tab>
    <Tab title="导航二">内容二</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from '../lib/Tabs';
import Tab from '../lib/Tab'
export default {
  components: {Tabs, Tab}
}
</script>

<style lang='scss' scoped>

</style>
