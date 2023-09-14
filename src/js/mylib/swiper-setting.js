"use strict";

// swiperslider
const swiper = new Swiper(".swiper-container", {
    //loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    //  ページネーション
    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: "clickable"
    },
    //  スクロールバー
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
        draggable: false
    },

    centeredSlides: true, //アクティブなスライドを中央に表示
    //speed: 2000,
    //effect: "slide",
    //effect: "fade",
    //effect: "cube",
    effect: "coverflow",
    //effect: "flip",
    //effect: "cards",
    //effect: "creative",

    spaceBetween: 16, //スライド間の距離を16pxに
    slidesPerView: 1, //スライダーのコンテナ上に2枚同時に表示
    breakpoints: {　 //小さい順に設定する
        // 599px以上の場合
        599: {
            slidesPerView: 2, //スライドを2枚表示
        },
        // 1024px以上の場合
        1024: {
            slidesPerView: 3, //スライドを3枚表示
        },
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    }
});