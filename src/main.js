import Vue from 'vue'
import App from './App.vue'

import 'animate.css'
import VueRouter from 'vue-router'
import router from './router'
// import vuetify from './plugins/vuetify'

//按需引入element
import {  Backtop, Icon, } from 'element-ui'

Vue.use(Backtop)
Vue.use(Icon)

// 启用router
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  // vuetify,
  render: h => h(App)
})
