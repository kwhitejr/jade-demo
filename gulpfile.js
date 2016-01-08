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
gulp.task('template', function () {
  gulp.src('./templates');
});

gulp.task('default', ['myTask', 'myTask2', 'template']);