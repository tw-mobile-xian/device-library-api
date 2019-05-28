const gulp = require('gulp');

gulp.task('a', (done) => {
  console.log("task a => !");
  done();
});

gulp.task('b', (done) => {
  console.log("task b => !");
  done();
});

gulp.task('c', (done) => {
  console.log("task c => !");
  done();
});

gulp.task('d', gulp.series(['a', 'b', 'c']));
