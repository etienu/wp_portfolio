<?php
/*---------------------------------------------------------
    archive-work.php
    カスタム投稿タイプworkの一覧
-----------------------------------------------------------*/
?>

<!DOCTYPE html>
<html lang="ja">

<?php get_template_part(GET_PATH_R('template').'layout/combo/lc-wp-header')?>


<body>
    <?php /* header bar */ ?>
    <?php get_template_part(GET_PATH_R('template').'layout/l-headerbar' ); ?>

    <?php /* 一番上に戻る */ ?>
    <?php get_template_part(GET_PATH_R('template').'object/project/p-js-gototop' ); ?>

    <?php /* sub mv */ ?>
    <?php get_template_part(GET_PATH_R('template').'layout/l-submv', null, ['title' => '制作実績','lead'=>'制作したサイトを実際に確認できます'] ); ?>

<main>
<?php /* 制作実績 */ ?>
<section class="l-works u-padding_ud100 u-color-bg__main">
  <div class="l-works__inner">
    <div class="c-title__modan c-title__bg__modan c-title__bg__modan--green" id="works">
      <span><b></b><i></i><u></u><p>LP/WordPress</p></span>
      <h2>サイト制作</h2>
    </div>

    <div class="l-works__content__wrapper">
      <div class="l-works__content__inner">
        <div class="l-works__items">
            <?php
                //  カスタム投稿タイプ、カテゴリwordpress,lpの表示
                $my_args = array(
                    'post_type' => 'work',
                    'posts_per_page' => 9,
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
            <?php $my_query = new WP_Query($my_args);
                while ($my_query->have_posts()) :
                    $my_query->the_post();
                    //  ソート番号がマイナスなら非表示
                    $work_num_sortindex = get_post_meta($post->ID, 'work_num_sortindex', true);
                    if( $work_num_sortindex < 0 ) continue;

            ?>

            <div class="l-works__item">
                <div class ="container">
                    <a href="<?php echo get_permalink()?>">
                        <div class="l-works__image">
                            <picture>
                            <img src="<?php bloginfo('template_directory')?>/assets/images/works/<?php echo get_post_meta($post->ID, 'work_txt_thumburl', true);?>" alt="">
                            </picture>
                        </div>
                    </a>
                    <div class="l-works__textwrapper">
                        <h4 class="c-title__h4"><?php the_title();?></h4>
                        <div class="c-lead__hard"><?php echo get_post_meta($post->ID, 'work_txt_skill', true);?></div>
                    </div>
                </div>
            </div>

            <?php
                endwhile;
                wp_reset_postdata();
            ?>
        </div>

        <div class="c-title__modan c-title__bg__modan c-title__bg__modan--green u-margin__t80" id="works">
            <span><b></b><i></i><u></u><p>JavaScript</p></span>
            <h2>JavaScript制作</h2>
        </div>
        <?php /* JavaScript系 */ ?>
        <div class="l-works__items u-margin__t40">
            <?php
                //  カスタム投稿タイプ、カテゴリjsの表示
                $my_args = array(
                    'post_type' => 'work',
                    'posts_per_page' => 9,
                    'order' => 'ASC',
                    'tax_query' => array(
                        array(
                            'taxonomy' => 'work-category',
                            'field' => 'slug',
                            'terms' => array('js')
                        ),
                    ),
                );
            ?>
            <?php $my_query = new WP_Query($my_args);
                while ($my_query->have_posts()) :
                    $my_query->the_post();
                    //  ソート番号がマイナスなら非表示
                    $work_num_sortindex = get_post_meta($post->ID, 'work_num_sortindex', true);
                    if( $work_num_sortindex < 0 ) continue;
            ?>

            <div class="l-works__item">
                <div class="container">
                    <a href="<?php echo get_permalink()?>">
                        <div class="l-works__image">
                            <picture>
                            <img src="<?php bloginfo('template_directory')?>/assets/images/works/<?php echo get_post_meta($post->ID, 'work_txt_thumburl', true);?>" alt="">
                            </picture>
                        </div>
                    </a>
                    <div class="l-works__textwrapper">
                        <h4 class="c-title__h4"><?php the_title();?></h4>
                        <div class="c-lead__hard"><?php echo get_post_meta($post->ID, 'work_txt_skill', true);?></div>
                    </div>
                </div>
            </div>

            <?php
                endwhile;
                wp_reset_postdata();
            ?>
        </div>

        <?php /* トップに戻る */ ?>
        <div class="l-works__button__wrapper u-margin__t40">
            <a href="/" class="c-button__portfolio c-button__hover__back p-button__pf">
            トップに戻る
            </a>
        </div>
      </div>
    </div>
  </div>
</section>
</main>

<?php get_footer(); ?>

</body>
</html>
