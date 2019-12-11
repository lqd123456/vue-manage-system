module.exports = {
  devServer: {
    port: 3333,
    open: true
    // proxy: {

    // }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/_variable.scss";` // 新版本使用prependData 旧版本使用date
      }
    }
  }
}
