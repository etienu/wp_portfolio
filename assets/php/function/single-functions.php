<?php
//===================================================
//  front-page、single等で使う
//
//  記事に関する関数
//
//===================================================
//---------------------------------------------------
//      thumbのtext
//---------------------------------------------------
function echo_thumbImage(){
    //  カテゴリを取得
    $postcats = get_the_category();
    $cat_name = "";
    if( $postcats ){
        foreach ( $postcats as $cat ) {
            $cat_name = $cat->slug;
        }
    }

    //  アイキャッチ画像が設定されていれば大サイズで表示
    if( has_post_thumbnail() ){
        the_post_thumbnail("large");
    }
    //  なければnoimage画像をデフォルトで表示
    else{
        $imgfname = '/img/thumb00.jpg';
        // カテゴリでデフォルト画像分岐
        switch( $cat_name ){
        case "css" : $imgfname = "/img/common/thumb-CSS.jpg";    break;
        case "wp" : $imgfname = "/img/common/thumb-WordPress.jpg";    break;
        case "js" : $imgfname = "/img/common/thumb-JavaScript.jpg";    break;
        case "note" : $imgfname = "/img/common/thumb-other.jpg";    break;
        }
        echo '<img src="'. esc_url(get_template_directory_uri()) . $imgfname.'" alt="">';
    }

}


//---------------------------------------------------
//      カテゴリタイトルの一覧出力
//---------------------------------------------------
function category_titles(){
    echo "<div class='c_title__h2'>";
            global $template;
            $ret = basename($template); // パスの最後の名前（ファイル名）を取得
//                            echo "[now]".$ret . "<br>";
            $templates = wp_get_theme()->get_page_templates();
            foreach ( $templates as $template_filename => $template_name ) {
                if ( $template_filename === $ret ) {
//                                    echo '現在のページテンプレート名：' . $template_name;
                    echo $template_name;
                }
                echo "[]".$template_name."<br>";
            }
    echo "</div>";
}



//====================================================
//  front-page
//====================================================
//---------------------------------------------------
//      front-page : トップリンクグループ
//---------------------------------------------------
function fp_topcatlinks(){
    echo <<<EOT
    <section class="p-categorylinklink__group">
    <div class="p-categorylinklink__button-doll">
        <div class="p-categorylinklink__buttontext-main">フェイス</div>
    </div>
    <div class="p-categorylinklink__button-doll">
        <div class="p-categorylinklink__buttontext-main">服</div>
    </div>
    <div class="p-categorylinklink__button-doll">
        <div class="p-categorylinklink__buttontext-main">レジン工作</div>
    </div>
    <div class="p-categorylinklink__button-doll">
        <div class="p-categorylinklink__buttontext-main">衣類洋裁</div>
    </div>
    </section>
EOT;
}


//---------------------------------------------------
//      フロントページ : トップグリッドリンクグループ
//---------------------------------------------------
function fp_topgridlinks(){
    echo <<<EOT
    <section class="p-gridlink__group l-gallery">
    <div class="p-gridlink__button-photo" data-area="A" data-type="1">
        <div class="p-gridlink__buttontext-main">写真</div>
        <div class="p-gridlink__buttontext-sub">photo</div>
    </div>
    <div class="p-gridlink__button-stock" data-area="B" data-type="2">
        <div class="p-gridlink__buttontext-main">素材</div>
        <div class="p-gridlink__buttontext-sub">stock</div>
    </div>
    <div class="p-gridlink__button-note" data-area="C" data-type="3">
        <div class="p-gridlink__buttontext-main">記事</div>
        <div class="p-gridlink__buttontext-sub">note</div>
    </div>
    <div class="p-gridlink__button-other" data-area="D" data-type="4">
        <div class="p-gridlink__buttontext-main">他</div>
        <div class="p-gridlink__buttontext-sub">other</div>
    </div>
    </section>
EOT;
}


