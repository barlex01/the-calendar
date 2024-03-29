const isProd = process.argv.includes('--production');
const isDev = !isProd;




module.exports = {
    isProd: isProd,
    isDev: isDev,


    htmlmin:{
        collapseWhitespace: isProd
    },
    pugs:{
        pretty:isDev,
        
    },
    webpack:{
        mode:isProd ? 'production':'development'
    },
    imagemin:{
        verbose:true
    },
    fonter:{
        formats:["ttf", 'woff', "eot", "svg"]
    }
}