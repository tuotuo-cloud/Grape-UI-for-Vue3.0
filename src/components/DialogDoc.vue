<template>
<div>Dialog</div>
  <Button type="primary" @click="showDialog">Open Dialog</Button>
  <Dialog v-model:visible="visible" :title="'基础对话框'">
    <template v-slot:content>内容</template>
  </Dialog>
  <Button type="primary" @click="showDialog2">Open Dialog2</Button>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import {openDialog} from '../lib/openDialog';
import {ref, h} from 'vue';
export default {
  components: {Button, Dialog},
  setup(){
    const visible = ref(false)
    const showDialog = ()=>{
      visible.value = true
    }
    const showDialog2 = ()=>{
      openDialog({
        title: h('strong', {}, '标题'),
        content: '你好',
        ok(){
          console.log('ok')
        },
        cancel(){
          console.log('cancel')
        }
      })
    }
    return { visible, showDialog, showDialog2 }
  }
}
</script>

<style lang='scss' scoped>

</style>
