<?php
    //コンタクト - コンバージョンボタン
?>
<section class="l-contact u-margin__b200">
    <div class="l-contact__inner">
        <?php /* 見出し : お問い合わせ CONTACT  */ ?>
        <div class="u-margin__t40"></div>
        <?php get_template_part(GET_PATH_R('template').'object/project/p-heading-eff', null,
        ['title' => 'お問い合わせ','lead'=>"CONTACT",'id'=>"contact",'color'=>'green'] ); ?>

        <div class="l-contact__cvwrapper u-margin__t100">
            <a href="contact" class="p-contactcv__button">
                <div class="p-contactcv__button__bg"></div>
                <div class="p-contactcv__button__inner">
                    <div class="p-contactcv__mailicon"><i class="fas fa-envelope"></i></div>
                    <div class="p-contactcv__separate u-hidden__sp"></div>
                    <div class="p-contactcv__lead">
                        <p>コーディング依頼やお見積り、<br class="u-display__sp">その他ご質問など<br>こちらからお気軽に<br class="u-display__sp">お問い合わせください。</p>
                        <div class="lead-arrow"><i class="fas fa-arrow-right"></i></div>
                    </div>
                </div>
            </a>
        </div>
    </div>
</section>
