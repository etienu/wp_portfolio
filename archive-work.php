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
    <?php /* 見出し : できること SKILL  */ ?>
    <?php get_template_part(GET_PATH_R('template').'object/project/p-heading-eff', null,
    ['title' =>'サイト制作','lead'=>"LP/WordPress",'id'=>"works",
    'side'=>'left','color'=>'green'] ); ?>


    <div class="l-works__content__wrapper">
      <div class="l-works__content__inner">
        <div class="l-works__items">
            <?php
                //  カスタム投稿タイプ、カテゴリwordpress,lpの表示
                $my_args = array(
                    'post_type' => 'work',
                    'posts_per_page' => 10,
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

            <article class="l-works__item">
                <div class ="container">
                    <a href="<?php echo get_permalink()?>">
                        <div class="l-works__image">
                            <picture>
                            <img src="<?php bloginfo('template_directory')?>/assets/images/works/<?php echo get_post_meta($post->ID, 'work_txt_thumburl', true);?>" alt="">
                            </picture>
                        </div>
                    </a>
                    <div class="l-works__textwrapper">
                        <h3 class="c-title__h4"><?php the_title();?></h3>
                        <div class="c-lead__hard"><?php echo get_post_meta($post->ID, 'work_txt_when', true);?></div>
                        <div class="c-lead__hard"><?php echo get_post_meta($post->ID, 'work_txt_skill', true);?></div>
                    </div>
                </div>
            </article>

            <?php
                endwhile;
                wp_reset_postdata();
            ?>
        </div>

        <?php /* 見出し : JavaScript制作 JavaScript  */ ?>
        <div class="u-margin__t80"></div>
        <?php get_template_part(GET_PATH_R('template').'object/project/p-heading-eff', null,
        ['title' =>'JavaScript','lead'=>"JavaScript",'id'=>"works",
        'color'=>'green'] ); ?>


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

            <article class="l-works__item">
                <div class="container">
                    <a href="<?php echo get_permalink()?>">
                        <div class="l-works__image">
                            <picture>
                            <img src="<?php bloginfo('template_directory')?>/assets/images/works/<?php echo get_post_meta($post->ID, 'work_txt_thumburl', true);?>" alt="">
                            </picture>
                        </div>
                    </a>
                    <div class="l-works__textwrapper">
                        <h3 class="c-title__h4"><?php the_title();?></h3>
                        <div class="c-lead__hard"><?php echo get_post_meta($post->ID, 'work_txt_when', true);?></div>
                        <div class="c-lead__hard"><?php echo get_post_meta($post->ID, 'work_txt_skill', true);?></div>
                    </div>
                </div>
            </article>

            <?php
                endwhile;
                wp_reset_postdata();
            ?>
        </div>

        <?php /* トップに戻る */ ?>
        <div class="l-works__button__wrapper">
            <a href="/" class="c-button__portfolio c-button__hover__back p-button__pf">
            トップに戻る
            </a>
        </div>
      </div>
    </div>
  </div>
</section>
</main>

<?php /* お問い合わせボタンパーツ */ ?>
<?php get_template_part(GET_PATH_R('template').'layout/contact/l-contact-conv', null,['color'=>'green'] ); ?>

<?php get_footer(); ?>

</body>
</html>
