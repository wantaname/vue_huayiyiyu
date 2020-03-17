import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'


// 导入全局样式表
import './assets/css/global.css'
import axios from 'axios'

// baseurl
axios.defaults.baseURL='http://www.huayiyiyu.cn/flask/'

// 请求拦截器，加上token
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token') //设置响应头

  return config
}, err => {
  console.log(err)
})
//挂载到Vue的原型对象上
Vue.prototype.$http=axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
