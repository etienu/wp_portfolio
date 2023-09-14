<?php
    //  コンタクトフォーム
?>
<section class="l-contact u-color-bg__main">
  <div class="l-contact__inner u-margin__t20 u-margin__b40">

    <!--  <form id="id_contact" action="<?php echo esc_url(home_url('/'));?>contact-send-mail" -->

    <?php
        $fDisabled = "";
        $txt_name = "";
        $txt_email = "";
        $txt_message = "";
    ?>

    <form id="id_contact" action="<?php echo esc_url(home_url('/'));?>contact-confirm#confirm"
        method="POST">
        <!-- bread-crumb -->
        <?php get_template_part('template-parts/object/project/p-breadcrumb' ); ?>
        <!--
        <div class="c-title__modan c-title__bg__modan c-title__bg__modan--green u-margin__t20">
            <div class="c-anchor__t-100" id="input"></div>
            <span><b></b><i></i><u></u><p>INPUT</p></span>
            <h2>内容入力</h2>
        </div>
        -->
        <?php /* 見出し : 内容入力 INPUT  */ ?>
        <div class="u-margin__t20"></div>
        <?php get_template_part(GET_PATH_R('template').'object/project/p-heading-eff', null,
         ['title' => '内容入力','lead'=>"INPUT",'id'=>"input",'color'=>'green'] ); ?>



        <div class="c-lead__hard u-margin__t40">
            コーディング代行、お見積り等、お気軽にご相談下さい！
        </div>
        <div class="p-contact__progress-flow__wrapper u-margin__t20">
            <div class="p-contact__progress-flow">
                <div class="bar"></div>
                <div class="item now"><div class="numberbox">1</div><div class="text">入力</div></div>
                <div class="item"><div class="numberbox">2</div><div class="text">確認</div></div>
                <div class="item"><div class="numberbox">3</div><div class="text">完了</div></div>
            </div>
        </div>
        <ul class="p-contact__form-items">
            <!-- お名前 -->
            <li class="p-contact__form-item">
                <div class="p-contact__form-itemname"><label for="name" class="p-contact__form-mandatory">お名前</label></div>
                <div class="p-contact__form-iteminput">
                    <input type="text" name="your-name" class="p-contact__form-text c-form__border-normal" id="js_contact_name" aria-required="true" placeholder="例 ) 依頼 送郎" value="<?php echo $txt_name;?>" maxlength="20">
                </div>
                <span class="p-contact__form-required" id="req-name">必須項目です</span>
            </li>
            <!-- メールアドレス -->
            <li class="p-contact__form-item">
                <div class="p-contact__form-itemname"><label for="email" class="p-contact__form-mandatory">メールアドレス</label></div>
                <div class="p-contact__form-iteminput">
                    <input type="email" name="your-email" class="p-contact__form-text c-form__border-normal" id="js_contact_email" aria-required="true" aria-invalid="false" placeholder="例 ) mail@address.com" value="<?php echo $txt_email;?>" maxlength="40">
                    <span class="p-contact__form-required" id="req-email">必須項目です</span><span class="p-contact__form-required" id="req-email2">有効なメールアドレスを入力して下さい<br>例 ) nino-code@example.com</span>
                </div>
            </li>
            <!-- 件名があると良い-->
            <!-- お問い合わせ内容 -->
            <li class="p-contact__form-item">
                <div class="p-contact__form-itemname"><label for="message" class="p-contact__form-mandatory">お問い合わせ内容</label></div>
                <div class="p-contact__form-iteminput">
                    <textarea name="your-message" class="p-contact__form-textarea c-form__border-normal" id="js_contact_message" aria-required="true" aria-invalid="false" placeholder="例 ) ご質問やお問い合わせ内容をご記入ください。" maxlength="1000"><?php echo $txt_message;?></textarea>
                    <span class="p-contact__form-required" id="req-message">必須項目です</span>
                </div>
            </li>
            <li>
                <!-- 非表示セッショントークン -->
                <input type="hidden" name="csrf_token" value="<?php if( !empty($_SESSION['token']) ){ echo htmlspecialchars( $_SESSION['token'], ENT_COMPAT, 'UTF-8'); } ?>">
                <!--  非表示reCAPTCHAトークン-->
                <input type="hidden" name="grc_token" id="grc_token">
            </li>

            <li class="p-contact__form-check">
<!--           
                <label for="js_contact_check" class="p-contact__form-checkpplabel">
                    <input type="checkbox" name="your-check" class="wpcf7-checkbox" id="js_contact_check" value="1" aria-invalid="false">
                    <span class="c-form__check-icon"></span>
                </label>
                <div class="p-contact__form-checkpplink" id="js-mdlpp-open">プライバシーポリシー</div>
                <label for="js_contact_check" class="p-contact__form-checkpplabel">に同意して送信する</label>
                <input type="submit" name="your-submit"
                class="p-contact__form-submit c-button__arrow-right" id="js_contact_submit" value="確認画面へ" disabled="">

                <input type="submit" name="your-submit"
                class="c-button__portfolio c-button__portfolio--submit c-button__hover__goto p-button__submit g-recaptcha"
                id="js_contact_submit"
                data-sitekey="reCAPTCHA_site_key"
                value="確認画面へ" disabled="">

                <button type="submit" name="your-submit"
                class="c-button__portfolio c-button__portfolio--submit c-button__hover__goto p-button__submit g-recaptcha"
                id="js_contact_submit"
                data-sitekey="reCAPTCHA_site_key" data-callback="onSubmit" data-action="submit"
                disabled>確認画面へ</button>
-->
                <button type="submit" name="your-submit"
                class="c-button__portfolio c-button__portfolio--submit c-button__hover__goto p-button__submit g-recaptcha"
                id="js_contact_submit"
                data-sitekey="reCAPTCHA_site_key"
                disabled>確認画面へ</button>

            </li>
        </ul>
        <div class="p-contact__form-footer">
            <span class="p-contact__form-required-mes2" id="req-again">入力されていない必須項目があります。<br>確認してもう一度お試しください。</span>
            <div class="u-align__text-left u-margin__t20">
                <p>セキュリティのためreCAPTCHAを利用しています。</p>
                <p>Googleの
                <a class="c-link c-link--blue" href="https://policies.google.com/privacy" target ="_blank">プライバシーポリシー</a>
                と
                <a class="c-link c-link--blue" href="https://policies.google.com/terms" target ="_blank">利用規約</a>が適用されます。</p>
            </div>
        </div>
    </form>
    <?php // WP内では使用不可能タグとの事で外に書く ?>
<!--
    <iframe name="pfcf_hidden_iframe" style="display:none" srcdoc="送信完了(非表示)"></iframe>
    <div id="id-pfcf-form-success" class="p-contact__sendresult">
        お問い合わせ頂き<br>ありがとうございました！
    </div>
    <div id="id-pfcf-form-error" class="p-contact__sendresult -error">
        <p>送信失敗。<br>ページを更新して再度送信してください。</p>
    </div>
-->
  </div>
</section>
