module.exports = {
    staticFileGlobs: [     
      'dist/**.js',
      'dist/**.css',
      'dist/assets/images/*',
      'dist/assets/icons/*'
    ],
    root: 'dist',
    stripPrefix: 'dist/',
    navigateFallback: '/index.html',
    dontCacheBustUrlsMatching:'/^(?=.*\.\w{1,7}$)/'   
  };



  