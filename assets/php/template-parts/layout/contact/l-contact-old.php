<?php
    //  旧コンタクトフォーム
?>
<section class="l-contact u-padding_ud60 u-color-bg__main">
  <div class="l-contact__inner">
    <div class="c-title__modan c-title__bg__modan c-title__bg__modan--green">
      <div class="c-anchor__t-100" id="contact"></div>
      <span><b></b><i></i><u></u><p>CONTACT</p></span>
      <h2>お問い合わせ</h2>
    </div>
    <p class="c-lead"></p>
    <form id="id_note_contact" action="<?php echo esc_url(home_url('/'));?>contact-send-mail"
        method="post" novalidate="novalidate" data-status="init" target="pfcf_hidden_iframe">
        <div class="c-lead__hard u-margin__t40">
        コーディング代行、お見積り等、お気軽にご相談下さい！
        </div>
        <ul class="p-contact__form-items">
            <!-- お名前 -->
            <li class="p-contact__form-item">
                <div class="p-contact__form-itemname"><label for="name" class="p-contact__form-mandatory">お名前</label></div>
                <div class="p-contact__form-iteminput">
                    <input type="text" name="your-name" class="p-contact__form-text c-form__border-normal" id="js_contact_name" aria-required="true" placeholder="your name">
                </div>
                <span class="p-contact__form-required" id="req-name">必須項目です</span>
            </li>
            <!-- メールアドレス -->
            <li class="p-contact__form-item">
                <div class="p-contact__form-itemname"><label for="email" class="p-contact__form-mandatory">メールアドレス</label></div>
                <div class="p-contact__form-iteminput">
                    <input type="email" name="your-email" value="" class="p-contact__form-text c-form__border-normal" id="js_contact_email" aria-required="true" aria-invalid="false" placeholder="mail@address.com">
                    <span class="p-contact__form-required" id="req-email">必須項目です</span><span class="p-contact__form-required" id="req-email2">有効なメールアドレスを入力して下さい<br>例 ) nino-code@example.com</span>
                </div>
            </li>
            <!-- 件名があると良い-->
            <!-- お問い合わせ内容 -->
            <li class="p-contact__form-item">
                <div class="p-contact__form-itemname"><label for="message" class="p-contact__form-mandatory">お問い合わせ内容</label></div>
                <div class="p-contact__form-iteminput">
                    <textarea name="your-message" class="p-contact__form-textarea c-form__border-normal" id="js_contact_message" aria-required="true" aria-invalid="false" placeholder="例 ) ご質問やお問い合わせ内容をご記入ください。" onkeyup="functions.judge_cfi_message(this)"></textarea>
                    <span class="p-contact__form-required" id="req-message">必須項目です</span>
                </div>
            </li>
           
            <li class="p-contact__form-check">
                <label for="js_contact_check" class="p-contact__form-checkpplabel">
                    <input type="checkbox" name="your-check" class="wpcf7-checkbox" id="js_contact_check" value="1" aria-invalid="false">
                    <span class="c-form__check-icon"></span>
                </label>
                <div class="p-contact__form-checkpplink" id="js-mdlpp-open">プライバシーポリシー</div>
                <label for="js_contact_check" class="p-contact__form-checkpplabel">に同意して送信する</label>
                <input type="submit" name="your-submit" class="p-contact__form-submit c-button__arrow-right" id="js_contact_submit" value="送信" disabled="">
            </li>
        </ul>
        <div class="p-contact__form-footer">
            <span class="p-contact__form-required-mes2" id="req-again">入力されていない必須項目があります。<br>確認してもう一度お試しください。</span>
        </div>
    </form>
    <?php // WP内では使用不可能タグとの事で外に書く ?>
    <iframe name="pfcf_hidden_iframe" style="display:none" srcdoc="送信完了(非表示)"></iframe>
    <div id="id-pfcf-form-success" class="p-contact__sendresult">
        お問い合わせ頂き<br>ありがとうございました！
    </div>
    <div id="id-pfcf-form-error" class="p-contact__sendresult -error">
        <p>送信失敗。<br>ページを更新して再度送信してください。</p>
    </div>
  </div>
</section>