//---------------------------------------------------
//      フロントページ : トップ大カテゴリリンクグループ
//---------------------------------------------------
function fp_topbigcatlinks(){
echo <<<EOT
    <section class="p-categorylink-big__group">
    <a href="#la_picture" class="p-categorylink-big__button">
EOT;
    echo '<img src="'.esc_url(get_template_directory_uri()) .'/img/common/bigcat01pc.jpg" class="u-display__pc">';
    echo '<img src="'.esc_url(get_template_directory_uri()) .'/img/common/bigcat01sp.jpg" class="u-display__sp-tab">';
echo <<<EOT
        <div class="p-categorylink-big__buttontext-main">写真</div>
    </a>

    <a href="#la_create" class="p-categorylink-big__button">
    EOT;
    echo '<img src="'.esc_url(get_template_directory_uri()) .'/img/common/bigcat02pc.jpg" class="u-display__pc">';
    echo '<img src="'.esc_url(get_template_directory_uri()) .'/img/common/bigcat02sp.jpg" class="u-display__sp-tab">';
echo <<<EOT
        <div class="fp-categorylink-big__buttontext-main">創作</div>
    </a>

    <a href="#la_selfmade" class="p-categorylink-big__button">
    EOT;
    echo '<img src="'.esc_url(get_template_directory_uri()) .'/img/common/bigcat03pc.jpg" class="u-display__pc">';
    echo '<img src="'.esc_url(get_template_directory_uri()) .'/img/common/bigcat03sp.jpg" class="u-display__sp-tab">';
echo <<<EOT
        <div class="fp__top-bigcatlink-buttontext-main">自作</div>
    </a>

    <a href="#la_note" class="p-categorylink-big__button">
    EOT;
    echo '<img src="'.esc_url(get_template_directory_uri()) .'/img/common/bigcat04pc.jpg" class="u-display__pc">';
    echo '<img src="'.esc_url(get_template_directory_uri()) .'/img/common/bigcat04sp.jpg" class="u-display__sp-tab">';
echo <<<EOT
        <div class="p-categorylink-big__buttontext-main">記事</div>
    </a>
    </section>
EOT;
}


//---------------------------------------------------
//      フロントページ : トップの新着/カテゴリ切り替えタブ
//---------------------------------------------------
function fp_topDispTabs(){
    echo <<<EOT
        <section class="p-tab__group">
        <div id="id-tdb-news" class="p-tab__button">
            新着記事
        </a>
    
        <div id="id-tdb-cats" class="p-tab__button">
            カテゴリ
        </a>
    
        </section>
    EOT;
}
    



//====================================================
//  frontpage
//====================================================
//---------------------------------------------------
//      記事アイテム カテゴリ指定のグループ
//      特定のカテゴリをループするがdivを入れない
//---------------------------------------------------
function postlist_CategoryGroup_nodiv( $i_catslug ){
    
    query_posts('category_name='.$i_catslug );
    $pcount = 0;
    $fpairframe = false;
    //  記事分ループ
    while( have_posts() ) :
        the_post();
        // 偶数の場合ペアフレームをつける
        if( $pcount %2 == 0 ){
            echo '<div class="p-postlist__pairframe">';
            $fpairframe = true;
        }
        //  カード / 横長 切替
        $isCard = true;
        //  カード型(yoyonote)
        if( $isCard ){
            postlist_carditem2();
        }
        //  横長型(etienublog)
        else{
        // 記事一覧のアイテム一個
            postlist_item();
        //  次の記事がある場合セパレートを入れる
            //if( $pcount+1 < $wp_query->post_count ){
    //            postlist_item_separate();
            //}
        }
        // 奇数の場合ペアフレームを閉じる
        if( $pcount %2 == 1 ){
            echo '</div>';
            $fpairframe = false;
        }
        $pcount ++;
    endwhile;
    // グループが終了したのに奇数の場合もペアフレームを閉じる
    if( $pcount %2 == 1 ){
        echo '</div>';
        $fpairframe = false;
    }
  
}


//---------------------------------------------------
//          記事アイテム カテゴリ指定のグループ
//---------------------------------------------------
function postlist_CategoryGroup( $i_catslug ){
    query_posts('category_name='.$i_catslug );
//    echo '<div class="news__post-carditems u-color-bg__lightgreen">';
    echo '<div class="p-postlist__inner">';
    //  divの中身
    postlist_CategoryGroup_nodiv( $i_catslug );
    echo '</div>';

    get_template_part('php/object/project/pagenation');
}


//---------------------------------------------------
//          記事アイテム 一個
//---------------------------------------------------
function postlist_item(){
    // 01
    echo "<article class='p-acard-r'>";
    echo "<a href='".get_permalink()."'>";
    echo "<div class='p-acard-r__image'>";
    //  アイキャッチ画像が設定されていれば大サイズで表示
    echo_thumbImage();
    //echo '<div class="p-acard-r__meta-tag">'.my_the_post_category( false ).'</div>';
    echo "</div>";

    echo '<div class="p-acard-r__content">';
        //  記事タイトル
        echo '<div class="p-acard-r__lead">';
        $title = get_the_title();
        //$title = mb_substr( $title, 0, 36 );    //  最大32文字まで
        echo $title;
        //if(36 <= mb_strlen( $title ) ){ echo "…";}     //32文字の後に...付ける
        //echo mb_strlen( $title );
        echo "</div>";
        echo '<div class="p-acard-r__meta">';
            //  NEWは一週間以内の記事とかそういう事じゃないの
            //  最新5件なら"NEW表記
            //    if ( $limit > $num ):
            //        echo '<div class="p-acard-r__meta-new">NEW</div>';
            //    endif;
            //  作成日
            echo '<time class="p-acard-r__meta-date" datetime="'.get_the_time('c').'">'.get_the_time('Y.m.d').'</time>';
            //  更新日
            //    echo '<time class="p-acard-r__meta-modified-date"><i class="fa-solid fa-rotate"></i>'.get_the_modified_time('Y.m.d').'</time>';
            echo '</div>';
            //  記事抜粋
            if(false)
            {
                echo '<div class="p-acard-r__excerpt">';
                $exc = get_the_excerpt();
                $exc = mb_substr( $exc, 0, 80 );    //  最大80文字まで
                echo $exc;
                if( 80 <= mb_strlen( $exc ) ){ echo "…";}     //80文字の後に...付ける
//                                    echo mb_strlen( $title );
                echo "</div>";
            }
        echo <<<EOT
        </div>
        </a>
    </article>
EOT;
}

