const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function comprimeImagens(){
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));}

function comprimeJavaScript() {
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'))
}

function compilaSass(){
    return gulp.src('./source/styles/main.scss')
     .pipe(sass({
        outputStyle: 'compressed'
     }))
     .pipe(gulp.dest('./build/styles'));
}

function funcaoPadrao(callback) {
    setTimeout(function(){

        console.log("Executando via Gulp");
        callback()
    }, 2000)
}
function dizOi(callback) {
    setTimeout(function(){
        console.log("Olá Gulp");
        dizTchau();
        callback();

    }, 1000 )
    
}

function dizTchau(){
    console.log("Tchau Gulp");
}
exports.default = gulp.parallel(funcaoPadrao, dizOi);
exports.dizOi = dizOi;
exports.sass = compilaSass;
exports.javascript = comprimeJavaScript;
exports.images = comprimeImagens;