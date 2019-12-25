// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
// import VueAwesomeSwiper from 'vue-awesome-swiper'


import './assets/styles/reset.css'
import './assets/styles/border.css'
// 导入swiper样式表
// import 'swiper/dist/css/swiper.css'
// import './assets/styles/iconfont/iconfont.css'

Vue.config.productionTip = false
// 调用fastclick绑定到document.body上
FastClick.attach(document.body)
// 调用VueAwesomeSwiper
// Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
