<?php
/*---------------------------------------------------------
    front-page.php
    トップページ
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

  <?php /* ヒーローページ */ ?>
<section class="l-hero">
  <div class="l-hero__background" data-eff="gsapparallax" data-y="-100"></div>
  <div class="l-hero__background-boader"></div>
  <div class="l-hero__background-boader__white"></div>
  <div class="l-hero__inner">
    <h2 class="l-hero__heading js-surface__heroheading2">
      <div>想像を、触れるカタチに</div>
    </h2>
    <div class="l-hero__sublead">
      <div>シンプルで心地よいサイト、作ります。</div>
    </div>
    <div class="l-hero__scrollbuttonwrapper">
      <a href="#intro">
        <div class="js-gsap__scrollbutton">
          <div class="icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="text">SCROLL</div>
        </div>
      </a>
    </div>
  </div>
</section>

<main>

<?php /* はじめに */ ?>
<section class="l-intro u-color-bg__white">
  <div class="l-intro__inner">
    <div class="l-intro__head"> 
      <div class="c-anchor__t-100" id="intro"></div>
      <h2>
      <span>NINO-CODE PORTFOLIO</span><span class="line"></span>
      </h2>
    </div>

    <div class="l-intro__content"> 
      <p class="l-intro__ideal">
        想像を<br>
        触れるカタチに
      </p>
      <p class="l-intro__lead">
        頂いたデザインを忠実に<br class="u-display__sp">再現する事はもちろんですが、<br>
        機能、動きがあることで効果的な<br class="u-display__sp">webサイトになります。<br>
        <br>
        自身もサイトの完成度に関わっている<br class="u-display__sp">という認識を持ち、<br>
        「このような演出があると<br class="u-display__sp">満足度が上がるのではないか」<br>
        といった、コーダー視点での<br class="u-display__sp">提案を行ってまいります。<br>
      </p>
    </div>
  </div>
</section>

