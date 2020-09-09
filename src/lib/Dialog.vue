<template>
  <Teleport to="body">
    <div class="grape-dialog" v-if="visible">
      <div class="grape-dialog-overlay" @click="onClickOverlay"></div>
      <div class="grape-dialog-wrapper">
        <div class="grape-dialog-content">
          <button class="grape-dialog-close" @click="closeDialog"><span class="grape-dialog-close-x">×</span></button>
          <header class="grape-dialog-header">
            <p class="grape-dialog-title">{{title}}</p>
          </header>
          <main class="grape-dialog-body">
            <slot name="content"/>
          </main>
          <footer class="grape-dialog-footer">
            <Button @click="cancel">Cancel</Button>
            <Button type="primary" @click="ok">OK</Button>
          </footer>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts">
import Button from './Button.vue';
export default {
  components: {Button},
  props: {
    title: {
      type: String,
      default: '提示'
    },
    visible:{
      type: Boolean,
      default: false
    },
    closeOnClickOverlay:{
      type: Boolean,
      default: true
    },
    ok: {
      type: Function
    },
    cancel: {
      type: Function
    }
  },
  setup(props, context){
    const title = props.title
    const closeDialog = ()=>{
      context.emit('update:visible', false)
    }
    const onClickOverlay = ()=>{
      if(props.closeOnClickOverlay){
        closeDialog()
      }
    }
    const ok = ()=>{
      if(props.ok?.() !== false){
        closeDialog()
      }
    }
    const cancel = ()=>{
      props.cancel?.()
      closeDialog()
    }
    return {title, closeDialog, onClickOverlay, ok, cancel}
  }
}
</script>

<style lang='scss'>
$radius: 4px;
.grape-dialog{
  box-sizing: border-box;
  color: rgba(0,0,0,.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  font-feature-settings: "tnum";
  position: relative;
  top: 100px;
  width: auto;
  margin: 0 auto;
  padding: 0 0 24px;
  pointer-events: none;
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }
  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }
}
.grape-dialog-content{
  position: relative;
  background-color: #fff;
  background-clip: padding-box;
  border: 0;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0,0,0,.15);
  pointer-events: auto;
  > .grape-dialog-close {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
    padding: 0;
    color: rgba(0,0,0,.45);
    font-weight: 700;
    line-height: 1;
    text-decoration: none;
    background: transparent;
    border: 0;
    outline: 0;
    cursor: pointer;
    transition: color .3s;
    > .grape-dialog-close-x {
      display: block;
      width: 56px;
      height: 56px;
      font-size: 16px;
      font-style: normal;
      line-height: 56px;
      text-align: center;
      text-transform: none;
      text-rendering: auto;
    }
  }
  > .grape-dialog-header {
    padding: 16px 24px;
    color: rgba(0, 0, 0, .65);
    background: #fff;
    border-bottom: 1px solid #e8e8e8;
    border-radius: 4px 4px 0 0;
    > .grape-dialog-title{
      margin: 0;
      color: rgba(0,0,0,.85);
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
    }
  }
  > .grape-dialog-body{
    padding: 24px;
    font-size: 14px;
    line-height: 1.5;
  }
  > .grape-dialog-footer{
    padding: 10px 16px;
    text-align: right;
    background: transparent;
    border-top: 1px solid #e8e8e8;
    border-radius: 0 0 4px 4px;
    > button {
      margin-bottom: 0;
    }
  }
}
</style>
