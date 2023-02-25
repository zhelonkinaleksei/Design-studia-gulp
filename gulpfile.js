"use strict";

const { src, dest } = require("gulp");
const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const cssbeautify = require("gulp-cssbeautify");
const removeComments = require('gulp-strip-css-comments');
const rename = require("gulp-rename");
const sass = require("gulp-sass")(require("sass"));
const cssnano = require("gulp-cssnano");
const uglify = require("gulp-uglify");
const plumber = require("gulp-plumber");
const panini = require("panini");
const del = require("del");
const notify = require("gulp-notify");
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const browserSync = require("browser-sync").create();
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const sourcemaps = require('gulp-sourcemaps');
const ttfToWoff = require("gulp-ttf-to-woff");

/* Paths */
const srcPath = 'src/';
const distPath = 'dist/';

const path = {
    build: {
        html: distPath,
        js: distPath + "assets/js/",
        css: distPath + "assets/css/",
        images: distPath + "assets/images/",
        fonts: distPath + "assets/fonts/"
    },
    src: {
        html: srcPath + "*.html",
        js: srcPath + "assets/js/*.js",
        css: srcPath + "assets/scss/*.scss",
        images: srcPath + "assets/images/**/*.{jpg,png,svg,gif,ico,webp,webmanifest,xml,json}",
        fonts: srcPath + "assets/fonts/**/*.{eot,woff,woff2,ttf,svg}"
    },
    watch: {
        html: srcPath + "**/*.html",
        js: srcPath + "assets/js/**/*.js",
        css: srcPath + "assets/scss/**/*.scss",
        images: srcPath + "assets/images/**/*.{jpg,png,svg,gif,ico,webp,webmanifest,xml,json}",
        fonts: srcPath + "assets/fonts/**/*.{eot,woff,woff2,ttf,svg}"
    },
    clean: "./" + distPath
}





/* Tasks */


function serve() {
    browserSync.init({
        server: {
            baseDir: "./" + distPath,
            // proxy: "yourlocal.dev"
        }
    });
}

function html(cb) {
    panini.refresh();
    return src(path.src.html, { base: srcPath })
        .pipe(plumber())
        .pipe(panini({
            root: srcPath,
            layouts: srcPath + 'layouts/',
            partials: srcPath + 'partials/',
            helpers: srcPath + 'helpers/',
            data: srcPath + 'data/'
        }))
        .pipe(dest(path.build.html))
        .pipe(browserSync.reload({ stream: true }));

    cb();
}

function css(cb) {
    return src(path.src.css, { base: srcPath + "assets/scss/" })
        .pipe(plumber({
            errorHandler: function (err) {
                notify.onError({
                    title: "SCSS Error",
                    message: "Error: <%= error.message %>"
                })(err);
                this.emit('end');
            }
        }))
        .pipe(sass({
            includePaths: './node_modules/'
        }))
        .pipe(autoprefixer({
            cascade: true
        }))
        .pipe(cssbeautify())
        .pipe(dest(path.build.css))
        .pipe(cssnano({
            zindex: false,
            discardComments: {
                removeAll: true
            }
        }))
        .pipe(removeComments())
        .pipe(rename({
            suffix: ".min",
            extname: ".css"
        }))
        .pipe(dest(path.build.css))
        .pipe(browserSync.reload({ stream: true }));

    cb();
}

function cssWatch(cb) {
    return src(path.src.css, { base: srcPath + "assets/scss/" })
        .pipe(plumber({
            errorHandler: function (err) {
                notify.onError({
                    title: "SCSS Error",
                    message: "Error: <%= error.message %>"
                })(err);
                this.emit('end');
            }
        }))
        .pipe(sass({
            includePaths: './node_modules/'
        }))
        .pipe(rename({
            suffix: ".min",
            extname: ".css"
        }))
        .pipe(dest(path.build.css))
        .pipe(browserSync.reload({ stream: true }));

    cb();
}

function js(cb) {
    return src(path.src.js, { base: srcPath + 'assets/js/' })
        .pipe(plumber({
            errorHandler: function (err) {
                notify.onError({
                    title: "JS Error",
                    message: "Error: <%= error.message %>"
                })(err);
                this.emit('end');
            }
        }))
        //.pipe(webpack(require('./webpack.config.js')))
        .pipe(sourcemaps.init())
        .pipe(webpackStream({
            mode: "production",
            entry: {
                app: './src/assets/js/firstpage/app.js',
                main: './src/assets/js/secondpage/main.js',
            },
            output: {
                filename: '[name].js',
            },
        }))
        .pipe(sourcemaps.write('../maps', { addComment: false }))
        //.pipe(sourcemaps.write())
        .pipe(dest(path.build.js))
        // .pipe(uglify())
        // .pipe(rename({
        //     suffix: ".min",
        //     extname: ".js"
        // }))
        // .pipe(sourcemaps.write('../maps', { addComment: false }))
        // //.pipe(sourcemaps.write())
        // .pipe(dest(path.build.js))
        .pipe(browserSync.reload({ stream: true }));



    cb();
}

function jsWatch(cb) {
    return src(path.src.js, { base: srcPath + 'assets/js/' })
        .pipe(plumber({
            errorHandler: function (err) {
                notify.onError({
                    title: "JS Error",
                    message: "Error: <%= error.message %>"
                })(err);
                this.emit('end');
            }
        }))
        .pipe(sourcemaps.init())
        //.pipe(webpack(require('./webpack.config.js')))
        .pipe(webpackStream({
            mode: "production",
            entry: {
                app: './src/assets/js/firstpage/app.js',
                main: './src/assets/js/secondpage/main.js',
            },
            output: {
                filename: '[name].js',
            },
        }))
        .pipe(sourcemaps.write('../maps', { addComment: false }))
        //.pipe(sourcemaps.write())
        .pipe(dest(path.build.js))
        // .pipe(uglify())
        // .pipe(rename({
        //     suffix: ".min",
        //     extname: ".js"
        // }))
        // //.pipe(sourcemaps.write())
        // .pipe(sourcemaps.write('../maps', { addComment: false }))
        // .pipe(dest(path.build.js))
        .pipe(browserSync.reload({ stream: true }));

    cb();
}

function images(cb) {
    return src(path.src.images)
        .pipe(imagemin({
            interlaced: true,
            progressive: true,
            optimizationLevel: 5,
            svgoPlugins: [
                {
                    removeViewBox: true
                }
            ]
        }))
        .pipe(dest(path.build.images))
        .pipe(browserSync.reload({ stream: true }));

    cb();
}


function fonts(cb) {
    return src(path.src.fonts)
        .pipe(ttfToWoff())
        .pipe(dest(path.build.fonts))
        .pipe(browserSync.reload({ stream: true }));

    cb();
}



function clean(cb) {
    return del(path.clean);

    cb();
}

function watchFiles() {
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], cssWatch);
    gulp.watch([path.watch.js], jsWatch);
    gulp.watch([path.watch.images], images);
    gulp.watch([path.watch.fonts], fonts);
}

const build = gulp.series(clean, gulp.parallel(html, css, js, images, fonts));
const watch = gulp.parallel(build, watchFiles, serve);



/* Exports Tasks */
exports.html = html;
exports.css = css;
exports.js = js;
exports.images = images;
exports.fonts = fonts;
exports.clean = clean;
exports.build = build;
exports.watch = watch;
exports.default = watch;
