jQuery(function($) {
    var functions = (jQuery);
    const pfjs_hum = $("#js_pf-js-humburger"); //  ポートフォリオのアイテム
    const pfm_overlay = $("#js-pfm-overlay"); //  モーダル背景
    const pfm_close = $("#js-pfm-close");
    const pfm_humb = $("#js-pfm-humb"); //  モーダル : ハンバーガー
    //    const cci = $('.common-check-icon');
    const pfmh_frame = $(".pfm__humb-frame");
    const pfmh_hicon = $("#js-pfm__h-icon");
    const pfmh_harea = $(".pfm__humb-h-area");
    const pfmh_hareai = $(".pfm__humb-h-areaitem");
    const pfmh_ficon = $("#js-pfm__f-icon"); //$(".pfm__humb-f-icon");
    const pfmh_ficoni = $(".pfm__humb-f-iconinner");
    const pfmh_farea = $(".pfm__humb-f-area");
    const pfmh_sicon = $("#js-pfm__s-icon"); //$(".pfm__humb-s-icon");
    const pfmh_sarea = $(".pfm__humb-s-area");

    //  えちえぬパララックス
    const eepl_bg = new eeParallax(".top__pfi-pl-img", 0.5);
    eepl_bg.setScale(2);
    eepl_bg.setAdjust(0, -150, 0);
    const eepl_yoyo = new eeParallax(".top__pfi-pl-yoyo", -0.05);
    eepl_yoyo.setAdjust(50, 0, 0);
    eePEngine.add(eepl_bg);
    eePEngine.add(eepl_yoyo);


    //  wow
    new WOW().init();

    //  MVのパーティク設定
    Particles.init({
        // normal options
        selector: '.c-mvp__background',
        maxParticles: 1000,
        sizeVariations: 10,
        color: ['rgba(144,238,144,.8)', 'rgba(144,238,144,.5)', 'rgba(144,238,144,.2)']
    });

    functions.pfm_hide_scrollbar = function($this) {
        //  スクロールバーを隠す前にバーの幅調べる
        const scrollBarWidth = window.innerWidth - document.body.clientWidth;
        $('body').css('padding-right', scrollBarWidth + 'px');
        $('.header').css('padding-right', scrollBarWidth + 'px');
        $('body').css('overflow-y', 'hidden'); // 本文の縦スクロールを無効
    }
    functions.pfm_disp_scrollbar = function($this) {
        $('body').css('overflow-y', 'auto'); // 本文の縦スクロールを有効
        $('body').css('padding-right', '0px');
        $('.header').css('padding-right', '0px');
    }

    //--------------------------------------------------
    //      ポートフォリオ(javascript) : モーダル / ハンバーガー
    //--------------------------------------------------
    pfjs_hum.on('click', function() {
        pfm_humb.addClass("pfm__open"); // modalクラスにopenクラス付与
        pfm_overlay.addClass("pfm__open"); // overlayクラスにopenクラス付与
        functions.pfm_hide_scrollbar();
    });

    //×ボタンをクリックしたら
    pfm_close.on('click', function() {
        functions.close_pfm_modal();
    });
    //オーバーレイをクリックしたら
    pfm_overlay.on('click', function() {
        functions.close_pfm_modal();
    });
    functions.close_pfm_modal = function($this) {
        //            console.log("モーダルクローズ");
        pfm_humb.removeClass("pfm__open"); // overlayクラスからopenクラスを外す
        pfm_overlay.removeClass("pfm__open"); // overlayクラスからopenクラスを外す
        functions.pfm_disp_scrollbar();
        //  各アイテム閉じる
        functions.close_pfmh_humb();
        functions.close_pfmh_face();
        functions.close_pfmh_side();
    }

    //- - - - - - - - - - - - - - - - - - - - -
    //  ハンバーガー内のメニューを開いた状態で枠から外れた場合
    /*
    $("body").mouseover(function() {
        //pfmh_frame.mouseout(function() {
        //            pfmh_frame.mouseout(function() {
        functions.close_pfmh_humb();
        functions.close_pfmh_face();
        functions.close_pfmh_side();
    });
    */
    //- - - - - - - - - - - - - - - - - - - - -
    //  ハンバーガー / ハンバーガーアイコン
    //- - - - - - - - - - - - - - - - - - - - -
    //ハンバーガーアイコンをクリックしたら
    pfmh_hicon.on('click', function() {
        //console.log("ハンバーガークリック");
        if (pfmh_hicon.hasClass("pfm__open")) { //  開いてるなら閉じる
            functions.close_pfmh_humb();
            $(".pfm__humb-f-yoyo-n").removeClass("side"); //  yoyo
            $(".pfm__humb-f-yoyo-s").removeClass("side"); //  yoyo
        } else { //  閉じてるなら開く
            functions.open_pfmh_humb();
            functions.close_pfmh_face();
            functions.close_pfmh_side();
            functions.pause_pfmh_face();
            functions.pause_pfmh_side();
        }
    });
    functions.open_pfmh_humb = function($this) {
        pfmh_harea.addClass("pfm__open"); // overlayクラスからopenクラスを外す
        pfmh_hicon.addClass("pfm__open");
        $(".pfm__humb-f-yoyo-n").addClass("side"); //  yoyo
        $(".pfm__humb-f-yoyo-s").addClass("side"); //  yoyo
    }

    //  ハンバーガーメニューを閉じる
    functions.close_pfmh_humb = function($this) {
        pfmh_harea.removeClass("pfm__open");
        pfmh_hicon.removeClass("pfm__open");
        functions.active_pfmh_humb();
        functions.active_pfmh_face();
        functions.active_pfmh_side();
    }

    //  無効化
    functions.pause_pfmh_humb = function($this) {
            pfmh_harea.addClass("pfm__pause");
            pfmh_hicon.addClass("pfm__pause");
        }
        //  有効化
    functions.active_pfmh_humb = function($this) {
            pfmh_harea.removeClass("pfm__pause");
            pfmh_hicon.removeClass("pfm__pause");
        }
        //  ハンバーガー内リンクをクリックしたら
    pfmh_hareai.on('click', function() {
        //  閉じる
        functions.close_pfmh_humb();
        $(".pfm__humb-f-yoyo-n").removeClass("side"); //  yoyo
        $(".pfm__humb-f-yoyo-s").removeClass("side"); //  yoyo
    });
    //- - - - - - - - - - - - - - - - - - - - -
    //  ハンバーガー / フェイスアイコン
    //- - - - - - - - - - - - - - - - - - - - -
    var f_faceAnimeState = false;
    //フェイスアイコンをクリックしたら
    pfmh_ficon.on('click', function() {
        //  console.log("フェイスクリック");
        //  アニメーションしてないなら実行
        if (!f_faceAnimeState) {
            f_faceAnimeState = true; // アニメーション中フラグ立てる
            if (pfmh_ficon.hasClass("pfm__open")) { //  開いてるなら閉じる
                functions.close_pfmh_face();
            } else { //  閉じてるなら開く
                functions.open_pfmh_face();
                functions.close_pfmh_humb();
                functions.close_pfmh_side();
                functions.pause_pfmh_humb();
                functions.pause_pfmh_side();
            }
        }
    });

    //  アニメーションが終わったらフラグを下げる
    pfmh_farea.on('transitionend', function() {
        f_faceAnimeState = false;
    });

    //  フェイスメニューを表示
    functions.open_pfmh_face = function($this) {
        pfmh_farea.addClass("pfm__open");
        pfmh_ficon.addClass("pfm__open");
        pfmh_ficoni.addClass("pfm__open");
    }

    //  フェイスメニューを閉じる
    functions.close_pfmh_face = function($this) {
        pfmh_farea.removeClass("pfm__open");
        pfmh_ficon.removeClass("pfm__open");
        pfmh_ficoni.removeClass("pfm__open");
        functions.active_pfmh_humb();
        functions.active_pfmh_face();
        functions.active_pfmh_side();
    }

    //  フェイスメニューを無効化
    functions.pause_pfmh_face = function($this) {
        pfmh_farea.addClass("pfm__pause");
        pfmh_ficon.addClass("pfm__pause");
        pfmh_ficoni.addClass("pfm__pause");
    }

    //  フェイスメニューを有効化
    functions.active_pfmh_face = function($this) {
        pfmh_farea.removeClass("pfm__pause");
        pfmh_ficon.removeClass("pfm__pause");
        pfmh_ficoni.removeClass("pfm__pause");
    }

    //フェイスメニューアイコンにホバー
    $(".pfm__humb-f-arealine-t-icon").on('mouseenter', function() {
        $(".pfm__humb-f-arealine-t").addClass("ihover");
    });
    $(".pfm__humb-f-arealine-r-icon").on('mouseenter', function() {
        $(".pfm__humb-f-arealine-r").addClass("ihover");
    });
    $(".pfm__humb-f-arealine-b-icon").on('mouseenter', function() {
        $(".pfm__humb-f-arealine-b").addClass("ihover");
    });
    $(".pfm__humb-f-arealine-l-icon").on('mouseenter', function() {
        $(".pfm__humb-f-arealine-l").addClass("ihover");
    });
    //フェイスメニューアイコンから離れる
    $(".pfm__humb-f-arealine-t-icon").on('mouseleave', function() {
        $(".pfm__humb-f-arealine-t").removeClass("ihover");
    });
    $(".pfm__humb-f-arealine-r-icon").on('mouseleave', function() {
        $(".pfm__humb-f-arealine-r").removeClass("ihover");
    });
    $(".pfm__humb-f-arealine-b-icon").on('mouseleave', function() {
        $(".pfm__humb-f-arealine-b").removeClass("ihover");
    });
    $(".pfm__humb-f-arealine-l-icon").on('mouseleave', function() {
        $(".pfm__humb-f-arealine-l").removeClass("ihover");
    });
    //フェイスメニューアイコンをクリック
    $(".pfm__humb-f-arealine-t-icon").on('click', function() {
        $(".pfm__humb-f-arealine-t").removeClass("ihover");
        functions.disp_pfmh_face_yoyostamp("/img/pfm/emote01.png");
    });
    $(".pfm__humb-f-arealine-r-icon").on('click', function() {
        $(".pfm__humb-f-arealine-r").removeClass("ihover");
        functions.disp_pfmh_face_yoyostamp("/img/pfm/emote02.png");
    });
    $(".pfm__humb-f-arealine-b-icon").on('click', function() {
        $(".pfm__humb-f-arealine-b").removeClass("ihover");
        functions.disp_pfmh_face_yoyostamp("/img/pfm/emote03.png");
    });
    $(".pfm__humb-f-arealine-l-icon").on('click', function() {
        $(".pfm__humb-f-arealine-l").removeClass("ihover");
        functions.disp_pfmh_face_yoyostamp("/img/pfm/emote04.png");
    });
    //  フェイスメニュー、ヨヨスタンプ
    functions.disp_pfmh_face_yoyostamp = function(i_fname) {
        //console.log("yoyostamp : ", i_fname);
        $(".pfm__humb-f-yoyo-n").addClass("hidden");
        $(".pfm__humb-f-yoyo-s").removeClass("hidden");
        $(".pfm__humb-f-yoyo-s").find("img").attr("src", wppath + i_fname);
    }

    //- - - - - - - - - - - - - - - - - - - - -
    //  ハンバーガー / サイドアイコン
    //- - - - - - - - - - - - - - - - - - - - -
    //サイドアイコンをクリックしたら
    pfmh_sicon.on('click', function() {
        //console.log("サイドクリック");
        if (pfmh_sicon.hasClass("pfm__open")) { //  開いてるなら閉じる
            functions.close_pfmh_side();
            $(".pfm__humb-f-yoyo-n").removeClass("side"); //  yoyo
            $(".pfm__humb-f-yoyo-s").removeClass("side"); //  yoyo
        } else { //  閉じてるなら開く
            functions.open_pfmh_side();
            functions.close_pfmh_humb();
            functions.close_pfmh_face();
            functions.pause_pfmh_humb();
            functions.pause_pfmh_face();
        }
    });
    //  サイドメニューを表示
    functions.open_pfmh_side = function($this) {
        pfmh_sarea.addClass("pfm__open");
        pfmh_sicon.addClass("pfm__open");
        $(".pfm__humb-f-yoyo-n").addClass("side"); //  yoyo
        $(".pfm__humb-f-yoyo-s").addClass("side"); //  yoyo
    }

    //  サイドメニューを閉じる
    functions.close_pfmh_side = function($this) {
        pfmh_sarea.removeClass("pfm__open");
        pfmh_sicon.removeClass("pfm__open");
        functions.active_pfmh_humb();
        functions.active_pfmh_face();
        functions.active_pfmh_side();
    }

    //  無効化
    functions.pause_pfmh_side = function($this) {
        pfmh_sarea.addClass("pfm__pause");
        pfmh_sicon.addClass("pfm__pause");
    }

    //  有効化
    functions.active_pfmh_side = function($this) {
        pfmh_sarea.removeClass("pfm__pause");
        pfmh_sicon.removeClass("pfm__pause");
    }

    //--------------------------------------------------
    //      Q & A ボタンをクリック
    //--------------------------------------------------
    $(".pfm__accord-itemQ").on('click', function(e) {
        e.preventDefault();

        let item = $(this).closest(".pfm__accord-item");
        let itemQ = item.find(".pfm__accord-itemQ");
        let itemA = item.find(".pfm__accord-itemA");
        let itemAinner = item.find(".pfm__accord-itemAinner");
        //        console.log("this:", this);
        //        console.log("item:", item);
        //        console.log("itemA:", itemA);
        //  今回のQ&Aは、狭い場所で、始まりが幅狭く、広がる時に縦と左右に広がるという
        //  演出が一層難解にさせている。更に縦に広がってスクロールバーが付くと
        //  幅が変わってしまうのでこれも処理に悪影響を及ぼす一。
        //  openがついてない場合開く処理
        if (!itemAinner.hasClass('pfm__accord-open')) {
            itemA.width("100%"); // 一度幅を100%に戻す
            itemA.height("auto"); // 幅を直した状態で、高さをautoにする
            let aih = itemA.outerHeight(); //  auto状態の子の高さを取得
            itemA.height(0); //  auto → 0に戻して何もなかった
            //itemA.width("100%");
            itemA.width("calc(100% - 40px)"); // 幅を初期に戻す
            //console.log("[open-aih]" + aih);
            itemA.height(aih); //  auto状態の子の高さを親に設定
            itemA.width("calc(100%)"); // 幅を最大にする
            //  openクラスを付与
            itemQ.addClass('pfm__accord-open');
            itemA.addClass('pfm__accord-open');
            itemAinner.addClass('pfm__accord-open');
            //  transitionと同じ時間(0.3s)待って状態を修正
            setTimeout(function() {
                //itemA.height("auto");
            }, 500);
            //  openがついている時、閉じる処理
        } else {
            let aih = itemAinner.outerHeight();
            //            console.log("[close-aih]" + aih);
            //            itemA.height(aih);
            itemA.width("calc(100% - 40px)");
            //  openクラスを剥奪
            itemQ.removeClass('pfm__accord-open');
            itemA.removeClass('pfm__accord-open');
            itemAinner.removeClass('pfm__accord-open');
            itemA.height(-4); //  よくわからないが0だと4残るので-4
            setTimeout(function() {
                // 高さ0で消えた後に幅を100%に戻して、正しい高さを再取得可能にしておく
                itemA.width("100%");
                //            itemAinner.toggleClass('pfm__accord-open');
            }, 300)
        }

        //        itemA.slideToggle();
        return false;
    });

    //--------------------------------------------------
    //      モーダルアイテムをクリック
    //--------------------------------------------------
    const pfmm_mdl = $(".pfmm__mdl");
    const pfmm_overlay = $(".pfmm__overlay");
    const pfmm_close = $(".pfmm__close");
    const pfmm_left = $(".pfmm__left");
    const pfmm_right = $(".pfmm__right");
    let pfmm_nowitem = null;
    let pfmm_nowitemgroup = null;
    $(".pfm__modal-item").on('click', function(e) {
        e.preventDefault();
        pfmm_nowitem = $(this);
        let itemg = $(this).closest(".pfm__modal-group");
        pfmm_nowitemgroup = itemg;

        let items = itemg.find(".pfm__modal-item");
        //  モーダルを開く
        $(this).addClass("pfm__open"); // openクラス付与
        pfmm_overlay.addClass("pfm__open"); // overlayクラスにopenクラス付与
        pfmm_mdl.addClass("pfm__open"); // openクラス付与
        //  モーダルのコンテンツ
        let con = pfmm_mdl.find(".pfmm__content");
        let coni = con.find(".pfmm__content-inner");
        //  モーダルサイズを初期化
        coni.html("");
        pfmm_mdl.width(0);
        pfmm_mdl.height(0);
        functions.disp_pfmm_sidebutton(pfmm_nowitem);
        //  画像の読み込み
        functions.load_pfmm_image(pfmm_nowitem);
        functions.pfm_hide_scrollbar();
        return false;
    });

    functions.close_pfmm_modal = function($this) {
        pfmm_mdl.removeClass("pfm__open");
        pfmm_overlay.removeClass("pfm__open"); // overlayクラスからopenクラスを外す
        functions.pfm_disp_scrollbar();
    }

    //×ボタンをクリックしたら
    pfmm_close.on('click', function() {
        functions.close_pfmm_modal();
    });
    //オーバーレイをクリックしたら
    pfmm_overlay.on('click', function() {
        functions.close_pfmm_modal();
    });
    //←ボタンをクリックしたら
    pfmm_left.on('click', function() {
        if (!pfmm_nowitem) return;
        //  一つ前のアイテムを探す
        let prev = pfmm_nowitem.prev(".pfm__modal-item");
        console.log("[prev]", prev);
        if (0 < prev.length) {
            pfmm_nowitem = prev;
            functions.load_pfmm_image(pfmm_nowitem);
            functions.disp_pfmm_sidebutton(pfmm_nowitem);
        }
    });
    //→ボタンをクリックしたら
    pfmm_right.on('click', function() {
        if (!pfmm_nowitem) return;
        //  一つ前のアイテムを探す
        let next = pfmm_nowitem.next(".pfm__modal-item");
        //console.log("[next]", next);
        if (0 < next.length) {
            pfmm_nowitem = next;
            functions.load_pfmm_image(pfmm_nowitem);
            functions.disp_pfmm_sidebutton(pfmm_nowitem);
        }
    });
    //アイテム番号がグールプ内の位置によってサイドボタンの表示・非表示
    functions.disp_pfmm_sidebutton = function(i_item) {
            let itemg = i_item.closest(".pfm__modal-group");
            let items = itemg.find(".pfm__modal-item");
            let now = items.index(i_item);
            //  グループ内の番号を取得する
            //        console.log("アイテムの数:"+items.length+" [NOW]"+now);
            pfmm_left.css("display", "flex"); //  ←ボタン表示
            pfmm_right.css("display", "flex"); //  →ボタン表示
            //最初のアイテムなら ← 消す
            if (now == 0) { pfmm_left.css("display", "none"); }
            //最後のアイテムなら → 消す
            if (items.length <= (now + 1)) { pfmm_right.css("display", "none"); }
        }
        //アイテム番号を変えて再読み込みする
    functions.load_pfmm_image = function(i_item) {
            //  グループとアイテム
            let itemg = i_item.closest(".pfm__modal-group");
            let items = itemg.find(".pfm__modal-item");
            //  モーダルのコンテンツ
            let con = pfmm_mdl.find(".pfmm__content");
            let coni = con.find(".pfmm__content-inner");
            //  モーダルに画像データを渡す。このタグのimgを取得
            let t_img = i_item.find("img");
            let imgName = t_img.attr('src');
            //  画像の実際の幅高さ取得
            let img = new Image();
            let iw = 0; //t_img.width();
            let ih = 0; //t_img.height();
            img.src = imgName;
            //  画像取得完了したら処理
            const promise = new Promise((resolve) => {
                img.onload = () => { resolve(img); }
            }).then((i_val) => {
                iw = img.width;
                ih = img.height;
                // ブラウザ高さを取得
                var windowHeight = document.documentElement.clientHeight;
                var windowWidth = document.documentElement.clientWidth;
                windowHeight = windowHeight / 2; // 画面の半分を限界とする場合
                windowWidth = windowWidth;
                var iwm = 40; // マージン
                // 画像が画面高さ超えてる
                if (windowHeight < ih + iwm) {
                    //console.log("[画面高]" + windowHeight + " < [ih]" + (ih + iwm) + ":幅超えている");
                    var iwhper = windowHeight / (ih + iwm); // 画面高と画像高の倍率
                    //console.log("[割合]" + iwhper + " [元]" + ih + "/" + iw);
                    ih = ih * iwhper;
                    iw = iw * iwhper; // 縦と同じ割合で縮小させる
                    //console.log("[割合]" + iwhper + " [後]" + ih + "/" + iw);
                }
                // 画像が画面幅超えてる
                if (windowWidth < iw + iwm) {
                    var iwwper = windowWidth / (iw + iwm); // 画面幅と画像高の倍率
                    ih = ih * iwwper; // 幅と同じ割合で縮小させる
                    iw = iw * iwwper;
                }
                //        console.log("[w]"+iw+" [h]"+ih +" [name]"+imgName);
                //
                pfmm_mdl.width(iw);
                pfmm_mdl.height(ih);
                coni.html("<img src='" + imgName + "'>");
            });
        }
        //--------------------------------------------------
        //      プロフィール
        //--------------------------------------------------
        //  ショートメッセージ
    functions.check_profmessage = function($this) {
            //必須項目が空かどうかフラグ
            let flag = true;
            if ($("#id__tpm__textarea").val() === "") { flag = false; }
            //console.log("check_profmessage : " + $("#id__tpm__textarea").val());
            //全て埋まっていたら送信ボタンを復活
            if (flag) {
                $('.top__profile-sendbutton').prop("disabled", false);
                $('#id-pfpm-form-success').slideUp();
                $('#id-pfpm-form-error').slideUp();
                //  結果メッセージも閉じる
                //送信ボタンを閉じる
            } else {
                $('.top__profile-sendbutton').prop("disabled", true);
            }

        }
        //  SNSアイコンホバー
    $('.top__profile-sns li').on('mouseenter', function() {
        var ind = $('.top__profile-sns li').index($(this));
        //        console.log("SNSきてる : "+ ind);
        var txt = "";
        switch (ind) {
            case 0:
                txt = "twitter";
                break;
            case 1:
                txt = "クラウドワークス";
                break;
            case 2:
                txt = "ココナラ";
                break;
            case 3:
                txt = "自サイトetienu base";
                break;
        }
        $(".top__profile-sns-popup").text(txt);
        //        $(".top__profile-sns-popup").css('display','block');
        $(".top__profile-sns-popup").css('opacity', '1');
    });
    $('.top__profile-sns li').on('mouseleave', function() {
        //console.log("SNSはなれた");
        $(".top__profile-sns-popup").prop('display', 'none');
        //        $(".top__profile-sns-popup").css("display","none");
        $(".top__profile-sns-popup").css("opacity", "0");
    });
    //--------------------------------------------------
    //      googleform
    //--------------------------------------------------
    $pfpm_form = $('#id-pfpm-form');
    $pfpm_form.submit(function(e) {
        //  送信直後にボタン無効化
        $('.top__profile-sendbutton').prop('disabled', true);
        var formData = $pfpm_form.serialize();
        console.log(formData);
        var formurl = "https://docs.google.com/forms/u/6/d/e/1FAIpQLSeBleUTUE1jOwh246YMMolKMNgIJEO2S_rYSkSjvGLuYTzaLA/formResponse";
        //  文字列取得後、入力内容を消す
        $('#id__tpm__textarea').val("");
        //  通信
        $.ajax({
            url: formurl, //$pfpm_form.attr('action'),
            data: formData,
            type: "POST",
            dataType: "xml",
            statusCode: {
                //  送信に成功したときの処理
                0: function() {
                    //                    $pfpm_form.slideUp();
                    $('#id-pfpm-form-success').slideDown();
                },
                //  送信に失敗したときの処理
                200: function() {
                    //                    $pfpm_form.slideUp();
                    $('#id-pfpm-form-error').slideDown();
                }

            }
        });
        return false;
    });

    //================================================
    //  コンタクトフォーム7
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
    //  IDから辿りフォームを取得
    $pfcf_form = $('#wpcf7-f452-o2').find("form");
    //  CF7にターゲット追加してページ移動を阻止
    $pfcf_form.attr("target", "pfcf_hidden_iframe");
    $pfcf_form.submit(function(e) {
        let ret = functions.check_cfi_all(this);
        //  必要事項が入力されているので成功
        if (ret) {
            //top__contact-content
            $('.top__contact-lead').addClass("hidden");
            $('.top__contact-content').css("margin-bottom", "0px");
            $('.top__contact-lead').slideUp(); //「お問い合わせはこちらから」ごと消す
            //  SP版だと消えないなら、クラス付与で消させる
            $pfcf_form.slideUp();
            $('#id-pfcf-form-success').slideDown();

            //$('.top__contact').find("top__contactitem")[2].slideUp();
            $('.top__contactimg').slideUp();

        }
    });
    /*
    // サンクスページ移動
    $(".contact__form-button").on('click', function(e) {
        //        console.log("$form.submitきてる");
        let ret = functions.check_cfi_all(this);
        //  必要事項が入力されているので成功
        if (ret) {
            //  ページ移動
            //            location = 'thanks/';

        }
    });
    */
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
        // チェックボックスだけ配列なので注意
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

    /*
    //================================================
    //  シンプルパララックス
    //--------------------------------------------------
    const plimg = document.getElementsByClassName('top__pfi-pl-img');
    new simpleParallax(plimg, {
        orientation: 'down',
        scale: 2.0,
        overflow: false,
        delay: 0
    });
    const plimgy = document.getElementsByClassName('top__pfi-pl-yoyo');
    new simpleParallax(plimgy, {
        orientation: 'up',
        scale: 1.1,
        overflow: false,
        delay: 0
    });
    */


});