const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: ['vuetify'],
  //关闭eslint
  lintOnSave: false,
  //cdn
  configureWebpack:{
    externals: {
      // vue: 'Vue',
      // 'vue-router': 'VueRouter',
      // vuex: 'Vuex',
      // axios: 'axios',
      vuetify: 'Vuetify'
    }
  }

})