<?php /* 制作実績 */ ?>
<section class="l-works u-padding_ud100 u-color-bg__white">
  <div class="l-works__background">
    <div class="l-works__bg__left" data-eff="worksbg-boxl"></div>
    <div class="l-works__bg__right" data-eff="worksbg-boxr"></div>
  </div>
  <div class="l-works__inner">
    <?php /* 見出し : 制作実績 */ ?>
    <?php get_template_part(GET_PATH_R('template').'object/project/p-heading-eff', null,
    ['title' => '制作実績','lead'=>"WORKS",'id'=>"works",
    'side'=>'left'] ); ?>

    <div class="l-works__content__wrapper">
      <div class="l-works__content__inner">
        <div class="l-works__items">
        <?php get_template_part(GET_PATH_R('template').'object/project/p-custompost-card-one', null, ['post_type' => 'work','name'=>'wp-05', 'effclass'=>'js-surface__ltor']); ?>
        <?php get_template_part(GET_PATH_R('template').'object/project/p-custompost-card-one', null, ['post_type' => 'work','name'=>'lp-04', 'effclass'=>'js-surface__up']); ?>
        <?php get_template_part(GET_PATH_R('template').'object/project/p-custompost-card-one', null, ['post_type' => 'work','name'=>'wp-01', 'effclass'=>'js-surface__rtol']); ?>
        </div>
        <div class="l-works__button__wrapper u-margin__t80">
          <a href="work" class="c-button__portfolio c-button__hover__goto p-button__pf">
            制作実績一覧はこちら
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<?php /* サービス */ ?>
<section class="l-service u-padding_ud100 u-color-bg__main">
  <div class="l-service__inner">
    <?php
    /*  OS判別デバッグ
    <div class="disp__userAgent"></div>
    */
    ?>

    <?php /* 見出し : 可能な業務 */ ?>
    <?php get_template_part(GET_PATH_R('template').'object/project/p-heading-eff', null,
    ['title' => '可能な業務','lead'=>"SERVICE",'id'=>"services",
    'color'=>"green", 'side'=>'right'] ); ?>

    <div class="l-service__content__wrapper">
      <div class="l-service__content__inner">
        <div class="l-service__items">
          <div class="l-service__background">
            <div class="l-service__bg__left" data-eff="worksbg-boxl"></div>
            <div class="l-service__bg__right" data-eff="worksbg-boxr3"></div>
          </div>
          <div class="l-service__itemframe">
            <div class="l-service__item js-surface__up">
              <div class="l-service__image">
                <picture>
                  <source srcset="<?php echo GET_PATH()?>service/cording.jpg"  media="(max-width: 768px)" type="image/jpg">
                  <img src="<?php echo GET_PATH()?>service/cording.jpg" alt="コーディング" width="400" height="400" loading="lazy">
                </picture>
              </div>
              <div class="l-service__textwrapper">
                <div class="c-title__h3 size--mid"><h3>コーディング</h3></div>
                <div class="l-service__lead">
                  頂いたデザインからコーディングを行います。FLOCSS/BEMによる再利用性の高い設計をし、レスポンシブ表示、jsを用いたアニメーションも可能です。
                </div>
              </div>
            </div>
          </div>

          <div class="l-service__itemframe">
            <div class="l-service__item js-surface__up">
              <div class="l-service__image">
                <picture>
                  <source srcset="<?php echo GET_PATH()?>service/wp.jpg"  media="(max-width: 768px)" type="image/jpg">
                  <img src="<?php echo GET_PATH()?>service/wp.jpg" alt="WordPress" width="400" height="400" loading="lazy">
                </picture>
              </div>
              <div class="l-service__textwrapper">
                <div class="c-title__h3 size--mid"><h3>WordPress構築</h3></div>
                <div class="l-service__lead">
                  静的サイトのWordPress化、プラグインの導入、機能のカスタマイズを行います。<br>
                </div>
              </div>
            </div>
          </div>

          <div class="l-service__itemframe">
            <div class="l-service__item js-surface__up">
              <div class="l-service__image">
                <picture>
                  <source srcset="<?php echo GET_PATH()?>service/mente.jpg"  media="(max-width: 768px)" type="image/jpg">
                  <img src="<?php echo GET_PATH()?>service/mente.jpg" alt="管理・修正" width="400" height="400" loading="lazy">
                </picture>
              </div>
              <div class="l-service__textwrapper">
                <div class="c-title__h3 size--mid"><h3>ホームページ修正</h3></div>
                <div class="l-service__lead">
                  公開後サイトの文章や画像、コードの修正などを行います。
                  WordPressの修正も対応いたします。
                </div>
              </div>
            </div>
          </div>
        </div><!--service items -->

        <?php /* 見出し : できること SKILL  */ ?>
        <div class="u-margin__t80"></div>
        <?php get_template_part(GET_PATH_R('template').'object/project/p-heading-eff', null,
        ['title' => 'できること','lead'=>"SKILL",'id'=>"skills",
        'color'=>'green', 'side'=>'left'] ); ?>

        <div class="l-service__skillwrapper">
          <div class="l-service__skillbg">
            <div class="l-service__skillbg__left" data-eff="worksbg-boxl"></div>
            <div class="l-service__skillbg__left2" data-eff="worksbg-boxl2"></div>
            <div class="l-service__skillbg__right" data-eff="worksbg-boxr2"></div>
          </div>
          <div class="l-service__tabwrapper">
            <div class="l-service__tabs" data-js="tabgroup">
              <button class="l-service__tab" data-js="tabitem" data-key="skillswiper1" data-state="open"><span>CORDING</span></button>
              <button class="l-service__tab" data-js="tabitem" data-key="skillswiper2"><span>TOOL</span></button>
            </div>
          </div><!-- l-service__tabwrapper -->
          <div class="l-service__skillcontent">
            <!-- Slider main container -->
            <div class="swiper" data-name="skill">
              <!-- Additional required wrapper -->
              <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide">
                    <!-- コーディング -->
                    <div class="l-service__skill__head u-margin__b20">コーディング</div>
                    <div class="l-service__skill__items js-surface__upgroup">
                      <div class="l-service__skill__item">
                        <div class="l-service__skill__title">HTML</div>
                        <div class="l-service__skill__lead">head内meta・favicon・OGP等の設定、pictureで画像のレスポンシブ対応・alt等の指定、h1、h2等構造を厳守</div>
                      </div>
                      <div class="l-service__skill__item">
                      <div class="l-service__skill__title">CSS<br>Sass(SCSS)</div>
                      <div class="l-service__skill__lead">FLOCSS/BEMを使用し、構造のわかりやすさ・読みやすさ・再利用性を重視します。</div>
                      </div>
                      <div class="l-service__skill__item">
                        <div class="l-service__skill__title">JavaScript<br>(jQuery)</div>
                        <div class="l-service__skill__lead">ハンバーガー、スムーススクロールのような必須機能、swiperなどjQueryを使用せず組めます。matter.jsやthree.jsの経験があります。</div>
                      </div>
                      <div class="l-service__skill__item">
                        <div class="l-service__skill__title">GSAP</div>
                        <div class="l-service__skill__lead">jQueryよりも軽く複雑なアニメーションを実装できます。</div>
                      </div>
                      <div class="l-service__skill__item">
                        <div class="l-service__skill__title">PHP</div>
                        <div class="l-service__skill__lead">ワードプレスのプラグインを使用せずに、PHPによるメールの送信などが可能です。</div>
                      </div>
                      <div class="l-service__skill__item">
                        <div class="l-service__skill__title">WordPress</div>
                        <div class="l-service__skill__lead">テーマの自作や修正作業が可能。<br>
                          カスタム投稿・フィールドを使う事で、利用者様自身で情報を更新できるサイトを作成できます。
                        </div>
                      </div>
                    </div><!-- l-service__skill__items -->
                </div>

                <div class="swiper-slide">
                  <!-- ツール -->
                  <div class="l-service__skill__head u-margin__t20">使用ツール</div>
                  <div class="l-service__skill__items js-surface__upgroup u-margin__t20">
                    <div class="l-service__skill__item">
                      <div class="l-service__skill__title tool">VSCode</div>
                      <div class="l-service__skill__lead">コーディングで主に使用するエディタです</div>
                    </div>
                    <div class="l-service__skill__item">
                      <div class="l-service__skill__title tool">Local</div>
                      <div class="l-service__skill__lead">ローカル環境を作り、WordPressを動作させるツールです</div>
                    </div>
                    <div class="l-service__skill__item">
                    <div class="l-service__skill__title tool">PhotoShop<br>AffinityPhoto</div>
                    <div class="l-service__skill__lead">サムネイル文字の加工や写真の修正、画像切り抜き・サイズ変更ができます。</div>
                    </div>
                    <div class="l-service__skill__item">
                      <div class="l-service__skill__title tool">Adobe XD<br>Figma</div>
                      <div class="l-service__skill__lead">コーディングする為に情報確認や画像の切り出しが可能です</div>
                    </div>
                    <div class="l-service__skill__item">
                      <div class="l-service__skill__title tool">GitHub<br>SourceTree</div>
                      <div class="l-service__skill__lead">アップロード/更新経験があります</div>
                    </div>
                    <div class="l-service__skill__item">
                      <div class="l-service__skill__title tool">gulp<br>webpack</div>
                      <div class="l-service__skill__lead">node.jsを利用してタスクランナーでの画像圧縮、バンドルツールでのcssコンパイル・jsの結合圧縮が可能です</div>
                    </div>
                  </div><!-- l-service__skill__items -->
                </div>
              </div>
              <!-- If we need pagination -->
              <div class="swiper-pagination"></div>
            
            </div>
          </div><!-- l-service__skillcontent -->
        </div><!-- l-service__skillwrapper -->

      </div><!-- l-service__content__inner -->
    </div><!-- l-service__content__wrapper -->

  </div><!-- l-service__inner -->
