<?php
//-----------------------------------------------------
//  グローバル変数
//-----------------------------------------------------
// パス
$WP_ROOT_PATH = get_stylesheet_directory_uri();
//$WP_ROOT_PATH = bloginfo('template_directory');

//  相対(Relative)パス
//  PHPのincludeは相対パス
$WP_IMG_PATH_R= esc_html( 'assets/images/' );
$WP_CSS_PATH_R= esc_html( 'assets/css/' );
$WP_JS_PATH_R = esc_html( 'assets/js/' );
$WP_PHP_PATH_R= esc_html( 'assets/php/' );

//  img/cssは絶対パス
$WP_IMG_PATH= esc_html( $WP_ROOT_PATH . '/'. $WP_IMG_PATH_R );
$WP_CSS_PATH= esc_html( $WP_ROOT_PATH . '/'. $WP_CSS_PATH_R );
$WP_JS_PATH = esc_html( $WP_ROOT_PATH . '/'. $WP_JS_PATH_R );
$WP_PHP_PATH= esc_html( $WP_ROOT_PATH . '/'. $WP_PHP_PATH_R );
function GET_PATH(string $_type = 'img')
{
    global $WP_ROOT_PATH;
    global $WP_IMG_PATH;
    global $WP_CSS_PATH;
    global $WP_JS_PATH;
    global $WP_PHP_PATH;
    switch ($_type) {
        case 'img': return $WP_IMG_PATH;  break;
        case 'css': return $WP_CSS_PATH;  break;
        case 'js':  return $WP_JS_PATH;   break;
        case 'php': return $WP_PHP_PATH;  break;
        case 'template': return $WP_PHP_PATH."template-parts/";  break;
        default:  return '';      break;
    }
}


function GET_PATH_R(string $_type = 'img')
{
    global $WP_ROOT_PATH;
    global $WP_IMG_PATH_R;
    global $WP_CSS_PATH_R;
    global $WP_JS_PATH_R;
    global $WP_PHP_PATH_R;
    switch ($_type) {
        case 'img': return $WP_IMG_PATH_R;  break;
        case 'css': return $WP_CSS_PATH_R;  break;
        case 'js':  return $WP_JS_PATH_R;   break;
        case 'php': return $WP_PHP_PATH_R;  break;
        case 'template': return $WP_PHP_PATH_R."template-parts/";  break;
        default:  return '';      break;
    }
}

//

// メインループの表示件数制御
$WP_ROOP_VIEW_ARCHIVE = 3;
$WP_ROOP_VIEW_TAX = 3;

// OGP用
$FACEBOOK_APP_ID = '';
$TWITTER_ACCOUNT_ID = '';

//  reCAPTCHAv3
//  js受け渡しでheadに書いてしまうぐらいなら直接javascriptに置いといた方がいいのでは
$reCAPTCHA_site_key = "6Ld-v70lAAAAAH-rR-4E3UJISYwe2Kd7ihL7FM20";
$reCAPTCHA_secret_key = "6Ld-v70lAAAAAJP86aWA7VQMzv8cIdRu069802Ur";

//  wpmail()メール設定
define( 'SMTP_HOST', 'sv2339.xserver.jp' );       //メールサーバーのホスト名
define( 'SMTP_PORT', '465' );       //SMTPポート番号(ssl:465 tls:587)
define( 'SMTP_USERNAME', 'contact@etienu.com' );   //ユーザー名
define( 'SMTP_PASSWORD', 'p5ie1sewo3t' );   //パスワード


//----------------------------------------------------
//  初期化
//----------------------------------------------------
add_action('after_setup_theme', 'my_after_setup' );
function my_after_setup()
{
    // 翻訳ファイルの場所を指定
    load_theme_textdomain('blankslate', get_template_directory() . '/languages');
    // 管理画面の設定ページで設定したタイトルを<title>に使用する
    add_theme_support('title-tag');
    // 投稿でサムネイルを有効にする
    add_theme_support('post-thumbnails');
    // YouTubeなどの埋め込みコンテンツをレスポンシブ対応にする
    add_theme_support('responsive-embeds');
    // 投稿とコメントのRSSフィードのリンクを有効にする
    add_theme_support('automatic-feed-links');
    // html5で出力する
    add_theme_support('html5', array(
        'comment-list',
        'comment-form',
        'search-form',
        'gallery',
        'caption',
    ));
    // ナビゲーション
    register_nav_menus(array('header-menu' => esc_html__('ヘッダーメニュー', 'blankslate')));
}

