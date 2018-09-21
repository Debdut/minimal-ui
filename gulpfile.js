const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const cssnano = require('gulp-cssnano');

//Source Path
const sassSource = 'sass/main.sass';

//Dist Path
const sassDest = 'dist/css/';

//sass Task
gulp.task('sass', ()=> {
  console.log('starting sass task');
  return gulp.src(sassSource)
    .pipe(plumber((err) => {
      console.log('sass task error');
      console.log(err);
    }))
    .pipe(sass({
      outputstyle: 'compressed'
    }))
    // .pipe(cssnano())
    .pipe(gulp.dest(sassDest));
});

gulp.task('watch', () => {
  console.log('starting watch task');
  gulp.watch('sass/*/**', ['sass']);
});
