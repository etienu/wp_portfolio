<?php
//===================================================
//
//  記事中ショートコードの追加
//  function.phpで読み込む
//
//  include "php/function/post-shortcode.php";
//
//
//===================================================

//---------------------------------------------------
//      B
//---------------------------------------------------
function setting_shortcode(){
    
}


//B 緑塗、アウトライン強調
function shortcode_b_powergreen( $atts, $content = null ) { 
    return '<b class="post__heading-sub2">' . $content . '</b>';
}

add_shortcode( 'b_greenpower', 'shortcode_b_powergreen');




//--------------------------------------------------------
//
//  ページ内リンク
//
//--------------------------------------------------------
//  投稿記事リンク
function sc__article_link_slug( $atts, $content = null ){
    extract( shortcode_atts( array( 'slug' => '', ), $atts ) );

    //  引数が空ではない
    ob_start();
    if( !empty($atts) ){
        if( array_key_exists( 'slug'  , $atts ) ){
            echo "<br>";
            echo '<div class="p-postlist__pairframe article">';
            fixpage_carditem( $atts['slug'], true );
            echo "</div>";
            echo "<br>";
        }
    }
    
    return ob_get_clean();
}

add_shortcode('article-link', 'sc__article_link_slug');

//  固定ページリンク
function sc__fixedpage_link_slug( $atts, $content = null ){
    extract( shortcode_atts( array('slug' => '', ), $atts ) );

    //  引数が空ではない
    ob_start();
    if( !empty($atts) ){
        if( array_key_exists( 'slug'  , $atts ) ){
            echo "<br>";
            fixpage_carditem( $atts['slug'], false );
            echo "<br>";
        }
    }
    
    return ob_get_clean();
}

add_shortcode('fixedpage-link', 'sc__fixedpage_link_slug');

?>



