
const {src, dest } = require('gulp');

// const browserSync = require('browser-sync').create();

const prefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const size = require('gulp-size');
const shorthand = require('gulp-shorthand');
const mediaGroup = require('gulp-group-css-media-queries');
const sass = require('gulp-sass')(require('sass'));
const sassGlob = require('gulp-sass-glob')


const webpCss = require('gulp-webp-css');
const path = require('../config/path');
const app = require('../config/app.js')


const scss = () => {
    return src(path.scss.src, {sourcemaps:app.isDev})
    
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(webpCss())
    .pipe(prefixer())
    .pipe(shorthand())
    .pipe(mediaGroup())
    .pipe(size({title: 'main.css'}))
    .pipe(dest(path.scss.dest, {sourcemaps:app.isDev}))
    .pipe(rename({ suffix:'.min'}))
    .pipe(csso())
    .pipe(size({title: 'main.min.css'}))
    .pipe(dest(path.scss.dest, {sourcemaps:app.isDev}))
    
}

module.exports = scss;