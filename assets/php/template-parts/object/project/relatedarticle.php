<div class="related-title">関連記事</div>
<div class="entry-related">
    <div class="related-items">
    <?php
        $categories = get_the_category($post->ID);
        $category_ID = array();
        foreach($categories as $category):
            array_push( $category_ID, $category->cat_ID );
        endforeach;
        $args = array(
            //  今読んでいる記事を除く
            'post__not_in' => array($post -> ID),
            'posts_per_page' => 8,
            'category__in' => $category_ID,
            //  ランダムに記事を選ぶ
            'arderby' => 'rand',
        );
        $query = new WP_Query( $args );
        if( $query->have_posts() ) :
            $post_max = 8;
            $post_index = 0;
                while( $query->have_posts() ) :
                $query -> the_post();
                $post_index ++;
    ?>

    <a href="<?php the_permalink();?>" class="related-item">
        <!-- entry-item-img -->
        <div class="related-item-img">
        <?php
        if( has_post_thumbnail() ){
            //  アイキャッチ画像が設定されていれば大サイズで表示
            the_post_thumbnail("thumbnail");
        }else{
            //  なければnoimage画像をデフォルトで表示
            echo '<img src="'. esc_url(get_template_directory_uri()) . '/img/noimg.png" alt="" width="150" height="150">';
        }
        ?>
        </div>
        <div class="related-item-title"><?php the_title();?></div>
    </a>
    <?php endwhile; ?>
    <?php // 指定個数以下だった場合の残りの項目
        for( $i=$post_index;$i<$post_max;$i++):   ?>
        <div class="related-item">
            <!-- 空画像 -->
            <div class="related-item-img">
            <?php echo '<img src="'. esc_url(get_template_directory_uri()) . '/img/noimg.png" alt="" width="150" height="150">';    ?>
            </div>
        </div>

    <?php endfor;?>
    </div>

    <?php endif; ?>
    <!-- サブクエリを終了する -->
    <?php wp_reset_postdata(); ?>
</div><!-- /entry-related -->
