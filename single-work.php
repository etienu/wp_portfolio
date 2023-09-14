<?php
/*---------------------------------------------------------
    single-work.php
    制作実績 - 個別ページ
-----------------------------------------------------------*/
    $txt_url = get_post_meta($post->ID, 'work_txt_url', true);
    $meta_user = get_post_meta($post->ID, 'work_txt_user', true);
    $meta_pass = get_post_meta($post->ID, 'work_txt_pass', true);
    $txt_passurl = "";
    //  リンク先のドメイン以降を取得
    $address = explode("https://", $txt_url )[1];
    //  BASIC認証がある
    if( strcmp( $meta_user, "" ) != 0 ):
        //  URLに埋め込む
        $txt_passurl = "https://".$meta_user.":".$meta_pass."@".$address;
    endif;
    //echo $txt_passurl;
    //var_dump( $meta_user );
    //var_dump( $meta_pass );
    //var_dump( $address );
?>


<!DOCTYPE html>
<html lang="ja">
<?php get_template_part(GET_PATH_R('template').'layout/combo/lc-wp-header')?>


<body>
    <!-- header bar -->
    <?php get_template_part(GET_PATH_R('template').'layout/l-headerbar' ); ?>

    <!-- 一番上に戻る -->
    <?php get_template_part(GET_PATH_R('template').'object/project/p-js-gototop' ); ?>

    <!-- sub mv -->
    <?php get_template_part(GET_PATH_R('template').'layout/l-submv', null, ['title' => '制作実績','lead'=>get_the_title()] ); ?>

<main>
<!-- 制作実績 -->
<section class="l-works u-padding_ud100 u-color-bg__main">
  <?php
    $meta_category = get_post_meta($post->ID, 'work_txt_category', true);;
    $category_name = "Achievements";
    if( strcmp( $meta_category, "WordPress" ) == 0 ){
        $category_name = "WordPress";
    }else if( strcmp( $meta_category, "LP" ) == 0 ){
        $category_name = "LandingPage";
    }
  ?>
  <div class="l-works__inner">
    <div class="c-title__modan c-title__bg__modan c-title__bg__modan--green" id="works">
      <span><b></b><i></i><u></u><p><?php echo $category_name;?></p></span>
      <h2><?php echo get_the_title();?></h2>
    </div>

    <div class="l-works__content__wrapper">
      <div class="l-works__content__inner">
        <div class="l-works__article">
        <!--記事処理開始 -->
        <?php if( have_posts() ) : ?>
        <div class="l-works__fullpicture">
            <picture>
                <source srcset="<?php echo GET_PATH()?>works/<?php echo get_post_meta($post->ID, 'work_txt_thumburl', true);?>"  media="(max-width: 768px)" type="image/png"  alt="<?php the_title();?>">
                <img src="<?php echo GET_PATH()?>works/<?php echo get_post_meta($post->ID, 'work_txt_imageurl', true);?>pc.jpg" alt="全体像" width="600" height="6000" loading="lazy">
            </picture>
        </div>
        <div class="l-works__infomation">
            <dl>
 
            <?php 
            //  パスありリンク
            if( strcmp( $meta_user, "" ) != 0 ): ?>
            <div class="l-works__section u-flex__xcenter-sp">
                <a href="<?php echo $txt_passurl;?>" class="c-button__portfolio c-button__hover__goto p-button__pf">
                サイトに移動
                </a>
            </div>
            <div class="l-works__section u-margin__t20">
                <dt class="c-lead">上記リンクはURLにBASIC認証を含めていますので、そのまま移動できます。<br>
                もしパスワードを要求された場合は以下を入力して下さい。</dt>
                <dt class="c-lead__hard">BASIC認証</dt>
                <dd class="c-lead">USER : <b><?php echo get_post_meta($post->ID, 'work_txt_user', true);?></b></dd>
            </div>
            <div class="l-works__section">
                <dd class="c-lead">PASS : <b><?php echo get_post_meta($post->ID, 'work_txt_pass', true);?></b></dd>
            </div>
            <?php endif; ?>

            <?php
            //  パスなしリンク
            if( strcmp( $meta_user, "" ) == 0 ): ?>
            <div class="l-works__section u-flex__xcenter-sp">
                <a href="<?php echo $txt_url;?>" class="c-button__portfolio c-button__hover__goto p-button__pf">
                サイトに移動
                </a>
            </div>
            <?php endif; ?>

            <div class="l-works__section u-margin__t40">
                <dt class="c-title__h3 c-title__bg c-title__bg__grad2">作業範囲</dt>
                <dd><?php echo get_post_meta($post->ID, 'work_txt_mypart', true);?></dd>
            </div>
            <div class="l-works__section u-margin__t40">
                <!--
                <dt class="c-title__h3 c-title__bg__grad">カテゴリ</dt>
                <dd><?php echo get_post_meta($post->ID, 'work_txt_category', true);?></dd>
                -->

                <dt class="c-title__h3 c-title__bg c-title__bg__grad2">日数</dt>
                <dd><?php echo get_post_meta($post->ID, 'work_txt_days', true);?></dd>
            </div>
            <div class="l-works__section u-margin__t40">
                <dt class="c-title__h3 c-title__bg c-title__bg__grad2">使用技術</dt>
                <dd><?php echo get_post_meta($post->ID, 'work_txt_skill', true);?></dd>
            </div>
            <div class="l-works__section u-margin__t40">
                <dt class="c-title__h3 c-title__bg c-title__bg__drop">概要</dt>
                <dd><pre><?php echo get_post_meta($post->ID, 'work_txt_summary', true);?></pre></dd>
            </div>

            </dl>
        </div>
        <?php endif; ?>
        </div>
        <!-- 一覧に戻る -->
        <div class="l-works__button__wrapper u-margin__t80">
            <a href="<?php echo esc_url(home_url()); ?>/work" class="c-button__portfolio c-button__hover__back p-button__pf">
            一覧に戻る
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
