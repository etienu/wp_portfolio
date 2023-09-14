//----------------------------------------
//
//  コンテンツの処理
//  背景
//
//----------------------------------------
export default class pageBackGround {
    static hidePosition = 3000;
    constructor() {
        this.herobg = document.querySelector('.l-hero__background');
        //        this.hide_herobg_position = 3000; //  スマホでPC時1000では足りない
    }

    taskScroll() {
        if (!this.herobg) return;
        var scroll = document.documentElement.scrollTop;
        if (scroll > this.hidePosition) {
            this.herobg.classList.add("hide");
        } else {
            this.herobg.classList.remove("hide");
        }
    }

    //  読み込み時の処理
    taskLoad() {
        if (!this.herobg) return;
        var scroll = document.documentElement.scrollTop;
        if (scroll > this.hidePosition) {
            this.herobg.classList.remove("hide");
        }
    }
}