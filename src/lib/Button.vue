<template>
<button class="grape-btn" :class="classes" :disabled="disabled">
  <span v-if="loading" class="grape-loadingIndicator"></span>
  <slot/>
</button>
</template>

<script lang="ts">
import {computed} from 'vue'
export default {
  props:{
    theme: {
      type: String,
      default: 'button'
    },
    size: {
      type: String,
      default: 'normal'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  setup(props){
    const {theme, size} = props
    const classes = computed(()=>{
      return { [`grape-btn-${theme}`]: theme,
        [`grape-btn-${size}`]: size }
    })
    return {classes}
  }
}
</script>
<style lang='scss'>
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #1890ff;
$red: #ff4d4f;
$grey: grey;
$radius: 4px;
.grape-btn{
  height: $h;
  padding: 0 15px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 1px solid $border-color;
  border-radius: $radius;
  white-space: nowrap;
  background-color: #fff;
  color: $color;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  margin-right: 8px;
  margin-bottom: 12px;
  &[disabled] {
    cursor: not-allowed;
    color: rgba(0,0,0,.25);
    background-color: #f5f5f5;
    border-color: #d9d9d9;
    text-shadow: none;
    box-shadow: none;
    &:hover, &:focus{
      outline: 0;
      color: rgba(0,0,0,.25);
      border-color: #d9d9d9;
    }
  }
  &:hover, &:focus{
    color: $blue;
    border-color: $blue;
  }
  &:focus{
    outline: none;
  }
  &::-moz-focus-inner{
    border: 0;
  }
  &.grape-btn-primary{
    color: #fff;
    border-color: $blue;
    background-color: $blue;
    text-shadow: 0 -1px 0 rgba(0,0,0,.12);
    box-shadow: 0 2px 0 rgba(0,0,0,.045);
    &[disabled] {
      cursor: not-allowed;
      color: rgba(0,0,0,.25);
      background-color: #f5f5f5;
      border-color: #d9d9d9;
      text-shadow: none;
      box-shadow: none;
      &:hover, &:focus{
        outline: 0;
        color: rgba(0,0,0,.25);
        border-color: #d9d9d9;
      }
    }
  }
  &.grape-btn-dashed{
    color: rgba(0,0,0,.65);
    background-color: #fff;
    border-color: #d9d9d9;
    border-style: dashed;
    &[disabled] {
      cursor: not-allowed;
      color: rgba(0,0,0,.25);
      background-color: #f5f5f5;
      border-color: #d9d9d9;
      text-shadow: none;
      box-shadow: none;
      &:hover, &:focus{
        outline: 0;
        color: rgba(0,0,0,.25);
        border-color: #d9d9d9;
      }
    }
  }
  &.grape-btn-danger{
    color: #fff;
    background-color: $red;
    border-color: $red;
    text-shadow: 0 -1px 0 rgba(0,0,0,.12);
    box-shadow: 0 2px 0 rgba(0,0,0,.045);
  }
  &.grape-btn-link{
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover, &:focus{
      color: lighten($blue, 10%)
    }
    &[disabled] {
      cursor: not-allowed;
      color: rgba(0,0,0,.25);
      background-color: transparent;
      border-color: transparent;
      text-shadow: none;
      box-shadow: none;
      &:hover, &:focus{
        outline: 0;
        color: rgba(0,0,0,.25);
        border-color: #d9d9d9;
      }
    }
  }
  &.grape-btn-text{
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover, &:focus{
      background-color: darken(#fff, 5%);
    }
  }
  &.grape-btn-large{
    font-size: 16px;
    height: 40px;
    padding: 0 15px;
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.grape-btn-small{
    font-size: 14px;
    height: 24px;
    padding: 0 7px;
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
  > .grape-loadingIndicator{
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: grape-spin 1s infinite linear;
  }
}
@keyframes grape-spin {
  0%{transform: rotate(0deg)}
  100%{transform: rotate(360deg)}
}
</style>
