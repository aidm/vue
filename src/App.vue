<template>
  <div id="app">
  
   <v-header></v-header>
    
  
   <v-bar></v-bar>
  </div>
</template>

<script>

import footerbar from 'components/footerBar'
import header from 'components/header'

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

<style>

</style>
