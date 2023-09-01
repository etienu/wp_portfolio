<?php
//--------------------------------------------------------
//
//  YSE・NOチャート　疑似プラグイン
//  関数、ショートコード登録
//
//--------------------------------------------------------
//
//  ショートコード一覧
//  [LoadYesNoChart slug="固定ページのスラッグ"]
//      固定記事にショートコードでYesNoChartを書き、その固定ページを読み込む
//
//  YesNoチャートの大枠、囲っている範囲をYesNoチャートにします
//  [YesNo-Chart tag="タグ名" title="タイトル名" ex="補足説明"]
//      問題を記述
//  [/yesNo-Chart]
//
//  問題 Question 一問目( 表示用クラスが付与されます )
//  [YesNo-Q1 id="href用固有ID" title="問題名" img="画像URL"]
//      選択肢を記述
//  [/YesNo-Q1]
//
//  問題 二問目以降
//  [YesNo-Q id="href用固有ID" title="問題名" img="画像URL"]
//      選択肢を記述
//  [/YesNo-Q]
//
//  選択肢 ansower
//  [YesNo-A href="ジャンプ先固有ID" text="選択肢名"]
//
//  結果 Result
//  [YesNo-R id="href用固有ID" title="診断結果名" img="画像URL"
//     btnhref="ボタンのa href" (省略時"#q1")
//     btntxt ="ボタン名" (省略時"もう一度診断する")]
//      <p>結果の文章をを記述します。</p>
//  [/YesNo-R]
//
//--------------------------------------------
//
//      パス取得関数
//
//--------------------------------------------
//if ( !function_exists( 'get_Plugin_URL' ) ):
function get_Plugin_URL() {
    //  1.テーマのURLを取得する
    //  http://xxxxx/wp-content/themes/テーマ名
    $fpath = get_template_directory_uri();
    //  2.テーマ名を取得する
    $ftm   = basename( $fpath );
    //  3.このディレクトリ名を取得する
    $fpos = strrpos(__DIR__, $ftm);
    //  4.ディレクトリ名からテーマ名より下の位置を切り出しカットする
    $plugindir = substr( __DIR__, $fpos + strlen($ftm)+1 );
    //  5.テーマURL+プラグインパスを返す
    return $fpath."/".$plugindir;
}
//endif;

//--------------------------------------------
//
//  ヘッダー中でcssを読み込む
//
//--------------------------------------------
add_action('wp_head','insert_yesnochart_css');
function insert_yesnochart_css() {
    global $post;

if (is_page() || is_single()) {
        if (have_posts()) :
            echo '<link rel="stylesheet" href="'.get_Plugin_URL().'/YesNoChart.css" />';
//            echo '<link rel="stylesheet" href="'.$fpath.'/'.$fdir.'/YesNoChart.css" />';
        endif;
        rewind_posts();
    }
}
    

//--------------------------------------------------------
//
//  JavaScriptの記述
//
//--------------------------------------------------------

//--------------------------------------------------------
//  yn-chart a ボタン
//  クリックしたら現在のdivを非表示にし、指定idをフェードイン
//--------------------------------------------------------
if ( !function_exists( 'p_yesno_chart' ) ):
    //  javascript element版
    function ael_yesno_chart() {
        $fpath = get_Plugin_URL();
        echo '<script type="text/javascript" src="'.$fpath.'/YesNoChart.js"></script>';
    }
    // jQuery版
    function jq_yesno_chart() {
        $fpath = get_Plugin_URL();
        echo '<script type="text/javascript" src="'.$fpath.'/YesNoChart_JQ.js"></script>';
    }
    //  フッターへ記述する
    add_action( 'wp_print_footer_scripts', 'ael_yesno_chart' );
//    add_action( 'wp_print_footer_scripts', 'jq_yesno_chart' );
endif;


//  固定の文言は変数にして一か所で修正可能にする
$ync_filedir = "";

