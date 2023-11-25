const { defineConfig } = require('@vue/cli-service')
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.resolve.alias
        .set('@', path.resolve(__dirname, 'src/'))
        .set('@assets', path.resolve(__dirname, 'src/assets'))
    ;
  },
  pluginOptions: {
    i18n: {
      locale: 'fr',
      fallbackLocale: 'fr',
      localeDir: 'translations',
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true
    }
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "./src/assets/index.scss";@import 'material-icons/iconfont/material-icons.css';`,
      },
    },
  },
})
