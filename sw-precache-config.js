module.exports = {
    staticFileGlobs: [
      'dist/**.html',
      'dist/**.js',
      'dist/**.css',
      'dist/assets/images/*',
      'dist/assets/icons/*'
    ],
    root: 'dist',
    stripPrefix: 'dist/',
    navigateFallback: '/index.html',
    dontCacheBustUrlsMatching:'/^(?=.*\.\w{1,7}$)/',

    runtimeCaching: [{
      urlPattern: /cashflow-fl\.firebaseapp\.com/,
      handler: 'networkFirst'
    }]
  };



  