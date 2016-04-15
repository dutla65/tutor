var 
gulp      = require('gulp'),
gutil     = require('gulp-util'),
webserver = require('gulp-webserver'),
minifyCSS = require('gulp-minify-css'),
rename    = require('gulp-rename'),
sass      = require('gulp-sass'),
babel     = require('gulp-babel'),
prefix    = require('gulp-autoprefixer'),
concat    = require('gulp-concat'); 

gulp.task('html', function() {
  gulp.src('./index.html')
});

// deprecated library pulling method
gulp.task('library', function() {
  gulp.src('node_modules/smooth-scroll/dist/js/smooth-scroll.min.js')
    .pipe(gulp.dest('dist/'));
});

gulp.task('js', function() {
  // Load the script.js last to ensure any dependencies are in first
  gulp.src([
    'node_modules/smooth-scroll/dist/js/smooth-scroll.min.js', 
    'src/js/script.js'
    ])
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('sass', function() {
  gulp.src('src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(prefix())
    .pipe(minifyCSS())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('dist/'));
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
