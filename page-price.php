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
    <?php /* 見出し : 料金 PRICE  */ ?>
    <?php get_template_part(GET_PATH_R('template').'object/project/p-heading-eff', null,
     ['title' => "料金",'lead'=>"PRICE",'id'=>"price",'color'=>'green'] ); ?>
    <div class="l-price__table__wrapper">
        お見積りする料金の基準となります。<br>
        同じ1セクションでもボリュームや実装難易度によって<br>
        料金をご相談する場合があります。<br>

        <h3 class="c-title__h3 c-title__bg c-title__bg__drop u-margin__t40">コーディング</h3>
        コーディングは時給ベースでの計算となります。<br>
        JavaScriptによる機能の実装は機能ごとの単価となります。
        <?php
            $hourlyWage = 1500; //  時給
            $cd_top = $hourlyWage * 15; // トップ : 3000円で45000円
            $cd_bottom = $hourlyWage * 5; // 下層ページ : 3000円で15000円
            $cd_lp = $hourlyWage * 20; // LP : 
            $txt_day = date('Y/m/d');
        ?>
        <dl>
            <div>
                <dt>時給</dt>
                <dd class="price"><?php echo number_format( $hourlyWage );?>円</dd>
                <dd><?php echo $txt_day; ?>現在、計算基準となる時給です</dd>
            </div>
            <div>
                <dt>トップページ</dt>
                <dd class="price"><?php echo number_format( $cd_top );?>円～</dd>
                <dd>デザインを元に、HTML/CSS/JavaScriptを用いてコーディングをいたします。</dd>
            </div>
            <div>
                <dt>下層ページ</dt>
                <dd class="price"><?php echo number_format( $cd_bottom ); ?>円～/1p</dd>
                <dd>トップページ同様、HTML/CSS/JavaScriptを用いてコーディングをいたします。</dd>
            </div>
            <div>
                <dt>レスポンシブ対応</dt>
                <dd class="price">料金の50%</dd>
                <dd>※上記トップページ・下層ページに含まれています。<br>スマートフォンやタブレットなどの様々な端末でもデザイン崩れがないよう表示の最適化をいたします。</dd>
            </div>
            <div>
                <dt>LP</dt>
                <dd class="price"><?php echo number_format( $cd_lp );?>円～</dd>
                <dd>ランディングページのコーディングを行います。</dd>
            </div>
        </dl>
        <!-- WordPress -->
        <h3 class="c-title__h3 c-title__bg c-title__bg__drop u-margin__t40">WordPress</h3>
        WordPressは機能ごとの価格となります。
        <dl>
            <div>
                <dt>基本料金</dt>
                <dd class="price">30,000円～</dd>
                <dd>静的ページをWordPressテーマ化し、設定・必用な機能を付与します。</dd>
            </div>
            <div>
                <dt>カスタム投稿</dt>
                <dd class="price">10,000円～/1個</dd>
                <dd>1ループ含みます</dd>
            </div>
            <div>
                <dt>カスタムフィールド</dt>
                <dd class="price">10,000円～</dd>
                <dd>10箇所まで。それ以降は1箇所につき1,000円</dd>
            </div>
            <div>
                <dt>お問い合わせフォーム</dt>
                <dd class="price">15,000円～/1p</dd>
                <dd>プラグイン込みの固定ページ</dd>
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

        <!-- より詳しい計算 -->
        <h3 class="c-title__h3 c-title__bg c-title__bg__drop u-margin__t80">より詳しい料金表</h3>
        <p class="u-flex__left u-margin__t20">
            スプレッドシートにて見積自動計算を行っていますので以下をご覧ください
        </p>
        <picture>
            <img src="<?php echo GET_PATH()?>/price/pricetable.jpg" alt="" width="1000" height="600">
        </picture>
        <!-- ボタン -->
        <div class="u-margin__t20 u-margin__b20">
            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vT0Av-BqQdpmIT0WvatlGVpF63uCWsymuawXKDsD4kP9tKyxVQzwfJ7DSwNgKYI3rXJMNAKmlnD0g4H/pubhtml?gid=299761127&amp;single=true&amp;widget=true&amp;headers=false" class="c-button__portfolio c-button__hover__goto p-button__pf">
            見積計算表を見る
            </a>
        </div>        
    </div>


    </div>

    <!-- トップに戻る -->
    <div class="l-price__button__wrapper u-margin__t80">
        <a href="/" class="c-button__portfolio c-button__hover__back p-button__pf">
        トップに戻る
        </a>
    </div>

</div>
</section>
<?php /* お問い合わせボタンパーツ */ ?>
<?php get_template_part(GET_PATH_R('template').'layout/contact/l-contact-conv' ); ?>

</main>

<?php get_footer(); ?>

</body>
</html>
