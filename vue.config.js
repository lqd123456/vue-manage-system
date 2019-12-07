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
        data: `@import "@/assets/scss/_variable.scss"`
      }
    }
  }
}
