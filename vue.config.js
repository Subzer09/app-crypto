const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
        @import "node_modules/bootstrap/scss/_functions.scss";
        @import "node_modules/bootstrap/scss/_variables.scss";
        `
      }
    }
  },
  lintOnSave: false
})
