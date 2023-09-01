<?php
/*---------------------------------------------------------
    
    パーツ : 投稿記事 カード型 一覧

    記事リスト部分(leftcontent)のみ

    type : 表示する一覧タイプ
        tag      : tag.php タグ一覧
        category : category.php カテゴリ一覧
        search   : search.php 検索結果一覧
    使い方
    $args = ['type' => 'tag'];
    get_template_part('php/layout/l-postcardlist', null, $args);

-----------------------------------------------------------*/
?>
                <div class="p-postlist__inner u-color-bg__transparent">
                <?php
                    //  allの場合h2を省く
                    //if( strcmp( $args['type'], "all" ) != 0 ) :
                ?>
                    <h2 class="c-title__h2">
                        <?php
                        $article_count = 0;
                            if( strcmp( $args['type'], "all" ) == 0 ){
                                echo "新着記事";
                                $count_post = wp_count_posts();
                                $article_count = $count_post->publish;
                                //echo $article_count;
                            }
                            else if( strcmp( $args['type'], "tag" ) == 0 ){
                                //  カテゴリでもカテゴリ表示される
                                $tag = get_queried_object();
                                echo "タグ「".$tag->name."」の一覧";
                                $article_count = $tag->count;
                            }
                            else if( strcmp( $args['type'], "category" ) == 0 ){
                                //  タグではエラー
                                $cat = get_category($cat);
                                echo "".$cat->name."";
//                                echo "カテゴリ「".$cat->name."」の一覧";
                                $article_count = $cat->count;
                            }
                            else if( strcmp( $args['type'], "search" ) == 0 ){
                                echo "「".get_search_query()."」の検索結果  ";
                                global $wp_query;
                                echo "  ".$wp_query->found_posts."  件";
                                $article_count = $wp_query->found_posts;
                            }
                        ?>
                    </h2>
                <?php
                    //endif;
                ?>
                    <div class="p-postlist__card">
                        <?php
                            $pcount = 0;
                            $fpairframe = false;
                            //  記事分ループ
                            while( have_posts() ) :
                                the_post();
                                // 偶数の場合ペアフレームをつける
                                if( $pcount %2 == 0 ){
                                    echo '<div class="p-postlist__pairframe u-hidden__sp">';
                                    $fpairframe = true;
                                }
                                //  カード / 横長 切替
                                $isCard = true;
                                //  カード型(yoyonote)
                                if( $isCard ) postlist_carditem2();
                                //  横長型(etienublog)
                                else postlist_item();
                                // 奇数の場合ペアフレームを閉じる
                                if( $pcount %2 == 1 ){
                                    echo '</div>';
                                    $fpairframe = false;
                                }
                                $pcount ++;
                            endwhile;
                            // グループが終了したのに奇数の場合もペアフレームを閉じる
                            if( $pcount %2 == 1 ){
                                //  空カードを入れる
                                echo '<div class="p-acard__space"></div>';
                                echo '</div>';
                                $fpairframe = false;
                            }
                        ?>
                        <?php
                            //--------------------------------
                            //  SP-TAB時のみ単品リストを表示
                            //--------------------------------
                            $pcount = 0;
                            $fpairframe = false;
                            //  記事分ループ
                            while( have_posts() ) :
                                the_post();
                                echo '<div class="p-postlist__oneframe u-hidden__tab-pc">';
                                postlist_carditem2();
                                echo '</div>';
                                $pcount ++;
                            endwhile;
                        ?>
                    </div>
                    <?php get_template_part('php/object/project/pagenation'); ?>
                </div>
