// gulpプラグインの読み込み
const gulp = require("gulp");
// sassをコンパイルするプラグインの読み込み
// gulp-sassにsassを渡している
const sass = require("gulp-sass")(require("sass"));

// scssファイルの監視タスクを作成する
gulp.task("default", function () {
  // sassディレクトリ内の拡張子がscssである全てのファイルを監視する
  return gulp.watch("sass/*.scss", function () {
    // sassファイルに変更があった場合の処理
    // sassディレクトリ内の拡張子がscssのファイルを取得する
    return (
      gulp
        .src("sass/*.scss")
        // _（アンダースコア）で始まるファイル以外のsassファイルのコンパイルを実行する
        .pipe(
          sass({
            outputStyle: "expanded",
          })
            // sassのコンパイルエラーを表示
            // （これがないと自動的に止まってしまう）
            .on("error", sass.logError)
        )
        // コンパイルしたファイルをcssディレクトリ内に入れる
        // コンパイル対象が複数あっても自動的に拡張子の前の名称を引き継いで複数のCSSファイルを生成してくれる
        // 例）「style.scss」→「style.css」「base.scss」→「base.css」
        .pipe(gulp.dest("css"))
    );
  });
});
