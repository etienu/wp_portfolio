<!-- 新着記事-->
<article class="p-widget__news">
    <div class="p-widget__title">新着記事</div>
    <div class="p-widget__news-items">
        <?php
            $args = array(
            'post_type' => 'post',
            'posts_per_page' => 5,
            'orderby' => 'date',
            'order' => 'DESC',
            );
            $new_posts = get_posts($args);
            foreach($new_posts as $post): setup_postdata( $post );
        ?>

        <a class="p-widget__news-item" href="<?php the_permalink(); ?>">
            <div class="p-widget__news-item-image">
                <?php
                    //  アイキャッチ画像が設定されていれば大サイズで表示
                    echo_thumbImage();
                ?>
                <div class="p-widget__news-item-meta-tag"><?php echo my_the_post_category( false );?></div>
            </div>
            <div class="p-widget__news-item-content">
                <div class="p-widget__news-item-meta">
                    <div class="p-widget__news-item-meta-date" datetime="<?php the_time('c')?>"><?php the_time('Y.m.d');?></div>
                </div>
                <div class="p-widget__news-item-lead">
                <?php
                    $title = get_the_title();
                    $title = mb_substr( $title, 0, 32 );
//                  the_title();
                    echo $title;
                    if( 32 <= strlen( $title ) ){ echo "…";}
                    ?>
                </div>
            </div>
        </a>
        <?php endforeach; wp_reset_postdata(); ?>
    </div>
</article>
