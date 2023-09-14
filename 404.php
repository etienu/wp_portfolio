<?php
/*---------------------------------------------------------
    404.php
    
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
    <?php get_template_part(GET_PATH_R('template').'layout/l-submv', null, ['title' => 'ページがありません','lead'=>'残念ながら。'] ); ?>

<main>
    <section class="l-contact u-padding_ud40 u-color-bg__main">
    <div class="l-contact__inner">
        <?php /* 見出し : 404 404NotFound  */ ?>
        <div class="u-margin__t80"></div>
        <?php get_template_part(GET_PATH_R('template').'object/project/p-heading-eff', null,
        ['title' => '404','lead'=>"404NotFound",'id'=>"nf",'color'=>'green'] ); ?>

        <div class="p-contact__complete u-margin__t80">
            お探しのページは見つかりませんでした。<br>
            <div class="c-text u-color-font-dark u-margin__t40 u-margin__b40">
                404 File not found.<br>
            </div>
            <div class="u-align__text-left u-flex__xcenter">
                ご指定のURLに間違いがなければ<br>
                ページが移動したか削除された可能性があります。<br>
                大変お手数ですが、トップページからお探し下さい。<br>
            </div>
            <!-- トップに戻る -->
            <div class="l-works__button__wrapper u-margin__t80">
                <a href="/" class="c-button__portfolio c-button__hover__back p-button__pf">
                トップに戻る
                </a>
            </div>
        </div>
    </div>

</main>

<?php get_footer(); ?>

</body>
</html>
