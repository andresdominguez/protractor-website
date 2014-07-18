var less = require('gulp-less');
var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('js', function() {
  gulp.src(['app/js/app.js', 'app/js/**/*.js'])
      .pipe(concat('app.js'))
      .pipe(gulp.dest('app'))
});

gulp.task('css', function() {
  gulp.src([
    'bower_components/bootstrap/dist/css/bootstrap.min.css',
    'app/css/protractor.css'
  ])
      .pipe(concat('styles.css'))
      .pipe(gulp.dest('app/css'))
});

gulp.task('less', function() {
  gulp.src(['app/css/protractor.less'])
      .pipe(less())
      .pipe(gulp.dest('app/css'))
});

gulp.task('watch', function() {
  gulp.watch([
    'app/**/*.js',
    'app/css/protractor.css',
    'app/css/protractor.less'
  ], function() {
    gulp.run(['less', 'css', 'js'])
  })
});
