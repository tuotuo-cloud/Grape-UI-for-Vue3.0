<template>
  <i class="grape-icon" />
</template>

<script lang="ts">
export default {
  setup(props){
    const iconType = props.type
    return {iconType}
  }
};
</script>

<style lang="scss">
.grape-icon{
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>

