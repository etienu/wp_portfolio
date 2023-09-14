//console.log("gsapよんでる");
//let ctbg = document.querySelectorAll('.c-title__bg__modan');
//let ctbgspan = document.querySelectorAll('.c-title__bg__modan');
//gsap.to('.c-title__bg__modan span', 1, { y: 50, repeat: -1 });

//backdrop-filter: blur(10px);
//----------------------------------------
//  ヒーローページ BackGround
//----------------------------------------
/*
let herobg = document.querySelectorAll('.l-hero__background');
let herobgb = document.querySelectorAll('.l-hero__background-boader');
gsap.fromTo(herobg, { opacity: 0 }, {
    opacity: 1,
    scrollTrigger: {
        trigger: herobg,
        start: 'top center',
    }
});

gsap.fromTo(herobgb, { opacity: 0 }, {
    opacity: 1,
    duration: 4,
    scrollTrigger: {
        trigger: herobg,
        start: 'top center',
    }
});
*/

//----------------------------------------
//  c-title modan
//----------------------------------------
let textWrappers = document.querySelectorAll('.c-title__bg__modan');
textWrappers.forEach((textWrapper) => { //配列
    let bgcl = textWrapper.querySelector('span i'); //  左上角
    let bgcr = textWrapper.querySelector('span u'); //  右下角
    let bg = textWrapper.querySelector('span b');
    let text = textWrapper.querySelector('span p');
    let title = textWrapper.querySelector('.js__title');
    //gsap.to(text, 1, { y: 50, repeat: -1 });
    //    gsap.fromTo(text, 2, { x: -100 }, { rotate: 0, x: 100, backgroundColor: '#f00', ease: 'Power4.easeOut', repeat: -1, });
    gsap.fromTo(bgcl, { autoAlpha: 0, rotate: -270, scale: 0.5 }, {
        autoAlpha: 1,
        rotate: 0,
        scale: 1,
        duration: 1,
        scrollTrigger: {
            trigger: bg,
            start: 'top center+=50%',
        }
    });
    gsap.fromTo(bgcr, { autoAlpha: 0, rotate: 270, scale: 0.5 }, {
        autoAlpha: 1,
        rotate: 0,
        scale: 1,
        duration: 1,
        scrollTrigger: {
            trigger: bg,
            start: 'top center+=50%',
        }
    });

    //  背景
    gsap.fromTo(bg, { autoAlpha: 0, x: '10%' }, {
        autoAlpha: 1,
        duration: 3,
        x: 0,
        ease: 'Power4.easeOut',
        scrollTrigger: {
            trigger: bg,
            start: 'top center+=50%',
        }
    });

    gsap.fromTo(text, { x: '-110%' }, {
        rotate: 0,
        x: 0,
        ease: 'Power4.easeOut',
        duration: 2,
        scrollTrigger: {
            trigger: text, //アニメーションが始まるトリガーとなる要素
            start: 'top center+=20%', //アニメーションが始まる位置を指定
            end: "+=500"
        }
    });

    /*
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: textWrapper,
            start: 'top 95%',
        }
    });
    tl
        .to(textWrapper, { '--scaleX': 1, duration: .4 })
        .to(text, { y: '0%' }, '-=.25')
*/
    //  フォント広げるのは面倒になるだけだし格好よくない
    /*
    gsap.fromTo(title, { fontSize: 36 }, {
        fontSize: 48,
        duration: 1,
        scrollTrigger: {
            trigger: title,
            start: 'top center+=10%'
        }
    });
    */
})



/*
//----------------------------------------
//  ヘッダー : li
//----------------------------------------
let obj_header_navs = document.querySelectorAll('.p-header__nav ul li a');
obj_header_navs.forEach((obj_header_nav) => { //配列
    //    console.log(obj_header_nav);
    let bgli = obj_header_nav; //.querySelector('ul li'); //  項目
    let bgcl = bgli.querySelector('i'); //  左上角
    let bgcr = bgli.querySelector('u'); //  右下角
    //    console.log(bgcl);
    let anim_cl = gsap.fromTo(bgcl, { opacity: 0, autoAlpha: 0, rotate: -270, scale: 0.5 }, { opacity: 1, autoAlpha: 1, rotate: 0, scale: 1, duration: 0.5 });
    let anim_cr = gsap.fromTo(bgcr, { autoAlpha: 0, rotate: 270, scale: 0.5 }, {
        autoAlpha: 1,
        rotate: 0,
        scale: 1
            //duration: 1
    });

    var tl = new TimelineLite({ paused: true });
    tl.to(bgcl, 0.2, { backgroundColor: "yellow" })
        .to(bgcl, 0.2, { height: 100 })
        .to(bgcl, 0.2, { color: "red", rotation: 360, y: 40 })
    bgcl.animation = tl;

    bgli.addEventListener("mouseenter", () => anim_cl.animation.play());
    bgli.addEventListener("mouseleave", () => anim_cl.reverse());
    bgli.addEventListener("mouseenter", () => anim_cr.play());
    bgli.addEventListener("mouseleave", () => anim_cr.reverse());
})
*/
//----------------------------------------
//  ヘッダー : li
//----------------------------------------
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
    let li_a_i = h_lia.querySelector('i'); //  左上角
    let li_a_u = h_lia.querySelector('u'); //  右下角
    let li_a_span = h_lia.querySelector('span'); //  aの下の文字列格納span
    let li_a_spans = li_a_span.querySelectorAll('span'); //  spanの下の分割されたspan

    //console.log(h_lia);
    //console.log(li_a_i);
    //console.log(li_a_u);

    //    const jsDot = '.js-dot-wrap > span'; // ドットを取得
    //    const jsBg = '.js-dot-bg'; // 黒い背景を取得
    //    const jsText = '.js-title span'; // テキストを取得

    // 初期の状態(取ってきたドット・テキストは最初は非表示)
    // ドットとテキストを非表示
    gsap.set([li_a_i, li_a_u], { opacity: 0 });
    //gsap.set([li_a_spans], { color: "white" });
    // ドットの最初の位置を上40pxに配置
    //gsap.set(jsDot, {      y: -40    });
    // テキストの最初の位置を下40pxに配置
    //gsap.set(li_a_spans, { y: 30 });
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
            duration: 0.3, // 0.1秒かけてアニメーション
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