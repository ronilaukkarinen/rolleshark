/*

REQUIRED STUFF
==============
*/

var changed     = require('gulp-changed');
var gulp        = require('gulp');
var sass        = require('gulp-sass');
var browserSync = require('browser-sync');
var notify      = require('gulp-notify');
var prefix      = require('gulp-autoprefixer');
var minifycss   = require('gulp-clean-css');
var uglify      = require('gulp-uglify');
var cache       = require('gulp-cache');
var concat      = require('gulp-concat');
var util        = require('gulp-util');
var header      = require('gulp-header');
var exec        = require('child_process').exec;

/*

ERROR HANDLING
==============
*/

var handleError = function(task) {
  return function(err) {

      notify.onError({
        message: task + ' failed, check the logs..',
        sound: false
      })(err);

    util.log(util.colors.bgRed(task + ' error:'), util.colors.red(err));
  };
};


/*

BROWSERSYNC
===========
*/

gulp.task('browsersync', function() {

  var files = [
    'rolleshark.scss',
    'rolleshark-madsonic.scss'
  ];

  browserSync.init(files, {
    proxy: "http://192.168.2.100:4041",
    notify: false
  });

});

/*

STYLES
======
*/

gulp.task('styles', function() {
  gulp.src('rolleshark.scss')

  .pipe(sass({
    compass: false,
    bundleExec: true,
    sourcemap: false,
    style: 'compressed',
    debugInfo: true,
    lineNumbers: true,
    errLogToConsole: true,
    includePaths: [
      'bower_components/',
      'node_modules/'
    ]
  }))

  .on('error', handleError('styles'))
  .pipe(prefix('last 3 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4')) //adds browser prefixes (eg. -webkit, -moz, etc.)
  .pipe(minifycss({keepBreaks:false,keepSpecialComments:0,}))
  .pipe(gulp.dest('./'))
  .pipe(browserSync.stream());
  });


  gulp.task('styles-madsonic', function() {
    gulp.src('rolleshark-madsonic.scss')

    .pipe(sass({
      compass: false,
      bundleExec: true,
      sourcemap: false,
      style: 'compressed',
      debugInfo: true,
      lineNumbers: true,
      errLogToConsole: true,
      includePaths: [
        'bower_components/',
        'node_modules/'
      ]
    }))

    .on('error', handleError('styles'))
    .pipe(prefix('last 3 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4')) //adds browser prefixes (eg. -webkit, -moz, etc.)
    .pipe(minifycss({keepBreaks:false,keepSpecialComments:0,}))
    .pipe(gulp.dest('./'))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream());
    });


/*

WATCH
=====
*/

gulp.task('watch', ['browsersync'], function() {
  gulp.watch('rolleshark.scss', ['styles']);
  gulp.watch('rolleshark-madsonic.scss', ['styles-madsonic']);
});
