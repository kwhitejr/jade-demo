var gulp = require('gulp');

var jade = require('gulp-jade');

gulp.task('myTask', function () {
  console.log('Hello');
});

gulp.task('myTask2', function () {
  console.log('World');
});

// gulp.task('default', function () {
//   console.log('default task');
// });

// Compile template files.
var data = require('./data.json');
gulp.task('template', function () {
  gulp.src('./templates/*.jade')
    .pipe(jade({
      pretty: true,
      locals: data
    }))
    .pipe(gulp.dest('./public'));
});

gulp.task('watch', function () {
  gulp.watch(['./data.json', './templates/*.jade'], ['default']);
});

gulp.task('default', ['myTask', 'myTask2', 'template']);