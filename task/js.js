
const {src, dest } = require('gulp');

// const browserSync = require('browser-sync').create();

const babel = require('gulp-babel');
const webpack = require('webpack-stream')


const path = require('../config/path');
const app = require('../config/app.js')


const js = () => {
    return src(path.js.src, {sourcemaps:app.isDev})
    
    .pipe(babel())
    .pipe(webpack(app.webpack))
    .pipe(dest(path.js.dest, {sourcemaps:app.isDev}))
    
}

module.exports = js;