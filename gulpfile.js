var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps')
var browserSync =require("browser-sync").create()
var imagemin = require("gulp-imagemin")
var ghPages = require("gh-pages")


sass.compiler = require('node-sass');

gulp.task("sass", function() {
  // run sass "sass css/app.css app.css --watch"
  return gulp.src("src/css/app.scss")
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(
        cleanCSS({
            compatibility: 'ie8'
    })
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("dist"))
    .pipe(browserSync.stream())
})
gulp.task("html", function(){
    return gulp.src("src/*.html")
        .pipe(gulp.dest("dist"))

})

gulp.task("img", function(){
    return gulp.src("src/img/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/img"))

})

gulp.task("watch", function() {

    browserSync.init({
        server: {
            baseDir: "dist"

        }

    })
    gulp.watch("src/*.html", ["html"]).on("change", browserSync.reload)
    gulp.watch("src/css/app.scss", ["sass"])
    gulp.watch("src/img/*", ["img"])

})



gulp.task("deploy", function(){
    ghPages.publish("dist")

})
gulp.task('default',  ["html", "sass","img", "watch"]);