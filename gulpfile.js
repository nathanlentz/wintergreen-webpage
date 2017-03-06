const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function() {
    gulp.src('./scss/main.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('serve', function(){
    browserSync.init({
        server: {
            baseDir: './'
        }
    });

    // Watch for any change to a sass file
    gulp.watch('./scss/*.scss', ['styles']);

    // Reload browserSync on a change
    gulp.watch('./**/*.html').on('change', browserSync.reload);
});

/* Setup Default Gulp task to run when we call gulp */
// Compile sass and then run browser sync
gulp.task('default', ['styles', 'serve']);