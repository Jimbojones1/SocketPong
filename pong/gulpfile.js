var gulp        = require('gulp');
var less        = require('gulp-less')
var browserify  = require('browserify');
var babelify    = require('babelify');
var source      = require('vinyl-source-stream');
var watch       = require('gulp-watch');


//  first arguement is the files I want to watch, the second is the task to run
gulp.task('watch', function(){
  gulp.watch(['./server/public/styles/*.less'], ['compile-less'])
})

gulp.task('compile-less', function(){
  gulp.src('./server/public/styles/main.less')
  .pipe(less())
  .pipe(gulp.dest('./server/public/styles'))
})


gulp.task('default', ['compile-less', 'watch'])
