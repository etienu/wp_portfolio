//  HTML内でjqueryスコープの関数を使用する為の、関数格納配列
//var functions = (jQuery); //[null]; //($);

//console.log("これ自体は機能してる");
//  mainというか変数定義define.js、便利関数util.jsを用意すべきでは
const isPC = 0;
const isSP = 1;
const isTab = 2;

//  userAgent確認
let div_ua = document.querySelector('.disp__userAgent');
if (div_ua) {
    div_ua.innerText = navigator.userAgent;
}


function checkUA() {
    var ua = navigator.userAgent;
    //    console.log(ua);
    // スマートフォン用の記述

    if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0)) {
        //    if ((ua.indexOf('iPhone') > 0 || ua.indexOf('Android') > 0) && ua.indexOf('Mobile') > 0) {
        //        console.log("isSP");
        return isSP;

        // タブレット用の記述
    } else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
        //        console.log("isTab");
        return isTab;

        // PC用の記述
    } else {
        //        console.log("isPC");
        return isPC;
    }
}

//  識別したbodyにclass付与
if (navigator.userAgent.indexOf('iPhone') > 0) {
    let body = document.getElementsByTagName('body')[0];
    body.classList.add('iPhone');
}
//  識別したbodyにclass付与
if (navigator.userAgent.indexOf('Macintosh') > 0) {
    let body = document.getElementsByTagName('body')[0];
    body.classList.add('Macintosh');
}

if (navigator.userAgent.indexOf('iPad') > 0) {
    let body = document.getElementsByTagName('body')[0];
    body.classList.add('iPad');
}

if (navigator.userAgent.indexOf('Android') > 0) {
    let body = document.getElementsByTagName('body')[0];
    body.classList.add('Android');
}

function getiOSVersion() {
    return parseFloat(
        ('' + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ''])[1])
        .replace('undefined', '3_2').replace('_', '.').replace('_', '')
    ) || false;
}
//  iOSのバージョンがある
if (getiOSVersion()) {
    let body = document.getElementsByTagName('body')[0];
    //body.classList.add('iOS');
}


//---------------------------------------------
//  iPhone以下の画面サイズへの対応
//  ViewPortを書き換え縮小させる
//---------------------------------------------
const adjustViewport = _executeWindowWidth => {
    const executeWindowWidth = _executeWindowWidth || 375;
    const elmViewport = document.querySelector('meta[name="viewport"]');
    const valueViewport =
        window.innerWidth < executeWindowWidth ?
        `width=${executeWindowWidth}, user-scalable=no, target-densitydpi=device-dpi` :
        'width=device-width, initial-scale=1';
    elmViewport.setAttribute('content', valueViewport);
    return;
};

window.addEventListener('DOMContentLoaded', () => {
    adjustViewport();
    // adjustViewport(360); // 引数に数値を与えれば、それがViewportの基準になる
});


/*

//  えちえぬパララックス(なんか失敗してるの作り直したほうがいい)
const eepl_bg = new eeParallax(".l-hero__background", 1);
eepl_bg.setScale(1);
eepl_bg.setAdjust(0, -150, 0);
eePEngine.add(eepl_bg);

const eepl_yoyo = new eeParallax(".top__pfi-pl-yoyo", -0.05);
eepl_yoyo.setAdjust(50, 0, 0);
eePEngine.add(eepl_yoyo);
*/

//----------------------------------------
//
//  コンテンツの処理
//
//----------------------------------------
let herobg = $('.l-hero__background');
//let aboutbg = $('.l-about__background');
const hide_herobg_position = 3000; //  スマホでPC時1000では足りない
//const hide_aboutbg_position = 1000;
jQuery(function($) {
    //--------------------------------------------------
    //      body / スクロールした時の処理
    //--------------------------------------------------
    $(window).scroll(function() {
        task__scroll__herobg();
    });

    function task__scroll__herobg() {
        var scroll = $(this).scrollTop();
        if (scroll > hide_herobg_position) {
            herobg.addClass("hide");
        } else {
            herobg.removeClass("hide");
        }
    }

});

//      ページ読み込み時の処理
$(window).on('load', function() {
    var scroll = $(this).scrollTop();
    if (scroll > hide_herobg_position) {
        herobg.removeClass("hide");
    }

});