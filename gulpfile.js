var gulp = require('gulp');
var gulpMinifyCss = require('gulp-minify-css');
var gulpConcat = require('gulp-concat');
var gulpUglify = require('gulp-uglify');
var gulpHtmlmin = require('gulp-htmlmin');
var gulpPrefix = require('gulp-autoprefixer');

gulp.task('styles', function(){
    return gulp.src('static/css/*.css')
    .pipe(gulpConcat('main-site.css'))
    .pipe(gulpMinifyCss())
    .pipe(gulpPrefix('last 2 versions'))
    .pipe(gulp.dest('static/css'))
});

gulp.task('scripts', async function () {
    gulp
        .src([
            './static/js/jquery-1.12.3.min.js',
            './static/js/jquery.easing.min.js',
            './static/js/popper.min.js',
            './static/js/bootstrap.min.js'
        ])
        .pipe(gulpConcat('core-bundle.js'))
        .pipe(gulpUglify())
        .pipe(gulp.dest('static/js/'));
});

gulp.task('scripts-plugins', async function () {
    gulp
        .src([
            './static/js/jquery.waypoints.min.js',
            './static/js/jquery.counterup.min.js',
            './static/js/jquery.mCustomScrollbar.concat.min.js',
            './static/js/isotope.pkgd.min.js',
            './static/js/infinite-scroll.min.js',
            './static/js/imagesloaded.pkgd.min.js',
            './static/js/slick.min.js',
            './static/js/contact.js',
            './static/js/validator.js',
            './static/js/custom.js',
        ])
        .pipe(gulpConcat('plugins-bundle.js'))
        .pipe(gulpUglify())
        .pipe(gulp.dest('static/js/'));
});

gulp.task('html-minify', () => {
    return gulp.src('views/*.tpl')
      .pipe(gulpHtmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest('views'));
  });