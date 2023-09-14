var functions = (jQuery);
jQuery(function($) {

    //  変数
    //  メールアドレス正規表現(Regular expressions)
    const regex = /^[a-zA-Z0-9_+-]+(\.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
    const rx_tel = /^0\d{9,10}$/;
    const CFI_NONE = 0; // 入力が空
    const CFI_OK = 1; //  入力受付
    const CFI_WARNING = 2; //  入力内容に問題
    //--------------------------------------------------
    //      contact - 送信ボタン
    //--------------------------------------------------
    //  IDから辿りフォームを取得
    $pfcf_form = $('#id_contact');
    //  CF7にターゲット追加してページ移動を阻止
    //    $pfcf_form.attr("target", "pfcf_hidden_iframe");
    $pfcf_form.submit(function(e) {
        let ret = functions.check_cfi_all(this);
        //  必要事項が入力されているので成功
        if (ret) {
            //top__contact-content
            //$('.top__contact-lead').addClass("hidden");
            //$('.top__contact-content').css("margin-bottom", "0px");
            /*
            //  スライドアップ系の演出にしたい場合
                $('.top__contact-lead').slideUp(); //「お問い合わせはこちらから」ごと消す
                //  SP版だと消えないなら、クラス付与で消させる
                $pfcf_form.slideUp();
                $('#id-pfcf-form-success').slideDown();

                //$('.top__contact').find("top__contactitem")[2].slideUp();
                $('.top__contactimg').slideUp();
            */

        }
    });


    //--------------------------------------------------
    //      contact - 送信ボタンの有効/無効
    //--------------------------------------------------
    //  サブミットのON/OFF
    functions.enableYourSubmit = function(i_flag) {
        let button = document.querySelector("input[name='your-submit']");
        if (button == null) {
            button = document.querySelector("button[name='your-submit']");
        }
        //  全てのフォーム入力が正常でない場合は有効にしない
        if (!functions.check_cfi_all()) { i_flag = false }
        if (i_flag) {
            //if (!button.classList.contains("wpcf7-submit"))
            //   button.classList.add("wpcf7-submit");
            button.disabled = false;

        } else {
            //button.classList.remove("wpcf7-submit");
            button.disabled = true;
        }
        return i_flag; // button.disabled;
    };

    //--------------------------------------------------------
    //  クリック処理
    //--------------------------------
    //const mdlpp_open = $('.contact__mdlpp');
    /*    
        //  プライバシーポリシー
        $('.contact__form-checkpplink').on('click', function() {
            //  モーダルでプライバシーポリシーを開く
            functions.open_pp_modal();
        });
        functions.open_pp_modal = function($this) {
            $mdlpp.css('display','flex');
        }
        functions.close_pp_modal = function($this) {
            $mdlpp.css('display','none');
        }

        $('.contact__mdlpp-close').on('click', function() {
            //  モーダルでプライバシーポリシーを閉じる
            functions.open_pp_modal();
        });

    */
    //--------------------------------------------------
    //  「に同意して送信」と連動するチェックボックス反応
    //--------------------------------------------------
    const pp_cpl = $(".p-contact__form-checkpplabel");
    const cci = $('.p-common-check-icon');
    // ラベルに乗った
    pp_cpl.on('mouseenter', function() {
        cci.addClass("hover");
    });
    //  ラベルから離れた
    pp_cpl.on('mouseleave', function() {
        cci.removeClass("hover");
    });
    // 疑似チェックボックスに乗った
    cci.on('mouseenter', function() {
        pp_cpl.addClass("hover");
        cci.addClass("hover");
    });
    // 疑似チェックボックスから離れた
    cci.on('mouseleave', function() {
        pp_cpl.removeClass("hover");
        cci.removeClass("hover");
    });

    //--------------------------------------------------
    //      モーダル - ポップアップ
    //--------------------------------------------------
    // ContactForm PrivacyPolicy
    //    const mdlpp_open = $('.contact__mdlpp');
    const mdlpp = $("#js-mdlpp");
    const mdlpp_overlay = $("#js-mdlpp-overlay");
    const mdlpp_close = $("#js-mdlpp-close");
    const mdlpp_open = $("#js-mdlpp-open");
    var pointY;
    //--------------------------------------------------
    //      モーダルリンクをクリック
    //--------------------------------------------------
    mdlpp_open.on('click', function() { //ボタンをクリックしたら
        //        console.log("モーダルクリック");
        var jsccn = $('input[name="your-check"]');
        jsccn.attr("disabled", true);

        mdlpp.addClass("p-mdlpp__open"); // modalクラスにopenクラス付与
        mdlpp_overlay.addClass("p-mdlpp__open"); // overlayクラスにopenクラス付与
        //  スクロールバーを隠す前にバーの幅調べる
        const scrollBarWidth = window.innerWidth - document.body.clientWidth;
        //        console.log("[sbw]" + scrollBarWidth + " : (" + window.innerWidth + ") - (" + document.body.clientWidth + ")");
        $('body').css('padding-right', scrollBarWidth + 'px');
        $('.header').css('padding-right', scrollBarWidth + 'px');
        $('body').css('overflow-y', 'hidden'); // 本文の縦スクロールを無効
        jsccn.attr("disabled", false);
    });
    //×ボタンをクリックしたら
    mdlpp_close.on('click', function() {
        functions.close_modalpp();
    });
    //オーバーレイをクリックしたら
    mdlpp_overlay.on('click', function() {
        functions.close_modalpp();
    });
    functions.close_modalpp = function($this) {
        //        console.log("モーダルクローズ");
        mdlpp.removeClass("p-mdlpp__open"); // overlayクラスからopenクラスを外す
        mdlpp_overlay.removeClass("p-mdlpp__open"); // overlayクラスからopenクラスを外す
        $('body').css('overflow-y', 'auto'); // 本文の縦スクロールを有効
        $('body').css('padding-right', '0px');
        $('.header').css('padding-right', '0px');
    }



    //--------------------------------------------------------
    //  change処理  ContactFormInput
    //--------------------------------
    //  お名前
    $('input[name="your-name"]').change(function() {
        functions.judge_cfi_name();
    });
    // メールアドレス
    $('input[name="your-email"]').change(function() {
        functions.judge_cfi_email();
    });
    // 問い合わせ内容
    // テキストエリアはhtmlのタグにjｓを入れて判定する
    $('input[name="your-message"]').change(function() {
        functions.judge_cfi_message();
    });
    //--------------------------------
    //  チェックボックス
    $('input[name="your-check"]').change(function() {
        //console.log("[input checkbox]" + this.id + " / " + this.checked);
        functions.judge_cfi_checkbox();
    });
    //--------------------------------------------------------
    //  changeで使う関数 ContactFormInput
    //  お名前
    // 有効判定を返す
    functions.check_cfi_name = function($this) {
        let inp = $("#js_contact_name");
        // 空入力
        if (inp.val() === "") { return CFI_NONE; } else { return CFI_OK; }
    };
    // 有効判定を返し、状態によって警告処理
    functions.judge_cfi_name = function($this) {
        let inp = $("#js_contact_name");
        let req1 = $('#req-name');
        //        inp.css('border', '1px solid red');
        inp.addClass("c-form__border-required");
        inp.removeClass("c-form__border-normal");
        req1.css('display', 'none');
        // 空入力
        if (inp.val() === "") {
            req1.css('display', 'block'); // 警告「必須項目です」
            return functions.enableYourSubmit(false);
        } else {
            // なんらかの入力あり
            //            inp.css('border', '1px solid #2F2F2F');
            inp.addClass("c-form__border-normal");
            inp.removeClass("c-form__border-required");
            functions.enableYourSubmit(true);
        }
        return true;
    };
    //--------------------------------
    // メール入力
    functions.check_cfi_email = function($this) {
        let inp = $("#js_contact_email");
        // 空入力
        if (inp.val() === "") { return CFI_NONE; } else {
            if (regex.test(inp.val())) { return CFI_OK; }
            return CFI_WARNING;
        }
    };
    // 有効判定を返し、状態によって警告処理
    functions.judge_cfi_email = function($this) {
        let inp = $("#js_contact_email");
        let req1 = $('#req-email');
        let req2 = $('#req-email2');
        //        inp.css('border', '1px solid red');
        inp.addClass("c-form__border-required");
        inp.removeClass("c-form__border-normal");
        req1.css('display', 'none');
        req2.css('display', 'none');
        // 空入力
        if (inp.val() === "") {
            req1.css('display', 'block'); // 警告「必須項目です」
            return functions.enableYourSubmit(false);
            // なんらかの入力あり
        } else {
            //  有効そうなアドレスが入力されている
            if (regex.test(inp.val())) {
                //    console.log("[cfi_email] OK:" + inp.val());
                inp.addClass("c-form__border-normal");
                inp.removeClass("c-form__border-required");
                //                inp.css('border', '1px solid #2F2F2F');
                functions.enableYourSubmit(true);
                //  無効な文字列
            } else {
                //    console.log("[cfi_email] NG:" + inp.val());
                req2.css('display', 'block'); //  警告「有効なアドレスを入力して下さい」
                return functions.enableYourSubmit(false);

            }
        }
        return true;
    };
    //--------------------------------------------------------
    //  お問い合わせ内容
    functions.check_cfi_message = function($this) {
        let inp = $("#js_contact_message");
        // 空入力
        if (inp.val() === "") { return CFI_NONE; } else { return CFI_OK; }
    };
    // 有効判定を返し、状態によって警告処理
    functions.judge_cfi_message = function($this) {
        let inp = $("#js_contact_message");
        let req1 = $('#req-message');
        inp.addClass("c-form__border-required");
        inp.removeClass("c-form__border-normal");
        //        inp.css('border', '1px solid red');
        req1.css('display', 'none');
        // 空入力
        if (inp.val() === "") {
            req1.css('display', 'block'); // 警告「必須項目です」
            return functions.enableYourSubmit(false);
            // なんらかの入力あり
        } else {
            inp.addClass("c-form__border-normal");
            inp.removeClass("c-form__border-required");
            //            inp.css('border', '1px solid #2F2F2F');
            functions.enableYourSubmit(true);
        }
        return true;
    };
    //--------------------------------------------------------
    //  チェックボックス
    functions.check_cfi_checkbox = function($this) {
        // チェックボックスだけ配列なので注意
        let inp = $("#js_contact_check");
        return inp[0].checked;
    }

    functions.judge_cfi_checkbox = function($this) {
        let inp = $("#js_contact_check");
        inp.css('border', '1px solid red');
        let ret = functions.check_cfi_checkbox();
        // チェックあり
        if (ret) {
            //            inp.css('border', '1px solid #DDDDDD');
            functions.judge_cfi_all();
            functions.enableYourSubmit(true);
            //なし
        } else {
            return functions.enableYourSubmit(false);

        }
        return true;
    };
    //--------------------------------
    //  インプット全部チェック
    functions.check_cfi_all = function($this) {
        let ret = true;
        if (functions.check_cfi_name() !== CFI_OK) ret = false;
        if (functions.check_cfi_email() !== CFI_OK) ret = false;
        if (functions.check_cfi_message() !== CFI_OK) ret = false;
        //if (!functions.check_cfi_checkbox()) ret = false;
        return ret;
    };

    //  インプット全部チェックと処理
    functions.judge_cfi_all = function($this) {
        let ret = true;
        if (!functions.judge_cfi_name()) ret = false;
        if (!functions.judge_cfi_email()) ret = false;
        if (!functions.judge_cfi_message()) ret = false;

        return ret;
    };

});



//--------------------------------------------------
//      google reCAPTCHA
//--------------------------------------------------
//reCAPTCHA認証APIを実行して返ってきたトークンをフォームに設置する関数
function grc_sendFormData(e) {
    //元のsubmitをいったんキャンセル
    e.preventDefault();
    //console.log("[key]" + reCAPTCHA_site_key);
    //  recaptcha実行 actionは任意の文字指定(管理画面で反映される)
    grecaptcha.ready(function() {
        //  recaptcha実行 actionは任意の文字指定(管理画面で反映される)
        grecaptcha.execute(reCAPTCHA_site_key, { action: 'submit' })
            .then(function(token) {
                //  Add your logic to submit to your backend server here.
                //console.log('grecaptcha.execute token=' + token);
                //   recaptcha認証後のトークンをフォームで送信するために設定
                document.getElementById('grc_token').value = token;
                //console.log('フォームデータを送信');
                document.getElementById("id_contact").submit();
            })
            .catch(function(e) {
                console.error(e);
                alert('reCAPTCHAでのエラーが発生したためフォームデータを送信できません');
                return false;
            });
    });
}

//上で作成した関数をフォームデータ送信時に実行されるように設定
var form_id_contact = document.getElementById("id_contact");
if (form_id_contact) {
    form_id_contact.addEventListener('submit', grc_sendFormData);
}

//--------------------------------------------------
//      ページ読み込み時の処理
//--------------------------------------------------
jQuery(window).on('load', function() {
    //    console.log("contact読んではいるはず");

    //      フォームのsubmit暴発対策 - Enter禁止
    function submitStop(e) {
        if (!e) var e = window.event;
        if (e.keyCode == 13) {
            // 現在の要素からフォーカスを外す
            document.activeElement.blur();
            return false;
        }
    }

    //  フォームEnter対策
    var list = document.getElementsByTagName("input");
    //console.log(list.length);
    for (var i = 0; i < list.length; i++) {
        if (list[i].type == 'email' || list[i].type == 'password' || list[i].type == 'text' || list[i].type == 'number' || list[i].type == 'tel') {
            //console.log(list[i]);
            list[i].addEventListener("keydown", event => {
                //console.log(event);
                return submitStop(event);
            });
        }
    }
    //$('.wpcf7').removeAttr("id");
    //$('.wpcf7-form').removeAttr("action");
    //        $('.wpcf7-form').removeAttr("method");
    //        $('.wpcf7-form-control').attr("type", "button");
});