var gulp = require('gulp'); // loads the gulp module in the npm modules

// gulp tasks:
// styles, min css, concetanating and prefix
gulp.task('styles', function () {
    console.log('starting styles task!');
});

// scripts, min js, concetanating and es6 in es5 code 
gulp.task('scripts', function () {
    console.log('starting scripts task!!');
});

// images compressing images
gulp.task('images', function () {
    console.log('starting images task!!!');
});

gulp.task('default', function () {
    console.log('starting default task');
});