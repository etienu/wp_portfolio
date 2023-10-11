//----------------------------------------
//
//  etienu GSAP アニメーション
//
//----------------------------------------
export default class eegsap {
    constructor() {
    }

    //----------------------------------------
    //  各種イベントの登録
    //----------------------------------------
    eventRegistration( i_common ) {
        //  共有変数クラスの確保
        this.common = i_common;
        this.registanim__heading_eff();
        this.registanim__header_li();
        this.registanim__works_bg_box();
        this.registanim__works_bg_box_left2();
        this.registanim__works_bg_box_right();
        this.registanim__works_bg_box_right2();
        this.registanim__works_bg_box_right3();
        this.registanim__parallax_simple();
    }

    //----------------------------------------
    //  c-title modan
    //  ポートフォリオ : 見出しh2のアニメーション
    //----------------------------------------
    registanim__heading_eff() {
        let textWrappers = document.querySelectorAll('[data-jstype="heading-eff"]');
        textWrappers.forEach((textWrapper) => {
            let bgcl,bgcr,bg,lead;
        
            let base = textWrapper.querySelector('[data-headingparts="base"]'); //  ベース
            if( base == null ) return;
        
            bg   = base.querySelector('[data-headingparts="bg"]');
            bgcl = base.querySelector('[data-headingparts="boxlu"]'); //  左上角
            bgcr = base.querySelector('[data-headingparts="boxrb"]'); //  右下角
            lead = base.querySelector('[data-headingparts="lead"]');
        
            let str_tglaction = 'play pause resume';
            if( bgcl ){
                gsap.fromTo(bgcl, { autoAlpha: 0, rotate: -270, scale: 0.5 }, {
                    autoAlpha: 1,
                    rotate: 0,
                    scale: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: bg,
                        start: 'top center+=50%',
                        toggleActions: str_tglaction, 
                    }
                });
            }
            if( bgcr ){
                gsap.fromTo(bgcr, { autoAlpha: 0, rotate: 270, scale: 0.5 }, {
                    autoAlpha: 1,
                    rotate: 0,
                    scale: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: bg,
                        start: 'top center+=50%',
                        toggleActions: str_tglaction, 
                    }
                });
            }
        
            //  背景
            if( bg ){
                gsap.fromTo(bg, { autoAlpha: 1, x: '10%' }, {
                    autoAlpha: 1,
                    duration: 3,
                    x: 0,
                    ease: 'Power4.easeOut',
                    scrollTrigger: {
                        trigger: bg,
                        start: 'top center+=50%',
                        toggleActions: str_tglaction, 
                    }
                });
            }
            if( lead ){
                gsap.fromTo(lead, { x: '-160%' }, {
                    rotate: 0,
                    x: '-50%',
                    ease: 'Power4.easeOut',
                    duration: 2,
                    scrollTrigger: {
                        trigger: lead, //アニメーションが始まるトリガーとなる要素
                        //start: 'top center+=20%'//, //アニメーションが始まる位置を指定
                        toggleActions: str_tglaction, 
                        start: 'top center+=50%'//, //アニメーションが始まる位置を指定
                        //end: "+=500"
                    }
                });
            }
        })
    }
    //----------------------------------------
    //  ポートフォリオ : ヘッダー li
    //----------------------------------------
    registanim__header_li() {
        let header_li_a_span = document.querySelectorAll('.p-header__nav ul li a span');
        let header_li_a = document.querySelectorAll('.p-header__nav ul li a');
        //文字列（テキスト）を分割しspanで囲む
        function js_li_splitspan() {
            header_li_a_span.forEach(target => {
                let newText = '';
                const text = target.textContent;
                const result = text.split('');
                for (let i = 0; i < result.length; i++) {
                    newText += '<span>' + result[i] + '</span>';
                }
                target.innerHTML = newText;
            });
        }
        
        js_li_splitspan();
        header_li_a.forEach((h_lia) => {
            let li_a_i = h_lia.querySelector('[data-parts="boxlt"]'); //  左上角
            let li_a_u = h_lia.querySelector('[data-parts="boxrb"]'); //  右下角
            let li_a_span = h_lia.querySelector('[data-parts="text"]'); //  aの下の文字列格納span
        
            // 初期の状態(取ってきたドット・テキストは最初は非表示)
            // ドットとテキストを非表示
            gsap.set([li_a_i, li_a_u], { opacity: 0 });
            // timelineを作成（各アニメーションを連動させる）
            const tl = gsap.timeline();
            // toで状態を変化させる
            let ani = tl.to(
                li_a_i, {
                    rotate: 180,
                    duration: 0.2,
                    opacity: 1
                },
                //'+=.1' // 前のアニメーションが完了した0.5秒後にドットを非表示
            ).to(
                li_a_u, {
                    rotate: 180,
                    duration: 0.3, // 0.3秒かけてアニメーション
                    //delay: 0.3, // 0.3秒後に起動
                    //x: '100%', //右に100%移動させて画面の外に出す
                    opacity: 1
                },
                //'+=0.1'
            );
            ani.pause();
            h_lia.addEventListener("mouseenter", () => ani.play());
            h_lia.addEventListener("mouseleave", () => ani.reverse());
        });
    }

    //----------------------------------------
    //  works bg box
    //  ポートフォリオ : works左の箱
    //----------------------------------------
    registanim__works_bg_box() {
        let eff_classs = document.querySelectorAll('[data-eff="worksbg-boxl"]');
        eff_classs.forEach((target) => {
                var tar = target;
    //            console.log("[tar]" + tar);
                gsap.set(tar, { opacity: 0.3, rotate : 0 });
                const tl = gsap.timeline();
                tl.to(
                    tar, {
                        rotate : 360,
                        duration: 50,
                        opacity : 0.3,
                        ease: Linear.easeNone,
                        repeat: -1
                    }
                );    
        });    
    }

    //----------------------------------------
    //  works bg box
    //  ポートフォリオ : works左の箱2
    //----------------------------------------
    registanim__works_bg_box_left2() {
        let eff_classs = document.querySelectorAll('[data-eff="worksbg-boxl2"]');
        if( eff_classs.length <= 0 ) return;
        eff_classs.forEach((target) => {
                var tar = target;
                gsap.set(tar, { opacity: 0.3, rotate : 0 });
                const tl = gsap.timeline();
                tl.to(
                    tar, {
                        rotate : -360,
                        duration: 50,
                        opacity : 0.3,
                        ease: Linear.easeNone,
                        repeat: -1
                    }
                );
        });
        
    }

    //----------------------------------------
    //  works bg box
    //  ポートフォリオ : works右の箱
    //----------------------------------------
    registanim__works_bg_box_right() {
        let eff_classs = document.querySelectorAll('[data-eff="worksbg-boxr"]');
        if( eff_classs.length <= 0 ) return;
        eff_classs.forEach((target) => {
                var tar = target;
                gsap.set(tar, { opacity: 0.3, rotate : 0 });
                const tl = gsap.timeline();
                tl.to(
                    tar, {
                        rotate : -360,
                        duration: 30,
                        opacity : 0.3,
                        repeat: -1
                    }
                );
        });
    }
    //----------------------------------------
    //  works bg box
    //  ポートフォリオ : works右の箱
    //----------------------------------------
    registanim__works_bg_box_right2() {
        let eff_classs = document.querySelectorAll('[data-eff="worksbg-boxr2"]');
        if( eff_classs.length <= 0 ) return;
        eff_classs.forEach((target) => {
                var tar = target;
                gsap.set(tar, { opacity: 0.3, rotate : 45 });
                const tl = gsap.timeline();
                tl.to(
                    tar, {
                        rotate : -15,
                        duration: 10,
                        opacity : 0.3,
                        ease : "sine.out",
                    }
                ).to(
                    tar, {
                        rotate : 45,
                        duration: 10,
                        opacity : 0.3,
                        ease : "sine.out"
                    }
                );
                tl.repeat( -1 );
        });
    }
    //----------------------------------------
    //  works bg box
    //  ポートフォリオ : works右の箱3
    //----------------------------------------
    registanim__works_bg_box_right3() {
        let eff_classs = document.querySelectorAll('[data-eff="worksbg-boxr3"]');
        if( eff_classs.length <= 0 ) return;
        eff_classs.forEach((target) => {
                var tar = target;
                gsap.set(tar, { opacity: 0.3, rotate : 10, scale :0.8 });
                const tl = gsap.timeline();
                tl.to(
                    tar, {
                        rotate :  0,
                        duration: 3,
                        scale: 1.0,
                        opacity : 0.3,
                        ease : "linear",
                    }
                ).to(
                    tar, {
                        rotate :  -10,
                        duration: 5,
                        scale: 0.8,
                        opacity : 0.3,
                        ease : "sine.out",
                    }
                ).to(
                    tar, {
                        rotate :  0,
                        duration: 3,
                        scale: 1.0,
                        opacity : 0.3,
                        ease : "linear",
                    }
                ).to(
                    tar, {
                        rotate : 10,
                        duration: 10,
                        scale : 0.8,
                        opacity : 0.3,
                        ease : "sine.out"
                    }
                );
                tl.repeat( -1 );
        });
    }


    //----------------------------------------
    //  ポートフォリオ : パララックス
    //----------------------------------------
    registanim__parallax_simple() {
        let eff_classs = document.querySelectorAll('[data-eff="gsapparallax"]');
        if( eff_classs.length <= 0 ) return;
        eff_classs.forEach((target) => {
            var tar = target;
            const y = tar.getAttribute('data-y') || -100;
            gsap.fromTo(
                tar,
                {   
                    y:y,
                    scale:1.2
                },
                {
                    //  反対方向に移動→上から下
                    y: -y,    
                    scrollTrigger: {
                        trigger: ".l-hero",
                        //start: 'top bottom',
                        //end: 'bottom top',
                        scrub: 1,
                        //markers: true,
                    }
                }
            )
        });
    }

}
