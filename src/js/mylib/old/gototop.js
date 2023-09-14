jQuery(function($) {
    var pagetopButton = $('.js-gotoTop');
    var disp_topicon_position;

    //--------------------------------------------------
    //      ページ読み込み時の処理
    //--------------------------------------------------
    $(window).on('load', function() {
        disp_topicon_position = 80;
        //  トップに戻るアイコンを非表示に
        //        pagetopButton.css("display", "none");
        //pagetopButton.hide();
        //  ページ表示時にY位置によって表示/非表示処理
        //        task__scroll__topicon();
        var scroll = $(this).scrollTop();
        if (scroll > disp_topicon_position) {
            pagetopButton.removeClass("hide");
        }

    });

    //--------------------------------------------------
    //      body / スクロールした時の処理
    //--------------------------------------------------
    $(window).scroll(function() {
        //  「トップに戻る」の表示
        task__scroll__topicon();
    });

    function task__scroll__topicon() {
        var scroll = $(this).scrollTop();
        if (scroll > disp_topicon_position) {
            //console.log("[scroll]" + scroll + "[topline]" + disp_topicon_position);
            //pagetopButton.addClass("show");
            pagetopButton.removeClass("hide");
            //pagetopButton.fadeIn();
        } else {
            //pagetopButton.removeClass("show");
            pagetopButton.addClass("hide");
            //pagetopButton.fadeOut();
        }
    }

    //--------------------------------------------------
    //      トップに戻るボタンを押した際のスクロール時間
    //--------------------------------------------------
    pagetopButton.click(function() {
        //  ブラウザごとに違いがあるとの事で、Chromeはhtmlができて、bodyがだめ
        $('html').animate({ scrollTop: 0 }, 500);
        //        smoothScroll("js-pagetop");
    });
});

function fadeIn(node, duration) {
    // display: noneでないときは何もしない
    if (getComputedStyle(node).display !== 'none') return;

    // style属性にdisplay: noneが設定されていたとき
    if (node.style.display === 'none') {
        node.style.display = '';
    } else {
        node.style.display = 'block';
    }
    node.style.opacity = 0;

    var start = performance.now();

    requestAnimationFrame(function tick(timestamp) {
        // イージング計算式（linear）
        var easing = (timestamp - start) / duration;

        // opacityが1を超えないように
        node.style.opacity = Math.min(easing, 1);

        // opacityが1より小さいとき
        if (easing < 1) {
            requestAnimationFrame(tick);
        } else {
            node.style.opacity = '';
        }
    });
}