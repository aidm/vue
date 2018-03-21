<template>
  <div>
    新闻页面-------------------{{$route.params.id}}
  </div>
</template>

<script>
 export default {
   data () {
     return {
       id : this.$route.params.id
     }
   },
   components: {

   },
   created(){
   //  this.id
    this.New();
   },
   methods:{
     New(){
       this.$http.get('/api/getnew/').then(reulst =>{
         console.log(99)
       })
     }
   }
 }
</script>

<style scoped>
 
</style>