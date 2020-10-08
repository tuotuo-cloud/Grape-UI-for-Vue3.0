<template>
  <transition name="animationBox">
    <div v-if="alertVisibility" class="grape-alert"
         :class="`grape-alert-${alertType} ${description?'grape-alert-with-description':''} ${iconVisibility?'':'grape-alert-no-icon'} ${banner?'grape-alert-banner':''}`">
      <svg class="grape-alert-icon" v-if="iconVisibility" :class="alertType">
        <use :xlink:href="`#icon-${description?'big':'small'}-${alertType}`"></use>
      </svg>
      <span class="grape-alert-message">{{message}}</span>
      <span class="grape-alert-description" v-if="description">{{description}}</span>
      <svg class="grape-alert-close-icon" v-if="closable" @click="closeHandle">
        <use xlink:href="#icon-close"></use>
      </svg>
    </div>
  </transition>
</template>

<script lang="ts">
import {ref} from 'vue'
export default {
  props: {
    showIcon: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'info'
    },
    closable: {
      type: Boolean
    },
    afterClose: {
      type: Function
    },
    message: {
      type: String
    },
    description: {
      type: String
    },
    banner: {
      type: Boolean,
      default: false
    }
  },
  setup(props){
    const {type:alertType, message, description, afterClose, banner, showIcon}= props
    const alertVisibility = ref(true)
    const closeHandle = ()=>{
      alertVisibility.value = false
      afterClose()
    }
    const iconVisibility = banner? true : ref(showIcon)
    return {alertType, message, description, closeHandle, alertVisibility, banner, iconVisibility}
  }
}
</script>

<style lang='scss'>
.animationBox-leave-active{
  transition: opacity .5s ease;
}
.animationBox-leave-to{
  opacity: 0;
}
.grape-icon{
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}
.grape-alert-icon{
  position: absolute;
  top: 12px;
  left: 16px;
  width: 1em;
  height: 1em;
  &.success{
    fill: #52c41a;
  }
  &.info{
    fill: #1890ff;
  }
  &.warning{
    fill: #faad14;
  }
  &.error{
    fill: #f5222d;
  }
}
.grape-alert{
  box-sizing: border-box;
  margin: 0;
  color: rgba(0,0,0,.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  font-feature-settings: "tnum";
  position: relative;
  padding: 8px 15px 8px 37px;
  word-wrap: break-word;
  border-radius: 4px;
  transition: all .3s;
}
.grape-alert{
   &-success{
     background-color: #f6ffed;
     border: 1px solid #b7eb8f;
   }
   &-info{
     background-color: #e6f7ff;
     border: 1px solid #91d5ff;
   }
   &-warning{
     background-color: #fffbe6;
     border: 1px solid #ffe58f;
   }
   &-error{
     background-color: #fff1f0;
     border: 1px solid #ffa39e;
   }
 }
.grape-alert-no-icon{
  padding: 8px 15px;
}
.grape-alert-close-icon{
  position: absolute;
  font-size: 12px;
  width: 12px;
  height: 12px;
  top: 8px;
  right: 16px;
  overflow: hidden;
  line-height: 22px;
  cursor: pointer;
  border: none;
  transition: background-color .3s;
  &:hover{
    border: 1px solid rgba(0,0,0,0.45);
    border-radius: 2px;
  }
}
.grape-alert-banner{
  margin-bottom: 0;
  border: 0;
  border-radius: 0;
}
.grape-alert-description{
  display: none;
  font-size: 14px;
  line-height: 22px;
}
.grape-alert-with-description {
  position: relative;
  padding: 15px 15px 15px 64px;
  color: rgba(0,0,0,.65);
  line-height: 1.5;
  border-radius: 4px;
}
.grape-alert-with-description > .grape-alert-icon{
  font-size: 24px;
  top: 15px;
  left: 24px;
}
.grape-alert-with-description.grape-alert-no-icon{
  padding: 15px;
}
.grape-alert-with-description > .grape-alert-message{
  display: block;
  margin-bottom: 4px;
  color: rgba(0,0,0,.85);
  font-size: 16px;
}
.grape-alert-with-description > .grape-alert-description{
  display: block;
}
.grape-alert-with-description > .grape-alert-close-icon{
  width: 10px;
  height: 10px;
}
</style>
