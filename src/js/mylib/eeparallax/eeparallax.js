//================================================
//
//  えちえぬパララックス
//
//--------------------------------------------------
//--------------------------------------------------
//  アイテム
//--------------------------------------------------
class eeParallax {
    constructor(i_target, i_speed) {

        this.target = i_target;
        //        this.targetClass = document.querySelector(i_targetClass); //$("." + i_targetClass);
        this.speed = i_speed;
        this.beforerect = this.target.getBoundingClientRect(); //  初期の矩形を保存しておく
        //  差を取得
//        this.beforerect.bottom = Math.abs(this.beforerect.bottom) - Math.abs(this.beforerect.top);
//        this.beforerect.top = 0;
        this.beforepos= { x: 0, y: 0, z: 0 };
        this.adjust   = { x: 0, y: 0, z: 0 };
        this.scale    = 1.0;
        this.setBeforePos();
        //console.log("[eParallax] newt", this.targetClass);
        //console.log("[eParallax] new : [beforerect]", this.beforerect );
    }
    getTarget() {
        return this.target;
    }
    setSpeed(i_speed) {
        this.speed = i_speed;
    }
    setAdjust(i_X, i_Y, i_Z) {
        this.adjust.x = i_X;
        this.adjust.y = i_Y;
        this.adjust.z = i_Z;
    }
    setScale(i_scale) {
        this.scale = i_scale;
    }
    setBeforePos() {
        let rect = this.target.getBoundingClientRect();
        this.beforepos.y = rect.bottom;

    }
}
//--------------------------------------------------
//  エンジン
//--------------------------------------------------
export default class eeParallaxEngine {
    // パララックスアイテム
    constructor() {
        this.items = [];
        this.scroll = 0;

    }

    //  アイテムの追加
    add(i_item) {
        this.items.push(i_item);
    }
    setScroll(i_scroll) {
        this.scroll = i_scroll;
    }

    //  処理
    task() {
        this.scroll = window.pageYOffset;
        for (var i = 0; i < this.items.length; i++) {
            var itm = this.items[i];
            //console.log("[eeParallaxEngine::task()][%d/%d][item]", i, this.items.length, itm);
            this.taskItem(itm);
        }
    }

    //  個別アイテム処理
    taskItem(i_Item) {
        var itm = i_Item.getTarget();
        //  指定のclassを操作

        // 画面の高さ取得
        var windowHeight = document.documentElement.clientHeight;
        // ウインドウの中心計算 + スクロール量
        var windowCenter = (windowHeight / 2) + this.scroll;
        //  保存した矩形を利用( transformの影響を受ける為 )
        var rect = i_Item.beforerect; //getBoundingClientRect(); // レンダリングサイズなのでscaleを使う場合影響受ける
        var rtop = 0; // rect.top;
        //  マイナスだったとしても高さは高さなので絶対値化して↓方向とする
        var rbottom = Math.abs(Math.abs(i_Item.beforerect.bottom) - Math.abs(i_Item.beforerect.top));
        //console.log("[rtop]", rtop);
        //console.log("[rbottom]", rbottom);


        // scaleで拡大された分の相殺倍率
        var sper = 1.0 / i_Item.scale;
        // 拡大率を兼ねたアイテムのセンター
        var itemCenter = (rtop * sper) + (((rbottom * sper) - (rtop * sper)) / 2);
        //var itemCenter = itm.offsetTop + ((itm.offsetHeight) / 2);

        // ウインドウの中心とアイテムの芯の差
        var parallaxY = windowCenter - itemCenter;
        //console.log("[windowCenter]", windowCenter);
        //console.log("[itemCenter]", itemCenter);
        // 実際に移動する量 : 差に対して速度倍率をかける
        parallaxY = Number(i_Item.adjust.y) + (parallaxY * i_Item.speed);
        //console.log(i_Item.adjust.y);
        //console.log(i_Item.speed);
        //console.log(parallaxY);
        //console.log("--");

        //  ・移動量に対してfilterでblurかけてもいい
        //  ・画像が表示されたら


        //console.log("[rect][top:%d/bottom:%d][sper:%d]", rect.top, rect.bottom, sper);
        //console.log("[wc:%d]-[itemcenter:%d]=[py:%d]", windowCenter, itemCenter, parallaxY);

        //  Y
        var tscale = "scale(" + i_Item.scale + ") ";
        var tajx = "translate3d(" + (i_Item.adjust.x) + "px, ";
        var tajy = parallaxY + "px, ";
        var tajz = (i_Item.adjust.z) + "px)";
        //        console.log("[tajy:%f]-[parallaxY:%f]", tajy, parallaxY);

        var txt = tscale + tajx + tajy + tajz;
        //  transformを設定
        itm.style.transform = txt;
        //console.log("[css]" + txt);
    }

    //  指定クラスがあれば全部登録
    eventRegistration() {
        let eeps = document.querySelectorAll('.js-eeparallax');
        eeps.forEach((target) => {
            //    let yspd = target.getAttribute('data-spd') || 0.1;
            //    let scale = target.getAttribute('data-scale') || 1.2;
            //    let adjusty = target.getAttribute('data-adjusty') || 0;
            let yspd = target.dataset['spd'] || 0.1;
            let scale = target.dataset['scale'] || 1.2;
            let adjusty = target.dataset['adjusty'] || 0;
            //yspd = yspd / 10;
            //scale = scale / 10;
            //console.log("えちえぬパララックス:[spd:%f][scale:%f][adjusty:%d]", yspd, scale, adjusty, target);
            const eepi = new eeParallax(target, yspd);
            eepi.setScale(scale);
            eepi.setAdjust(0, adjusty, 0);
            this.add(eepi);
        });
    }
}