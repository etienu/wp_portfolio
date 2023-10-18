"use strict";
//----------------------------------------
//  swiperグループ
//----------------------------------------
export default class swiperGroup {
    constructor() {
        this.swipers = [];
    }

    //----------------------------------------
    //  個別 : WORKS
    //----------------------------------------
    make_works( i_swiper, i_name ) {
        this.swipers[i_name] = new Swiper( i_swiper, {
            initialSlide: 2,
            loop: false,
            allowTouchMove: false,  //  ドラッグ無効
            //  ページネーション
            centeredSlides: false, //アクティブなスライドを中央に表示
            speed: 500,
            effect: "fade",
            spaceBetween: 0,   //スライド間の距離
            slidesPerView: 1,   //スライダーのコンテナ上に同時表示する枚数
            breakpoints: {      //小さい順に設定する
                599: { slidesPerView: 1 },
                1024: { slidesPerView: 1 },
            },
            updateOnWindowResize: true, //  ウインドウサイズ変更時自動再計算
            autoplay : false
        });
    }


    //----------------------------------------
    //  個別 : SKILL
    //----------------------------------------
    make_skill( i_swiper, i_name ) {
        // swiperslider
        this.swipers[i_name] = new Swiper( i_swiper, {
            loop: false,
            allowTouchMove: false,  //  ドラッグ無効
            //  ページネーション
            pagination: {
                el: ".swiper-pagination",
                type: "bullets",
                clickable: "clickable"
            },

            centeredSlides: true, //アクティブなスライドを中央に表示
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
        });
    }


    //----------------------------------------
    //  swiperの作成
    //----------------------------------------
    registSwiper( i_swiper, i_name ) {
        switch( i_name )
        {
        case "skill": this.make_skill( i_swiper, i_name );  break;
        case "works": this.make_works( i_swiper, i_name );  break;
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
            //  swiperの識別名称を取得
            if( name )
                this.registSwiper( swiper, name );
        });
    }
}
