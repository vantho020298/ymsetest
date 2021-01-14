let gulp = require('gulp');
let sass = require('gulp-sass');
let browserify = require('browserify');
let source = require('vinyl-source-stream');

gulp.task('sass', () => {
  return gulp.src(['src/*.sass', 'src/*/*.sass'])
    .pipe(sass())
    .pipe(gulp.dest('dist'))
})

gulp.task('scripts', function () {
  return browserify('./src/js/testExam.js')
    .bundle()
    .pipe(source('./js/testExam.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', () => {
  gulp.watch(['src/*', 'src/*/*'], gulp.series(['sass', 'scripts']));
});

gulp.task('build', gulp.series('sass', 'scripts', 'watch'));