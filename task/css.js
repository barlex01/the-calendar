
const {src, dest } = require('gulp');

// const browserSync = require('browser-sync').create();

const concat = require('gulp-concat');
const cssImport = require('gulp-cssimport');
const prefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const size = require('gulp-size');
const shorthand = require('gulp-shorthand');
const mediaGroup = require('gulp-group-css-media-queries');
const webpCss = require('gulp-webp-css');

const path = require('../config/path');
const app = require('../config/app.js')


const css = () => {
    return src(path.css.src, {sourcemaps:app.isDev})
    .pipe(concat('main.css'))
    .pipe(cssImport())
    .pipe(webpCss())
    .pipe(prefixer())
    .pipe(shorthand())
    .pipe(mediaGroup())
    .pipe(size({title: 'main.css'}))
    .pipe(dest(path.css.dest, {sourcemaps:app.isDev}))
    .pipe(rename({ suffix:'.min'}))
    .pipe(csso())
    .pipe(size({title: 'main.min.css'}))
    .pipe(dest(path.css.dest, {sourcemaps:app.isDev}))
    
}

module.exports = css;