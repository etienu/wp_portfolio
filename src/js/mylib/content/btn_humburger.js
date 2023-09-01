//----------------------------------------
//  ハンバーガー
//----------------------------------------
export default class buttonHumburger {
    constructor(i_id, i_header, i_spmenu) {
        //        this.init();
        this.btn = document.querySelector(i_id);
        this.header = document.querySelector(i_header);
        this.spmenu = document.querySelector(i_spmenu);
        //console.log("[ハンガーガー]");
        //console.log("[btn]" + this.btn.classList);
        //console.log("[header]" + this.header.classList);
        //console.log("[spmenu]" + this.spmenu.classList);
        //        let btn = document.querySelector('.p-hamburger');
        //        let header = document.querySelector('.l-header');
        //        let spmenu = document.querySelector('.p-spmenu');

    }

    // スクロールを禁止にする関数
    disableScroll(event) {
        event.preventDefault();
    }
    addScrollStop() {
        document.addEventListener('touchmove', this.disableScroll, { passive: false });
        document.addEventListener('mousewheel', this.disableScroll, { passive: false });
    }
    removeScrollStop() {
        document.removeEventListener('touchmove', this.disableScroll, { passive: false });
        document.removeEventListener('mousewheel', this.disableScroll, { passive: false });
    }

    //  ハンバーガー開く
    open() {
        this.btn.classList.toggle("open");
        this.spmenu.classList.toggle("open");
        this.header.classList.toggle("open");
        //  開いた スクロール停止
        if (this.btn.classList.contains("open")) {
            this.addScrollStop();
        }
        //  閉じた スクロール解除
        else {
            this.removeScrollStop();
        }
    }

    //  ハンバーガー閉じる( 主にメニュークリック時 )
    close() {
        this.btn.classList.remove("open");
        this.spmenu.classList.remove("open");
        this.header.classList.remove("open");
        // スクロール解除
        this.removeScrollStop();
    }

    //  各種イベントの登録
    eventRegistration(i_inner, i_ullia, i_contact) {
        //  元
        //let spmenu_li_a = document.querySelectorAll('.p-spmenu__inner ul li a');
        //let spmenu_contact = document.querySelectorAll('.p-spmenu__inner .l-header__buttonswrapper a');

        //  クリックイベントセット
        this.btn.addEventListener("click", () => { this.open(); });
        //  ul liのメニューがクリックされたら閉じる
        let str_ullia = i_inner + " " + i_ullia;
        //console.log(str_ullia);
        let spmenu_li_a = document.querySelectorAll(str_ullia);
        spmenu_li_a.forEach((lia) => {
            lia.addEventListener("click", () => { this.close(); });
        });

        //  コンタクトボタンが押されたら閉じる
        let str_contact = i_inner + " " + i_contact;
        //console.log(str_contact);
        let spmenu_contact = document.querySelectorAll(str_contact);
        spmenu_contact.forEach((lia) => {
            lia.addEventListener("click", () => { this.close(); });
        });
    }
}