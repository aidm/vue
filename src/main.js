// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
// 按需导入.. 不需要样式
Vue.use(VueResource)
//配置全局路径
Vue.http.options.root='http://vue.studyit.io'

import animate from 'animate.css'



import { header, Swipe, SwipeItem} from 'mint-ui'
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(header.name, header)

// 导入mui的css样式
import './lib/mui/css/mui.min.css'        
import './lib/mui/css/icons-extra.css'

Vue.config.productionTip = false
// 过滤器
import moment from 'moment'
Vue.filter('dataTime', (dataStr, parent='YYYY-MM-DD HH:mm')=>{
  return moment(dataStr).format(parent)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // components: { App },
  // template: '<App/>'
  render:c=>c(App)
})
