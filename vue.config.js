module.exports = {
  devServer: {
    proxy: {
      '/api*': {
        target: 'http://176.57.214.6:3002',
        ws: true,
        changeOrigin: true
      },
    }
  },
  productionSourceMap: false,
  filenameHashing: false,
  transpileDependencies: [
    'vuetify'
  ]
}
