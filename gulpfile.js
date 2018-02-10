'use strict';

const gulp       = require('gulp'),
	  concat     = require('gulp-concat'),
	  minCss     = require('gulp-minify-css'),
	  rename     = require('gulp-rename'),
	  uglify     = require('gulp-uglify'),
      gutil      = require('gulp-util'),
      babel      = require('gulp-babel'),
      sass       = require('gulp-sass'),
	  stripDebug = require('gulp-strip-debug');

gulp.task('start', () => {
    // Sassy -> CSS, concat files, minify, rename, save to css folder 
    gulp.src(['./public/sass/**/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('build.css'))
        //.pipe(sourcemaps.init())
        .pipe(minCss({
            keepSpecialComments: 0
        }))
        //.pipe(sourcemaps.write('.'))
        .pipe(rename('build.min.css'))
        .pipe(gulp.dest('./build'));

    // Babel ES6+ -> ES5, concat files, minify, rename to bundle
    gulp.src(['./public/js/**/*.js'])
        .pipe(babel({
            presets: ['env']
            }))
        .pipe(concat('build.js'))
        .pipe(stripDebug())
        .pipe(uglify())
            .on('error', err => gutil.log(gutil.colors.red('[Error]'), err.toString()))
        .pipe(rename('build.min.js'))
        .pipe(gulp.dest('./build'));
});

//Watch task
gulp.task('watch', () => {
    gulp.watch('public/sass/**/*.scss',['start']);
    gulp.watch('public/js/**/*.js',['start']);
});






















