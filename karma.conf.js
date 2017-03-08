module.exports = function(config) {
  config.set({
    // ... normal karma configuration
    files: [
      // all files ending in "_test"
      'test/test_index.js'
      // each file acts as entry point for the webpack configuration
    ],

    preprocessors: {
      // add webpack as preprocessor

      'test/test_index.js': ['webpack', 'sourcemap']
    },

    webpack: {
      // karma watches the test entry points
      // (you don't need to specify the entry option)
      // webpack watches dependencies

      // webpack configuration
    },

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      stats: 'errors-only'
    }
  });
};