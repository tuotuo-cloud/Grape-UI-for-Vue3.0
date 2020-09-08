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
      context.emit('input', !props.checked)
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
  background-color: blue;
  border-radius: $h/2;
  position: relative;
}
span{
  position: absolute;
  top: 2px;
  left: 2px;
  height: $h2;
  width: $h2;
  background-color: white;
  border-radius: $h2/2;
  transition: left .25s;
}
button.checked {
  background-color: #d5d5d5;
  > span{
    left: calc(100% - #{$h2} - 2px);
  }
}
button:focus{
  outline: none;
}
</style>
