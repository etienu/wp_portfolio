<?php
//===================================================
//  PHP
//      function.php用の追記ファイル
//
//      function.phpの独自記述の前に行う
//  
//===================================================
//---------------------------------------------------
//      get_templatename
//      テンプレート名取得
//---------------------------------------------------
function get_templatename(){
    global $template; // テンプレートファイルのパスを取得
    $ret = basename($template); // パスの最後の名前（ファイル名）を取得
    $temp_name = pathinfo($ret, PATHINFO_FILENAME); // ファイル名から拡張子を除く
    echo "<!-- get_templatename:".$template."-->";
    echo "<!-- get_templatename:".$ret."-->";
    echo "<!-- get_templatename:".$temp_name."-->";
    return $temp_name;
}

//---------------------------------------------------
//      get_usefilename
//      URLから拡張子を省いたファイル名のみ取得
//---------------------------------------------------
function get_usefilename(){
    $fname = "";
    //  URLからファイル名以降を取得
    $ret = end(explode('/', $_SERVER['REQUEST_URI']));
    //  ファイル名に付属する?以降を分断
    $ret = explode('?', $ret);
    //  配列が1以上ある
    if( 0< count($ret) ){
        //  .phpを省く
        $fname = basename($ret[0], ".php");
    }
    return $fname;

}

//---------------------------------------------------
//      is_post
//      投稿ページか判別
//---------------------------------------------------
function is_post(){
    $ret = get_usefilename();

    // ファイル名の表示
    if( strcmp($ret, "post" ) == 0 ) return true;

    return false;
}


//---------------------------------------------------
//      debug__echo__template
//      このページのテンプレート名を出力
//---------------------------------------------------
function debug__echo_template(){
    $fname = get_usefilename();
    // ログイン中ならデバッグ表示
    if (is_user_logged_in()){
        // ファイル名の表示
        echo "<!-- ログイン中DEBUG : '現在使用している[ファイル名]".$fname."-->";
   }

}


//----------------------------------------------------
//  プラグイン
//----------------------------------------------------
//--------------------------------------------
//
//      パス取得関数
//
//--------------------------------------------
/*
if ( !function_exists( 'get_Plugin_URL' ) ):
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
endif;
*/

//--------------------------------------------
//
//  google-code-prettify
//
//--------------------------------------------
add_action('wp_head','insert_plugin_gcp');
function insert_plugin_gcp() {
    global $post;

    if (is_page() || is_single()) {
        if (have_posts()) :
            echo '<script src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js"></script>';
            /*        
            //echo '<link rel="stylesheet" href="'.get_Plugin_URL().'/.css" />';
            echo '<link rel="stylesheet" href="/plugin/google-code-prettify/prettify.css" />';
           //wp_enqueue_script("my", get_template_directory_uri() . "plugin/google-code-prettify/prettify.js" );
            wp_enqueue_script("my", "/plugin/google-code-prettify/prettify.js" );
            echo "<script>$('body').html('<body onload="">');</script>";
            */        
        endif;
        rewind_posts();
    }
}
