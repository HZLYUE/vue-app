import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


//引入样式重置文件和rem计算文件
import'./assets/css/reset.css'
import'./assets/js/rem.js'
//引入第三方库
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'; //引入插件
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(VueAxios, axios) //此两行为调用第三方的库的方法 才能在任何页面直接使用
Vue.use(ElementUI);//调用插件
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