//---------------------------------------------------
//          記事アイテム の間のセパレート
//---------------------------------------------------
function postlist_item_separate(){
    echo '<div class="p-postlist__separate"></div>';
}


//---------------------------------------------------
//          記事アイテム 一個 カード版
//      横長文章ではなく四角形のカード型表示
//---------------------------------------------------
function postlist_carditem(){
    // 01
    echo "<a href='".get_permalink()."' class='p-card'>";
        echo "<div class='p-acard__image'>";
        //  アイキャッチ画像
        echo_thumbImage();
        //  画像右上にカテゴリ表示
            echo '<div class="p-acard__meta-tag">'.my_the_post_category( false ).'</div>';
        echo "</div>";

        echo '<div class="p-acard__content">';
        //  記事タイトル
            echo '<div class="p-acard__lead">';
            $title = get_the_title();
            echo $title;
            echo "</div>";
            echo '<div class="p-acard__meta">';
            //  作成日
            echo '<time class="p-acard__meta-date" datetime="'.get_the_time('c').'">'.get_the_time('Y.m.d').'</time>';
            //  更新日のみ
            //echo '<time class="p-acard__meta-modified-date">'.get_the_modified_time('Y.m.d').'</time>';
            echo '</div>';
echo <<<EOT
        </div>
    </a>
EOT;
}
//---------------------------------------------------
//          記事アイテム 一個 カード版 2
//      横長文章ではなく四角形のカード型表示　画像が上、タイトルが下型
//---------------------------------------------------
function postlist_carditem2(){
    // 01
    echo "<a href='".get_permalink()."' class='p-acard'>";
        echo "<div class='p-acard__image'>";
        //  アイキャッチ画像が設定されていれば大サイズで表示
        echo_thumbImage();
        //  画像右上にカテゴリ表示
        //    echo '<div class="p-acard__meta-tag">'.my_the_post_category( false ).'</div>';
        echo "</div>";

        echo '<div class="p-acard__content">';
        //  記事タイトル
            echo '<div class="p-acard__lead">';
            $title = get_the_title();
            echo $title;
            echo "</div>";
            //  メタデータ
            echo '<div class="p-acard__meta">';
                //  作成日
                echo '<time class="p-acard__meta-date" datetime="'.get_the_time('c').'">'.get_the_time('Y.m.d').'</time>';
                //  更新日
                //echo '<time class="p-acard__meta-modified-date">'.get_the_modified_time('Y.m.d').'</time>';
            echo '</div>';
echo <<<EOT
        </div>
    </a>
EOT;
}
//---------------------------------------------------
//          固定記事アイテム 一個 カード版 2
//      横長文章ではなく四角形のカード型表示　画像が上、タイトルが下型
//---------------------------------------------------
function fixpage_carditem( $i_slug, $i_fPost ){
    $page_obj = null;
    //  記事
    if( $i_fPost ){
        $page_obj = get_page_by_path($i_slug, OBJECT, "post" );
    }
    //  固定ページ
    else{
        $page_obj = get_page_by_path($i_slug);
    }
    $page = get_post( $page_obj );
    $category = get_the_category( $page->guid );
    $content= get_page( $page_obj->ID );

    //echo get_permalink( $page_obj->ID, false );
    echo "<a href='".get_permalink( $page_obj->ID )."' class='p-acard'>";
        echo "<div class='p-acard__image'>";
        //  アイキャッチ画像が設定されていれば大サイズで表示
        //アイキャッチ（サムネイル）の取得
        if( has_post_thumbnail($content->ID) ){ echo get_the_post_thumbnail($content->ID); }
        //  なければnoimage画像をデフォルトで表示
        else{ echo '<img src="'. esc_url(get_template_directory_uri()) . '/img/thumb00.jpg" alt="">';  }
        echo "</div>";

        echo '<div class="p-acard__content">';
        //  記事タイトル
            echo '<div class="p-acard__lead">';
            $title = $page->post_title;
            echo $title;
            //echo get_the_title( $page_obj->ID);
            echo "</div>";
            //  更新日のみ
            if( $i_fPost ){
                //$page = get_page($page_id, ‘OBJECT’ , edit); //ここで指定したページのIDの情報を取得
                //$page_include = apply_filters( 'the_content', $content->post_content); //ページの本文をフィルターフックで整形してます
                echo get_post_modified_time( 'Y.m.d', $content->ID );
                //echo '<div class="news__post-item-meta">';
                //echo '<time class="news__post-item-meta-modified-date">'.get_post_modified_time( 'Y.m.d', $content->ID ).'</time>';
                //echo '</div>';
            }
        echo <<<EOT
        </div>
    </a>
EOT;
}