//============================================================================
//
//  セキュリティ
//
//============================================================================
//  投稿者一覧ページを自動で生成されないようにする
add_filter('author_rewrite_rules', '__return_empty_array');

//----------------------------------------------------
//  ?author=1 などでアクセスしたらリダイレクトさせる
//  @see https://www.webdesignleaves.com/pr/wp/wp_user_enumeration.html
//----------------------------------------------------
if (!is_admin()) {
  // default URL format
  if (preg_match('/author=([0-9]*)/i', $_SERVER['QUERY_STRING'])) die();
  add_filter('redirect_canonical', 'my_shapespace_check_enum', 10, 2);
}
function my_shapespace_check_enum($redirect, $request) {
  // permalink URL format
  if (preg_match('/\?author=([0-9]*)(\/*)/i', $request)) die();
  else return $redirect;
}

//----------------------------------------------------
//  投稿者 ?auther=1対策、404に飛ばす
//----------------------------------------------------
function disable_author_archive() {
    if( isset($_GET['author']) || preg_match('#/author/.+#', $_SERVER['REQUEST_URI']) ){
      wp_safe_redirect( home_url('/404.php') );
      exit;
    }
  }
add_action('init', 'disable_author_archive');

//  ログインページ変更
include GET_PATH_R('php')."inc/login.php";


//----------------------------------------------------
//  WP REST API を無効にする（必要に応じて一部プラグインのみ有効にさせる）
//  @see https://www.webdesignleaves.com/pr/wp/wp_user_enumeration.html
//----------------------------------------------------
add_filter('rest_pre_dispatch', 'deny_rest_api_except_permitted', 10, 3);
function deny_rest_api_except_permitted($result, $wp_rest_server, $request)
{
  // permit oembed, Contact Form 7, Akismet
  // $permitted_routes に有効にしたいプラグインを指定
  $permitted_routes = ['oembed', 'contact-form-7', 'akismet'];
  $route = $request->get_route();
  foreach ($permitted_routes as $r) {
    if (strpos($route, "/$r/") === 0) return $result;
  }
  // permit Gutenberg（ユーザーが投稿やページの編集が可能な場合）
  if (current_user_can('edit_posts') || current_user_can('edit_pages')) {
    return $result;
  }
  return new WP_Error('rest_disabled', __('The REST API on this site has been disabled.'), array('status' => rest_authorization_required_code()));
}


//============================================================================
//
//  <head>タグに関する処理
//
//============================================================================
//----------------------------------------------------
//  <title>の区切り文字を変更
//----------------------------------------------------
add_filter('document_title_separator', 'my_document_title_separator');
function my_document_title_separator($sep)
{
    $sep = '|';
    return $sep;
}

//----------------------------------------------------
//  <title>のテキストの形式を変える
//----------------------------------------------------
add_filter('document_title_parts', 'my_document_title_parts', 10, 1);
function my_document_title_parts($title)
{
    if (is_home() || is_front_page()) {
        unset($title['tagline']);
        //  カデコリー
    } else if (is_category()) {
        $title['title'] = '「' . single_term_title('', false) . '」カテゴリー一覧';
        //  タクソノミー
    } else if (is_tax()) {
        $title['title'] = '「' . single_term_title('', false) . '」カテゴリー一覧';
        //  タグ
    } else if (is_tag()) {
        $title['title'] = '「' . single_term_title('', false) . '」タグ一覧';
    }
    return $title;
}

//----------------------------------------------------
//  wp_head()で出力されるタグの内、不要なものを削除
//----------------------------------------------------

remove_action('wp_head', 'feed_links', 2);
remove_action('wp_head', 'feed_links_extra', 3);
remove_action('wp_head', 'wp_print_styles', 8);
remove_action('wp_head', 'rsd_link');
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'wp_generator');
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('admin_print_scripts', 'print_emoji_detection_script');
remove_action('wp_print_styles', 'print_emoji_styles');
remove_action('admin_print_styles', 'print_emoji_styles');
remove_action('wp_head', 'wp_shortlink_wp_head', 10, 0);
remove_action('wp_head', 'rest_output_link_wp_head');
remove_action('wp_head', 'wp_oembed_add_discovery_links');
remove_action('wp_head', 'wp_oembed_add_host_js');
add_filter('wp_resource_hints', 'remove_dns_prefetch', 10, 2);
function remove_dns_prefetch($hints, $relation_type)
{
  if ('dns-prefetch' === $relation_type) {
    return array_diff(wp_dependencies_unique_hosts(), $hints);
  }
  return $hints;
}
add_action('wp_enqueue_scripts', 'my_dequeue_plugins_style', 9999);
function my_dequeue_plugins_style()
{
  wp_dequeue_style('wp-block-library');
}