//--------------------------------------------------------
//
//  ショートコード登録
//
//--------------------------------------------------------
//--------------------------------------------------------
//
//  固定ページを読み込み、記事に差し込む
//
//--------------------------------------------------------
function func_LoadYesNoChart( $atts ){
    shortcode_atts( array( 'slug' => '', ), $atts );
    //固定ページのスラッグ名
    $page_id = get_page_by_path( $atts['slug'] );
    $page = get_post( $page_id );

    ob_start();
    //ページの本文を取得してショートコード処理をして表示
    echo do_shortcode( $page -> post_content );
    return ob_get_clean();
}
add_shortcode('LoadYesNoChart', 'func_LoadYesNoChart');


//--------------------------------------------------------
//
//  外部PHPを読み込み、記事に差し込む
//
//--------------------------------------------------------
function func_LoadYesNoChartPHPFile( $atts ){
    shortcode_atts( array( 'file' => ''), $atts );

//    $dir = "./wp-content/themes/etienublog/"; //  成功する
    //$dir = __DIR__."/../";
    $dir = __DIR__."/";
    //$dir = "";
//    $filelist = glob($dir . '*');
/*
    foreach ($filelist as $file) {
        if (is_file($file)) {
            print($file);
            echo nl2br("\n");
        }
    }    
*/
    global $ync_filedir;
//  ディレクトリ+指定ファイル名
    $url = $dir.$atts['file'];
    //  指定ファイル名にフォルダがあれば分離する
    $exp = explode("/", $atts['file']);
    if( 0 < count( $exp ) ){
        $ync_filedir = $exp[0];
        echo "読み込んだディレクトリ:".$ync_filedir;
    }

    //$url = get_template_directory_uri().'/'.$atts['file'];
/*
    // URLの場合
    $http_header = get_headers($url);
    echo $http_header[0]."<br>";
    //  'HTTP/1.1 200 OK' 200 部分一致
    if ( strpos($http_header[0],'200') === false ) {
        echo "存在しません";
        return false;
    }
 */

    if (!file_exists($url)) {
        echo 'ファイルがない : '.$url."<br>";
        return false;
    } 

    //  読み込んだ内容の出力
    ob_start();
    include $url;
    //$file_content = ob_get_contents();//clean();
//    $file_content = ob_get_clean();
//    echo $file_content;
//    echo do_shortcode( $file_content );

    //ob_get_clean();

    return do_shortcode(ob_get_clean() );
}
add_shortcode( 'LoadYesNoChartFile', 'func_LoadYesNoChartPHPfile' );



//--------------------------------------------------------
//
//  YesNoChart 大枠
//
//--------------------------------------------------------
function YesNoChart_Frame( $atts, $content = null ){
    shortcode_atts( array(
        'tag' => '',
        'title' => '',
        'ex' => '',
    ), $atts );

    ob_start();
    echo '<div class="yn-chart">';
    //  引数が空ではない
    if( !empty($atts) ){
        if( array_key_exists( 'tag'  , $atts ) ) echo '<p class="yn-chart__add">'.$atts['tag'].'</p>';
        if( array_key_exists( 'title', $atts ) ) echo '<p class="yn-chart__title">'.$atts['title'].'</p>';
        if( array_key_exists( 'ex'   , $atts ) ) echo '<p class="yn-chart__ex">'.$atts['ex'].'</p>';
    }
    do_shortcode( $content );
    echo '</div>';
    
    return ob_get_clean();
}

add_shortcode('YesNo-Chart', 'YesNoChart_Frame');


//--------------------------------------------------------
//
//  YesNoChart Img 画像の出力
//
//--------------------------------------------------------
function func_YesNoChart_Img( $atts ){
    global $ync_filedir;
    shortcode_atts( array( 'img' => '','imgu' => '','imgt' => '','i' => '',), $atts );
    //  img
    //  コンテンツのフォルダ
    if( array_key_exists( 'img'  , $atts ) ){
        echo '<figure class="wp-block-image ync-aligncenter size-full"><img src="'.content_url().'/'.$atts['img'].'" alt=""></figure>';
    //  メディアライブラリ(uploads)のフォルダ
    }else if( array_key_exists( 'imgu'  , $atts ) ){
        echo '<figure class="wp-block-image ync-aligncenter size-full"><img src="'.wp_upload_dir()['baseurl'].'/'.$atts['imgu'].'" alt=""></figure>';
    //  親テーマのフォルダ
    }else if( array_key_exists( 'imgt'  , $atts ) ){
        echo '<figure class="wp-block-image ync-aligncenter size-full"><img src="'.get_template_directory_uri().'/'.$atts['imgt'].'" alt=""></figure>';
    //  フォルダ直下
    }else if( array_key_exists( 'i' , $atts ) ){
        $nowdir = get_Plugin_URL();
        if( $ync_filedir !== "" ) $nowdir .= "/".$ync_filedir;
//        $nowdir = get_template_directory_uri()."/".basename(dirname(__FILE__));
        echo '<figure class="wp-block-image ync-aligncenter size-full"><img src="'.$nowdir."/".$atts['i'].'" alt=""></figure>';
    }
}

