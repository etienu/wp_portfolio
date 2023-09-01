//----------------------------------------------------------------------
//  モード
//----------------------------------------------------------------------
"use strict";
// gulp停止はターミナルでCtrl+C

//----------------------------------------------------------------------
//  モジュール読み込み
//----------------------------------------------------------------------
const gulp = require("gulp");
const { src, dest, series, parallel, watch } = require("gulp");
//  画像圧縮
const imageMin = require("gulp-imagemin");
const mozjpeg = require("imagemin-mozjpeg");
const pngquant = require("imagemin-pngquant");
const changed = require("gulp-changed");

const path = require('path');

//  sassコンパイル
const sass = require("gulp-sass")(require("sass"));

// 出力元と出力先のディレクトリを定義
const dir = {
    src: path.join(__dirname, 'src'),
    dist: path.join(__dirname, ''), //  'public','dist'など
};


//  使用方法
//  ターミナル起動してコマンドライン実行
//  Ctrl + Shift + @
//  それかログウインドウの右に「ターミナル」がある
//----------------------------------------------------------------------
//  関数定義
//----------------------------------------------------------------------
//----------------------------------------------------------------------
//  画像圧縮処理
//  > npx gulp imagemin
//----------------------------------------------------------------------
function imagemin(done) {

    //    src("./src/assets/images/**")
    src(path.resolve(dir.src, "assets/images/**"))
        //    .pipe(changed("./assets/images/")) // 圧縮前後の比較
        .pipe(changed(path.resolve(dir.dist, "assets/images/"))) // 圧縮前後の比較
        .pipe(
            imageMin([
                pngquant({ // 追加
                    quality: [0.6, 0.7],
                    speed: 1,
                }),
                mozjpeg({ quality: 65 }), // 追加
                imageMin.svgo(),
                imageMin.optipng(),
                imageMin.gifsicle({ optimizationLevel: 3 }),
            ])
        )
        .pipe(dest(path.resolve(dir.dist, "assets/images/")));
    //        .pipe(dest("./assets/images/"));

    done();
}


//----------------------------------------------------------------------
//  Sassコンパイル
//  > npx gulp SassComple
//----------------------------------------------------------------------
const SassCompile = (done) => {
    gulp.src("./src/sass/*.scss")
        //  .pipe(sass.syncは、同期レンダリング。
        .pipe(sass.sync({
            // アウトプットスタイルを指定しています。コンパイル後の出力方法といった感じの記述です。
            // outputStyleは例えばexpandedではなくcompressedにした場合、コンパイル後のcssファイルでは、cssコードが一行で出力することができます。
            //outputStyle: 'expanded'
            outputStyle: 'compressed'
        }))
        // .on(‘error’, sass.logError)は、記述しておくと、Sassのコンパイルエラーになったとき、処理が止まらなくなります。
        .on('error', sass.logError)
        // .pipe(gulp.dest(“./dest”));はcssへのコンパイル後の出力先を指定したパスです。
        .pipe(gulp.dest("./public/css"));
    done();
};
/*
//----------------------------------------------------------------------
// 監視ファイル
//  動くけどなんか違う!scssじゃなくてsassじゃないか
//----------------------------------------------------------------------
const watchFiles = (done) => {
    // gulp.watchで第一引数に監視するファイルのパスを指定して、第二引数はsassのコンパイル処理を記述した変数を記述します。これを変数watchFilesに格納しています。
    gulp.watch("./src/sass/*.scss", SassCompile);
    done();
};
*/
//----------------------------------------------------------------------
//  タスク定義
//----------------------------------------------------------------------
exports.imagemin = imagemin;
/*
exports.SassCompile = SassCompile;

// タスク実行
exports.default = gulp.series(
    watchFiles, SassCompile
);
*/
/************************************************************************/
/*  END OF FILE                                                         */
/************************************************************************/