var gulp        = require('gulp');
var less        = require('gulp-less')
var browserify  = require('browserify');
var babelify    = require('babelify');
var source      = require('vinyl-source-stream');
var watch       = require('gulp-watch');


//  first arguement is the files I want to watch, the second is the task to run
gulp.task('watch', function(){
  gulp.watch(['./public/stylesheets/*.less'], ['compile-less'])
})

gulp.task('compile-less', function(){
  gulp.src('./public/stylesheets/style.less')
  .pipe(less())
  .pipe(gulp.dest('./public/stylesheets/'))
})


gulp.task('default', ['compile-less', 'watch'])