//===================================================
//  記事
//===================================================


//---------------------------------------------------
//      記事 ヘッダー
//---------------------------------------------------
function post__header(){
    echo '<div class="entry-header">';
        //  タイトル
        echo '<h2 class="entry-title">'.get_the_title().'</h2>';

        //  メタ情報
        echo '<div class="entry-header-meta">';
            //  カテゴリ
            $postcats = get_the_category();
            if( $postcats ){
                foreach ( $postcats as $cat ) {
                    echo '<a href="' . get_category_link( $cat->term_id ) . '">'.'<div class="entry-header-category">' . $cat->name . '</div></a>';
                }
            }
            //echo '<div class="entry-header-category">'.my_the_post_category( false ).'</div>';

            //  タグ
            $posttags = get_the_tags();
            if( $posttags ){
                echo '<div class="entry-header-tags">';
                foreach ( $posttags as $tag ) {
                    echo '<a href="' . get_tag_link( $tag->term_id ) . '">'.'<div class="entry-header-tag">#' . $tag->name . '</div></a>';
                }
                echo '</div>';
            }
        echo '</div>';
        
        //  メタ情報 - 日付/更新日時
        echo '<div class="entry-header-meta">';
            //echo '<div class="entry-header-tag">'.my_the_post_tag( false ).'</div>';
            echo '<div class="entry-header-dates">';
                echo '<time class="entry-header-posted-date" datetime="'.get_the_time('c').'"><i class="fas fa-clock fa-fw"></i></i>'.get_the_time('Y/m/d').'</time><span>/</span>';
                echo '<time class="entry-header-modified-date"><i class="fa-solid fa-rotate"></i>'.get_the_modified_time('Y/m/d').'</time>';
            echo '</div>';

        echo  '</div>';

        echo "<div class='entry-header-thumb'>";
        //  アイキャッチ画像が設定されていれば大サイズで表示
        echo_thumbImage();
        echo "</div>";
    
    echo '</div>';
}


//---------------------------------------------------
//      ページ移動
//---------------------------------------------------
function post__pagenation(){
    echo '<div class="p-post-pagenation"></div>';

    $prevpost = get_adjacent_post(true, '', true);
    $nextpost = get_adjacent_post(true, '', false);
    // pagenation
    echo '<div class="p-post-pagination__area">';
        if ($prevpost){
        echo '<a href="' . get_permalink($prevpost->ID) . '" class="p-post-pagination__button-prev">';
            echo '<div class="p-post-pagination__button-arrow">＜</div>';
            echo '<div class="p-post-pagination__button-texts">';
                echo '<div class="p-post-pagination__button-title">前の記事</div>';
                echo '<div class="p-post-pagination__button-lead">'.get_the_title($prevpost->ID).'</div>';
            echo '</div>';
        echo '</a>';
        }
        //  前の記事がない場合は空白を作る
        else{
            echo '<div class="p-post-pagination__button none"></div>';
        }

        if ($nextpost){
        echo '<a href="' . get_permalink($nextpost->ID) . '" class="p-post-pagination__button-next">';
            echo '<div class="p-post-pagination__button-texts">';
            echo '<div class="p-post-pagination__button-title">次の記事</div>';
            echo '<div class="p-post-pagination__button-lead">'.get_the_title($nextpost->ID).'</div>';
            echo '</div>';
            echo '<div class="p-post-pagination__button-arrow">＞</div>';
        echo '</a>';
        }
    echo '</div>';
}


//---------------------------------------------------
//      テスト関数
//
//      指定カテゴリの場合のみ、YesNoチャートを出力
//---------------------------------------------------
function echo_YesNoChart(){
    //  カテゴリ
    $postcats = get_the_category();
    $cat_name = "";
    if( $postcats ){
        foreach ( $postcats as $cat ) {
            $cat_name = $cat->slug;
        }
    }

    switch( $cat_name ){
    case "wp" : 
        echo do_shortcode('[LoadFixPage slug="hide_yesnochart01"]');
        break;
    }

}


?>
