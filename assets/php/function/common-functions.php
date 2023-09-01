<?php
//===================================================
//  PHP
//      サイト全体共通の汎用関数
//
//      ページの最初に読み込む
//  
//===================================================
//---------------------------------------------------
//      twitterカードの設定
//---------------------------------------------------
function setting_twittercard(){
    //  確定要素
    $og_site_name = "ETIENU-CODE";
    $og_site_domain = "portfolio.etienu.com";
    $twitter_card ="summary_large_image";
    $twitter_site ="@etienu352";
    $twitter_title =$og_site_name;
    $og_publisher = "";
    $og_title = "";
    $og_url = "";

    //ページによる違いを全て変数にセットして、最後に出力する
    //  topページ:website 記事:article
    //  投稿ページ
    if( is_single() ){
        $my_id = get_queried_object_id();
        $my_post = wp_get_single_post($my_id)->post_content;
        $thumb_id = get_post_thumbnail_id($my_id);
        $thumb_url = wp_get_attachment_image_src($thumb_id,'full');
        $my_card_summary = str_replace(array("\r", "\n"), '', mb_substr(strip_tags($my_post), 0,150,'UTF-8'));
        $og_type = "article";
        $og_title = get_the_title();
        $og_description = $my_card_summary;
//        $og_description = do_shortcode($my_card_summary );
        
        $og_url = get_permalink($my_id);
        if( $thumb_url )
            $og_image = $thumb_url[0];
        //  twitter設定
        $twitter_title = get_the_title();
        $twitter_desctiption = $my_card_summary;
        if( $thumb_url )
            $twitter_image =$thumb_url[0];

            //  カスタム投稿記事の場合
        $post_type = get_post_type();
        if( $post_type !== 'post' && $post_type !== 'attachment' ){
            if( $post_type == 'work' ){
                $thumb_url = esc_url(get_template_directory_uri()) . '/assets/images/common/twittercard.jpg';
                $twitter_image = $thumb_url;
                if( $thumb_url )
                    $og_image = $thumb_url[0];
    
            }
        }

 
    //  投稿ページ以外
    }else{
        $http = is_ssl() ? 'https' : 'http' . '://';
        $url = $http . $_SERVER["HTTP_HOST"] . $_SERVER["REQUEST_URI"];
        $my_id = get_queried_object_id();
        $og_type = "website";
        //  固定画像
        $thumb_url = esc_url(get_template_directory_uri()) . '/assets/images/common/twittercard.jpg';
//        $thumb_url = esc_url(get_template_directory_uri()) . '/assets/images/common/sitecard.jpg';
        $twitter_image = $thumb_url;
        //$twitter_card ="summary";   //  記事以外は小さいアイコンでいい
        //  iphoneのブラウザで見えるアイコン画像
//        $thumb_url = esc_url(get_template_directory_uri()) . '/assets/images/common/sitecard.jpg';
        $og_image = $thumb_url;

        //  ページによって分岐
        $category = get_the_category();
        //  トップページ
        if( is_front_page() || is_home() ){
            $my_card_summary = $og_site_name;
            $og_title = $twitter_title = $og_site_name." | portfolio";
            $og_description = $twitter_desctiption = $my_card_summary;
            $og_url = esc_url(home_url());
            //  2ページ目以降
            if( is_paged() ){
            }
        //}
        //  固定ページ
        //  ウサ弓
        }elseif( is_page( 'usayumi' ) ){
            $my_post = wp_get_single_post($my_id)->post_content;
            $my_card_summary = str_replace(array("\r", "\n"), '', mb_substr(strip_tags($my_post), 0,150,'UTF-8'));
            $og_title = $twitter_title = get_post(get_the_ID())->post_title;
            $og_description = $twitter_desctiption = $my_card_summary;
            $og_url = get_permalink($my_id);

            //  twitter設定
            //$twitter_card ="player";
            $twitter_title = get_the_title();
            $twitter_desctiption = $my_card_summary;
            $twitter_image =$thumb_url[0];
            //echo "usayumiじゃないの";
        
        }elseif( is_page( 'contact-complete' ) || is_page( 'contact-confirm' ) || is_page( 'contact' )
        || is_page('price')  )
        { 
            $my_post = wp_get_single_post($my_id)->post_content;
            $my_card_summary = str_replace(array("\r", "\n"), '', mb_substr(strip_tags($my_post), 0,150,'UTF-8'));
            $og_title = $twitter_title = get_post(get_the_ID())->post_title;
            $og_description = $twitter_desctiption = $my_card_summary;
            $og_url = get_permalink($my_id);
        }

        //  アーカイブ
        elseif( is_archive() ){
            //  カテゴリー
            if( is_category() ){
                if ( $category && $category[0] ) {
                    $my_card_summary = $og_site_name." - カテゴリー :".$category[0]->cat_name;
                    $og_title = $twitter_title = $my_card_summary;
                    $og_description = $twitter_desctiption = $my_card_summary;
                    $og_url = esc_url(get_category_link( $category[0]->term_id ));
                 }else{
                    $og_title = "NoCategory";
                    $og_url = "#";
                 }
            }
            //  タグ
            elseif( is_tag() ){
                $tag_o = get_queried_object();
                if ( $tag_o ) {
                    $my_card_summary = $og_site_name." - タグ :".$tag_o->name;
                    $og_title = $twitter_title = $my_card_summary;
                    $og_description = $twitter_desctiption = $my_card_summary;
                    $og_url = esc_url(get_tag_link($tag_o->term_id));
                }
            }else{
                $post_type = get_post_type();
                //echo $post_type;
                //print_r(  $obj );
                if( $post_type !== 'post' && $post_type !== 'attachment' ){
                    //echo "カスタム投稿タイプ";
                    if( $post_type == 'work' ){
                        $obj = get_post_type_object( "work");
                        //print_r(  $obj );
                        $og_title = $twitter_title = "制作実績 | ETIENU-CODE";//$og_site_name." - ".get_post(get_the_ID())->post_title;
                        $og_url = esc_url(home_url())."/".$obj->name."/";
                        
                    }
                }
/*                
                    //  カスタム投稿タクソノミー
                elseif( is_tax('work') ){
                    $og_title = $twitter_title = "制作実績 | ETIENU-CODE";//$og_site_name." - ".get_post(get_the_ID())->post_title;
                    $og_url = get_permalink($my_id);
        //                echo $og_title;
        //                echo $og_url;

                }elseif( is_tax() ){
                    echo "何らかのタクソノミー";
                }
*/
                
                if( is_single()){
                    echo $post_type;
                }

            }
        }
        //  検索
        elseif( is_search() ){
            $my_card_summary = $og_site_name.' - 検索';
            $og_title = $twitter_title = $my_card_summary;
            $og_description = $twitter_desctiption = $my_card_summary;
            $og_url = esc_url($url);
        }
        //  404
        elseif( is_404() ){
            $my_card_summary = $og_site_name.' - 404';
            $og_title = $twitter_title = $my_card_summary;
            $og_description = $twitter_desctiption = $my_card_summary;
            $og_url = esc_url($url)."/404";
        }
        //  その他固定ページ？
        else{
            $og_title = $twitter_title = get_post(get_the_ID())->post_title;
            $og_url = get_permalink($my_id);
//            echo $og_title;
//            echo $og_url;
        }
    }
    echo '<meta property="og:type" content="'.$og_type.'">';
    echo '<meta property="og:title" content="'.$og_title.'">';
    //echo '<meta property="og:description" content="'.$og_description.'">';
    echo '<meta property="og:url" content="'.$og_url.'">';
    echo '<meta property="og:site_name" content="'.$og_site_name.'">';
    echo '<meta property="og:publisher" content="'.$og_publisher.'">';     //  facebookURL用
    if( $thumb_url )
    echo '<meta property="og:image"  content="'.$og_image.'">';
 //  twitter設定
    echo '<meta name="twitter:card" content="'.$twitter_card.'">';
    echo '<meta name="twitter:site" content="'.$twitter_site.'">';
    echo '<meta name="twitter:domain" content="'.$og_site_domain.'">';
//    echo '<meta name="twitter:title" content="'.$twitter_title.'">';
    //echo '<meta name="twitter:description" content="'.$twitter_desctiption.'">';
    if( $thumb_url )
    echo '<meta name="twitter:image" content="'.$twitter_image.'">';

}


?>
