<?php
    function console_log($data){
        echo '<script>';
        echo 'console.log('.json_encode($data).')';
        echo '</script>';
    }

    //  WordPressを読み込む。WP_Query等を使えるようにする
    // サイト名/public/wp-load.php
    require '../../../../../../wp-load.php';

    //  カスタム投稿タイプのタクソノミーLP/WordPressを検索
    $my_args = array(
        'post_type' => 'work',
        'posts_per_page' => -1,
        'order' => 'DESC',
        'orderby' => 'meta_value',
        //  タクソノミーの指定
        'tax_query' => array(
            array(
                'taxonomy' => 'work-category',
                'field' => 'slug',
                'terms' => array('wordpress','lp')
            ),
        ),
        // カスタムフィールドの指定( ソート番号の昇順、値がない物は排除される )
        'meta_query' => array(
            array(
                'key' => 'work_num_sortindex', // フィールド名の指定
                'type'=>'SIGNED' // 値の型
            )
        )
    );
?>
<?php
    $my_query = new WP_Query($my_args);
    //  検索された記事をループ
    while ($my_query->have_posts()) :
        $my_query->the_post();
        //  カスタムフィールド閲覧数・外部閲覧数に0をセット
        update_post_meta( get_the_ID(), 'views', 0 );
        update_post_meta( get_the_ID(), 'external_viewers', 0 );
        //console_log( get_the_title() );
        //the_title();
        //echo "<br>";
    endwhile;
    wp_reset_postdata();
?>


<?php
    //  カスタム投稿タイプ、カテゴリjsの表示
    $my_args = array(
        'post_type' => 'work',
        'posts_per_page' => -1,
        'order' => 'ASC',
        'tax_query' => array(
            array(
                'taxonomy' => 'work-category',
                'field' => 'slug',
                'terms' => array('js')
            ),
        ),
    );
    $my_query = new WP_Query($my_args);
    //  検索された記事をループ
    while ($my_query->have_posts()) :
        $my_query->the_post();
        //  カスタムフィールド閲覧数・外部閲覧数に0をセット
        update_post_meta( get_the_ID(), 'views', 0 );
        update_post_meta( get_the_ID(), 'external_viewers', 0 );
    endwhile;
    wp_reset_postdata();
?>
