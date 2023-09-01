<?php
/*---------------------------------------------------------
    single.php
    記事
-----------------------------------------------------------*/
?>
<?php get_template_part(GET_PATH_R('template').'layout/combo/lc-wp-header')?>


<?php
//--------------------------------
//  記事ごとの分岐
//--------------------------------

    $fpagecss = false;
    $pageid = get_The_ID();
    $pageidname = "post-".$pageid;
    //  特定のページの場合ページ用cssを読み込む(デフォルト post-ページ番号.css )
    //echo "[pid]".$pid."<br>";
    //  共通処理
    switch( $pageid ){
    //  matter.jsの記事
    case 431:
    case 640:
    case 969:
        $fpagecss = true;
        echo '<script type="text/javascript" src="'.get_template_directory_uri().'/content/yoyocafe/js/matter.min.js"></script>';
        echo '<script type="text/javascript" src="'.get_template_directory_uri().'/content/yoyocafe/js/mymatter.js"></script>';
        break;
    }
    //  個別処理
    switch( $pageid ){
    case 640:
        $pageidname = "post-969";
        break;
    }
    //  フラグが立てば特定ページのCSSを読み込む
    if( $fpagecss ){
        echo '<link rel="stylesheet" href="'.get_template_directory_uri().'/css/'.$pageidname.'.css" />';
    }
    //  プラグイン的な物 : YesNoChart
    //echo '<link rel="stylesheet" href="'.get_template_directory_uri().'/YesNoChart/YesNoChart.css" />';
?>


<body id="content">

    <!--メインビジュアル-->
    <?php get_template_part( 'php/layout/combo/lc-mv' );?>

    <!-- コンテンツの幅制御 -->
    <section class="l-main u-color-bg__main">
        <?php //post_BreadCrumb(); // パンくず ?>
        <div class="l-main__inner u-color-font__light">
            <div class="l-main__bargroup">
                <!--投稿一覧-->
                <div class="l-mainbar u-margin__b40">
                    <div class="p-post__inner u-color-bg__post">
                        <?php post_BreadCrumb(); // パンくず ?>
                        <?php
                        if( have_posts() ) :
    //                        echo "<article ".post_class( array('entry')).">";
                            echo "<article ";
                            post_class( array('entry'));
                            echo ">";
                            //  entry-header : 記事タイトルや日付情報
                            post__header();
                            //  記事本文 entry-body
                            echo '<div class="entry-body u-margin__b40">';
                            echo '<div class="entry-body__inner">';
                            //  カテゴリによって表示するか決めるYesNoChart
                            //  echo_YesNoChart();
                            the_content();
                            echo '</div>';
                            echo '</div>';
                            echo '</article>';
                            endif;
                        ?>

                        <!-- pagenation : 前の記事、次の記事 -->
                        <?php //post__pagenation(); ?>
                    </div>
                </div>

                <?php get_template_part('php/layout/l-sidebar')?>
            </div>
            
        </div><!-- l-main__inner : END -->
    </section><!-- l-main: END -->
    <?php get_footer(); ?>
</body>

</html>

<!-- javascript -->
<script>
var wppath = "<?php echo get_template_directory_uri();?>";
</script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/git/gist-embed.min.js"></script>
<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
<script src="<?php bloginfo('template_directory')?>/js/swiper-setting.js"></script>

<!-- javascript : END -->
