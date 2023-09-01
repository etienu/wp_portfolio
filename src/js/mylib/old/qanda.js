/*
jQuery(function($) {
    //--------------------------------------------------
    //      Q & A ボタンをクリック
    //--------------------------------------------------
    $(".service__faqs-item").on('click', function(e) {

        let title = $(this).find(".service__faqs-top-title");
        let btn = $(this).find(".service__faqs-top-button-bars");
        //console.log("this:", this);
        //console.log("btn:", btn);
        title.toggleClass('service__fqbis-active');
        btn.toggleClass('service__fqbis-active');
        let p = $(this).closest(".service__faqs-item");
        p.find(".service__faqs-item-bottom").slideToggle();
        return false;
    });
});
*/
//  全ての.service__faqs-itemを取得
let qabuttons = document.querySelectorAll('.service__faqs-item');
//  全てのボタンにクリックイベント設定
qabuttons.forEach((tar) => {
    tar.addEventListener('click', function(e) {
        e.preventDefault();
        let title = tar.querySelector('.service__faqs-top-title');
        let btn = tar.querySelector('.service__faqs-top-button-bars');
        title.classList.toggle("service__fqbis-active");
        btn.classList.toggle("service__fqbis-active");
        let btm = tar.querySelector('.service__faqs-item-buttom');
        slideToggle(btm, 300);
        return false;
    });
});