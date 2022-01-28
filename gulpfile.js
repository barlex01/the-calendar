
// подключаемые плагины
const { watch, series, parallel} = require('gulp');
const browserSync = require('browser-sync').create();
const app = require('./config/app.js')

//конфигурация 
const path = require('./config/path.js')

//подключаемые задачи
const clear = require('./task/clear.js');
const html = require('./task/html.js')
const scss = require('./task/scss.js')
const js = require('./task/js.js')
const img = require('./task/img.js')
const fonts = require('./task/fonts.js')


const server = () => {
    browserSync.init({
        server:{
            baseDir: path.root
        }
    })
}


const watcher = () => {
    
    watch(path.html.watch, html).on('all', browserSync.reload)
    watch(path.scss.watch, scss).on('all', browserSync.reload);
    watch(path.js.watch, js).on('all', browserSync.reload);
    watch(path.img.watch, img).on('all', browserSync.reload);
    watch(path.fonts.watch, fonts).on('all', browserSync.reload);
}


const build = series(
    clear,
    parallel(/*pug,*/html, scss, js, img, fonts),
   
)

const dev = series(
    build,
    parallel(watcher, server)

);

exports.watch = watcher;
exports.clear = clear;
exports.fonts = fonts
exports.html = html;
exports.scss = scss;
exports.js = js;
exports.img = img;



//сборка
exports.default = app.isProd
    ? build
    : dev;



