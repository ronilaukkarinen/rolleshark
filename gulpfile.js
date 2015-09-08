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
var minifycss   = require('gulp-minify-css');
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

var beep = function() {
  var os = require('os');
  var file = '/Users/rolle/gulp_error.wav';
  if (os.platform() === 'linux') {
    // linux
    exec("aplay " + file);
  } else {
    // mac
    console.log("afplay -v 3 " + file);
    exec("afplay -v 3 " + file);
  }
};

var handleError = function(task) {
  return function(err) {
    beep();
    
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
    'tests/Subsonic.html',
    'rolleshark.scss'
  ];

  browserSync.init(files, {
    proxy: "rolleshark.dev/tests",
    browser: "Google Chrome",
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
    errLogToConsole: true
  })) 

  .on('error', handleError('styles'))
  .pipe(prefix('last 3 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4')) //adds browser prefixes (eg. -webkit, -moz, etc.)
  .pipe(minifycss({keepBreaks:false,keepSpecialComments:0,}))
  .pipe(gulp.dest('./'))
  .pipe(browserSync.stream());
  });

/*

WATCH
=====
*/

gulp.task('watch', ['browsersync'], function() {
  gulp.watch('rolleshark.scss', ['styles']);
});