var theSwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 3500,
        stopOnLastSlide: false,
        disableOnInteraction: false,
        reverseDirection: false
    },
    //    pagination: {
    //        el: '.swiper-pagination',
    //    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});