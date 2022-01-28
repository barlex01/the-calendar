
const {src, dest } = require('gulp');

// const browserSync = require('browser-sync').create();

const webpHtml =require('gulp-webp-html');
const pugs = require('gulp-pug');
const path = require('../config/path');
const app = require('../config/app.js')

const pug = () => {
    return src(path.pug.src)
   
     .pipe(pugs(app.pugs))
     .pipe(webpHtml())
     .pipe(dest(path.pug.dest))
    //  .pipe(browserSync.stream())
}

module.exports = pug;