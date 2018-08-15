var gulp    = require('gulp'), 
    sass    = require('gulp-sass'), // sass plugin 
    pug     = require('gulp-pug'), // pug plugin 
    live    = require('gulp-livereload'), // reload browser auto plugin
    /* all directory"s */
    imgDir  = 'img/*', 
    sassDir = 'sass/*.scss', 
    pugDir  = '*.pug',
    jsDir   = 'js',
    cssDir  = 'css';

// prevent error stop the watching 
function preventError(err){ 
  console.log(err); 
  this.emit('end'); 
} 

// sass function 
gulp.task('sassTask', function() { 
  gulp.src(sassDir) 
    .pipe(sass()) 
    .on("error", preventError) 
    .pipe(gulp.dest('css')) 
    .pipe(live()); 
}); 

// pug function 
gulp.task('pugTask', function(){
  return gulp.src(pugDir)
    .pipe(pug({pretty: true}))
    .on("error", preventError)
    .pipe(gulp.dest('./'))
    .pipe(live());
});

// javaScript task
gulp.task('jsTask', function(){
  gulp.src(jsDir)
   .pipe(live()); 
});

// Css task
gulp.task('cssTask', function(){
  gulp.src(cssDir)
   .pipe(live()); 
});
 
// Start default task and watching files 
gulp.task('default', function() { 
  live.listen(); 
  gulp.watch(sassDir, ['sassTask']); 
  gulp.watch(pugDir, ['pugTask']); 
  gulp.watch(jsDir, ['jsTask']); 
  gulp.watch(cssDir, ['cssTask']); 
});
