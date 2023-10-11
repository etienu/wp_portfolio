//----------------------------------------
//  surface : 「ふわっと出る」
//----------------------------------------
// gsapは恐らくtransitionと干渉する。
{
    let eff_classs = document.querySelectorAll('.js-surface__up');
    eff_classs.forEach((target) => {
        let st_start = "top center";
        if (target.classList.contains('ts_c30')) {
            st_start += '+=30%';
        } else if (target.classList.contains('ts_c40')) {
            st_start += '+=40%';
        } else if (target.classList.contains('ts_c50')) {
            st_start += '+=50%';
        } else if (target.classList.contains('ts_c60')) {
            st_start += '+=60%';
        } else if (target.classList.contains('ts_c70')) {
            st_start += '+=70%';
        } else {
            st_start += '+=50%';
        }

        gsap.fromTo(target, { autoAlpha: 0, rotate: 0, scale: 1, y: 100 }, {
            y: 0,
            autoAlpha: 1,
            rotate: 0,
            scale: 1,
            duration: 1,
            scrollTrigger: {
                trigger: target,
                start: st_start,
            }
        });
    });
}
//----------------------------------------
//  surface : 「ふわっと出る」グループ
//----------------------------------------
{
    let eff_classs = document.querySelectorAll('.js-surface__upgroup');
    eff_classs.forEach((target) => {
        let divs = target.querySelectorAll('div');
        gsap.fromTo(divs, { autoAlpha: 0, rotate: 0, scale: 0.9, y: 20 }, {
            y: 0,
            autoAlpha: 1,
            rotate: 0,
            scale: 1,
            duration: 1,
            scrollTrigger: {
                trigger: target,
                start: 'top center+=50%',
            },
            stagger: {
                amount: 1, //アニメーション間隔の合計時間
                from: "start", // 動作を始める要素を指定
                ease: "sine.in"
            }

        });
    });
}

//----------------------------------------
//  surface : 「中央集合」
//----------------------------------------
{
    let eff_classs = document.querySelectorAll('.js-surface__gather-center');
    eff_classs.forEach((target) => {
        let divs = target.querySelectorAll('div');
        gsap.fromTo(divs, { rotate: 0, scale: 0.9, x: -1000 }, {
            x: 0,
            //autoAlpha: 1,
            rotate: 0,
            scale: 1,
            duration: 1,
            scrollTrigger: {
                trigger: target,
                start: 'top center+=50%',
            }

        });
    });
}

//----------------------------------------
//  surface : 「左から右」
//----------------------------------------
{
    let eff_classs = document.querySelectorAll('.js-surface__ltor');
    eff_classs.forEach((target) => {
        gsap.fromTo(target, { autoAlpha: 0, rotate: -45, scale: 0.9, x: -1000 }, {
            x: 0,
            autoAlpha: 1,
            rotate: 0,
            scale: 1,
            duration: 1,
            scrollTrigger: {
                trigger: target,
                start: 'top center+=50%',
            }

        });
    });
}

//----------------------------------------
//  surface : 「左から右」
//----------------------------------------
{
    let eff_classs = document.querySelectorAll('.js-surface__rtol');
    eff_classs.forEach((target) => {
        gsap.fromTo(target, { autoAlpha: 0, rotate: 45, scale: 0.9, x: 1000 }, {
            x: 0,
            autoAlpha: 1,
            rotate: 0,
            scale: 1,
            duration: 1,
            scrollTrigger: {
                trigger: target,
                start: 'top center+=50%',
            }

        });
    });
}



//----------------------------------------
//  surface : ゲーム文字列
//----------------------------------------
{
    let eff_classs = document.querySelectorAll('.js-surface__gametext');
    //文字列（テキスト）を分割しspanで囲む
    eff_classs.forEach(target => {
        let newText = '';
        //        const text = target.textContent;  //  文字列のみ
        //const text = target.innerText;    //  改行のみ
        const text = target.innerHTML; //  タグあり
        //console.log(text);
        const result_br = text.split('<br>');
        for (let j = 0; j < result_br.length; j++) {
            //console.log("[j]" + j + " [text]" + result_br[j]);
            const result = result_br[j].split('');
            for (let i = 0; i < result.length; i++) {
                newText += '<b>' + result[i] + '</b>';
            }
            newText += '<br>';
        }
        target.innerHTML = newText;
    });

    eff_classs.forEach((target) => {
        let spans = target.querySelectorAll('b');
        gsap.fromTo(spans, { autoAlpha: 0, rotate: 0, scale: 1, y: 100 }, {
            y: 0,
            autoAlpha: 1,
            rotate: 0,
            scale: 1,
            duration: 1,
            scrollTrigger: {
                trigger: target,
                start: 'top center+=50%',
            },
            stagger: {
                amount: 2, //アニメーション間隔の合計時間
                from: "start", // 動作を始める要素を指定
                ease: "sine.in"
            }

        });
    });
}


//----------------------------------------
//  surface : ヒーローセクション専用
//----------------------------------------
/*
{
    let eff_classs = document.querySelectorAll('.js-surface__heroheading');
    eff_classs.forEach((target) => {
        let divs = target.querySelectorAll('div');
        console.log(divs);

        gsap.set([divs[0], divs[1], divs[2], divs[3]], { opacity: 0 });
        gsap.set(divs[0], { y: 160 });
        gsap.set(divs[1], { y: 120 });
        gsap.set(divs[2], { y: 80 });
        gsap.set(divs[3], { y: 40 });
        const tl = gsap.timeline();
        tl.to(
            divs[0], {
                rotate: 0,
                duration: 0.5,
                opacity: 1,
            }
        ).to(
            divs[0], { y: 0 },
        ).to(
            divs[1], {
                duration: 0.5,
                opacity: 1
            },
            '+=0.5'
        ).to(
            divs[1], { y: 0 },
        ).to(
            divs[2], {
                duration: 0.5,
                opacity: 1
            },
            '+=0.5'
        ).to(
            divs[2], { y: 0 },
        ).to(
            divs[3], {
                duration: 0.5,
                opacity: 1
            },
            '+=0.5'
        ).to(
            divs[3], { y: 0 },
            '+=0.5'
        );
    });
}
*/
//----------------------------------------
//  surface : ヒーローセクション専用 : 2 演出含む
//----------------------------------------
{
    let eff_classs = document.querySelectorAll('.js-surface__heroheading2');

    eff_classs.forEach((target) => {
        let divs = target.querySelectorAll('div');
        //  要素内文字をspanで分割
        let newText = "";
        let spanText = divs[0].innerHTML;
        spanText.split('').forEach((char)=>{
            newText += '<span>' + char + '</span>';
        });
        divs[0].innerHTML = newText;

        divs.forEach((item) => {
            gsap.set(item, { opacity: 0, marginTop: "-40px" });
        });
        let spans = divs[0].querySelectorAll('span');
        gsap.to(spans,{duration:0.5,autoAlpha:1,rotateY:'0deg',
            stagger:{
                each:0.1
            },
            scrollTrigger:{
                trigger:divs[0],
                start:'bottom bottom',
            }    
        });
        gsap.set(divs[0], { opacity: 0, marginTop: "-40px", rotate: 0 }); //  想像をカタチに
        const tl = gsap.timeline();
        tl.to(
            divs[0], { marginTop: "-40px", duration: 1, opacity: 1 },
        ).to(
            divs[0], { marginTop: "-50px", backgroundColor: "rgba(144,238,144,0.8)",padding :"0px 40px", duration: 1 },
        );
    });
}