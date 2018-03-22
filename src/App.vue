<template>
  <div id="app">
    <!-- 头部 -->
    <v-header></v-header>
    <!-- 轮播图 -->
    <transition enter-active-class='fadeOutLeft'
                leave-active-class="fadeOutRight"
                >
      <router-view class="animated"/>
    </transition>
    <!-- 底部 -->
   <v-bar></v-bar>

  </div>
</template>

<script>

import footerbar from './components/footerBar.vue'
import header from './components/header.vue'

export default {
    data :()=>({
      msg : 'header'
    }),
    components : {
      'v-header' : header,
      'v-bar' : footerbar
    }
 }
</script>

<style scoped>
#app{
  overflow-x: hidden;
}
.fadeOutRight{
  position: absolute;
}
/* .v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
} */
</style>