//--------------------------------------------------------
//  YesNoChart Question
//
//  id   : a hrefに対応するID
//  title: 問題文
//
//  画像を表示する場合のパス
//  img  : wp-contentまで省略( http://～/wp-content/)以降を入力。自由なフォルダを指定可能
//  imgu : メディアライブラリまで省略( http://～/wp-content/upload/)以降を入力。ワードプレスで完結可能
//  imgt : テーマまで省略( http://～/wp-content/themes/現在のテーマ/)以降を入力。大量にある場合の直接指定に便利
//--------------------------------------------------------
function func_YesNoChart_Q( $i_first = false, $atts, $content = null ){
    shortcode_atts( array( 'id' => '', 'title' => '', 'img' => '','imgu' => '','imgt' => '','i' => '',), $atts );

    //  "Q1"指定された場合、一個目の表示クラスを指定
    if( $i_first ){
        echo '<div id="'.$atts['id'].'" class="yn-chart__display">';
    }else{
        echo '<div id="'.$atts['id'].'">';
    }
    //  画像
    func_YesNoChart_Img( $atts );
    //  タイトル
    echo '<p>'.$atts['title'].'</p>';
    //  選択肢
    echo '<ul>';
    do_shortcode( $content );
    echo '</ul>';
    echo '</div>';
    
    return;
}

//--------------------------------------------------------
//
//  YesNoChart Q 最初の問題( 初めに表示される問題にクラスが付与される )
//
//--------------------------------------------------------
function YesNoChart_Q1( $atts, $content = null ){
    func_YesNoChart_Q( true, $atts, $content );
    return;
}

//--------------------------------------------------------
//
//  YesNoChart Q 以降の問題
//
//--------------------------------------------------------
function YesNoChart_Q( $atts, $content = null ){
    func_YesNoChart_Q( false, $atts, $content );
    return;
}


add_shortcode('YesNo-Q1', 'YesNoChart_Q1');
add_shortcode('YesNo-Q', 'YesNoChart_Q');

//--------------------------------------------------------
//
//  YesNoChart Answer
//
//--------------------------------------------------------
function YesNoChart_Answer( $atts, $content = null ){
    shortcode_atts( array( 'href' => '', 'text' => '',), $atts );
    if( $atts['href'] ){
        echo '<li><a href="'.$atts['href'].'">'.$atts['text'].'</a></li>';
    }
    return;
}

add_shortcode('YesNo-A', 'YesNoChart_Answer');


//--------------------------------------------------------
//
//  YesNoChart Result
//
//--------------------------------------------------------
function YesNoChart_Result( $atts, $content = null ){
    shortcode_atts( array( 'id' => '',
        'img' => '','imgu' => '','imgt' => '','i' => '',
        'title' => '', 'btnhref' => '', 'btntxt' => '',), $atts );
    
    echo '<div id="'.$atts['id'].'">';
    //  画像
    func_YesNoChart_Img( $atts );

    echo '<div class="yn-chart__result">';
    echo '<p class="yn-chart__result-title">'.$atts['title'].'</p>';
    echo '<p>'.$content.'</p>';
    echo '</div>';

    //  ボタンの処理
    //  ID指定がある場合
    if( array_key_exists( 'btnhref', $atts )){
        if( array_key_exists( 'btntext', $atts ) ){
            echo '<p class="p-check-btn"><a href="'.$atts['btnhref'].'">'.$atts['btntxt'].'</a></p>';
        }else{
            echo '<p class="p-check-btn"><a href="'.$atts['btnhref'].'">もう一度診断する</a></p>';
        }
    //  指定がない場合
    }else{
        echo '<p class="p-check-btn"><a href="#q1">もう一度診断する</a></p>';
    }
    echo '</div>';
    
    return;
}

