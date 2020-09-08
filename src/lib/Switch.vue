<template>
  <button :class="{checked}" @click=toggle><span></span></button>
</template>

<script lang="ts">
export default {
  props:{
    checked: Boolean
  },
  setup(props, context){
    const toggle = ()=>{
      context.emit('update:checked', !props.checked)
    }
    return {toggle}
  }
}
</script>

<style lang='scss' scoped>
$h: 22px;
$h2: $h - 4px;
button {
  height: $h;
  width: 2*$h;
  border: none;
  background-color: #d5d5d5;
  border-radius: $h/2;
  position: relative;
  > span{
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background-color: white;
    border-radius: $h2/2;
    transition: all .25s;
  }
  &.checked {
    background-color: blue;
    > span{
      left: calc(100% - #{$h2} - 2px);
    }
  }
  &:focus{
    outline: none;
  }
  &:active{
    > span{
      width: $h2+4px;
    }
  }
  &.checked:active {
    >span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>