//----------------------------------------------------
//  OGP関係のタグを出力
//  @see https://saruwakakun.com/html-css/wordpress/ogp
//----------------------------------------------------
add_action('wp_head', 'my_add_meta_ogp');
function my_add_meta_ogp()
{
  if (is_front_page() || is_home() || is_singular()) {
    global $WP_IMG_PATH;
    global $FACEBOOK_APP_ID;
    global $TWITTER_ACCOUNT_ID;
    global $post;
    $ogp_title = '';
    $ogp_descr = '';
    $ogp_url = '';
    $ogp_img = '';
    $insert = '';

    if (is_singular() && !is_page()) {
        setup_postdata($post);
        $ogp_title = $post->post_title;
        $ogp_descr = mb_substr(get_the_excerpt(), 0, 100);
        $ogp_url = get_permalink();
        wp_reset_postdata();
    } else {
        $ogp_title = get_bloginfo('name');
        $ogp_descr = get_bloginfo('description');
        $ogp_url = home_url();
    }

    // og:type
    $ogp_type = (is_front_page() || is_home()) ? 'website' : 'article';

    // og:image
    if (is_singular() && has_post_thumbnail()) {
        $ps_thumb = wp_get_attachment_image_src(get_post_thumbnail_id(), 'full');
        $ogp_img = $ps_thumb[0];
    } else {
        $ogp_img = $WP_IMG_PATH . '/ogp.jpg';
    }

    // タグ出力
    $insert .= '<meta property="og:title" content="' . esc_attr($ogp_title) . '">' . "\n";
    $insert .= '<meta property="og:description" content="' . esc_attr($ogp_descr) . '">' . "\n";
    $insert .= '<meta property="og:type" content="' . $ogp_type . '">' . "\n";
    $insert .= '<meta property="og:url" content="' . esc_url($ogp_url) . '">' . "\n";
    $insert .= '<meta property="og:image" content="' . esc_url($ogp_img) . '">' . "\n";
    $insert .= '<meta property="og:site_name" content="' . esc_attr(get_bloginfo('name')) . '">' . "\n";
    $insert .= '<meta name="twitter:card" content="summary_large_image">' . "\n";
    $insert .= '<meta name="twitter:site" content="' . $TWITTER_ACCOUNT_ID . '">' . "\n";
    $insert .= '<meta property="og:locale" content="ja_JP">' . "\n";
    $insert .= '<meta property="fb:app_id" content="' . $FACEBOOK_APP_ID . '">' . "\n";
    echo $insert;
  }
}


//============================================================================
//
//  管理画面に対する処理
//
//============================================================================
//----------------------------------------------------
//  管理画面全体にCSS適用
//----------------------------------------------------
add_action('admin_enqueue_scripts', 'my_add_admin_style');
function my_add_admin_style()
{
  global $WP_CSS_PATH;
  wp_enqueue_style('my_add_admin_style', $WP_CSS_PATH . 'style-admin.css');
}

//----------------------------------------------------
//  ビジュアルエディタにCSS適用
//----------------------------------------------------
add_action('admin_init', 'my_add_editor_style');
function my_add_editor_style()
{
  global $WP_CSS_PATH;
  add_editor_style(str_replace('/' . get_stylesheet_directory_uri(), '', $WP_CSS_PATH) . 'style-editor.css');
}

//----------------------------------------------------
//  管理画面全体にjs適用
//----------------------------------------------------
add_action('admin_enqueue_scripts', 'my_add_admin_js');
function my_add_admin_js($hook)
{
  global $WP_JS_PATH;
  wp_enqueue_script('my_admin_script', $WP_JS_PATH . 'admin.js');
}

