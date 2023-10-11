フォルダ構成

assets
  controlpanel / 管理画面の独自ページに関するコード
  css / コンパイルして出力されたcss
    lib / 利用するライブラリのcss
  images / 画像・動画データ
  js / コンパイルして出力されたjs
    lib / 利用するライブラリのjs
  php / パーツとして読み込み使用するphpコード
    inc / function.php内で必要に応じincludeして使用する機能付け外しコード
    template-parts / サイト内でget_template_partで呼び出すパーツ。引数に対応しコードをすっきりさせます。

src
  js / jsのソースコード
  sass / sassのソースコード

404.php : 404ページ
admin-theme-setting-page.php : 管理画面の独自管理ページ
archive-work.php : カスタム投稿タイプ"work"のアーカイブ
footer.php : フッター
front-page.php : トップページ
functions.php : WordPress設定
gulpfile.js : gulpの設定
header.php : ヘッダー
index.php : 必須ファイル
page-about.php : 固定ページ「自己紹介」
page-contact-complete.php : 固定ページ「お問い合わせ:完了」
page-contact-confirm.php : 固定ページ「お問い合わせ:確認」
page-contact-send-mail.php : phpによる送信処理
page-contact.php  : 固定ページ「お問い合わせ:入力」
page-price.php : 固定ページ「料金」
page-privacy-policy.php : 固定ページ「プライバシーポリシー」
page-terms.php : 固定ページ「利用規約」
screenshot.jpg : テーマの画像
single-work.php : カスタム投稿タイプ「work」の個別ページ
style.css : テーマの情報
webpack.config.js : webpackの設定
