jQuery(function($) {
    //  ドロワーを隠しておく
    $(".drawer").hide();
    //    $(".drawer-content").hide();

    //--------------------------------------------------
    //      ドロワーアイコンをクリック
    //--------------------------------------------------
    $(".drawer-icon-area").on('click', function(e) {
        e.preventDefault();
        // dw = drawer
        //  ヘッダーに付与して、浮かす
        $(".header").toggleClass('dwis-active');
        // bodyに付与してヘッダーの浮かしずれ対策
        $("body").toggleClass('dwis-active');
        //  アイコン
        $(".drawer-icon").toggleClass('dwis-active');
        //  ドロワー本体
        $(".drawer").toggleClass('dwis-active');
        $(".drawer-content").toggleClass('dwis-active');
        $(".drawer").slideToggle();
        return false;
    });
});