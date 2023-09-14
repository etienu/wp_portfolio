<?php
/*---------------------------------------------------------
    
    パーツ : 投稿記事 カード型 一覧
    ページ丸ごと
    tag、category、searchがまったく同じ構成な為

    type : 表示する一覧タイプ
        all      : front-page.php 新着一覧
        tag      : tag.php タグ一覧
        category : category.php カテゴリ一覧
        search   : search.php 検索結果一覧
    使い方
    $args = ['type' => 'tag'];
    get_template_part('php/layout/l-page-postcardlist', null, $args);

-----------------------------------------------------------*/
?>
<?php get_template_part('php/layout/combo/lc-wp-header')?>

<!--<body class="header-float"> -->
<body>

<!-- content -->
<div id="content">
    <?php get_template_part( 'php/layout/combo/lc-mv' );?>


    <!-- コンテンツの幅制御 -->
    <section class="l-main u-color-bg__main">
        <?php //post_BreadCrumb(); // パンくず ?>
        <div class="l-main__inner u-color-font__light">
            <div class="l-main__bargroup">
                <!--投稿一覧-->
                <section class="l-mainbar u-margin__b40">
                    <?php
                        get_template_part('php/layout/l-postcardlist', null, $args);
                    ?>

                </section>

                <!--    サイドバーウィジェット -->
                <?php get_template_part('php/layout/l-sidebar')?>
            </div>
        </div>
    </section>

</div><!-- /content -->

<?php get_footer(); ?>

</body>

</html>



<!-- javascript -->
<script>
var wppath = "<?php echo get_template_directory_uri();?>";
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/particlesjs/2.2.2/particles.min.js"></script>
<!-- javascript : END -->
