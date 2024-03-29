const {src, dest,} = require('gulp');
const fileInclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const size = require('gulp-size');
// const browserSync = require('browser-sync').create();

const path = require('../config/path');
const app = require('../config/app.js')
const webpHtml =require('gulp-webp-html');



const html = () => {
    return src(path.html.src)
    
     .pipe(fileInclude())
     .pipe(webpHtml())
     .pipe(size({title: 'до сжатия'}))
     .pipe(htmlmin(app.htmlmin))
     .pipe(size({title: 'после сжатия'}))
     .pipe(dest(path.html.dest))
    //  .pipe(browserSync.stream())
}

module.exports = html;


