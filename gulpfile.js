var gulp        = require('gulp');
var browserSync = require('browser-sync').create();


gulp.task('default', function () {

    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("./*.html", ['html-watch']);
    gulp.watch("./*.js", ['js-watch']);
});

gulp.task('html-watch',function (done) {
    browserSync.reload();
    done();
});

gulp.task('js-watch',function (done) {
    browserSync.reload();
    done();
});