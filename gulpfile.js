var gulp        = require('gulp');
var browserSync = require('browser-sync').create();


gulp.task('default', function () {

    browserSync.init({
        server: {
            baseDir: "./src"
        }
    });

    gulp.watch("./src/*.html", ['html-watch']);
    gulp.watch("./src/*.js", ['js-watch']);
    gulp.watch("./src/*.css", ['css-watch']);
});

gulp.task('html-watch',function (done) {
    browserSync.reload();
    done();
});

gulp.task('js-watch',function (done) {
    browserSync.reload();
    done();
});


gulp.task('css-watch',function (done) {
    browserSync.reload();
    done();
});