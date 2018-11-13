var gulp = require("gulp");
sass = require("gulp-sass"),
    gulp = require("gulp"),
    sass = require("gulp-sass"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    cssnano = require("cssnano"),
    sourcemaps = require("gulp-sourcemaps");

var paths = {
    styles: {
        src: "./src/*.scss",
        dest: "public_html/css"
    }
};


var browserSync = require("browser-sync").create();


function style() {


    return (
        gulp
            .src(paths.styles.src)
            .pipe(sourcemaps.init())
            .pipe(sass())
            .on("error", sass.logError)
            .pipe(postcss([autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }), cssnano()]))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(paths.styles.dest))
            .pipe(browserSync.stream())
    );
}

exports.style = style


function reload() {
    browserSync.reload();
}

function watch() {
    
    style();
    browserSync.init({
        server: {
            baseDir: "./public_html"
        }
    });
    gulp.watch(paths.styles.src, style);

    gulp.watch("./public_html/*.html", reload);
}

exports.watch = watch
