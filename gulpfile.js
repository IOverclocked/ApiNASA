const gulp = require('gulp');
const sass = require('gulp-sass');
const map = require('gulp-sourcemaps');
const babel = require('gulp-babel');

gulp.task('html', () => {
    gulp.src("src/index.html")
        .pipe(gulp.dest("dist"));
})

gulp.task('sass', () => {
    gulp.src("src/sass/**/*.scss")
        .pipe(map.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(map.write())
        .pipe(gulp.dest("dist/css/"));
})

gulp.task('babel', () => {
    gulp.src("src/js/app.js")
        .pipe(map.init())
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(map.write())
        .pipe(gulp.dest('dist/js/'))
})

gulp.task('watch', () => {
    gulp.watch("src/js/app.js", ['babel']);
    gulp.watch("src/sass/**/*.scss", ['sass']);
    gulp.watch("src/index.html", ['html']);
})

gulp.task('build', ['html', 'sass', 'babel']);

gulp.task('default', ['watch']);
