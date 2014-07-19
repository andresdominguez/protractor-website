var less = require('gulp-less');
var gulp = require('gulp');
var concat = require('gulp-concat');

var paths = {
  js: ['app/js/app.js', 'app/js/**/*.js'],
  less: ['app/css/protractor.less'],
  css: ['app/css/protractor.css']
};

gulp.task('js', function() {
  gulp.src(paths.js)
      .pipe(concat('app.js'))
      .pipe(gulp.dest('app'))
});

gulp.task('css', function() {
  gulp.src(paths.css)
      .pipe(concat('styles.css'))
      .pipe(gulp.dest('app/css'))
});

gulp.task('less', function() {
  gulp.src(paths.less)
      .pipe(less())
      .pipe(gulp.dest('app/css'))
});

gulp.task('watch', function() {
  gulp.watch(paths.js, ['js']);
  gulp.watch(paths.css, ['css']);
  gulp.watch(paths.less, ['less']);
});
