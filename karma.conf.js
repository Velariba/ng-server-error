// Karma configuration
// Generated on Fri May 27 2016 15:14:00 GMT+0300 (EEST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'browserify'],


    // list of files / patterns to load in the browser
    files: [
      'test/*spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      './src/*.js': [ 'browserify' ],
      './test/*.js': [ 'browserify' ]
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,

    plugins: [
      'karma-jasmine',
      'karma-browserify',
      'karma-phantomjs-launcher'
      //'karma-simple-reporter'
    ],


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    browserify: {
      debug: true,
      paths: [__dirname + '/src/'],
      configure: function(bundle) {
        bundle.on('prebundle', function() {
          bundle.transform(require('babelify').configure({
            "presets": ["es2015"],
            "plugins": ["syntax-decorators", "ng-annotate"]
          }));
        });
      }
    }
  })
}
