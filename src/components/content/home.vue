<template>
  <div>
    <mt-swipe :auto="3000" >
      <mt-swipe-item v-for="item in list " :key="item.img">
        <img :src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe>
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/NewList" >
            <img src="../../lib/images/menu1(1).png" alt="">
            <div class="mui-media-body">新闻资讯</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/ImageShare">
            <img src="../../lib/images/menu2.png" alt="">
            <div class="mui-media-body">图片分享</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/Commercial">
            <img src="../../lib/images/menu3.png" alt="">
            <div class="mui-media-body">商品购买</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/Feedback">
            <img src="../../lib/images/menu4.png" alt="">
            <div class="mui-media-body">留言反馈</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/Prefecture">
            <img src="../../lib/images/menu5.png" alt="">
            <div class="mui-media-body">视频专区</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/Connects">
            <img src="../../lib/images/menu6.png" alt="">
            <div class="mui-media-body">联系我们</div>
          </router-link>
        </li>
      </ul> 
  </div>
</template>

<script>
// 按需引用 提示
import { Toast } from 'mint-ui';

 export default {
   data () {
     return {
       list : []// 储存轮播图的img图片;
     }
   },
   components: {

   },
   created(){
     this.swipelist()
   },
   methods : {
     swipelist(){
       this.$http.get('api/getlunbo').then(result=>{
         console.log(result.body.message)
         if(result.body.status === 0){
           this.list = result.body.message; // 把获取到的图片添加到list数组中;
         }else {
            Toast('或取数据失敗');
         }
       })
     }
   }
 }
</script>

<style scoped>
 .mint-swipe{
   height: 250px;
 }
 .mint-swipe img{
   width:100%;
   height: 100%;
 }
 .mui-table-view .mui-table-view-cell img{
   width: 60px;
   height: 60px;
 }
  .mui-table-view{
    background: #fff;
    /* max-width: 375px;
    min-width: 270px; */
  }
  /* .mui-table-view-cell  */
  
 .mui-table-view .mui-table-view-cell{
   border: none;
   width: 33.33%;
  
 }
 
</style>