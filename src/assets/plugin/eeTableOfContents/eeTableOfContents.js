jQuery(function($) {
    let eetoc = {
        fUse: false, //  見出しがない:false 見出しが1つ以上あり:true
        pEntry: $(".entry-body"), //  記事本体
        pEntryInner: $(".entry-body__inner"), //  記事本体inner
        pList: $(".eeTOC__list"), //  記事本体の目次リスト
        pSideSpace: $(".eeTOC__side"), //  サイドバー内の目次を置くスペース
        pSide: $(".eeTOCside"), //  サイドバーの目次本体
        ypos: 0, //  サイドバーY開始位置の調整
        sideStartY: 0, //  サイドバーY開始位置の調整
        sideFixedY: 0, //  サイドバーFixedする際のY基準位置
        entryHeight: 0, //  記事そのものの高さ
        list: [], //  目次データリスト
        end: 0
    };
    //let eeentry = $(".entry-body");
    //let eelist = $(".eeTOC__list");
    //let eestoc = 0;
    //let tocypos = 0;
    //let entry_height = 0; //  記事の高さ
    let toclist = [];
    //let eb = $(".entry-body__inner");

    let entry_height = 0;
    let list_height = 0;
    //  記事本体のTOC操作
    //get_TOC_height();
    list_height = calc_TOC_listheight();
    //  本体記事そのものの高さ
    if (eetoc.pEntry) {
        entry_height = eetoc.pEntry.height();
    } else {
        return;
    }

    //  サイドバーを探してサイドバーの目次を作る
    //let eeside = $(".eeTOC__side");
    if (eetoc.pSideSpace.length <= 0) return;
    if (eetoc.pSideSpace) {
        //eetoc.pSideSpace.append("てーぶるここ");
        make__sideTOC();
    } else {
        return;
    }

    //  本記事の目次の高さを取得
    function get_TOC_height() {
        if (!eetoc.pList) return;
        if (eetoc.pList.hasClass("hide")) return;
        //  隠れていないなら取得する
        //  ヘッダー分ずらす
        list_height = eetoc.pList.height();
    }

    //  本記事の目次の高さを設定
    function change_TOC_height() {
        if (!eetoc.pList) return;
        if (eetoc.pList.hasClass("hide")) return;
        //  隠れていないならセットする
        eetoc.pList.height(list_height);
    }

    //  本記事の目次の高さ、ul・liの高さを合計する
    function calc_TOC_listheight() {
        if (!eetoc.pList) return;
        if (eetoc.pList.hasClass("hide")) return;
        //  隠れていないなら取得する
        //list_height = eetoc.pList.height();
        var ret = eetoc.pList.find("li");
        var sum = 0;
        //console.log("---- calc_TOC_listheight ----");
        //console.log(ret);
        for (var i = 0; i < ret.length; i++) {
            var _li = ret[i];
            sum += _li.clientHeight;
            //console.log("[i]" + i + "/" + ret.length + " [li]" + _li + " [h]" + _li.height + " [sum]" + sum);
        }
        //  hide時に変更させたくないのでここで入れる
        list_height = sum;
        return sum;
    }

    //--------------------------------------------------
    //  hideボタン
    //--------------------------------------------------
    $(".eeTOC__hidebutton").on('click', function(e) {
        if (!eetoc.fUse) return;
        let hide = $(this);
        //  hideボタン : 隠れているので表示する
        if (eetoc.pList.hasClass("hide")) {
            //eetoc.pList.height(list_height); //  再設定

            hide.text("隠す");
            eetoc.pList.removeClass("hide");
            //  hide解除直後に計算し直しても、オープン高さは測れる
            calc_TOC_listheight();
            change_TOC_height();
        }
        //  showボタン : 表示されているので隠す
        else {
            //console.log("リストの高さ:" + eetoc.pList.height());
            //get_TOC_height();
            calc_TOC_listheight();
            //  目次の高さセット:0
            eetoc.pList.height(0);
            //  表示を変える
            hide.text("表示");
            //  クラス付与
            eetoc.pList.addClass("hide");
        }
    });


    //------------------------------------
    //  サイドバーの目次作成
    //------------------------------------
    function make__sideTOC() {
        if (eetoc.pSideSpace.length <= 0) return;
        eetoc.sideStartY = eetoc.pSideSpace[0].offsetTop - 40;
        eetoc.sideFixedY = 40;

        //tocypos = eetoc.pSideSpace[0].offsetTop - 40;
        //  1.entry-body__inner以下のH2,H3をリスト化
        //let ind = 0;
        //  記事から見出し情報を取得して配列作成
        make__sideTOC_toclist();

        //  サイドに目次出力
        var code = '';
        code += '<div class="eeTOCside">';
        code += '<div class="eeTOC__inner">';
        code += '<p class="eeTOC__Title eeTOC__side">';
        code += '<a href="#eeTOC">目次</a>';
        code += '</p>';
        code += '<ul class="eeTOC__list">';
        code += '<hr class="eeTOC__hr">';
        var lst_h2 = 0;
        var lst_h3 = 0;
        for (var i = 0; i < toclist.length; i++) {
            itm = toclist[i];
            //            toclist[ind] = { id: i, elem: res_h3[i].outerHTML, text: res_h3[i].outerText, ypos: res_h3[i].offsetTop };
            if (itm.tag === "h2") {
                lst_h2++;
                lst_h3 = 0;
                itm.sid = "eetocs" + lst_h2;
                code += '<li id="' + itm.sid + '"><a href="#' + itm.id + '"><span class="eeTOC__depth__1 eeTOC__side">';
                code += '<div class="eeTOC__number">' + itm.index + '</div>';
                code += itm.text + '</span></a></li>';
            } else if (itm.tag === "h3") {
                lst_h3++;
                itm.sid = "eetocs" + lst_h2 + "-" + lst_h3; //  サイドバーのID
                var h3id = "eetoc" + (lst_h2) + "-" + (lst_h3); //本記事ジャンプ用ID
                code += '<li id="' + itm.sid + '"><a href="#' + h3id + '"><span class="eeTOC__depth__2">';
                code += '<div class="eeTOC__number">' + lst_h2 + "." + lst_h3 + '</div>';
                code += itm.text + '</span></a></li>';
            }
            //code += '<hr class="eeTOC__hr">';
        }
        code += '</ul>';

        code += '</div>';
        code += '</div>';
        //  １つでもあれば作成する
        if (0 < toclist.length) {
            eetoc.pSideSpace.append(code);
            eetoc.fUse = true;
        }

        //  出力されたサイド目次の操作
        //eestoc = eetoc.pSideSpace.find(".eeTOCside");
        eetoc.pSide = eetoc.pSideSpace.find(".eeTOCside")
            //eestoc.addClass("topAdsorption");
    }

    //------------------------------------
    //  サイドバーの目次、リストデータ作成
    //------------------------------------
    //  本記事からH2を抽出してリストに追加する
    function make__sideTOC_calcH2(i_Index) {
        var ind = i_Index;
        var res_h2 = eetoc.pEntryInner.find("h2");
        //console.log(res_h2);
        if (res_h2 && 0 < res_h2.length) {
            for (var i = 0; i < res_h2.length; i++) {
                var anchor_id = "eetoc" + (i + 1);
                var headtext = res_h2[i].childNodes[1].innerText;
                //console.log(res_h2[i]);
                //console.log(res_h2[i].childNodes);
                toclist[ind] = { index: i + 1, id: anchor_id, tag: "h2", elem: res_h2[i].outerHTML, text: headtext, ypos: res_h2[i].offsetTop, fMark: false };
                //toclist[ind] = { index: i + 1, id: anchor_id, tag: "h2", elem: res_h2[i].outerHTML, text: res_h2[i].outerText, ypos: res_h2[i].offsetTop, fMark: false };
                ind++;
            }
        }
        i_Index = ind;
        return i_Index;
    }

    //  本記事からH3を抽出してリストに追加する
    function make__sideTOC_calcH3(i_Index) {
        var ind = i_Index;
        var res_h3 = eetoc.pEntryInner.find("h3");
        if (res_h3 && 0 < res_h3.length) {
            for (var i = 0; i < res_h3.length; i++) {
                var anchor_id = "eetoc" + (i + 1) + "-" + (i + 1);
                toclist[ind] = { index: i + 1, id: anchor_id, tag: "h3", elem: res_h3[i].outerHTML, text: res_h3[i].outerText, ypos: res_h3[i].offsetTop, fMark: false };
                ind++;
            }
        }
        i_Index = ind;
        return i_Index;
    }

    //  作成したTableOfContentsリストからサイドバーIDを作り直す
    function make__sideTOC_sid() {
        var lst_h2 = 0;
        var lst_h3 = 0;
        for (var i = 0; i < toclist.length; i++) {
            var itm = toclist[i];
            if (itm.tag === "h2") {
                lst_h2++;
                lst_h3 = 0;
                itm.sid = "eetocs" + lst_h2;
            } else if (itm.tag === "h3") {
                lst_h3++;
                itm.sid = "eetocs" + lst_h2 + "-" + lst_h3; //  サイドバーのID
            }
        }
    }

    //  本記事からH2H3を抽出してリストを作成
    function make__sideTOC_toclist() {
        var ind = 0;
        //  初期化
        toclist = [];
        //  リストにH2追加
        ind = make__sideTOC_calcH2(ind);
        //  リストにH3追加
        ind = make__sideTOC_calcH3(ind);
        //  yposで昇順(少ない順)ソート
        toclist.sort(function(a, b) { return a.ypos - b.ypos; });
        //console.log(toclist);
        //  リストにサイドバーid作成
        make__sideTOC_sid();
        //  幅と位置
        //console.log("幅と位置 : ");
        //console.log(eetoc.pSideSpace);
        //console.log(eetoc.pSideSpace[0].clientWidth);
        //  サイドの目次がfixedではみ出ても強制的に幅を固定する
        //        eetoc.pList[0].clientidth = eetoc.pSideSpace[0].clientWidth;
        //        eetoc.pList.css("left", eetoc.pSideSpace[0].offsetLeft);
        //        eetoc.pList.css("max-width", eetoc.pSideSpace[0].clientWidth);
        set__sideTOC_position();

    }

    //--------------------------------------------------
    //      サイド目次の位置(left)、幅(width)設定
    //--------------------------------------------------
    function set__sideTOC_position() {
        var ystart = 0;
        //        var _side = $(".eeTOC__side");
        //        console.log(_side);

        eetoc.pSide = $(".eeTOCside");
        //        var stocw = eetoc.pSideSpace[0].offsetWidth;
        var stocl = eetoc.pSideSpace[0].offsetLeft;
        var stocw = eetoc.pSideSpace[0].offsetWidth;
        //  PC時のみ
        if (1280 <= window.innerWidth) {
            //stocl += 10; // padding分引かないとfixed時膨らむ
            //stocw -= 20; // padding分引かないとfixed時膨らむ
        }
        //  画面幅を超えたら幅狭める
        if (window.innerWidth < eetoc.pSideSpace[0].offsetLeft + stocw) {
            stocw = window.innerWidth - eetoc.pSideSpace[0].offsetLeft;
        }
        eetoc.pSide.css("left", stocl);
        eetoc.pSide.css("width", stocw);

        //  目次より上なら強制移動しない
        if ($(window).scrollTop() <= eetoc.sideStartY - ystart) {
            eetoc.pSide.css("left", "");
            eetoc.pSide.css("width", "100%");
            //            return;
        }
    }

    //--------------------------------------------------
    //      body / スクロールした時の処理
    //--------------------------------------------------
    $(window).scroll(function() {
        eeTOC__taskScroll();
    });

    function eeTOC__taskScroll() {
        if (!eetoc.fUse) return;
        var scroll = $(this).scrollTop();
        //console.log(" : scroll : (" + scroll + "/" + disp_topicon_position);
        var ystart = 0;

        //  サイドバーの目次の位置超えたら追従
        //console.log("[吸着]" + $(window).scrollTop() + ">" + eetoc.sideStartY + "-" + ystart);
        if ($(window).scrollTop() > eetoc.sideStartY - ystart) {
            eetoc.pSide.addClass("topAdsorption");
        } else {
            eetoc.pSide.removeClass("topAdsorption");
        }

        //  サイドバーの目次の下面が、本記事の高さを超えたら直す
        //console.log(eetoc.pEntry);
        //        var stocBottom = $(window).scrollTop() + eetoc.pSide[0].offsetTop + eetoc.pSide[0].clientHeight;
        var stocBottom = $(window).scrollTop() + eetoc.pSide[0].clientHeight;
        var entryBottom = eetoc.pEntry[0].offsetTop + eetoc.pEntry[0].clientHeight;
        //console.log("[entry]" + entryBottom + "<=" + "[side]" + stocBottom);
        if (entryBottom <= stocBottom) {
            //eetoc.pSide[0].offsetTop = 40 + (stocBottom - entryBottom);
            eetoc.pSide.css("top", (eetoc.sideFixedY - (stocBottom - entryBottom)));
            //eetoc.pSide.css("transform", "translate(0," + (40 + (stocBottom - entryBottom)) + ")");
        } else {
            eetoc.pSide.css("top", "");
            //eetoc.pSide.css("transform", "");
        }


        //  各セクションの高さを超えたらメニューのアクティブ演出
        var fMark = false;
        for (var i = toclist.length - 1; i >= 0; i--) {
            if ($(window).scrollTop() + 50 >= (toclist[i].ypos - ystart)) {
                eeTOC__changeMark(i);
                //console.log("[mark]" + i + ":" + ($(window).scrollTop() + 50) + ">" + toclist[i].ypos + "-" + ystart);
                fMark = true;
                break;
            }
        };
        if (!fMark) {
            eeTOC__changeMark(0);
        }

        //  記事の高さが開始時と違った場合
        if (eetoc.pEntry.height() != eetoc.entryHeight) {
            //            console.log("記事の高さが違う : [前回]" + entry_height + " [最新]" + eetoc.pEntry.height());
            eetoc.entryHeight = eetoc.pEntry.height();
            make__sideTOC_toclist(0);
        }
        //  目次のリスト高さを監視
        calc_TOC_listheight();
        change_TOC_height();
        //  
        //eetoc.pList.css("left", eetoc.pSideSpace[0].offsetLeft);
        set__sideTOC_position();

        //        console.log("eetoc.pside:");
        //        console.log(eetoc.pSide);
        //        console.log("[left]" + eetoc.pSideSpace[0].offsetLeft + " [width] " + eetoc.pSideSpace[0].offsetWidth);
    }

    function eeTOC__changeMark(i_index) {
        if (!eetoc.fUse) return;
        var itm = toclist[i_index];
        //  同じ場所にマーク付けるので未処理
        if (itm.fMark) return;

        var sid;
        //  全てのマークを外す( 前回どこかわからない為 )
        for (var i = 0; i < toclist.length; i++) {
            var iitm = toclist[i];
            sid = "#" + iitm.sid;
            $(sid).removeClass("mark");
            toclist[i].fMark = false;
        }
        //  リストの指定IDにclassマークを付与
        sid = "#" + itm.sid;
        itm.fMark = true;
        $(sid).addClass("mark");
    }

    //--------------------------------------------------
    //      ウインドウのサイズ変更された時の処理
    //--------------------------------------------------
    $(window).resize(function() {
        if (!eetoc.fUse) return;
        const width = $(window).width();
        //        $('.width span').text(width + 'px');
        //  本体のY位置
        //  fixedして位置変化する"eeTOCside"ではなく、
        //  入れ物であるeeTOC__sideの位置をとる
        eetoc.pSideSpace = $(".eeTOC__side");
        eetoc.sideStartY = eetoc.pSideSpace[0].offsetTop - 40;
        make__sideTOC_toclist();
        calc_TOC_listheight();
        change_TOC_height();
    });


    //--------------------------------------------------
    //  リストのtransitionが終わったら高さ修正
    //--------------------------------------------------
    $('.eeTOC__list').on('transitionend', function() {
        if (!eetoc.fUse) return;
        calc_TOC_listheight();
        change_TOC_height();
        //alert('完了');
    });

    //  Yポジションの再計算
    function side_toc__calcYpos() {

        //
    }
});