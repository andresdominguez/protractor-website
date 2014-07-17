var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('js', function() {
  gulp.src(['app/**/*.js'])
      .pipe(concat('app.js'))
      .pipe(gulp.dest('dist'))
});

gulp.task('watch', ['js'], function() {
  gulp.watch('src/**/*.js', ['js'])
});
