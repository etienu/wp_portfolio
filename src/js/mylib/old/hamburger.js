//----------------------------------------
//  ハンバーガー
//----------------------------------------
let btn = document.querySelector('.p-hamburger');
//let btn = document.querySelector('.p-hamburger__wrapper');
let header = document.querySelector('.l-header');
let spmenu = document.querySelector('.p-spmenu');

// スクロールを禁止にする関数
function disableScroll(event) {
    event.preventDefault();
}

//  ハンバーガー開く
function hamburger_openSubMenu() {
    btn.classList.toggle("open");
    spmenu.classList.toggle("open");
    header.classList.toggle("open");
    //  開いた
    if (btn.classList.contains("open")) {
        //  スクロール停止
        document.addEventListener('touchmove', disableScroll, { passive: false });
        document.addEventListener('mousewheel', disableScroll, { passive: false });
    }
    //閉じた
    else {
        // スクロール解除
        document.removeEventListener('touchmove', disableScroll, { passive: false });
        document.removeEventListener('mousewheel', disableScroll, { passive: false });
    }
}

//  ハンバーガー閉じる( 主にメニュークリック時 )
function hamburger_closeSubMenu() {
    btn.classList.remove("open");
    spmenu.classList.remove("open");
    header.classList.remove("open");
    // スクロール解除
    document.removeEventListener('touchmove', disableScroll, { passive: false });
    document.removeEventListener('mousewheel', disableScroll, { passive: false });
}

//  クリックイベントセット
btn.addEventListener("click", hamburger_openSubMenu);
//  ul liのメニューがクリックされたら閉じる
let spmenu_li_a = document.querySelectorAll('.p-spmenu__inner ul li a');
spmenu_li_a.forEach((lia) => {
    lia.addEventListener("click", hamburger_closeSubMenu);
});
//  コンタクトボタンが押されたら閉じる
let spmenu_contact = document.querySelectorAll('.p-spmenu__inner .l-header__buttonswrapper a');
spmenu_contact.forEach((lia) => {
    lia.addEventListener("click", hamburger_closeSubMenu);
});