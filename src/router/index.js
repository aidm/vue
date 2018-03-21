import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// 导入模块
import home from '@/components/content/home'
import member from '@/components/content/member'
import search from '@/components/content/search'
import shopcar from '@/components/content/shopcar'
// 新闻
import NewList from '../components/Page/NewList'
// import NewChilders from '../components/childers/NewChilders'
import NewChilders from '../components/childers/NewChilders.vue'


// 留言反馈
import Feedback from '../components/Page/Feedback'
//商品购买
import Commercial from '../components/Page/Commercial'
// 联系我们
import Connects from '../components/Page/Connects'
// 视频专区
import Prefecture from '../components/Page/Prefecture'
// 图片分享
import ImageShare from '../components/Page/ImageShare'
Vue.use(Router)

export default new Router({
  routes: [// 配置路由地址
    {path : '/', redirect : home},
    { path: '/home', component: home },
    { path: '/member', component: member },
    { path: '/search', component: search },
    { path: '/shopcar', component: shopcar },
    
    { path: '/home/NewList', component: NewList },
    { path: '/home/Connects', component: Connects },
    { path: '/home/Feedback', component: Feedback },
    { path: '/home/Commercial', component: Commercial },
    { path: '/home/Prefecture', component: Prefecture },
    { path: '/home/ImageShare', component: ImageShare },
    { path: '/home/NewChilders/:id', component: NewChilders },
  ],
  linkActiveClass : 'mui-active'// 设置当前高亮样式
})


// import Vue from 'vue'
// import Router from 'vue-router'
// import header from '../components/header'
// import HelloWorld from '../components/HelloWorld'

// Vue.use(Router)
// export default new VueRouter({
//   routes : [
//     { path: '/header', component: header },
//     { path: '/HelloWorld', component:  HelloWorld},
//   ]
// })