var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssnext = require('postcss-cssnext');
// var precss = require('precss');
var atImport = require('postcss-import');

// configuramos una tarea para leer el css fuente
gulp.task('css', function(){
   var processors = [
      atImport,
      cssnext
   ];
   gulp.src('./src/*.css')
      .pipe(postcss(processors))
      .pipe(gulp.dest('./css'));
});

// configuramos una tarea watch para que vigile
gulp.task('watch', function(){
   gulp.watch('src/**/style.css',['css']);
});

// configuramos una tarea 'default'
gulp.task('default', ['css','watch']);