//----------------------------------------------------
//   不要なメニューを非表示
//  （コメントアウトした行のメニューは表示される）
//----------------------------------------------------
add_action('admin_menu', 'my_add_remove_admin_menus');
function my_add_remove_admin_menus()
{
  global $menu;
  unset($menu[2]);  // ダッシュボード
  unset($menu[4]);  // メニューの線1
  // unset($menu[5]);  // 投稿
  // unset($menu[10]); // メディア
  // unset($menu[15]); // リンク
  // unset($menu[20]); // ページ
  unset($menu[25]); // コメント
  unset($menu[59]); // メニューの線2
  // unset($menu[60]); // テーマ
  // unset($menu[65]); // プラグイン
  // unset($menu[70]); // プロフィール
  // unset($menu[75]); // ツール
  // unset($menu[80]); // 設定
  unset($menu[90]); // メニューの線3
}

//----------------------------------------------------
//  投稿の自動整形を無効（ダブルクオーテーションなど）
//----------------------------------------------------
add_filter('run_wptexturize', '__return_false');

//----------------------------------------------------
//  設定ページ生成
// （関連ファイル：admin-theme-setting-page.php）
// ↑で<input>を追加したら、↓を実行する
// register_setting('custom-menu-group', '↑で定義した<input>のname値');
//
// 画像アップローダーについて
// @see https://nelog.jp/media-uploader-javascript-api
// admin-theme-setting-page.phpにて以下を実行
// 1. <input>を追加
// 2. ファイル下部で new_wp_uploader('<input>のid') を実行（ボタンなどの属性値も変える）
//----------------------------------------------------
add_action('admin_menu', 'my_add_admin_setting_page');
function my_add_admin_setting_page()
{
    add_menu_page('テーマ設定', 'テーマ設定', 'manage_options', 'custom-setting', 'my_setting_file_path', 'dashicons-admin-generic', 90);
    add_action('admin_init', 'my_register_setting');
}
function my_setting_file_path()
{
//    $return_url = '../wp-content/themes/blank_themes/admin-theme-setting-page.php';
    $return_url = 'admin-theme-setting-page.php';
    require $return_url;
}
function my_register_setting()
{
    register_setting('custom-menu-group', 'general');
    // register_setting('custom-menu-group', '2つ目のname値');
    // register_setting('custom-menu-group', '3つ目のname値');
}
// メディアアップローダーAPIを管理画面へ読み込ませる
add_action('admin_print_scripts', 'my_add_setting_media_api_scripts');
function my_add_setting_media_api_scripts()
{
    wp_enqueue_media();
}



//============================================================================
//
//  ユーザー側画面に対する処理
//
//============================================================================
//----------------------------------------------------
//  ツールバー非表示
//----------------------------------------------------
//  margin-top: 32px !important; 対策
//  これはWordPressの管理バーの表示仕様が関係しているので外す
add_filter('show_admin_bar', '__return_false');


//----------------------------------------------------
//  ループの表示件数制御
//----------------------------------------------------
add_action('pre_get_posts', 'my_pre_get_posts');
function my_pre_get_posts($query)
{
  global $WP_ROOP_VIEW_ARCHIVE;
  global $WP_ROOP_VIEW_TAX;
  if (is_admin() || !$query->is_main_query()) return;

  // 表示件数を制御
  $query->set('posts_per_page', $WP_ROOP_VIEW_ARCHIVE);

  // ページごとに件数を変える場合は以下のように条件分岐する
  // if ($query->is_archive()) {
  //   $query->set('posts_per_page', $WP_ROOP_VIEW_ARCHIVE);
  //   return;
  // }
  // if ($query->is_post_type_archive()) {
  //   $query->set('posts_per_page', $WP_ROOP_VIEW_ARCHIVE);
  //   return;
  // }
  // if ($query->is_tax()) {
  //   $query->set('posts_per_page', $WP_ROOP_VIEW_TAX);
  //   return;
  // }
}

//----------------------------------------------------
//  投稿アーカイブページの作成
//----------------------------------------------------
add_filter('register_post_type_args', 'my_post_has_archive', 10, 2);
function my_post_has_archive( $args, $post_type ) {
	if ('post' === $post_type) {
		$args['rewrite'] = true;
		$args['has_archive'] = 'posts'; // スラッグを指定（これがURLになる）
	}
	return $args;
}

//----------------------------------------------------
//  検索結果ファイルを使い分ける（カスタム投稿newsならsearch-news.phpを作る）
//----------------------------------------------------
add_filter('template_include','my_search_template');
function my_search_template($template){
  if (is_search()){
    $post_types = get_query_var('post_type');
    foreach((array) $post_types as $post_type)
      $templates[] = "search-{$post_type}.php";
      $templates[] = 'search.php';
      $template = get_query_template('search', $templates);
    }
  return $template;
}




