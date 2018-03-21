<template>
  <div class="app">
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in Newlist" :key="item.id">
          <router-link :to="'/home/NewChilders/'+item.id">
              <img class="mui-media-object mui-pull-left" :src="item.img_url">
              <div class="mui-media-body">
                  <h1> {{item.title}} </h1>
                  <p class='mui-ellipsis'>
                   <span>发布时间: {{item.add_time | dataTime}} </span>
                    <span>点击:  {{item.click}}</span>
                  </p>
              </div>
          </router-link>
      </li>
   </ul>
  </div>
</template>

<script>
 export default {
   data () {
     return {
       Newlist : []
     }
   },
   components: {

   },
   created(){
     this.newList();
   },
   methods: {
     newList(){
       this.$http.get('api/getnewslist').then(reuslt =>{
         console.log(reuslt);
          if(reuslt.body.status === 0 ){
             this.Newlist = reuslt.body.message
             console.log(reuslt.body.message);
          }else{
            console.log(123)
          }
       })
     }
   }
 }
</script>

<style scoped>
.app{
  max-width: 650px;
  min-width: 250px;
}
 .mui-media-body .mui-ellipsis{
   display: flex;
   justify-content: space-between;
 }
  .mui-media-body h1{
    font-size: 16px;
  }

</style>