module.exports = {
    outputDir: '../public',
    css: { extract: false },
    devServer: {
        inline:true,
        proxy: {
          '^/api': {
            target: '<url>',
            changeOrigin: true
          },
          '^/foo': {
            target: '<other_url>'
          }
        }
      },
    css: {
        extract: false
      }
  }