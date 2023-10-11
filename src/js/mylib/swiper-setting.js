"use strict";
//----------------------------------------
//  swiperグループ
//----------------------------------------
export default class swiperGroup {
    constructor() {
        this.swipers = [];
    }

    //----------------------------------------
    //  個別 : SKILL
    //----------------------------------------
    make_skill( i_swiper, i_name ) {
        // swiperslider
//        this.swipers[this.swipers.length] = new Swiper( i_swiper, {
            this.swipers[i_name] = new Swiper( i_swiper, {
            loop: false,
            allowTouchMove: false,  //  ドラッグ無効
        /*    
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            //  スクロールバー
            scrollbar: {
                el: ".swiper-scrollbar",
                hide: true,
                draggable: false
            },
        */    
            //  ページネーション
            pagination: {
                el: ".swiper-pagination",
                type: "bullets",
                clickable: "clickable"
            },

            centeredSlides: true, //アクティブなスライドを中央に表示
            //speed: 2000,
            //effect: "slide",
            //effect: "fade",
            //effect: "cube",
            //effect: "coverflow",
            //effect: "flip",
            //effect: "cards",
            //effect: "creative",

            spaceBetween: 16,   //スライド間の距離を16pxに
            slidesPerView: 1,   //スライダーのコンテナ上に2枚同時に表示
            autoplay: false,
            breakpoints: {      //小さい順に設定する
                // 599px以上の場合
                599: {
                    slidesPerView: 1, //スライドを2枚表示
                },
                // 1024px以上の場合
                1024: {
                    slidesPerView: 1, //スライドを3枚表示
                },
            }
        //    autoplay: {
        //        delay: 3000,
        //        disableOnInteraction: false,
        //    }
        });
    }

    //----------------------------------------
    //  swiperの作成
    //----------------------------------------
    registSwiper( i_swiper, i_name ) {
        switch( i_name )
        {
        case "skill": this.make_skill( i_swiper, i_name );
        }
    }

    //----------------------------------------
    //  各種イベントの登録
    //----------------------------------------
    eventRegistration() {
        //  .swiper : swiperを全て取得
        let swipergroup = document.querySelectorAll('.swiper');
        //  swiperの数だけループ
        swipergroup.forEach((swiper) => {
            let name = swiper.dataset.name;
            //console.log( "[swiper]" + swiper + " : " + name );
            //  swiperの識別名称を取得
            if( name )
                this.registSwiper( swiper, name );
        });
    }
}