</section><!-- l-service -->



<!-- faq -->
<section class="l-section p-faq">
    <div class="p-faq__inner">
      <?php /* 見出し : 制作実績 */ ?>
      <?php get_template_part(GET_PATH_R('template').'object/project/p-heading-eff', null,
      ['title' => 'よくある質問','lead'=>"FAQ",'id'=>"faq",
      'side'=>'right'] ); ?>
        <div class="p-faq__content">
            <ul class="p-faq__grid" itemscope itemtype="https://schema.org/FAQPage">
                <li class="p-faq__griditem" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                    <details data-js="accordion-details">
                        <summary class="p-faq__q" data-js="accordion-summary">
                            <span class="p-faq__q-inner p-accordion__summary-inner" itemprop="name">
                                NINO-CODEとはどのような組織ですか？<span class="icon" data-type="plus"></span>
                            </span>
                        </summary>
                        <div class="p-faq__a" data-js="accordion-content">
                            <div class="p-faq__a__inner" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                                <p itemprop="text">
                                  NINO-CODEはまだサイトの名前でしかありません。<br>
                                  私はまだ開業前の個人です。<br>
                                  NINO-CODEは屋号として登録している訳ではありませんが、登録するなら
                                  前職、実家の消火設備管工事会社にちなんで苗字+主な仕事内容を連想する名前にしようと考えております。</p>
                            </div>
                        </div>
                    </details>
                </li>
                <li class="p-faq__griditem" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                    <details data-js="accordion-details">
                        <summary class="p-faq__q" data-js="accordion-summary">
                            <span class="p-faq__q-inner p-accordion__summary-inner" itemprop="name">
                                それでは自己紹介をお願い致します。<span class="icon" data-type="plus"></span>
                            </span>
                        </summary>
                        <div class="p-faq__a" data-js="accordion-content">
                            <div class="p-faq__a__inner" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                                <p itemprop="text">
                                  <a href="/about">自己紹介はこちらです。</a>
                                </p>
                            </div>
                        </div>
                    </details>
                </li>
                
                <li class="p-faq__griditem" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                    <details data-js="accordion-details">
                        <summary class="p-faq__q" data-js="accordion-summary">
                            <span class="p-faq__q-inner p-accordion__summary-inner" itemprop="name">
                            価格感はどのようになっていますか？<span class="icon" data-type="plus"></span>
                            </span>
                        </summary>
                        <div class="p-faq__a" data-js="accordion-content">
                            <div class="p-faq__a__inner" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                                <p itemprop="text">
                                  <a href="/price">料金表はこちらです。</a>
                                </p>
                            </div>
                        </div>
                    </details>
                </li>

                <li class="p-faq__griditem" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                    <details data-js="accordion-details">
                        <summary class="p-faq__q" data-js="accordion-summary">
                            <span class="p-faq__q-inner p-accordion__summary-inner" itemprop="name">
                            どのようにお仕事を進めますか？<span class="icon" data-type="plus"></span>
                            </span>
                        </summary>
                        <div class="p-faq__a" data-js="accordion-content">
                            <div class="p-faq__a__inner" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                                <p itemprop="text">
                                  頂いた情報を元にNotionやスプレッドシートを利用した
                                  案件管理ツールに情報をまとめます。<br>
                                  目安となる工程スケジュール表を作成、各種必要URLやパスワード、情報を一か所にまとめて共有可能です。<br>
                                  ご質問する内容も、メールでばらばらではなくシートでまとめて共有致します。<br>
                                  連絡はメール、zoom、チャットツール等御社に合わせますが記録が残る文面が望ましいです。
                                </p>
                            </div>
                        </div>
                    </details>
                </li>

                <li class="p-faq__griditem" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                    <details data-js="accordion-details">
                        <summary class="p-faq__q" data-js="accordion-summary">
                            <span class="p-faq__q-inner p-accordion__summary-inner" itemprop="name">
                            自分で実装できない機能があった場合<br class="u-display__sp">どう対応しますか？<span class="icon" data-type="plus"></span>
                            </span>
                        </summary>
                        <div class="p-faq__a" data-js="accordion-content">
                            <div class="p-faq__a__inner" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                                <p itemprop="text">
                                  基本は仕様を教えて頂いた際に、可能かどうかを判断する検証時間を頂いてからお受けします。<br>
                                  それでも途中から実装難易度の高い要素が発覚した場合、<br>
                                  一度要点をご相談して代案を出すか、どうしても必要な機能なら同業者に依頼してでも終わらせます。<br><br>
                                  ですが情報に溢れている現代ですと、一般的に求められている機能の作り方は
                                  検索やChatGPTへの質問がしっかりできれば答えは得られると考えます。<br>
                                  (データベースに登録するログインサイト、ECサイト、動的サイトやバックエンドが絡んだような規模のサイトですとまた違う話になってきます)<br><br>
                                  主な懸念点は「webkit系ブラウザ(iPhone Safari)での解消しがたい挙動違い」といったものになると予想します。<br><br>
                                  「PC/SPで構成が違う上に複雑なデザイン」<br>
                                  これは実装できないのではなく時間がかかります。事前に複雑さが分かっていればその分納期を見ていただく・コードの品質より動く事を優先するかご相談という方向性です。
                                </p>
                            </div>
                        </div>
                    </details>
                </li>

                <li class="p-faq__griditem" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                    <details data-js="accordion-details">
                        <summary class="p-faq__q" data-js="accordion-summary">
                            <span class="p-faq__q-inner p-accordion__summary-inner" itemprop="name">
                                今から作業できますか？<span class="icon" data-type="plus"></span>
                            </span>
                        </summary>
                        <div class="p-faq__a" data-js="accordion-content">
                            <div class="p-faq__a__inner" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                                <p itemprop="text">
                                可能です。独身ですので、在宅している限り夜間・祭日関係なく作業できます。<br>
                                稼働時間としては9:00～18:00を中心に一日８時間、平日休日合わせて週50時間ほど動けます。<br>
                                </p>
                            </div>
                        </div>
                    </details>
                </li>
            </ul>
        </div>
    </div>
</section>


<?php /* お問い合わせボタンパーツ */ ?>
<?php get_template_part(GET_PATH_R('template').'layout/contact/l-contact-conv' ); ?>
</main>

<?php get_footer(); ?>

</body>
</html>
