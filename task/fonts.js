
const {src, dest } = require('gulp');

// const browserSync = require('browser-sync').create();

const fonter = require('gulp-fonter');
const newer = require('gulp-newer');
const ttf2woff2 = require('gulp-ttf2woff2');
const path = require('../config/path');
const app = require('../config/app.js')


const fonts = () => {
    return src(path.fonts.src)
    
    .pipe(newer(path.fonts.dest))
    .pipe(fonter(app.fonter))
    .pipe(dest(path.fonts.dest))
    .pipe(ttf2woff2())
    .pipe(dest(path.fonts.dest))
    
}

module.exports = fonts; 