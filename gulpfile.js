var gulp = require('gulp'),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    usemin = require('gulp-usemin'),
    minifyCss = require('gulp-minify-css'),
    clean = require('gulp-clean');

gulp.task('default', ['watch']);

gulp.task('watch', ['browserSync', 'less'],function(){
  gulp.watch('app/less/**/*.less', ['less']);
  gulp.watch('app/js/**/*.js', ['scripts']);
  gulp.watch('app/*.html', browserSync.reload);
});

gulp.task('less', function() {
  gulp.src('app/less/**/*.less')
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('scripts', function(){
  return gulp.src('app/js/**/*.js')
    // .pipe(jshint())
    // .pipe(jshint.reporter('jshint-stylish'))
    .pipe(browserSync.reload({
      stream : true
    }));
});

gulp.task('clean', function(){
  return gulp.src('dist/', {read:false})
    .pipe(clean());
})

//builds and minifies css/js files
gulp.task('build', ['clean'],  function(){
  gulp.src('app/images/**/*.png')
    .pipe(gulp.dest('dist/images'));
  gulp.src('app/data/**/*.json')
    .pipe(gulp.dest('dist/data'));
  gulp.src('app/index.html')
    .pipe(usemin({
      assetsDir: 'app',
      css: [minifyCss(), 'concat'],
      js: [uglify(), 'concat']
    }))
    .pipe(gulp.dest('dist'));
})

// Start browserSync server
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'app'
    }
  })
})