//============================================================================
//  投稿の人気記事（PV）取得
//      各投稿のカスタムフィールドにPVフィールドを追加（投稿ページアクセス時に値を+1する）
//      @see https://cage.tokyo/wordpress/wordpress-ranking/
//============================================================================
//
//  投稿ページ（single-○○.php）の1行目に以下を記述
// <?php if(!is_user_logged_in() && !is_bot()) { set_post_views(get_the_ID()); } ? >
//
//============================================================================
//----------------------------------------------------
function set_post_views($postID)
{
    $count_key = 'post_views_count';
    $count = get_post_meta($postID, $count_key, true);
    if ($count == '') {
        $count = 0;
        delete_post_meta($postID, $count_key);
        add_post_meta($postID, $count_key, '0');
    } else {
        $count++;
        update_post_meta($postID, $count_key, $count);
    }
}

//クローラーのアクセスを判別するために追記
function is_bot()
{
    $ua = $_SERVER['HTTP_USER_AGENT'];
    $bot = array(
        'Googlebot',
        'Yahoo! Slurp',
        'Mediapartners-Google',
        'msnbot',
        'bingbot',
        'MJ12bot',
        'Ezooms',
        'pirst; MSIE 8.0;',
        'Google Web Preview',
        'ia_archiver',
        'Sogou web spider',
        'Googlebot-Mobile',
        'AhrefsBot',
        'YandexBot',
        'Purebot',
        'Baiduspider',
        'UnwindFetchor',
        'TweetmemeBot',
        'MetaURI',
        'PaperLiBot',
        'Showyoubot',
        'JS-Kit',
        'PostRank',
        'Crowsnest',
        'PycURL',
        'bitlybot',
        'Hatena',
        'facebookexternalhit',
        'NINJA bot',
        'YahooCacheSystem',
        'NHN Corp.',
        'Steeler',
        'DoCoMo',
    );
    foreach ($bot as $bot) {
        if (stripos($ua, $bot) !== false) {
        return true;
        }
    }
    return false;
}


//============================================================================
//
//  Contact Form 7
//
//============================================================================
//----------------------------------------------------
//  post成功時にセッションをセット
//  サンクスページアクセス時、このセッションが無いとTOPへリダイレクトさせる（URL直打ちのアクセス対策）
//----------------------------------------------------
add_action('wpcf7_mail_sent', 'my_wpcf7_mail_sent_session_start');
function my_wpcf7_mail_sent_session_start()
{
    session_start();
    $_SESSION['thanks_judge'] = true;
}


//----------------------------------------------------
//  Contact Form 7を使用するページのみ、関係ファイルを読み込ませる
//----------------------------------------------------
add_action('wp_enqueue_scripts', 'my_enqueue_wpcf7_files');
function my_enqueue_wpcf7_files()
{
    if (!is_page('contact')) {
        wp_dequeue_style('contact-form-7');
        wp_dequeue_script('contact-form-7');
        wp_dequeue_script('google-recaptcha');
    }
}









//-----------------------------------------------------
//  基本設定
//-----------------------------------------------------
//wp-block-library読み込み停止(グーテンベルク)
function remove_unuse_css() { wp_dequeue_style('wp-block-library');  }
add_action( 'wp_enqueue_scripts', 'remove_unuse_css' ,9999);


//  カスタム投稿タイプとカスタムカテゴリーの作成
include GET_PATH_R('php')."inc/custompost.php";

//  カスタムフィールドの作成
include GET_PATH_R('php')."inc/customfield.php";


//-----------------------------------------------------
//    CSS読み込み
//      headで行う
//-----------------------------------------------------
function my_enqueue_styles(){
//    wp_enqueue_style( "my", get_template_directory_uri() . "/assets/css/style.css?".date('YmdHis'), array(), "1.0.0", "all" );
}
//add_action( "wp_enqueue_scripts", "my_enqueue_styles" );

//-----------------------------------------------------
//    JavaScript読み込み
//-----------------------------------------------------
function my_enqueue_scripts(){
    if (!is_admin()) {
        //デフォルトjquery削除
        wp_deregister_script( 'jquery' );
    }
}
add_action( "wp_enqueue_scripts", "my_enqueue_scripts" );


