//脚手架允许延伸的webpack的配置文件
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave : false,//禁用eslint语法检查
})
