![NPM CD](https://github.com/kasperhesthaven/gulp-ttf-to-woff/workflows/NPM%20CD/badge.svg) ![Dependencies](https://img.shields.io/librariesio/release/npm/gulp-ttf-to-woff) ![NPM Version](https://img.shields.io/npm/v/gulp-ttf-to-woff)

# gulp-ttf-to-woff

Gulp plugin to convert TTF(TrueType font) files to WOFF using [ttf2woff](https://github.com/fontello/ttf2woff).

## Install

`npm i gulp-ttf-to-woff`

## Usage

```js
const gulp = require("gulp");
const ttfToWoff = require("gulp-ttf-to-woff");

export function convertTffToWoff() {
  return gulp.src("./src/*.ttf").pipe(ttfToWoff()).pipe(gulp.dest("./dist/"));
}
```
