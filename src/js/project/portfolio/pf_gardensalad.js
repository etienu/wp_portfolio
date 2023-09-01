//  HTML内でjqueryスコープの関数を使用する為の、関数格納配列
var functions = (jQuery);

jQuery(function($) {
    var disp_topicon_position;

    //--------------------------------------------------
    //      フォームのsubmit暴発対策 - Enter禁止
    //--------------------------------------------------
    function submitStop(e) {
        //        console.log("これ自体は機能してる3");
        if (!e) var e = window.event;
        if (e.keyCode == 13) {
            // 現在の要素からフォーカスを外す
            document.activeElement.blur();
            return false;
        }

    }
    //--------------------------------------------------
    //      ロード時の処理
    //--------------------------------------------------
    $(window).on('load', function() {
        //        this_element = $('footer').offset().top + jQuery('footer').outerHeight();
        disp_topicon_position = 300;
        //  トップに戻るアイコンを非表示に
        $('.top__footer-topicon-button').css("display", "none");
        //$('html').animate({ scrollTop: 0 }, 500);
        //  フォームEnter対策
        var list = document.getElementsByTagName("input");
        for (var i = 0; i < list.length; i++) {
            if (list[i].type == 'email' || list[i].type == 'password' || list[i].type == 'text' || list[i].type == 'number' || list[i].type == 'tel') {
                list[i].onkeypress = function(event) {
                    return submitStop(event);
                };
            }
        }
    });
    //--------------------------------------------------
    //      body / スクロールした時の処理
    //--------------------------------------------------
    $(window).scroll(function() {
        var scroll = $(this).scrollTop();
        //  一定以上スクロールした時の処理
        //  トップに戻るを消す
        if (scroll > disp_topicon_position) {
            $('.top__footer-topicon-button').fadeIn(300);
        } else {
            $('.top__footer-topicon-button').fadeOut(300);
        }
        var c_icon = $('.top__footer-topicon-button');
        var footer_pos = $(".top__footer").offset().top;
        var icon_pos = (scroll + $(this).innerHeight()) - footer_pos - 30;
        //console.log("[f_pos]" + footer_pos + "[scroll]" + scroll + " [innerH]" + $(this).innerHeight());
        //  フッター内
        if ($(this).innerHeight() + scroll > footer_pos) {
            c_icon.addClass("in_footer");
            //c_icon.css("bottom", icon_pos);
            //c_icon.css("top", "auto");
            c_icon.css("opacity", "1");
            //console.log("[CheckUA()]" + checkUA());

            //  フッターではない
        } else {
            c_icon.removeClass("in_footer");
            //            c_icon.css("bottom", "60px");
            //c_icon.css("top", "auto");
            c_icon.css("opacity", "0.6");
            switch (checkUA()) {
                case isSP:
                    //c_icon.css("bottom", icon_pos + 30);
                    break;
            }

        }
    });

    //============================================================
    //--------------------------------------------------
    //      download - 資料ダウンロードボタン
    //--------------------------------------------------
    //--------------------------------------------------
    //      submit押した処理
    //--------------------------------------------------
    //  メールアドレス正規表現(Regular expressions)
    const regex = /^[a-zA-Z0-9_+-]+(\.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
    const rx_tel = /^0\d{9,10}$/;
    const CFI_NONE = 0; // 入力が空
    const CFI_OK = 1; //  入力受付
    const CFI_WARNING = 2; //  入力内容に問題
    //--------------------------------------------------
    //      contact - 送信ボタン
    //--------------------------------------------------
    // サンクスページ移動
    $(".download__form-button").on('click', function(e) {
        //        console.log("$form.submitきてる");
        let ret = functions.dl_check_cfi_all(this);
        //  必要事項が入力されているので成功
        if (ret) {
            //  ページ移動
            location = 'thanks/';

        }
    });

    //--------------------------------------------------
    //      contact - 送信ボタンの有効/無効
    //--------------------------------------------------
    //  サブミットのON/OFF
    functions.dl_enableYourSubmit = function(i_flag) {
        let button = document.querySelector("input[name='dl-your-submit']");
        //  全てのフォーム入力が正常でない場合は有効にしない
        if (!functions.dl_check_cfi_all()) { i_flag = false }
        if (i_flag) {
            if (!button.classList.contains("wpcf7-submit"))
                button.classList.add("wpcf7-submit");
            button.disabled = false;

        } else {
            button.classList.remove("wpcf7-submit");
            button.disabled = true;
        }
        return i_flag; // button.disabled;
    };
    //--------------------------------------------------------
    //  change処理
    //--------------------------------
    //  お名前
    $('input[name="dl-your-name"]').change(function() {
        functions.dl_judge_cfi_name();
    });
    // カナ入力
    $('input[name="dl-your-kana"]').change(function() {
        functions.dl_judge_cfi_kana();
    });
    // メールアドレス
    $('input[name="dl-your-email"]').change(function() {
        functions.dl_judge_cfi_email();
    });
    //--------------------------------
    //  チェックボックス
    $('input[name="dl-your-check"]').change(function() {
        functions.dl_judge_cfi_checkbox();
    });
    //--------------------------------------------------------
    //  changeで使う関数 ContactFormInput
    //  お名前
    // 有効判定を返す
    functions.dl_check_cfi_name = function($this) {
        let inp = $("#js_download_name");
        // 空入力
        if (inp.val() === "") { return CFI_NONE; } else { return CFI_OK; }
    };
    // 有効判定を返し、状態によって警告処理
    functions.dl_judge_cfi_name = function($this) {
        let inp = $("#js_download_name");
        let req1 = $('#dl-req-name');
        inp.css('border', '1px solid red');
        req1.css('display', 'none');
        // 空入力
        if (inp.val() === "") {
            req1.css('display', 'block'); // 警告「必須項目です」
            return functions.dl_enableYourSubmit(false);
        } else {
            // なんらかの入力あり
            inp.css('border', '1px solid #DDDDDD');
            functions.dl_enableYourSubmit(true);
        }
        return true;
    };
    //--------------------------------
    // カナ入力
    // 有効判定を返す
    functions.dl_check_cfi_kana = function($this) {
        let inp = $("#js_download_kana");
        // 空入力
        if (inp.val() === "") { return CFI_NONE; } else {
            if (!!inp.val().match(/^[ァ-ヶー　]*$/)) { return CFI_OK; }
            return CFI_WARNING;
        }
    };
    // 有効判定を返し、状態によって警告処理
    functions.dl_judge_cfi_kana = function($this) {
        let inp = $("#js_download_kana");
        let req1 = $('#dl-req-kana');
        let req2 = $('#dl-req-kana2');
        inp.css('border', '1px solid red');
        req1.css('display', 'none');
        req2.css('display', 'none');
        // 空入力
        if (inp.val() === "") {
            flag = false;
            req1.css('display', 'block'); // 警告「必須項目です」
            return functions.dl_enableYourSubmit(false);
            // なんらかの入力あり
        } else {
            //  カタカナが入力されている
            if (!!inp.val().match(/^[ァ-ヶー　]*$/)) {
                inp.css('border', '1px solid #DDDDDD');
                functions.dl_enableYourSubmit(true);
                //  カタカナ以外が混じっている
            } else {
                req2.css('display', 'block'); //  警告「カタカナを入力して下さい」
                return functions.dl_enableYourSubmit(false);
            }
        }
        return true;
    };
    //--------------------------------
    // メール入力
    functions.dl_check_cfi_email = function($this) {
        let inp = $("#js_download_email");
        // 空入力
        if (inp.val() === "") { return CFI_NONE; } else {
            if (regex.test(inp.val())) { return CFI_OK; }
            return CFI_WARNING;
        }
    };
    // 有効判定を返し、状態によって警告処理
    functions.dl_judge_cfi_email = function($this) {
        let inp = $("#js_download_email");
        let req1 = $('#dl-req-email');
        let req2 = $('#dl-req-email2');
        inp.css('border', '1px solid red');
        req1.css('display', 'none');
        req2.css('display', 'none');
        // 空入力
        if (inp.val() === "") {
            req1.css('display', 'block'); // 警告「必須項目です」
            return functions.dl_enableYourSubmit(false);
            // なんらかの入力あり
        } else {
            //  有効そうなアドレスが入力されている
            if (regex.test(inp.val())) {
                //    console.log("[cfi_email] OK:" + inp.val());
                inp.css('border', '1px solid #DDDDDD');
                functions.dl_enableYourSubmit(true);
                //  無効な文字列
            } else {
                //    console.log("[cfi_email] NG:" + inp.val());
                req2.css('display', 'block'); //  警告「有効なアドレスを入力して下さい」
                return functions.dl_enableYourSubmit(false);
            }
        }
        return true;
    };
    //--------------------------------------------------------
    //  チェックボックス
    functions.dl_check_cfi_checkbox = function($this) {
        // チェックボックスだけ配列なのが気持ち悪いので
        // とりあえず関数にしといてよい方法を探しておく
        let inp = $("#js_download_check");
        //        console.log("[cfi_checkbox] :" + inp[0].checked);
        return inp[0].checked;
    }

    functions.dl_judge_cfi_checkbox = function($this) {
        let ret = functions.dl_check_cfi_checkbox();
        // チェックあり
        if (ret) {
            functions.dl_judge_cfi_all();
            functions.dl_enableYourSubmit(true);
            //なし
        } else {
            return functions.dl_enableYourSubmit(false);
        }
        return true;
    };

    //--------------------------------
    //  インプット全部チェック
    functions.dl_check_cfi_all = function($this) {
        let ret = true;
        if (functions.dl_check_cfi_name() !== CFI_OK) ret = false;
        if (functions.dl_check_cfi_kana() !== CFI_OK) ret = false;
        if (functions.dl_check_cfi_email() !== CFI_OK) ret = false;
        if (!functions.dl_check_cfi_checkbox()) ret = false;
        // 1個でも入力不足があればfalseを返す
        return ret;
    };

    //  インプット全部チェックと処理
    functions.dl_judge_cfi_all = function($this) {
        let ret = true;
        if (!functions.dl_judge_cfi_name()) ret = false;
        if (!functions.dl_judge_cfi_kana()) ret = false;
        if (!functions.dl_judge_cfi_email()) ret = false;

        // 1個でも入力不足があればfalseを返す
        return ret;
    };

    //============================================================
    //--------------------------------------------------
    //      contact - 送信ボタン
    //--------------------------------------------------
    // サンクスページ移動
    $(".contact__form-button").on('click', function(e) {
        //        console.log("$form.submitきてる");
        let ret = functions.check_cfi_all(this);
        //  必要事項が入力されているので成功
        if (ret) {
            //  ページ移動
            location = 'thanks/';

        }
    });

    //--------------------------------------------------
    //      contact - 送信ボタンの有効/無効
    //--------------------------------------------------
    //  サブミットのON/OFF
    functions.enableYourSubmit = function(i_flag) {
        let button = document.querySelector("input[name='your-submit']");
        //  全てのフォーム入力が正常でない場合は有効にしない
        if (!functions.check_cfi_all()) { i_flag = false }
        if (i_flag) {
            if (!button.classList.contains("wpcf7-submit"))
                button.classList.add("wpcf7-submit");
            button.disabled = false;

        } else {
            button.classList.remove("wpcf7-submit");
            button.disabled = true;
        }
        return i_flag; // button.disabled;
    };
    //--------------------------------------------------------
    //  change処理
    //--------------------------------
    //  お名前
    $('input[name="your-name"]').change(function() {
        functions.judge_cfi_name();
    });
    // メールアドレス
    $('input[name="your-email"]').change(function() {
        functions.judge_cfi_email();
    });
    // 問い合わせ内容のタイトル
    $('input[name="your-reqirements"]').change(function() {
        functions.judge_cfi_reqirements();
    });
    // 問い合わせ内容
    // テキストエリアはhtmlのタグにjｓを入れて判定する
    $('input[name="your-message"]').change(function() {
        functions.judge_cfi_message();
    });
    //--------------------------------
    //  チェックボックス
    $('input[name="your-check"]').change(function() {
        console.log("[input checkbox]" + this.id + " / " + this.checked);
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
        inp.css('border', '1px solid red');
        req1.css('display', 'none');
        // 空入力
        if (inp.val() === "") {
            req1.css('display', 'block'); // 警告「必須項目です」
            return functions.enableYourSubmit(false);
        } else {
            // なんらかの入力あり
            inp.css('border', '1px solid #2F2F2F');
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
        inp.css('border', '1px solid red');
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
                inp.css('border', '1px solid #2F2F2F');
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
        inp.css('border', '1px solid red');
        req1.css('display', 'none');
        // 空入力
        if (inp.val() === "") {
            req1.css('display', 'block'); // 警告「必須項目です」
            return functions.enableYourSubmit(false);
            // なんらかの入力あり
        } else {
            inp.css('border', '1px solid #2F2F2F');
            functions.enableYourSubmit(true);
        }
        return true;
    };
    //--------------------------------------------------------
    //  チェックボックス
    functions.check_cfi_checkbox = function($this) {
        // チェックボックスだけ配列なのが気持ち悪いので
        // とりあえず関数にしといてよい方法を探しておく
        let inp = $("#js_contact_check");
        return inp[0].checked;
    }

    functions.judge_cfi_checkbox = function($this) {
        //        let inp = $("#js_contact_check");
        //        inp.css('border', '1px solid red');
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
        if (!functions.check_cfi_checkbox()) ret = false;

        // 1個でも入力不足があればfalseを返す
        return ret;
    };

    //  インプット全部チェックと処理
    functions.judge_cfi_all = function($this) {
        let ret;
        ret = true;

        if (!functions.judge_cfi_name()) ret = false;
        if (!functions.judge_cfi_email()) ret = false;
        if (!functions.judge_cfi_message()) ret = false;

        // 1個でも入力不足があればfalseを返す
        return ret;
    };

    //  グローバルで使用したい為、変数配列に代入
    functions.check_contactforminput = function($this) {
        //必須項目が空かどうかフラグ
        let flag = true;
        //  今回はテキストの氏名とフリガナだけが必須なので他はなし
        //  指定は固有id振っとくのが無難
        //        let ret = $(this); //$(".contact-contents input[type = 'text']");
        let inp, req1;
        //  お名前
        inp = $("#js_contact_name");
        inp.css('border', '1px solid red');
        req1 = $('#req-name');
        if (inp.val() === "") {
            flag = false;
            req1.css('display', 'block');
        } else {
            inp.css('border', '1px solid #DDDDDD');
            req1.css('display', 'none');
        }

        if ($("#js_contact_check").prop('checked') === false) { flag = false; }
        //全て埋まっていたら
        if (flag) {} else {}
        return flag;

    };
    //--------------------------------------------------
    //      contact - inputフォーカスの検知
    //--------------------------------------------------
    //  フォーカスを得た時
    $('.contact-contents input').focus(function() {
        //        console.log("focusin > this:", this);
        let line = $(this).next(".contact-focusline");
        line.css("opacity", "1");
    });
    //  フォーカスを失った時
    $('.contact-contents input').blur(function() {
        //        console.log("focusout > this:", this);
        let line = $(this).next(".contact-focusline");
        line.css("opacity", "0");
    });

    //============================================================
    //  dlp_salad-header.php
    //============================================================
    //--------------------------------------------------
    //      contact - 送信ボタン
    //--------------------------------------------------
    // サンクスページ移動
    $(".gs__cf-submit").on('click', function(e) {
        //$('.wpcf7-form').removeAttr("action");
        //        console.log("$form.submitきてる");
        let ret = functions.check_cfi_all(this);
        //  必要事項が入力されているので成功
        if (ret) {
            //  ページ移動
            //            location = 'thanks/';
            //            console.log("location : thanks");

            //  送信に成功したときの処理
            //            $('.top__contact-content-form').slideUp();
            //            $('.top__contact-success').slideDown();

        }
    });
    var wpcf7Elm = document.querySelector('.wpcf7');
    document.addEventListener('wpcf7submit', function(event) {
        //        console.log("listenerきてないのか");
        alert("Fire!");
    }, false);
    document.addEventListener('wpcf7invalid', function(event) {
        console.log("invalid");
    }, false);
    document.addEventListener('wpcf7spam', function(event) {
        console.log("spam");
    }, false);
    document.addEventListener('wpcf7mailsent', function(event) {
        console.log("mailsent");
        location = 'thanks/';
    }, false);
    document.addEventListener('wpcf7mailfailed', function(event) {
        console.log("mailfaild");
    }, false);

    //--------------------------------------------------
    //      プライバシーポリシー : チェックボックス反応
    //--------------------------------------------------
    const cfpp_cpl = $(".contact__form-checkpplabel");
    const cci = $('.common-check-icon');
    //ラベルをクリックしたら
    cfpp_cpl.on('mousedown', function() {
        cci.addClass("common-check-icon-active");
    });
    cfpp_cpl.on('mouseup', function() {
        cci.removeClass("common-check-icon-active");
    });
    //ラベルをフォーカス
    cfpp_cpl.on('focus', function() {
        cci.addClass("common-check-icon-focus");
    });
    cfpp_cpl.on('blur', function() {
        cci.removeClass("common-check-icon-focus");
    });
    // ラベルに乗った
    cfpp_cpl.on('mouseenter', function() {
        cci.addClass("common-check-icon-hover");
    });
    //  ラベルから離れた
    cfpp_cpl.on('mouseleave', function() {
        cci.removeClass("common-check-icon-hover");
        cci.removeClass("common-check-icon-active");
        cci.removeClass("common-check-icon-focus");
    });
    //--------------------------------------------------
    //      モーダル - ポップアップ
    //--------------------------------------------------
    // ContactForm PrivacyPolicy
    const cfpp_modal = $("#js-cfpp-modal");
    const cfpp_overlay = $("#js-cfpp-overlay");
    const cfpp_close = $("#js-cfpp-close");
    const cfpp_open = $("#js-cfpp-open");
    var pointY;
    //--------------------------------------------------
    //      モーダルリンクをクリック
    //--------------------------------------------------
    cfpp_open.on('click', function() { //ボタンをクリックしたら
        //        console.log("モーダルクリック");
        var jsccn = $('input[name="your-check"]');
        jsccn.attr("disabled", true);

        cfpp_modal.addClass("cfpp__open"); // modalクラスにopenクラス付与
        cfpp_overlay.addClass("cfpp__open"); // overlayクラスにopenクラス付与
        //  スクロールバーを隠す前にバーの幅調べる
        const scrollBarWidth = window.innerWidth - document.body.clientWidth;
        //        console.log("[sbw]" + scrollBarWidth + " : (" + window.innerWidth + ") - (" + document.body.clientWidth + ")");
        $('body').css('padding-right', scrollBarWidth + 'px');
        $('.header').css('padding-right', scrollBarWidth + 'px');
        $('body').css('overflow-y', 'hidden'); // 本文の縦スクロールを無効
        /*
                pointY = $(window).scrollTop();
                $('body').css({
                    'position': 'fixed',
                    'width': '100%',
                    'top': -pointY
                });
                cfpp_modal.fadeIn(250);
        */
        //        jscc.addClass("wpcf7-form-control");
        jsccn.attr("disabled", false);
    });
    //×ボタンをクリックしたら
    cfpp_close.on('click', function() {
        functions.close_cfpp_modal();
    });
    //オーバーレイをクリックしたら
    cfpp_overlay.on('click', function() {
        functions.close_cfpp_modal();
    });
    functions.close_cfpp_modal = function($this) {
        //        console.log("モーダルクローズ");
        cfpp_modal.removeClass("cfpp__open"); // overlayクラスからopenクラスを外す
        cfpp_overlay.removeClass("cfpp__open"); // overlayクラスからopenクラスを外す
        $('body').css('overflow-y', 'auto'); // 本文の縦スクロールを有効
        //        $('body').css('width', '100%');
        $('body').css('padding-right', '0px');
        $('.header').css('padding-right', '0px');
        /*
            $('body').css({
                'position': 'relative',
                'width': '',
                'top': ''
            });
            $(window).scrollTop(pointY);
        */

    }

});