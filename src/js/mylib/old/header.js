jQuery(function($) {
    var set = 200; //ウインドウ上部からどれぐら
    var disp_topicon_position;
    var disp_header_position = 0; // 120;    //  ヘッダーの位置による

    var boxTop = new Array;
    var current = -1;
    //各要素の位置
    //position-nowは場所を取得したい対象の要素に付ける
    $('.position-now').each(function(i) {
        boxTop[i] = $(this).offset().top;
    });
    //最初の要素にclass="position-now"をつける
    changeBox(0);

    //--------------------------------------------------
    //      ページ読み込み時の処理
    //--------------------------------------------------
    $(window).on('load', function() {});

    //--------------------------------------------------
    //      body / スクロールした時の処理
    //--------------------------------------------------
    $(window).scroll(function() {
        var scroll = $(this).scrollTop();
        //  ヘッダーのfloat表示
        task__scroll__header();
        /*
        //  各セクションの高さを超えたらメニューのアクティブ演出
        for (var i = boxTop.length - 1; i >= 0; i--) {
            if ($(window).scrollTop() > boxTop[i] - set) {
                changeBox(i);
                break;
            }
        };*/
    });

    //--------------------------------------------------
    //      ヘッダー浮かし処理
    //--------------------------------------------------
    function task__scroll__header() {
        var scroll = $(this).scrollTop();
        if (scroll > disp_header_position) {
            $('.l-header').addClass("l-header__float");
            $('body').addClass("l-header__float");
        } else {
            $('.l-header').removeClass("l-header__float");
            $('body').removeClass("l-header__float");
        }
    }

    //--------------------------------------------------
    //      ナビの処理
    //--------------------------------------------------
    function changeBox(secNum) {
        if (secNum != current) {
            current = secNum;
            secNum2 = secNum + 1; //以下にクラス付与したい要素名と付与したいクラス名
            $('.header__nav li a').removeClass('hdis-active');

            //位置によって個別に処理をしたい場合　
            if (current == 0) {
                $('#hnav_card').addClass('hdis-active');
                // 現在地がsection1の場合の処理
            } else if (current == 1) {
                $('#hnav_news').addClass('hdis-active');
                // 現在地がsection2の場合の処理
            } else if (current == 2) {
                // 現在地がsection3の場合の処理
                $('#hnav_price').addClass('hdis-active');
            } else if (current == 3) {
                // 現在地がsection4の場合の処理
                $('#hnav_access').addClass('hdis-active');
            } else if (current == 4) {
                // 現在地がsection4の場合の処理
                $('#hnav_contact').addClass('hdis-active');
            }

        }
    };
});