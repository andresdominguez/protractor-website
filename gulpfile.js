var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('js', function() {
  gulp.src(['app/js/app.js', 'app/js/**/*.js'])
      .pipe(concat('app.js'))
      .pipe(gulp.dest('app'))
});

gulp.task('css', function() {
  gulp.src(['bower_components/bootstrap/dist/css/bootstrap.min.css'])
      .pipe(concat('styles.css'))
      .pipe(gulp.dest('app/css'))
});

gulp.task('watch', ['js'], function() {
  gulp.watch('src/**/*.js', ['js'])
});
