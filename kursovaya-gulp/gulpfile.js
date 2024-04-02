const {src, dest, series, parallel } = require('gulp')
const fileInclude = require('gulp-file-include')
const clean = require('gulp-clean')

function buildHTML(){
  return src('src/*.html')
    .pipe(fileInclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(dest('./'))
}

function cleanDist(){
  return src('./*.html')
    .pipe(clean({force: true}))
}

const build = series(cleanDist, parallel(buildHTML))

exports.buildHTML = buildHTML
exports.cleanDist = cleanDist
exports.build = build
