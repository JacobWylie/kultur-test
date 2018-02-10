'use strict';

const gulp       = require('gulp'),
	  concat     = require('gulp-concat'),
	  minCss     = require('gulp-minify-css'),
	  rename     = require('gulp-rename'),
	  uglify     = require('gulp-uglify'),
      gutil      = require('gulp-util'),
      babel      = require('gulp-babel'),
      sass       = require('gulp-sass'),
	  stripDebug = require('gulp-strip-debug'),
      bs         = require('browser-sync').create();

// auto update browser on SCSS or JS file changes
gulp.task('browser-sync', () => {
    bs.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('public/sass/**/*.scss',['sass']);
    gulp.watch('public/js/**/*.js',['javascript']);
});

// Handle javscript tasks
// Babel ES6+ -> ES5, concat files, minify, rename to bundle
gulp.task('javascript', () => {
    gulp.src(['./public/js/**/*.js'])
        .pipe(babel({
            presets: ['env']
            }))
        .pipe(concat('build.js'))
        .pipe(stripDebug())
        .pipe(uglify())
            .on('error', err => gutil.log(gutil.colors.red('[Error]'), err.toString()))
        .pipe(rename('build.min.js'))
        .pipe(gulp.dest('./build'))
        // prompt brower-sync to reload browser
        .pipe(bs.reload({stream: true}));
})

// Handle sass and css tasks
// Sassy -> CSS, concat files, minify, rename, save to css folder 
gulp.task('sass', () => {
    gulp.src(['./public/sass/**/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('build.css'))
        //.pipe(sourcemaps.init())
        .pipe(minCss({
            keepSpecialComments: 0
        }))
        //.pipe(sourcemaps.write('.'))
        .pipe(rename('build.min.css'))
        .pipe(gulp.dest('./build'))
        // prompt brower-sync to reload browser
        .pipe(bs.reload({stream: true})); 
})

// prompt gulp to run 
gulp.task('start', ['javascript', 'sass', 'browser-sync']);























