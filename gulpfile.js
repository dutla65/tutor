var gulp  = require('gulp'),
gutil     = require('gulp-util'),
webserver = require('gulp-webserver'),
minifyCSS = require('gulp-minify-css'),
rename    = require('gulp-rename'),
sass      = require('gulp-sass'),
babel     = require('gulp-babel'),
prefix    = require('gulp-autoprefixer');

gulp.task('html', function() {
  gulp.src('./index.html')
})

gulp.task('js', function() {
  gulp.src('src/js/*.js')
    .pipe(babel())
    .pipe(rename('script.js'))
    .pipe(gulp.dest('./'))
});

gulp.task('sass', function() {
  gulp.src('src/sass/*.scss')
    .pipe(sass())
    .pipe(prefix())
    .pipe(minifyCSS())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
  gulp.watch('src/sass/*.scss', ['sass']);
  gulp.watch('src/js/*.js', ['js']);
  gulp.watch('./index.html', ['html']);
});

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('default', ['watch', 'js', 'sass', 'html', 'webserver']);
