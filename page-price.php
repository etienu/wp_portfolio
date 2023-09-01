<?php
/*---------------------------------------------------------
    page-price.php
    料金表
-----------------------------------------------------------*/
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
    <?php get_template_part(GET_PATH_R('template').'layout/l-submv', null, ['title' => '料金表','lead'=>'制作時の基準となる金額です'] ); ?>

<main>
<!-- 料金表 -->
<section class="l-price u-padding_ud100 u-color-bg__main">
  <div class="l-price__inner">
    <div class="c-title__modan c-title__bg__modan c-title__bg__modan--green" id="price">
      <span><b></b><i></i><u></u><p>PRICE</p></span>
      <h2 class="js__title">料金</h2>
    </div>
    <div class="l-price__table__wrapper">
        <h3 class="c-title__h3 c-title__bg c-title__bg__drop u-margin__t40">コーディング</h3>
        <dl>
            <div>
                <dt>トップページ</dt>
                <dd class="price">20,000円～</dd>
                <dd>デザインを元に、HTML/CSS/JavaScriptなどを用いてコーディングをいたします。</dd>
            </div>
            <div>
                <dt>下層ページ</dt>
                <dd class="price">10,000円～/1p</dd>
                <dd>トップページ同様、HTML/CSS/JavaScriptなどを用いてコーディングをいたします。</dd>
            </div>
            <div>
                <dt>レスポンシブ対応</dt>
                <dd class="price">料金の50%</dd>
                <dd>スマートフォンやタブレットなどの様々な端末でもデザイン崩れがないよう表示の最適化をいたします。</dd>
            </div>
            <div>
                <dt>LP</dt>
                <dd class="price">30,000円～</dd>
                <dd>ランディングページのコーディングを行います。</dd>
            </div>
        </dl>
        <!-- WordPress -->
        <h3 class="c-title__h3 c-title__bg c-title__bg__drop u-margin__t40">WordPress</h3>
        <dl>
            <div>
                <dt>トップページ</dt>
                <dd class="price">20,000円～</dd>
                <dd>静的ページをWordPressテーマ化し、必用な機能を付与します。</dd>
            </div>
            <div>
                <dt>下層ページ</dt>
                <dd class="price">10,000円～/1p</dd>
                <dd>トップページ同様、静的ページをWordPress化します。</dd>
            </div>
        </dl>
        <!-- 公開後の対応 -->
        <h3 class="c-title__h3 c-title__bg c-title__bg__drop u-margin__t40">公開後のサポート</h3>
        <dl>
            <div>
                <dt>テキスト修正・追加</dt>
                <dd class="price">3,000円/1回</dd>
                <dd>テキストの修正・追加を行います。</dd>
            </div>
            <div>
                <dt>画像差し替え・追加</dt>
                <dd class="price">3,000円/1回</dd>
                <dd>画像の修正・追加を行います。</dd>
            </div>
        </dl>
        <p class="u-flex__left u-margin__t20">
            ※料金は目安です。依頼内容によって変動する事があります。</p>
    </div>
    <!-- トップに戻る -->
    <div class="l-price__button__wrapper u-margin__t80">
        <a href="/" class="c-button__portfolio c-button__hover__back p-button__pf">
        トップに戻る
        </a>
    </div>

</div>
</section>
</main>

<?php get_footer(); ?>

</body>
</html>
