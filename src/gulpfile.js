var gulp = require("gulp");
var sass = require("gulp-sass");
var auto = require("gulp-autoprefixer");
var clean = require("gulp-clean-css");
var webserver = require("gulp-webserver");

var fs = require("fs");
var path = require("path");
gulp.task("devsass", function() {
    return gulp.src("./src/scss/*.scss")
        .pipe(sass())
        .pipe(auto({
            browsers: ["last 2 versions"]
        }))
        .pipe(clean())
        .pipe(gulp.dest("./src/css"))
})
gulp.task("watch", function() {
    return gulp.watch("./src/scss/*.scss", gulp.series("devsass"))
})
gulp.task("webserver", function() {
    return gulp.src("./src")
        .pipe(webserver({
            port: 8080,
            middleware: function(req, res, next) {
                var pathname = require("url").parse(req.url, true).pathname;
                if (pathname == "/favicon.ico") {
                    return res.end();
                } else {
                    pathname = pathname == "/" ? "index.html" : pathname;
                    res.end(fs.readFileSync(path.join(__dirname, "src", pathname)))

                }
            }
        }))
})
gulp.task("dev", gulp.parallel("devsass", "watch"))