//----------------------------------------------------
//  メールの送信設定
//  wp_mail()はPHPMailerを使用している
//----------------------------------------------------
add_action("phpmailer_init", function ($phpmailer) {
    $phpmailer->isSMTP();                     //SMTP有効設定
    $phpmailer->Host       = SMTP_HOST;       //メールサーバーのホスト名
    $phpmailer->SMTPAuth   = true;            //SMTP認証の有無（true OR false）
    $phpmailer->Port       = SMTP_PORT;       //SMTPポート番号(ssl:465 tls:587)
    $phpmailer->Username   = SMTP_USERNAME;   //ユーザー名
    $phpmailer->Password   = SMTP_PASSWORD;   //パスワード
    $phpmailer->SMTPSecure = "ssl";           //SMTP暗号化方式（ssl OR tls）
    $phpmailer->From       = "contact@etienu.com";    //送信者メールアドレス（Gmailの場合は反映されない）
  });




//----------------------------------------------------
//  メニューの登録
//----------------------------------------------------
include GET_PATH_R('php')."inc/menu.php";

//--------------------------------------------------------
//  ウィジェット
//--------------------------------------------------------
include GET_PATH_R('php')."inc/widget.php";


//--------------------------------------------------------
//  投稿ページ設定
//--------------------------------------------------------
//  functions.php に投稿ステータスをフックする追記をして
//  下書きや非公開の親ページを選択可能に
include GET_PATH_R('php')."inc/post-attributes.php";

//  記事 : カスタムブロック追加
//  liにファイルツリーのスタイルを適用する為の選択
register_block_style(
    'core/list',
    array(
        'name' => 'tree',
        'label' => 'ツリー構造',
    )
);


//--------------------------------------------------------
//  機能追加
//--------------------------------------------------------
//  アクセスカウンター
//include GET_PATH_R('php')+"inc/access-counter.php";
// 閲覧数の保存する関数を定義
function update_views() {
    global $post;
    if ( 'publish' === get_post_status( $post ) && is_single() ) {
     $views = intval( get_post_meta( $post->ID, 'views', true ) );
     update_post_meta( $post->ID, 'views', ( $views + 1 ) );
    }
   }
   add_action( 'wp_head', 'update_views' );
   
   
   // 管理画面の投稿一覧に閲覧数用のカラムを追加
   function add_column( $defaults ) {
    $defaults['view_column'] = '閲覧数';
    return $defaults;
   }
   add_filter('manage_posts_columns', 'add_column');
   
   
   // 閲覧数用のカラムに、実際の閲覧数を表示させる
   function add_column_id($column_name, $id) {
    global $post;
    if ($column_name == 'view_column') {
     $view_column = get_post_meta( $post->ID, 'views', true );
     echo $view_column;
    }
   }
   add_action('manage_posts_custom_column', 'add_column_id', 10, 2);
   
   
   // 追加したカラムにソート（並び替え）機能を追加
   function my_add_sort($columns){
    $columns['view_column'] = 'my_sort';
    return $columns;
   }
   add_filter( 'manage_edit-post_sortable_columns', 'my_add_sort');
   
   
   // ソートに利用するキーに「閲覧数」を使用するように設定
   function my_add_sort_by_meta( $query ) {
    if ( $query->is_main_query() && ( $orderby = $query->get( 'orderby' ) ) ) {
     switch( $orderby ) {
      case 'my_sort':
       $query->set( 'meta_key', 'views' );
       $query->set( 'orderby', 'meta_value_num' );
       break;
     }
    }
   }
   add_action( 'pre_get_posts', 'my_add_sort_by_meta', 1 );


//--------------------------------------------------------
//  ショートコード
//--------------------------------------------------------
include GET_PATH_R('php')."inc/shortcode.php";


//--------------------------------------------------------
//  仕組み修正
//--------------------------------------------------------
//  テンプレートファイル名命名規則の操作
//  page-下層スラッグ.php →  page-親スラッグ__下層スラッグ.php
include GET_PATH_R('php')."inc/slug-naming-rule.php";
//  アーカイブタイトルの書き換え
include GET_PATH_R('php')."inc/archive-title-rename.php";
//  検索結果から固定ページを除外
include GET_PATH_R('php')."inc/search-ignore.php";



//--------------------------------------------------------
//  独自関数
//--------------------------------------------------------
//  設定系関数
//include GET_PATH_R('php')."function/custom-function.php";
//  記事中の関数
//include GET_PATH_R('php')."function/single-functions.php";

//--------------------------------------------------------
//  ショートコード : 自分で作った物
//--------------------------------------------------------
//include GET_PATH_R('php')."function/post-shortcode.php";

//  PHP END
?>
