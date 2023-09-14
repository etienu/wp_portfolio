<?php
    //  $args = 引数、スラッグ名( 会社名/"AAA株式会社"等 )
    //  カスタム投稿の指定スラッグ名の記事を取得
    $post_data = get_page_by_path($args, OBJECT, 'caseitem');
    //  ID取得
    $post_id = $post_data->ID;
    //  IDから記事取得
    $post = get_post($post_id);
//    $title = get_the_title($post);
    ?>
<!--  if 記事があるなら -->
<?php if ($post): ?>
    <li class="top__case__item">
        <a href="<?php echo esc_url( home_url('/case#'. get_field('jumpid')) ); ?>">
            <div class="top__case__item-img">
                <?php echo '<img src="'.wp_get_attachment_url(get_post_meta($post->ID , 'logo' ,true)). '" alt="logo">'; ?>
            </div>
            <div class="top__case__item-title"><?php echo get_field('company'); ?>　様</div>
            <div class="top__case__item-link">
                <div class="top__case__item-link-text">
                <?php
                    //  記事からターム取得
                    $terms = get_the_terms($post->ID, "genre");
                    foreach ( $terms as $term ) { echo $term->name; break; }
                ?>
                </div>
                <div class="top__case__item-link-icon"></div>
            </div>
        </a>
    </li>
<?php endif; ?>
<?php
    wp_reset_postdata();
?>