add_shortcode('YesNo-R', 'YesNoChart_Result');






//--------------------------------------------------------
//
//      投稿記事/固定ページ メタボックス追加
//
//      カスタムCSSの表示
//      ※ページ個別にCSSが必用な場合使用
//
//--------------------------------------------------------
/*
add_action('admin_menu', 'custom_css_hooks');
add_action('save_post', 'save_custom_css');
add_action('wp_head','insert_custom_css');
function custom_css_hooks() {
    add_meta_box('custom_css', 'Custom CSS', 'custom_css_input', 'post', 'normal', 'high');
    add_meta_box('custom_css', 'Custom CSS', 'custom_css_input', 'page', 'normal', 'high');
}

function custom_css_input() {
    global $post;
    echo '<input type="hidden" name="custom_css_noncename" id="custom_css_noncename" value="'.wp_create_nonce('custom-css').'" />';
    echo '<textarea name="custom_css" id="custom_css" rows="5" cols="30" style="width:100%;">'.get_post_meta($post->ID,'_custom_css',true).'</textarea>';
}

function save_custom_css($post_id) {
    if (!wp_verify_nonce($_POST['custom_css_noncename'], 'custom-css')) return $post_id;
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return $post_id;
    $custom_css = $_POST['custom_css'];
    update_post_meta($post_id, '_custom_css', $custom_css);
}

function insert_custom_css() {
    if (is_page() || is_single()) {
        if (have_posts()) : while (have_posts()) : the_post();
            echo '<style type="text/css">'.get_post_meta(get_the_ID(), '_custom_css', true).'</style>';
        endwhile; endif;
        rewind_posts();
    }
}
*/

//--------------------------------------------------------
//
//  noindex設定の表示と編集
//
//  ※ページ個別にnoindex設定が必用で、関連するプラグインがない場合使用
//
//--------------------------------------------------------

// メタボックスの追加
add_action( 'admin_menu', 'add_noindex_metabox' );
//  記事保存時、カスタムフィールドの保存
add_action( 'save_post', 'save_custom_noindex' );
//  ヘッダー読み込み時の処理
add_action('wp_head','insert_custom_noindex');

function add_noindex_metabox() {
    add_meta_box( 'custom_noindex', 'インデックス設定', 'create_noindex', array('post', 'page'), 'side' );
}

// 管理画面にフィールドを出力
function create_noindex() {
    $keyname = 'noindex';
    global $post;
    $get_value = get_post_meta( $post->ID, $keyname, true );
    wp_nonce_field( 'action_' . $keyname, 'nonce_' . $keyname );
    $value = 'noindex';
    $checked = '';
    if( $value === $get_value ) $checked = ' checked';
    echo '<label><input type="checkbox" name="' . $keyname . '" value="' . $value . '"' . $checked . '>' . $keyname . '</label>';
}

// カスタムフィールドの保存
function save_custom_noindex( $post_id ) {
    $keyname = 'noindex';
    if ( isset( $_POST['nonce_' . $keyname] )) {
        if( check_admin_referer( 'action_' . $keyname, 'nonce_' . $keyname ) ) {
            if( isset( $_POST[$keyname] )) {
                update_post_meta( $post_id, $keyname, $_POST[$keyname] );
            } else {
                delete_post_meta( $post_id, $keyname, get_post_meta( $post_id, $keyname, true ) );
            }
        }
    }
}

function insert_custom_noindex() {
    global $post;
    if (is_page() || is_single()) {
        if (have_posts()) : while (have_posts()) : the_post();
            if(get_post_meta($post->ID , 'noindex' , true)){
                echo '<meta name="robots" content="noindex,follow" />';
            }
        endwhile; endif;
        rewind_posts();
    }
}



//  PHP END
?>
