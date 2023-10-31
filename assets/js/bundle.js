/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/mylib/adjustviewport.js":
/*!****************************************!*\
  !*** ./src/js/mylib/adjustviewport.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ adjustViewport; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
//---------------------------------------------
//
//  iPhone以下の画面サイズへの対応
//  ViewPortを書き換え縮小させる
//
//---------------------------------------------
var adjustViewport = /*#__PURE__*/function () {
  function adjustViewport() {
    _classCallCheck(this, adjustViewport);
  }

  //------------------------------------------------
  //  起動時375px以下なら375pxで固定
  //------------------------------------------------
  _createClass(adjustViewport, [{
    key: "set",
    value: function set(_executeWindowWidth) {
      var executeWindowWidth = _executeWindowWidth || 375;
      var elmViewport = document.querySelector('meta[name="viewport"]');
      var valueViewportSP_Normal = "width=".concat(executeWindowWidth, ", user-scalable=no");
      var valueViewportSP_iPhone = "width=".concat(executeWindowWidth, ", user-scalable=no, viewport-fit=cover");
      //  iPhone場合apple用の設定
      var valueViewportSP = navigator.userAgent.indexOf('iPhone') > 0 ? valueViewportSP_iPhone : valueViewportSP_Normal;
      var valueViewportPC = 'width=device-width, initial-scale=1';
      var valueViewport = window.innerWidth < executeWindowWidth ? valueViewportSP : valueViewportPC;
      if (elmViewport) {
        elmViewport.setAttribute('content', valueViewport);
      }
      return;
    }

    //------------------------------------------------
    //  resizeイベントで使用
    //  低予算爆速対応の場合使用する、デザインの固定化
    //------------------------------------------------
  }, {
    key: "task",
    value: function task() {
      //  未使用の場合
      //        return;

      var fFixed = false;
      var ww = window.outerWidth; //  ブラウザのリアル幅( リアル幅なのでリアルタイム変更に対応できる )
      //const ww = window.innerWidth; //  コンテンツ領域の幅( viewport固定したら以降そのままになってしまう )
      var elmViewport = document.querySelector('meta[name="viewport"]');
      var fixedwidth = 375;
      /*
              //  TAB時の画面固定化
              //  PCデザイン(1440px)～SPデザイン入るまでの間
              if( 768 < ww && ww <= 1440  ){
                  fFixed = true;
                  fixedwidth = 1440;
              }
      
              //  SP時の画面固定化
              //  SP時(768px以下)デザインの完全固定化
              else if(  ww <= 768  ){
                  fFixed = true;
                  fixedwidth = 375;
              }
      */
      //  SP時(375px以下)デザインの縮小方向固定化
      //        else if(  ww <= 375  ){
      if (ww <= 375) {
        fFixed = true;
        fixedwidth = 375;
      }

      //  固定範囲なので固定する / 固定しない時は通常に戻す
      var valueViewport = fFixed ? "width=".concat(fixedwidth, ", user-scalable=no") : 'width=device-width, initial-scale=1';
      if (elmViewport) {
        elmViewport.setAttribute('content', valueViewport);
      }
    }
  }]);
  return adjustViewport;
}();


/***/ }),

/***/ "./src/js/mylib/content/accordion.js":
/*!*******************************************!*\
  !*** ./src/js/mylib/content/accordion.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ accordion; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// GSAP使用
//------------------------------------------------------------
//  
//  アコーディオンを閉じる時のアニメーション
//
//------------------------------------------------------------
var closingAnim = function closingAnim(content, element) {
  return gsap.to(content, {
    height: 0,
    opacity: 0,
    duration: 0.4,
    //ease: "power3.out",
    overwrite: true,
    onComplete: function onComplete() {
      // アニメーションの完了後にopen属性を取り除く( <details>用 )
      element.removeAttribute("open");
    }
  });
};

//------------------------------------------------------------
//
//  アコーディオンを開く時のアニメーション
//
//------------------------------------------------------------
var openingAnim = function openingAnim(content) {
  return gsap.fromTo(content, {
    height: 0,
    opacity: 0
  }, {
    height: "auto",
    opacity: 1,
    duration: 0.4,
    ease: "power3.out",
    overwrite: true
  });
};

//----------------------------------------
//  アコーディオン処理
//  
//----------------------------------------
var accordion = /*#__PURE__*/function () {
  function accordion() {
    _classCallCheck(this, accordion);
  }

  //----------------------------------------
  //
  //  GSAPを使ってアコーディオンのアニメーションを制御
  //
  //----------------------------------------
  _createClass(accordion, [{
    key: "set_accordions__details",
    value: function set_accordions__details() {
      //  全てのdata属性"accordion-details"を取得
      //  直接<datails>タグを取得してもよい。しかし万が一他の処理と被る場合を考慮し指定している
      var details = document.querySelectorAll('[data-js="accordion-details"]');
      //  全detailsに対して処理
      details.forEach(function (element) {
        //  <summary> Q 質問部分
        var summary = element.querySelector('[data-js="accordion-summary"]');
        //  <div> A 出現する返答部分
        var content = element.querySelector('[data-js="accordion-content"]');

        //  <summary>部分にクリックイベント追加
        summary.addEventListener("click", function (event) {
          // デフォルトの挙動を無効化
          event.preventDefault();
          //  "data-open"と"open"の二種類の属性の違い
          //  "open" : <details>の開閉機能に関わるフラグ
          //  "data-open" : アイコンや開閉のアニメーション切り替えフラグ
          //  タイミングが違う

          //  クリック時data-openがtrueならアコーディオン閉じる処理
          if (element.dataset["open"] == "true") {
            // アイコン操作用フラグを倒す
            element.dataset["open"] = "false";
            content.dataset["open"] = "false";
            // アニメーション実行
            closingAnim(content, element).restart();

            //  クリック時data-openがfalseならアコーディオン開く処理
          } else {
            //  必要とあらば他の全detailsを閉じる処理

            // アイコン操作用フラグを立てる
            element.dataset["open"] = "true";
            content.dataset["open"] = "true";
            // 属性"open"を付与
            element.setAttribute("open", "true");

            // アニメーション実行
            openingAnim(content).restart();
          }
        });
      });
    }

    //----------------------------------------
    //  各種イベントの登録
    //----------------------------------------
  }, {
    key: "eventRegistration",
    value: function eventRegistration() {
      //  全アコーディオンを取得して設定
      this.set_accordions__details();
    }
  }]);
  return accordion;
}();


/***/ }),

/***/ "./src/js/mylib/content/btn_gototop.js":
/*!*********************************************!*\
  !*** ./src/js/mylib/content/btn_gototop.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ buttonGotoTop; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
//========================================================
//
//  コンテンツ / トップに戻るボタン
//  読み込み
//  import buttonGotoTop from './content/btn_gototop';
//  初期化
//  const btnGotoTop = new buttonGotoTop(ボタンのクラス, 切替Y位置);
//  const btnGotoTop = new buttonGotoTop('.js-gotoTop', 80);
//  使い方
//  window.addEventListener('scroll', () => {
//    btnGotoTop.task();
//  });
//
//========================================================
var buttonGotoTop = /*#__PURE__*/function () {
  function buttonGotoTop(i_id, i_overPosition) {
    _classCallCheck(this, buttonGotoTop);
    this.btn = document.querySelector(i_id);
    this.overPosition = i_overPosition;
    this.init();
  }
  _createClass(buttonGotoTop, [{
    key: "init",
    value: function init() {
      this.task();
    }

    //  指定Y位置超えてるか確認
  }, {
    key: "checkOver",
    value: function checkOver() {
      return document.documentElement.scrollTop > this.overPosition;
    }

    //  hideを消して表示
  }, {
    key: "disp",
    value: function disp() {
      this.btn.classList.remove("hide");
    }

    //  hideを付けて非表示
  }, {
    key: "hide",
    value: function hide() {
      this.btn.classList.add("hide");
    }

    //  スクロールイベント内で処理
  }, {
    key: "task",
    value: function task() {
      this.checkOver() ? this.disp() : this.hide();
    }

    //  イベント登録
  }, {
    key: "eventRegistration",
    value: function eventRegistration() {
      //  クリックイベントセット
      this.btn.addEventListener("click", function () {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  }]);
  return buttonGotoTop;
}();


/***/ }),

/***/ "./src/js/mylib/content/btn_humburger.js":
/*!***********************************************!*\
  !*** ./src/js/mylib/content/btn_humburger.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ buttonHumburger; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
//----------------------------------------
//  ハンバーガー
//----------------------------------------
var buttonHumburger = /*#__PURE__*/function () {
  function buttonHumburger(i_id, i_header, i_spmenu) {
    _classCallCheck(this, buttonHumburger);
    this.btn = document.querySelector(i_id);
    this.header = document.querySelector(i_header);
    this.spmenu = document.querySelector(i_spmenu);
  }

  //----------------------------------------
  // スクロールを禁止にする関数
  //----------------------------------------
  _createClass(buttonHumburger, [{
    key: "disableScroll",
    value: function disableScroll(event) {
      event.preventDefault();
    }
  }, {
    key: "addScrollStop",
    value: function addScrollStop() {
      document.addEventListener('touchmove', this.disableScroll, {
        passive: false
      });
      document.addEventListener('mousewheel', this.disableScroll, {
        passive: false
      });
    }
  }, {
    key: "removeScrollStop",
    value: function removeScrollStop() {
      document.removeEventListener('touchmove', this.disableScroll, {
        passive: false
      });
      document.removeEventListener('mousewheel', this.disableScroll, {
        passive: false
      });
    }

    //----------------------------------------
    //  ハンバーガー開く
    //----------------------------------------
  }, {
    key: "open",
    value: function open() {
      this.btn.classList.toggle("open");
      this.spmenu.classList.toggle("open");
      this.header.classList.toggle("open");
      //  開いた スクロール停止
      if (this.btn.classList.contains("open")) {
        gsap.fromTo('.p-spmenu__background .stripe', {
          x: "100%"
        }, {
          x: "0%",
          stagger: {
            each: 0.1,
            from: "end"
          }
        });
        gsap.fromTo('.p-spmenu__inner', {
          opacity: 0
        }, {
          opacity: 1,
          duration: 1.5
        });
        this.addScrollStop();
      }
      //  閉じた スクロール解除
      else {
        gsap.fromTo('.p-spmenu__background .stripe', {
          x: "0%"
        }, {
          x: "100%",
          stagger: {
            each: 0.1,
            from: "end"
          }
        });
        gsap.fromTo('.p-spmenu__inner', {
          opacity: 1
        }, {
          opacity: 0
        });
        this.removeScrollStop();
      }
    }

    //----------------------------------------
    //  ハンバーガー閉じる( 主にメニュークリック時 )
    //----------------------------------------
  }, {
    key: "close",
    value: function close() {
      //  開いている場合
      if (this.btn.classList.contains("open")) {
        //console.log("SP→タブなので強制的に閉じます");
        this.btn.classList.remove("open");
        this.spmenu.classList.remove("open");
        this.header.classList.remove("open");
        gsap.fromTo('.p-spmenu__background .stripe', {
          x: "0%"
        }, {
          x: "100%",
          stagger: {
            each: 0.1,
            from: "end"
          }
        });
        gsap.fromTo('.p-spmenu__inner', {
          opacity: 1
        }, {
          opacity: 0
        });
        // スクロール解除
        this.removeScrollStop();
      }
    }

    //----------------------------------------
    //  PC時強制的に閉じる
    //----------------------------------------
  }, {
    key: "isPC_close",
    value: function isPC_close() {
      //  ブラウザのリアル幅( リアル幅なのでリアルタイム変更に対応できる )
      var ww = window.outerWidth;
      //  commonを使ってサイトの分岐幅を設定しておくこと
      //  タブレット以上なら強制的に閉じる処理
      if (768 <= ww) {
        this.close();
      }
    }

    //----------------------------------------
    //  各種イベントの登録
    //----------------------------------------
  }, {
    key: "eventRegistration",
    value: function eventRegistration(i_inner, i_ullia, i_contact) {
      var _this = this;
      //  クリックイベントセット
      this.btn.addEventListener("click", function () {
        _this.open();
      });
      //  ul liのメニューがクリックされたら閉じる
      var str_ullia = i_inner + " " + i_ullia;
      var spmenu_li_a = document.querySelectorAll(str_ullia);
      spmenu_li_a.forEach(function (lia) {
        lia.addEventListener("click", function () {
          _this.close();
        });
      });

      //  コンタクトボタンが押されたら閉じる
      var str_contact = i_inner + " " + i_contact;
      //console.log(str_contact);
      var spmenu_contact = document.querySelectorAll(str_contact);
      spmenu_contact.forEach(function (lia) {
        lia.addEventListener("click", function () {
          _this.close();
        });
      });
    }
  }]);
  return buttonHumburger;
}();


/***/ }),

/***/ "./src/js/mylib/content/common.js":
/*!****************************************!*\
  !*** ./src/js/mylib/content/common.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Common; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
//----------------------------------------
//  共有変数グループ
//----------------------------------------
var Common = /*#__PURE__*/function () {
  function Common() {
    _classCallCheck(this, Common);
    //  ワードプレス : function.phpで請け渡しているワードプレスの配列
    this.wp_imagePath = wp_var.imgpath; //  画像パス
    this.wp_rootpath = wp_var.rootpath; //  ルートパス
    this.wp_template = wp_var.templatepath;

    //  静的サイト : header.phpで受け渡しているワードプレス画像のパス
    //this.wp_imagePath = wp_imgpath;     //  画像パス
    //this.wp_rootpath = wp_rootpath;    //  ルートパス
    this.wp_csspath = this.wp_rootpath + "/assets/css/";
    this.wp_fontpath = this.wp_rootpath + "/assets/webfonts/";

    //  header.phpで受け渡しているワードプレスのテンプレートファイル名
    //this.wp_template = wp_template;
    //  recaptchaのキー
    this.reCAPTCHA_site_key = "6Ld-v70lAAAAAH-rR-4E3UJISYwe2Kd7ihL7FM20";
  }

  //------------------------------------------------
  //  指定要素内の指定タグをspanで分割する
  //------------------------------------------------
  _createClass(Common, [{
    key: "splitTarget_span",
    value: function splitTarget_span(i_target, i_tag, i_reverse) {
      var divs = i_target;
      var spanText = null;
      //  タグが指定されていない場合
      if (i_tag == "" || i_tag == null) {
        //console.log("タグ指定なし : " );
        //console.log(i_target );
        divs = i_target;
        //  指定されている場合は取得
        spanText = divs.innerHTML;
      } else {
        //console.log("タグ指定あり : " + i_tag );
        divs = i_target.querySelector(i_tag);
        console.log(i_target);
        spanText = divs.innerHTML;
      }
      //  要素内文字をspanで分割
      var newText = "";
      spanText.split('').forEach(function (char) {
        //  反転 :全て頭に入れ込む
        if (i_reverse) {
          newText = '<span>' + char + '</span>' + newText;
        } else {
          newText += '<span>' + char + '</span>';
        }
      });
      divs.innerHTML = newText;
      return divs;
    }

    //----------------------------------------
    //  各種イベントの登録
    //----------------------------------------
  }, {
    key: "eventRegistration",
    value: function eventRegistration() {}
  }]);
  return Common;
}();


/***/ }),

/***/ "./src/js/mylib/content/consolejoke.js":
/*!*********************************************!*\
  !*** ./src/js/mylib/content/consolejoke.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ consolejoke; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
//========================================================
//
//  consoleログに出力する ネタ
//
//========================================================
var consolejoke = /*#__PURE__*/function () {
  function consolejoke() {
    _classCallCheck(this, consolejoke);
    this.common = null;
  }
  _createClass(consolejoke, [{
    key: "task",
    value: function task() {}
  }, {
    key: "toDataURL",
    value: function toDataURL(src, callback) {
      var image = new Image();
      image.crossOrigin = 'Anonymous';
      image.onload = function () {
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        canvas.height = this.naturalHeight;
        canvas.width = this.naturalWidth;
        context.drawImage(this, 0, 0);
        var dataURL = canvas.toDataURL('image/png');
        callback(dataURL);
      };
      image.src = src;
    }

    /*
        JavaScript Consoleに面白い出力をしているサービス
        https://qiita.com/oohira/items/6c30bdf3636a134cf119
    
        consoleで画像表示は2022年には使えなくなっていた？
        https://shigurezuki.jp/articles/console.log-img
        ・urlが使用不可になり、data64変換すれば使用可能
    
        画像をdata64に変換する方法
        https://www.delftstack.com/ja/howto/javascript/convert-an-image-into-base64-string-using-javascript/
    */
    //  イベント登録
  }, {
    key: "eventRegistration",
    value: function eventRegistration(i_common) {
      //  共有変数クラスの確保
      this.common = i_common;
      //  画像のURL
      var imgurl = this.common.wp_imagePath;
      var sizew = 400;
      var sizeh = 256;

      //  送信完了ページ
      if (this.common.wp_template == "page-contact-complete.php") {
        imgurl += 'console/ari.png';
        sizew = 300;
        sizeh = 534;
      }
      //  通常時
      else {
        var random = Math.floor(Math.random() * 2);
        //  ランダム画像
        switch (random) {
          case 0:
            imgurl += 'console/otu.png';
            break;
          case 1:
            imgurl += 'console/kyuukei.png';
            sizew = 200;
            sizeh = 250;
            break;
          default:
            imgurl += 'console/otu.png';
            break;
        }
      }
      var imgdataurl = "";
      //  画像のbase64変換
      this.toDataURL(imgurl, function (dataURL) {
        imgdataurl = dataURL;
        var txt_css = 'background-image: ';
        txt_css += 'url("' + imgdataurl + '");';
        txt_css += ' background-size: contain; background-repeat : no-repeat; background-position : bottom; ';
        txt_css += 'padding: calc(' + sizeh + 'px / 2) calc(' + sizew + 'px / 2); color : transparent;  border-bottom: solid 8px lightgreen;';
        //  画像をconsoleに出力
        console.log('%c ', txt_css);
      });
    }
  }]);
  return consolejoke;
}();


/***/ }),

/***/ "./src/js/mylib/content/contactform.js":
/*!*********************************************!*\
  !*** ./src/js/mylib/content/contactform.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ contactForm; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
//========================================================
//
//  コンタクトフォーム
//
//========================================================
var contactForm = /*#__PURE__*/function () {
  function contactForm() {
    var _this = this;
    _classCallCheck(this, contactForm);
    //--------------------------------------------------
    //  「に同意して送信」と連動するチェックボックス反応
    //--------------------------------------------------
    //  イベント登録
    _defineProperty(this, "eventRegistration", function (i_common) {
      //  共有変数クラスの確保
      _this.common = i_common;
      if (!_this.pfcf_form) return;
      _this.pfcf_form.addEventListener('submit', function (e) {
        var ret = _this.check_cfi_all(_this);
      });

      // ラベルに乗った
      if (_this.pp_cpl) {
        _this.pp_cpl.addEventListener('mouseenter', function () {
          _this.cci.addClass("hover");
        });
        //  ラベルから離れた
        _this.pp_cpl.addEventListener('mouseleave', function () {
          _this.cci.removeClass("hover");
        });
      }
      // 疑似チェックボックスに乗った
      if (_this.cci) {
        _this.cci.addEventListener('mouseenter', function () {
          _this.pp_cpl.addClass("hover");
          _this.cci.addClass("hover");
        });
        // 疑似チェックボックスから離れた
        _this.cci.addEventListener('mouseleave', function () {
          _this.pp_cpl.removeClass("hover");
          _this.cci.removeClass("hover");
        });
      }
      //--------------------------------------------------
      //      モーダルリンクをクリック
      //--------------------------------------------------
      if (_this.mdlpp_open) _this.mdlpp_open.addEventListener('click', function () {
        //ボタンをクリックしたら
        //        console.log("モーダルクリック");
        var jsccn = document.querySelector("input[name='your-check']");
        jsccn.setAttribute("disabled", true);
        thid.mdlpp.classList.add("p-mdlpp__open"); // modalクラスにopenクラス付与
        thid.mdlpp_overlay.classList.add("p-mdlpp__open"); // overlayクラスにopenクラス付与
        //  スクロールバーを隠す前にバーの幅調べる
        var scrollBarWidth = window.innerWidth - document.body.clientWidth;
        //        console.log("[sbw]" + scrollBarWidth + " : (" + window.innerWidth + ") - (" + document.body.clientWidth + ")");
        _this.body.style.paddingRight = scrollBarWidth + 'px';
        _this.header.style.paddingRight = scrollBarWidth + 'px';
        _this.body.style.overflowY = 'hidden'; // 本文の縦スクロールを無効
        jsccn.attr("disabled", false);
      });
      //  ×ボタンをクリックしたら
      if (_this.mdlpp_close) _this.mdlpp_close.addEventListener('click', function () {
        _this.close_modalpp();
      });
      //  オーバーレイをクリックしたら
      if (_this.mdlpp_overlay) _this.mdlpp_overlay.addEventListener('click', function () {
        _this.close_modalpp();
      });
      //--------------------------------------------------------
      //  change処理  ContactFormInput
      //--------------------------------
      //  お名前
      _this.in_yourname.addEventListener('change', function () {
        _this.judge_cfi_name();
      });
      // メールアドレス
      _this.in_yourmail.addEventListener('change', function () {
        _this.judge_cfi_email();
      });
      // 問い合わせ内容
      // テキストエリアはhtmlのタグにjsを入れて判定する
      if (_this.in_yourmessage) {
        _this.in_yourmessage.addEventListener('change', function () {
          _this.judge_cfi_message();
        });
        _this.in_yourmessage.addEventListener('keyup', function () {
          _this.judge_cfi_message();
        });
      }
      //--------------------------------
      //  チェックボックス
      if (_this.in_yourcheck) _this.in_yourcheck.addEventListener('change', function () {
        _this.judge_cfi_checkbox();
      });

      //--------------------------------
      //作成したrecaptha関数をフォームデータ送信時に実行されるように設定
      var form_id_contact = document.getElementById("id_contact");
      if (form_id_contact) {
        form_id_contact.addEventListener('submit', function (e) {
          _this.grc_sendFormData(_this.common, e);
        });
      }
    });
    // eventRegistration END
    //--------------------------------
    //  モーダルを閉じる
    //--------------------------------
    _defineProperty(this, "close_modalpp", function () {
      //        console.log("モーダルクローズ");
      _this.mdlpp.classList.remove("p-mdlpp__open"); // overlayクラスからopenクラスを外す
      _this.mdlpp_overlay.classList.remove("p-mdlpp__open"); // overlayクラスからopenクラスを外す
      _this.body.style.overflowY = 'auto'; // 本文の縦スクロールを有効
      _this.body.style.paddingRight = '0px';
      _this.header.style.paddingRight = '0px';
    });
    //  変数
    //  メールアドレス正規表現(Regular expressions)
    this.regex = /^[a-zA-Z0-9_+-]+(\.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
    this.rx_tel = /^0\d{9,10}$/;
    this.CFI_NONE = 0; // 入力が空
    this.CFI_OK = 1; //  入力受付
    this.CFI_WARNING = 2; //  入力内容に問題

    this.id_ContactName = document.querySelector('#js_contact_name');
    this.id_ReqName = document.querySelector('#req-name');
    this.id_ContactEMail = document.querySelector('#js_contact_email');
    this.id_ReqEMail = document.querySelector('#req-email');
    this.id_ReqEMail2 = document.querySelector('#req-email2');
    this.id_ContactCheck = document.querySelector('#js_contact_check');
    this.id_ContactMessage = document.querySelector('#js_contact_message');
    this.id_ReqMessage = document.querySelector('#req-message');
    this.pp_cpl = document.querySelector('.p-contact__form-checkpplabel');
    this.cci = document.querySelector('.p-common-check-icon');
    this.pfcf_form = document.querySelector('#id_contact');
    this.body = document.querySelector('body');
    this.header = document.querySelector('.header');
    this.mdlpp = document.querySelector('#js-mdlpp');
    this.mdlpp_overlay = document.querySelector('#js-mdlpp-overlay');
    this.mdlpp_close = document.querySelector('#js-mdlpp-close');
    this.mdlpp_open = document.querySelector('#js-mdlpp-open');
    this.pointY = 0;
    this.in_yourname = document.querySelector('input[name="your-name"]');
    this.in_yourmail = document.querySelector('input[name="your-email"]');
    this.in_yourmessage = document.querySelector('textarea[name="your-message"]');
    this.in_yourcheck = document.querySelector('input[name="your-check"]');
    this.in_submit = document.querySelector("input[name='your-submit']");
    this.bn_submit = document.querySelector("button[name='your-submit']");
    this.init();
  }

  //  javaScript
  _createClass(contactForm, [{
    key: "init",
    value: function init() {
      var elements = document.getElementsByTagName('button');
      var _iterator = _createForOfIteratorHelper(elements),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var element = _step.value;
          if (element.getAttribute('data-id')) {
            element.addEventListener('click', testLoad);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    //  読み込み時の処理
  }, {
    key: "loadTask",
    value: function loadTask() {
      var _this2 = this;
      var list = document.getElementsByTagName("input");
      for (var i = 0; i < list.length; i++) {
        if (list[i].type == 'email' || list[i].type == 'password' || list[i].type == 'text' || list[i].type == 'number' || list[i].type == 'tel') {
          list[i].addEventListener("keydown", function (event) {
            return _this2.submitStop(event);
          });
        }
      }
    }
  }, {
    key: "submitStop",
    value: function submitStop(e) {
      if (!e) var e = window.event;
      if (e.keyCode == 13) {
        // 現在の要素からフォーカスを外す
        document.activeElement.blur();
        return false;
      }
    }

    //--------------------------------------------------
    //      contact - 送信ボタンの有効/無効
    //--------------------------------------------------
    //  サブミットのON/OFF
  }, {
    key: "enableYourSubmit",
    value: function enableYourSubmit(i_flag) {
      var button = this.in_submit;
      if (button == null) {
        button = this.bn_submit;
      }
      //  全てのフォーム入力が正常でない場合は有効にしない
      if (!this.check_cfi_all()) {
        i_flag = false;
      }
      if (i_flag) {
        button.disabled = false;
      } else {
        button.disabled = true;
      }
      return i_flag;
    }
  }, {
    key: "check_cfi_name",
    value:
    //--------------------------------------------------------
    //  changeで使う関数 ContactFormInput
    //  お名前
    // 有効判定を返す
    function check_cfi_name() {
      var inp = this.id_ContactName;
      // 空入力
      if (inp.value === "") {
        return this.CFI_NONE;
      } else {
        return this.CFI_OK;
      }
    }
  }, {
    key: "judge_cfi_name",
    value:
    // 有効判定を返し、状態によって警告処理
    function judge_cfi_name() {
      var inp = this.id_ContactName;
      var req1 = this.id_ReqName;
      //        inp.css('border', '1px solid red');
      inp.classList.add("c-form__border-required");
      inp.classList.remove("c-form__border-normal");
      req1.style.display = 'none';
      // 空入力
      if (inp.value === "") {
        req1.style.display = 'block'; // 警告「必須項目です」
        return this.enableYourSubmit(false);
      } else {
        // なんらかの入力あり
        inp.classList.add("c-form__border-normal");
        inp.classList.remove("c-form__border-required");
        this.enableYourSubmit(true);
      }
      return true;
    }
  }, {
    key: "check_cfi_email",
    value:
    //--------------------------------
    // メール入力
    function check_cfi_email() {
      var inp = this.id_ContactEMail;
      // 空入力
      if (inp.value === "") {
        return this.CFI_NONE;
      } else {
        if (this.regex.test(inp.value)) {
          return this.CFI_OK;
        }
        return this.CFI_WARNING;
      }
    }
  }, {
    key: "judge_cfi_email",
    value:
    // 有効判定を返し、状態によって警告処理
    function judge_cfi_email() {
      var inp = this.id_ContactEMail;
      var req1 = this.id_ReqEMail;
      var req2 = this.id_ReqEMail2;
      inp.classList.add("c-form__border-required");
      inp.classList.remove("c-form__border-normal");
      req1.style.display = 'none';
      req2.style.display = 'none';
      // 空入力
      if (inp.value === "") {
        req1.style.display = 'block'; // 警告「必須項目です」
        return this.enableYourSubmit(false);
        // なんらかの入力あり
      } else {
        //  有効そうなアドレスが入力されている
        if (this.regex.test(inp.value)) {
          inp.classList.add("c-form__border-normal");
          inp.classList.remove("c-form__border-required");
          this.enableYourSubmit(true);
          //  無効な文字列
        } else {
          // console.log("[cfi_email] NG:" + inp.val());
          req2.style.display = 'block'; //  警告「有効なアドレスを入力して下さい」
          return this.enableYourSubmit(false);
        }
      }
      return true;
    }
  }, {
    key: "check_cfi_message",
    value:
    //--------------------------------------------------------
    //  お問い合わせ内容
    function check_cfi_message() {
      var inp = this.id_ContactMessage;
      // 空入力
      if (inp.value === "") {
        return this.CFI_NONE;
      } else {
        return this.CFI_OK;
      }
    }
  }, {
    key: "judge_cfi_message",
    value:
    // 有効判定を返し、状態によって警告処理
    function judge_cfi_message() {
      var inp = this.id_ContactMessage;
      var req1 = this.id_ReqMessage;
      inp.classList.add("c-form__border-required");
      inp.classList.remove("c-form__border-normal");
      req1.style.display = 'none';
      // 空入力
      if (inp.value === "") {
        req1.style.display = 'block'; // 警告「必須項目です」
        return this.enableYourSubmit(false);
        // なんらかの入力あり
      } else {
        inp.classList.add("c-form__border-normal");
        inp.classList.remove("c-form__border-required");
        this.enableYourSubmit(true);
      }
      return true;
    }
  }, {
    key: "check_cfi_checkbox",
    value:
    //--------------------------------------------------------
    //  チェックボックス
    function check_cfi_checkbox() {
      // チェックボックスだけ配列なので注意
      var inp = this.id_ContactCheck;
      return inp[0].checked;
    }
  }, {
    key: "judge_cfi_checkbox",
    value: function judge_cfi_checkbox() {
      var inp = this.id_ContactCheck;
      inp.style.border = '1px solid red';
      var ret = this.check_cfi_checkbox();
      // チェックあり
      if (ret) {
        this.judge_cfi_all();
        this.enableYourSubmit(true);

        //なし
      } else {
        return this.enableYourSubmit(false);
      }
      return true;
    }
  }, {
    key: "check_cfi_all",
    value:
    //--------------------------------
    //  インプット全部チェック
    function check_cfi_all() {
      var ret = true;
      if (this.check_cfi_name() !== this.CFI_OK) ret = false;
      if (this.check_cfi_email() !== this.CFI_OK) ret = false;
      if (this.check_cfi_message() !== this.CFI_OK) ret = false;
      return ret;
    }
  }, {
    key: "judge_cfi_all",
    value:
    //  インプット全部チェックと処理
    function judge_cfi_all() {
      var ret = true;
      if (!this.judge_cfi_name()) ret = false;
      if (!this.judge_cfi_email()) ret = false;
      if (!this.judge_cfi_message()) ret = false;
      return ret;
    }
  }, {
    key: "grc_sendFormData",
    value:
    //--------------------------------------------------
    //      google reCAPTCHA
    //--------------------------------------------------
    //reCAPTCHA認証APIを実行して返ってきたトークンをフォームに設置する関数
    function grc_sendFormData(i_common, e) {
      var reCAPTCHA_site_key = i_common.reCAPTCHA_site_key;
      //元のsubmitをいったんキャンセル
      if (e) e.preventDefault();
      //  recaptcha実行 actionは任意の文字指定(管理画面で反映される)
      grecaptcha.ready(function () {
        //  recaptcha実行 actionは任意の文字指定(管理画面で反映される)
        grecaptcha.execute(reCAPTCHA_site_key, {
          action: 'submit'
        }).then(function (token) {
          //  Add your logic to submit to your backend server here.
          //console.log('grecaptcha.execute token=' + token);
          //   recaptcha認証後のトークンをフォームで送信するために設定
          document.getElementById('grc_token').value = token;
          //console.log('フォームデータを送信');
          document.getElementById("id_contact").submit();
        }).catch(function (e) {
          console.error(e);
          alert('reCAPTCHAでのエラーが発生したためフォームデータを送信できません');
          return false;
        });
      });
    }
  }]);
  return contactForm;
}();


/***/ }),

/***/ "./src/js/mylib/content/delayloader.js":
/*!*********************************************!*\
  !*** ./src/js/mylib/content/delayloader.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DelayLoader; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
//----------------------------------------
//
//  Google Speed Insight 対策
//  遅延読み込み処理
//
//----------------------------------------
var DelayLoader = /*#__PURE__*/function () {
  function DelayLoader() {
    _classCallCheck(this, DelayLoader);
  }

  //----------------------------------------
  //  フォント CSS 読み込み
  //  本体と分けて読み込む場合
  //----------------------------------------
  _createClass(DelayLoader, [{
    key: "delayloadFont",
    value: function delayloadFont() {
      var fontUrl = this.wp_csspath + 'font.css';
      var fontcss_notosansjp = '<link href="' + this.wp_fontpath + 'googlefonts/NotoSansJP/NotoSansJP-Medium.woff2" as="font" type="font/woff2" crossorigin>';
      var fontcss_fontface = '<link href="' + this.wp_csspath + 'font.css">';
      var elmhead = document.querySelector("head");
      elmhead.insertAdjacentHTML("beforeend", fontcss_notosansjp);
      elmhead.insertAdjacentHTML("beforeend", fontcss_fontface);
    }

    //----------------------------------------
    //  各種イベントの登録
    //----------------------------------------
  }, {
    key: "eventRegistration",
    value: function eventRegistration(i_common) {
      this.common = i_common;
      this.wp_csspath = this.common.wp_csspath;
      this.wp_fontpath = this.common.wp_fontpath;
      //this.delayloadFont();
    }
  }]);
  return DelayLoader;
}();


/***/ }),

/***/ "./src/js/mylib/content/disp_loader.js":
/*!*********************************************!*\
  !*** ./src/js/mylib/content/disp_loader.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ displayLoader; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
//========================================================
//
//  コンテンツ / 読み込み画面
//
//========================================================
var displayLoader = /*#__PURE__*/function () {
  function displayLoader() {
    _classCallCheck(this, displayLoader);
    this.init();
  }

  //  javaScript
  _createClass(displayLoader, [{
    key: "init",
    value: function init() {
      var elements = document.getElementsByTagName('button');
      var _iterator = _createForOfIteratorHelper(elements),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var element = _step.value;
          if (element.getAttribute('data-id')) {
            element.addEventListener('click', testLoad);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      this.stopAllLoad();
    }
  }, {
    key: "startLoad",
    value: function startLoad(id) {
      if (!id) return;
      document.getElementById(id).style.visibility = 'visible';
      setTimeout(self.stopAllLoad, 3000);
    }
  }, {
    key: "testLoad",
    value: function testLoad() {
      var dataId = "loading";
      this.startLoad(dataId);
      this.stopAllLoad();
    }
  }, {
    key: "stopAllLoad",
    value: function stopAllLoad() {
      var elements = document.getElementsByClassName('l-loader');
      var _iterator2 = _createForOfIteratorHelper(elements),
        _step2;
      try {
        var _loop = function _loop() {
          var element = _step2.value;
          element.classList.add("hide");
          //  消しておく
          setTimeout(function () {
            element.classList.add("delete");
          }, 1000);
        };
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }

    //  イベント登録
  }, {
    key: "eventRegistration",
    value: function eventRegistration() {
      var _this = this;
      //この登録の仕方だとthisがここになっしまいエラー。
      //window.addEventListener('load', this.testLoad );
      //  ここでアロー関数で登録するとthisが使える
      window.addEventListener('load', function () {
        _this.testLoad();
      });
    }
  }]);
  return displayLoader;
}();


/***/ }),

/***/ "./src/js/mylib/content/header.js":
/*!****************************************!*\
  !*** ./src/js/mylib/content/header.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ partsHeader; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
//----------------------------------------
//  ヘッダー処理
//  現在使っているのは
//  指定位置超えたらヘッダー浮かすという処理のみ
//----------------------------------------
var partsHeader = /*#__PURE__*/function () {
  function partsHeader(i_header) {
    _classCallCheck(this, partsHeader);
    this.lheader = document.querySelector(i_header);
    this.body = document.querySelector("body");
    this.set = 200; //ウインドウ上部からどれぐら
    this.dispPosition = 0; // 120;    //  ヘッダーの位置による

    this.boxTop = new Array();
    this.current = -1;
    this.taskFloat();
  }
  _createClass(partsHeader, [{
    key: "scrollTask",
    value: function scrollTask() {
      //  ヘッダーのfloat表示
      this.taskFloat();
    }

    //--------------------------------------------------
    //      ヘッダー浮かし処理
    //--------------------------------------------------
  }, {
    key: "taskFloat",
    value: function taskFloat() {
      var scroll = document.documentElement.scrollTop;
      //  位置を超えていたらヘッダーを浮かす
      if (scroll > this.dispPosition) {
        this.lheader.classList.add("l-header__float");
        this.body.classList.add("l-header__float");
      } else {
        this.lheader.classList.remove("l-header__float");
        this.body.classList.remove("l-header__float");
      }
    }

    //--------------------------------------------------
    //  メニューアイテムにマークを付ける
    //  今使ってないけど、Yスクロールに合わせて現在セクションの
    //  メニューに印付けたい場合
    //--------------------------------------------------
  }, {
    key: "taskMenuItemMark",
    value: function taskMenuItemMark(secNum) {
      this.lia = document.querySelector(".header__nav li a");
      //  配列処理にすべき
      this.nav_card = document.querySelector("#hnav_card");
      this.nav_news = document.querySelector("#hnav_news");
      this.nav_price = document.querySelector("#hnav_price");
      this.nav_access = document.querySelector("#hnav_access");
      this.nav_contact = document.querySelector("#hnav_contact");
      if (secNum != current) {
        current = secNum;
        secNum2 = secNum + 1; //以下にクラス付与したい要素名と付与したいクラス名
        this.lia.classList.add('hdis-active');

        //位置によって個別に処理をしたい場合　
        if (current == 0) {
          this.nav_card.classList.add('hdis-active');
        } else if (current == 1) {
          this.nav_news.classList.add('hdis-active');
        } else if (current == 2) {
          this.nav_price.classList.add('hdis-active');
        } else if (current == 3) {
          this.nav_access.classList.add('hdis-active');
        } else if (current == 4) {
          this.nav_contact.classList.add('hdis-active');
        }
      }
    }
  }]);
  return partsHeader;
}();


/***/ }),

/***/ "./src/js/mylib/content/itemCounters.js":
/*!**********************************************!*\
  !*** ./src/js/mylib/content/itemCounters.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ itemcounters; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
//------------------------------------------------------------
//  
//  サイトのあらゆる要素に対応できるアイテムカウンター
//
//------------------------------------------------------------
var itemcounters = /*#__PURE__*/function () {
  function itemcounters() {
    var _this = this;
    _classCallCheck(this, itemcounters);
    //----------------------------------------
    //  PHPを実行
    //----------------------------------------
    _defineProperty(this, "runPHP", function (i_fileName, i_id) {
      var fname = _this.wptaskdir + i_fileName; //assets/task/以下のファイルを実行
      var xhr = new XMLHttpRequest(); // (1)XMLHttpRequestオブジェクトを作成
      // (2)onreadystatechangeイベントで処理の状況変化を監視
      xhr.onreadystatechange = function (data) {
        //  失敗
        if (this.readyState == 4 && this.status == 200) {
          //    console.log( this.responseText );
        }
        if (this.readyState == 4 && this.status == 500) {
          //    console.log( this.responseText );
        }
        //  成功
        //console.log("成功しとる");
      };

      xhr.open('POST', fname, true); // (3)HTTPのPOSTメソッドとアクセスする場所を指定
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); // (3)送信する内容の形式を設定
      var send_txt = 'id=' + i_id;
      xhr.send(send_txt); // (4)HTTPリクエストを送信
    });
  }
  _createClass(itemcounters, [{
    key: "set_itemcounters",
    value:
    //----------------------------------------
    //  要素によって処理を分類
    //----------------------------------------
    function set_itemcounters() {
      var ics = document.querySelectorAll('[data-jsitemcounter]');
      var runphp = this.runPHP;
      //  全に対して処理
      ics.forEach(function (el) {
        //  id取得
        var el_id = el.dataset['jsitemcounter']; //  "about_myvideo"など
        var el_id_play = el_id + "_play";
        var el_id_end = el_id + "_end";
        //  この要素が何タグが判別
        switch (el.tagName) {
          //  videoタグ
          case 'VIDEO':
            //console.log( "itemcounter : video :[ID] " + el_id );
            //  両方ともスマホで発火しない？
            //  再生時に発火
            el.addEventListener('playing', function () {
              //  phpの実行、IDを渡す
              runphp("task_itemcounter.php", el_id_play);
            });
            //  再生終了時に発火
            el.addEventListener('ended', function () {
              runphp("task_itemcounter.php", el_id_end);
            });
            break;
        }
      });
    }

    //----------------------------------------
    //  各種イベントの登録
    //----------------------------------------
  }, {
    key: "eventRegistration",
    value: function eventRegistration(i_common) {
      this.common = i_common;
      this.wptaskdir = this.common.wp_rootpath + "/assets/php/task/";

      //  全アイテムカウンター取得して設定
      this.set_itemcounters();
    }
  }]);
  return itemcounters;
}();


/***/ }),

/***/ "./src/js/mylib/content/oscheck.js":
/*!*****************************************!*\
  !*** ./src/js/mylib/content/oscheck.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ osCheck; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
//----------------------------------------
//
//  OS Check
//
//----------------------------------------
var osCheck = /*#__PURE__*/function () {
  function osCheck() {
    _classCallCheck(this, osCheck);
    this.dispUserAgent();

    //  iOSのバージョンがある
    if (this.getiOSVersion()) {
      var body = document.getElementsByTagName('body')[0];
      //body.classList.add('iOS');
    }
  }

  //  userAgent確認用領域があれば、取得情報を出力
  _createClass(osCheck, [{
    key: "dispUserAgent",
    value: function dispUserAgent(i_output) {
      var div_ua = document.querySelector(i_output);
      if (div_ua) {
        div_ua.innerText = navigator.userAgent;
      }
    }

    //  bodyタグにclass付与する
  }, {
    key: "markBody",
    value: function markBody() {
      //  識別したbodyにclass付与
      if (navigator.userAgent.indexOf('iPhone') > 0) {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('iPhone');
      }
      //  識別したbodyにclass付与
      if (navigator.userAgent.indexOf('Macintosh') > 0) {
        var _body = document.getElementsByTagName('body')[0];
        _body.classList.add('Macintosh');
      }
      if (navigator.userAgent.indexOf('iPad') > 0) {
        var _body2 = document.getElementsByTagName('body')[0];
        _body2.classList.add('iPad');
      }
      if (navigator.userAgent.indexOf('Android') > 0) {
        var _body3 = document.getElementsByTagName('body')[0];
        _body3.classList.add('Android');
      }
    }

    //  ユーザーエージェントの確認
  }, {
    key: "checkUA",
    value: function checkUA() {
      var ua = navigator.userAgent;
      //    console.log(ua);
      // スマートフォン用の記述

      if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
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

    //  iOSバージョン
  }, {
    key: "getiOSVersion",
    value: function getiOSVersion() {
      return parseFloat(('' + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ''])[1]).replace('undefined', '3_2').replace('_', '.').replace('_', '')) || false;
    }
  }]);
  return osCheck;
}();
_defineProperty(osCheck, "isPC", 0);
_defineProperty(osCheck, "isSP", 1);
_defineProperty(osCheck, "isTab", 2);


/***/ }),

/***/ "./src/js/mylib/content/pagebackground.js":
/*!************************************************!*\
  !*** ./src/js/mylib/content/pagebackground.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ pageBackGround; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
//----------------------------------------
//
//  コンテンツの処理
//  背景
//  ※単純にz-indexの上下関係でうまくまとめた方が無難の可能性。
//  要素が取れないなどでJS暴発でファーストビューに現れる可能性もアリ
//
//----------------------------------------
var pageBackGround = /*#__PURE__*/function () {
  function pageBackGround() {
    _classCallCheck(this, pageBackGround);
    this.herobg = document.querySelector('.l-hero__background');
    this.aboutbg = document.querySelector('.l-about__background');
    this.contactbg = document.querySelector('.l-contact__background');
    //  スマホでPC時1000では足りない
    this.hidePosition = 3000;
    this.hidePosition_about = 3000;
    this.hidePosition_contact = 500;
  }
  _createClass(pageBackGround, [{
    key: "taskScroll",
    value: function taskScroll() {
      var scroll = document.documentElement.scrollTop;
      //  ヒーロー背景
      if (this.herobg) {
        if (scroll > this.hidePosition) {
          this.herobg.classList.add("hide");
        } else {
          this.herobg.classList.remove("hide");
        }
      }

      //  about背景
      if (this.aboutbg) {
        //  一定距離よりも前なら
        if (scroll < this.hidePosition_about) {
          this.aboutbg.classList.remove("disp");
        } else {
          this.aboutbg.classList.add("disp");
        }
      }

      //  contact背景
      if (this.contactbg) {
        //  一定距離よりも前なら 背景隠す
        if (scroll < this.hidePosition_contact) {
          this.contactbg.classList.remove("disp");
        } else {
          this.contactbg.classList.add("disp");
        }
      }
    }

    //  読み込み時の処理
  }, {
    key: "taskLoad",
    value: function taskLoad() {
      if (!this.herobg) return;
      //  hero
      var scroll = document.documentElement.scrollTop;
      //  読み込み時に指定位置を超えていたらヒーロー背景隠す
      if (this.herobg) {
        if (scroll > this.hidePosition) {
          this.herobg.classList.remove("hide");
        }
      }

      //  about
      //  読み込み時に指定位置より先なら表示
      if (this.aboutbg) {
        if (this.hidePosition_about < scroll) {
          this.aboutbg.classList.add("disp");
        }
      }

      //  contact
      //  読み込み時に指定位置より先なら表示
      if (this.contactbg) {
        if (this.hidePosition_contact < scroll) {
          this.contactbg.classList.add("disp");
        }
      }
    }
  }]);
  return pageBackGround;
}();


/***/ }),

/***/ "./src/js/mylib/content/tabgroup.js":
/*!******************************************!*\
  !*** ./src/js/mylib/content/tabgroup.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ tabGroup; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
//----------------------------------------
//
//  タブグループ
//
//----------------------------------------
var tabGroup = /*#__PURE__*/function () {
  function tabGroup() {
    _classCallCheck(this, tabGroup);
    this.tabgroup = [];
    this.common = null;
    //  スライドの情報アニメ制御用
    this.tl_slideinfo_rect = [];
  }

  //----------------------------------------
  //  タブ全体閉じる
  //----------------------------------------
  _createClass(tabGroup, [{
    key: "tabdisableall",
    value: function tabdisableall(i_group) {
      //  タブの取得
      var tabs = i_group.querySelectorAll('[data-js="tabitem"]');
      //  全タブのstate削除
      tabs.forEach(function (tab) {
        delete tab.dataset.state;
      });
    }

    //----------------------------------------
    //  タブをアクティブに
    //----------------------------------------
  }, {
    key: "tabactive",
    value: function tabactive(i_tab) {
      i_tab.dataset['state'] = "open";
    }
  }, {
    key: "activeTab",
    value: function activeTab(i_tab) {
      //  親(グループ)を取得する
      var parent = i_tab.parentNode;
      //  グループの全てを非アクティブにする
      this.tabdisableall(parent);
      //  グループの自分のタブをアクティブにする
      this.tabactive(i_tab);
      return parent;
    }
    //----------------------------------------
    //  タブの設定 : WORKS
    //----------------------------------------
  }, {
    key: "registTab_works",
    value: function registTab_works(i_tab, i_group) {
      var _this = this;
      //  タブのホバー設定
      i_tab.addEventListener("mouseover", function () {
        _this.activeTab(i_tab);
        //--------------------------------
        //  タブごとの固有処理( data-key指定 )
        var key = i_tab.dataset['key'];
        //  swiperの取得
        var swi = null;
        swi = _this.common.swipers['works'];
        var bg = document.querySelector('.l-works__content__background .swiper');
        //  配列に変換
        var bgs = _toConsumableArray(bg.querySelectorAll('.swiper-slide'));
        bg.dataset['disp'] = "true";
        var ci = 0; // changeindex
        switch (key) {
          case 'worksswiper1':
            ci = 1;
            break;
          case 'worksswiper2':
            ci = 2;
            break;
          case 'worksswiper3':
            ci = 3;
            break;
          default:
            ci = 0;
            break;
        }
        //  変更したい番号と現在の番号が違っている場合は変更演出
        if (swi.activeIndex != ci) {
          var bgsi = _toConsumableArray(bgs[ci].querySelectorAll('.l-works__slideinfo__wrapper')); //  スライドの下のinfo取得
          var bgsp = _toConsumableArray(bgs[ci].querySelectorAll('picture')); //  スライドの下のpictureを取得して配列にする
          swi.slideTo(ci);
          //  [背景] 配列があれば実行 ( pictureがない空スライドもある )
          if (0 < bgsp.length) {
            gsap.fromTo(bgsp[0], {
              scale: 1
            }, {
              scale: 1.05,
              duration: 5
            });
          }
          //  [INFO] info以下のdivを全て取得
          if (0 < bgsi.length) {
            var bgsii = bgsi[0].querySelectorAll('div');
            var cnt = 0;
            //  タイトル・時期・日数・一言
            bgsii.forEach(function (tar) {
              var rects = _toConsumableArray(tar.querySelectorAll('.rect')); //  rectはdiv１つにつき1つなので1回のみ
              if (0 < rects.length) {
                var rect = rects[0];
                var tl = gsap.timeline();
                //  ※直接要素に変数を保存してしまうことで個別対応する
                //  ※gsapも直接要素に追加しているようなので真似する
                if (rect.tl_slide_info) rect.tl_slide_info.progress(1); // すでに前回のtlがあれば終了させる
                rect.tl_slide_info = tl; //  新しくセットする

                gsap.set(tar, {
                  opacity: 0,
                  y: 10
                });
                gsap.set(rect, {
                  x: "0%"
                });
                tl.to(tar, {
                  opacity: 1,
                  y: 0,
                  duration: 0.5,
                  ease: "power1.out",
                  delay: cnt * 0.2
                }).to(rect, {
                  x: "105%"
                });
                //console.log( cnt );
                cnt++;
              }
            });
          }
        }
      });
      //  タブから離れたら
      //i_tab.addEventListener("mouseleave", () => {
      //});
      //  一覧ボタンにホバーしたら背景白に
      var btn = document.querySelector('.l-works__imagebutton__wrapper a');
      btn.addEventListener("mouseover", function () {
        var bg = document.querySelector('.l-works__content__background .swiper');
        var bgs = _toConsumableArray(bg.querySelectorAll('.swiper-slide'));
        var swi = _this.common.swipers['works'];
        var ci = 0;
        if (swi.activeIndex != ci) {
          var bgsp = _toConsumableArray(bgs[ci].querySelectorAll('p'));
          bg.dataset['disp'] = "false";
          swi.slideTo(ci);
          //  映像スライドとは違って逆に止まっている方がよい感じ
          if (0 < bgsp.length) {
            // gsap.fromTo(bgsp[ci],{scale:1},{scale:1.05, duration :5} );
          }
        }
      });
    }

    //----------------------------------------
    //  タブの設定 : SKILL
    //----------------------------------------
  }, {
    key: "registTab_skill",
    value: function registTab_skill(i_tab) {
      var _this2 = this;
      //  タブのクリック設定
      i_tab.addEventListener("click", function () {
        _this2.activeTab(i_tab);
        //--------------------------------
        //  タブごとの固有処理( data-key指定 )
        var key = i_tab.dataset['key'];
        //  swiperの取得
        var swi = null;
        swi = _this2.common.swipers['skill'];
        switch (key) {
          case 'skillswiper1':
            swi.slideTo(0);
            break;
          case 'skillswiper2':
            swi.slideTo(1);
            break;
          default:
            break;
        }
      });
    }

    //----------------------------------------
    //  タブグループの設定
    //  グループ内のタブしか検索しないのでグループ名は不要
    //----------------------------------------
  }, {
    key: "registGroup",
    value: function registGroup(i_group) {
      var _this3 = this;
      //  開いているタブ番号を設定
      i_group.dataset['tabindex'] = 0;

      //  タブの取得
      var tabs = i_group.querySelectorAll('[data-js="tabitem"]');
      var groupkey = i_group.dataset['key'];
      switch (groupkey) {
        case "works":
          tabs.forEach(function (tab) {
            _this3.registTab_works(tab, i_group);
          });
          break;
        case "skill":
          tabs.forEach(function (tab) {
            _this3.registTab_skill(tab);
          });
          break;
      }
    }

    //----------------------------------------
    //  各種イベントの登録
    //----------------------------------------
  }, {
    key: "eventRegistration",
    value: function eventRegistration(i_common) {
      var _this4 = this;
      //  共有変数クラスの確保
      this.common = i_common;
      //  data-js : タブグループの取得
      var tabgroup = document.querySelectorAll('[data-js="tabgroup"]');
      //  タブグループの数だけループ
      tabgroup.forEach(function (tgroup) {
        _this4.registGroup(tgroup);
      });
    }
  }]);
  return tabGroup;
}();


/***/ }),

/***/ "./src/js/mylib/gsap/eegsap.js":
/*!*************************************!*\
  !*** ./src/js/mylib/gsap/eegsap.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ eegsap; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
//----------------------------------------
//
//  etienu GSAP アニメーション
//
//----------------------------------------
var eegsap = /*#__PURE__*/function () {
  function eegsap() {
    _classCallCheck(this, eegsap);
  }

  //----------------------------------------
  //  各種イベントの登録
  //----------------------------------------
  _createClass(eegsap, [{
    key: "eventRegistration",
    value: function eventRegistration(i_common) {
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
      this.registanim__intro__svg();
      this.registanim__intro__txtmarker();
      this.registanim__mv__particle();
    }

    //----------------------------------------
    //  c-title modan
    //  ポートフォリオ : 見出しh2のアニメーション
    //----------------------------------------
  }, {
    key: "registanim__heading_eff",
    value: function registanim__heading_eff() {
      var textWrappers = document.querySelectorAll('[data-jstype="heading-eff"]');
      textWrappers.forEach(function (textWrapper) {
        var bgcl, bgcr, bg, lead;
        var base = textWrapper.querySelector('[data-headingparts="base"]'); //  ベース
        if (base == null) return;
        bg = base.querySelector('[data-headingparts="bg"]');
        bgcl = base.querySelector('[data-headingparts="boxlu"]'); //  左上角
        bgcr = base.querySelector('[data-headingparts="boxrb"]'); //  右下角
        lead = base.querySelector('[data-headingparts="lead"]');
        var str_tglaction = 'play pause resume';
        if (bgcl) {
          gsap.fromTo(bgcl, {
            autoAlpha: 0,
            rotate: -270,
            scale: 0.5
          }, {
            autoAlpha: 1,
            rotate: 0,
            scale: 1,
            duration: 1,
            scrollTrigger: {
              trigger: bg,
              start: 'top center+=50%',
              toggleActions: str_tglaction
            }
          });
        }
        if (bgcr) {
          gsap.fromTo(bgcr, {
            autoAlpha: 0,
            rotate: 270,
            scale: 0.5
          }, {
            autoAlpha: 1,
            rotate: 0,
            scale: 1,
            duration: 1,
            scrollTrigger: {
              trigger: bg,
              start: 'top center+=50%',
              toggleActions: str_tglaction
            }
          });
        }

        //  背景
        if (bg) {
          gsap.fromTo(bg, {
            autoAlpha: 1,
            x: '10%'
          }, {
            autoAlpha: 1,
            duration: 3,
            x: 0,
            ease: 'Power4.easeOut',
            scrollTrigger: {
              trigger: bg,
              start: 'top center+=50%',
              toggleActions: str_tglaction
            }
          });
        }
        if (lead) {
          gsap.fromTo(lead, {
            x: '-160%'
          }, {
            rotate: 0,
            x: '-50%',
            ease: 'Power4.easeOut',
            duration: 2,
            scrollTrigger: {
              trigger: lead,
              //アニメーションが始まるトリガーとなる要素
              toggleActions: str_tglaction,
              start: 'top center+=50%' //, //アニメーションが始まる位置を指定
              //end: "+=500"
            }
          });
        }
      });
    }
    //----------------------------------------
    //  ポートフォリオ : ヘッダー li
    //----------------------------------------
  }, {
    key: "registanim__header_li",
    value: function registanim__header_li() {
      var header_li_a_span = document.querySelectorAll('.p-header__nav ul li a span');
      var header_li_a = document.querySelectorAll('.p-header__nav ul li a');
      //文字列（テキスト）を分割しspanで囲む
      function js_li_splitspan() {
        header_li_a_span.forEach(function (target) {
          var newText = '';
          var text = target.textContent;
          var result = text.split('');
          for (var i = 0; i < result.length; i++) {
            newText += '<span>' + result[i] + '</span>';
          }
          target.innerHTML = newText;
        });
      }
      js_li_splitspan();
      header_li_a.forEach(function (h_lia) {
        var li_a_i = h_lia.querySelector('[data-parts="boxlt"]'); //  左上角
        var li_a_u = h_lia.querySelector('[data-parts="boxrb"]'); //  右下角
        var li_a_span = h_lia.querySelector('[data-parts="text"]'); //  aの下の文字列格納span

        // 初期の状態(取ってきたドット・テキストは最初は非表示)
        // ドットとテキストを非表示
        gsap.set([li_a_i, li_a_u], {
          opacity: 0
        });
        // timelineを作成（各アニメーションを連動させる）
        var tl = gsap.timeline();
        // toで状態を変化させる
        var ani = tl.to(li_a_i, {
          rotate: 180,
          duration: 0.2,
          opacity: 1
        }
        //'+=.1' // 前のアニメーションが完了した0.5秒後にドットを非表示
        ).to(li_a_u, {
          rotate: 180,
          duration: 0.3,
          // 0.3秒かけてアニメーション
          opacity: 1
        }
        //'+=0.1'
        );

        ani.pause();
        h_lia.addEventListener("mouseenter", function () {
          return ani.play();
        });
        h_lia.addEventListener("mouseleave", function () {
          return ani.reverse();
        });
      });
    }

    //----------------------------------------
    //  works bg box
    //  ポートフォリオ : works左の箱
    //----------------------------------------
  }, {
    key: "registanim__works_bg_box",
    value: function registanim__works_bg_box() {
      var eff_classs = document.querySelectorAll('[data-eff="worksbg-boxl"]');
      eff_classs.forEach(function (target) {
        var tar = target;
        //            console.log("[tar]" + tar);
        gsap.set(tar, {
          opacity: 0.3,
          rotate: 0
        });
        var tl = gsap.timeline();
        tl.to(tar, {
          rotate: 360,
          duration: 50,
          opacity: 0.3,
          ease: Linear.easeNone,
          repeat: -1
        });
      });
    }

    //----------------------------------------
    //  works bg box
    //  ポートフォリオ : works左の箱2
    //----------------------------------------
  }, {
    key: "registanim__works_bg_box_left2",
    value: function registanim__works_bg_box_left2() {
      var eff_classs = document.querySelectorAll('[data-eff="worksbg-boxl2"]');
      if (eff_classs.length <= 0) return;
      eff_classs.forEach(function (target) {
        var tar = target;
        gsap.set(tar, {
          opacity: 0.3,
          rotate: 0
        });
        var tl = gsap.timeline();
        tl.to(tar, {
          rotate: -360,
          duration: 50,
          opacity: 0.3,
          ease: Linear.easeNone,
          repeat: -1
        });
      });
    }

    //----------------------------------------
    //  works bg box
    //  ポートフォリオ : works右の箱
    //----------------------------------------
  }, {
    key: "registanim__works_bg_box_right",
    value: function registanim__works_bg_box_right() {
      var eff_classs = document.querySelectorAll('[data-eff="worksbg-boxr"]');
      if (eff_classs.length <= 0) return;
      eff_classs.forEach(function (target) {
        var tar = target;
        gsap.set(tar, {
          opacity: 0.3,
          rotate: 0
        });
        var tl = gsap.timeline();
        tl.to(tar, {
          rotate: -360,
          duration: 30,
          opacity: 0.3,
          repeat: -1
        });
      });
    }
    //----------------------------------------
    //  works bg box
    //  ポートフォリオ : works右の箱
    //----------------------------------------
  }, {
    key: "registanim__works_bg_box_right2",
    value: function registanim__works_bg_box_right2() {
      var eff_classs = document.querySelectorAll('[data-eff="worksbg-boxr2"]');
      if (eff_classs.length <= 0) return;
      eff_classs.forEach(function (target) {
        var tar = target;
        gsap.set(tar, {
          opacity: 0.3,
          rotate: 45
        });
        var tl = gsap.timeline();
        tl.to(tar, {
          rotate: -15,
          duration: 10,
          opacity: 0.3,
          ease: "sine.out"
        }).to(tar, {
          rotate: 45,
          duration: 10,
          opacity: 0.3,
          ease: "sine.out"
        });
        tl.repeat(-1);
      });
    }
    //----------------------------------------
    //  works bg box
    //  ポートフォリオ : works右の箱3
    //----------------------------------------
  }, {
    key: "registanim__works_bg_box_right3",
    value: function registanim__works_bg_box_right3() {
      var eff_classs = document.querySelectorAll('[data-eff="worksbg-boxr3"]');
      if (eff_classs.length <= 0) return;
      eff_classs.forEach(function (target) {
        var tar = target;
        gsap.set(tar, {
          opacity: 0.3,
          rotate: 10,
          scale: 0.8
        });
        var tl = gsap.timeline();
        tl.to(tar, {
          rotate: 0,
          duration: 3,
          scale: 1.0,
          opacity: 0.3,
          ease: "linear"
        }).to(tar, {
          rotate: -10,
          duration: 5,
          scale: 0.8,
          opacity: 0.3,
          ease: "sine.out"
        }).to(tar, {
          rotate: 0,
          duration: 3,
          scale: 1.0,
          opacity: 0.3,
          ease: "linear"
        }).to(tar, {
          rotate: 10,
          duration: 10,
          scale: 0.8,
          opacity: 0.3,
          ease: "sine.out"
        });
        tl.repeat(-1);
      });
    }

    //----------------------------------------
    //  ポートフォリオ : パララックス
    //----------------------------------------
  }, {
    key: "registanim__parallax_simple",
    value: function registanim__parallax_simple() {
      var eff_classs = document.querySelectorAll('[data-eff="gsapparallax"]');
      if (eff_classs.length <= 0) return;
      eff_classs.forEach(function (target) {
        var tar = target;
        var y = tar.getAttribute('data-y') || -100;
        gsap.fromTo(tar, {
          y: y,
          scale: 1.2
        }, {
          //  反対方向に移動→上から下
          y: -y,
          scrollTrigger: {
            trigger: ".l-hero",
            //start: 'top bottom',
            //end: 'bottom top',
            scrub: 1
            //markers: true,
          }
        });
      });
    }

    //----------------------------------------
    //  ポートフォリオ : intro : SVG
    //----------------------------------------
  }, {
    key: "registanim__intro__svg",
    value: function registanim__intro__svg() {
      var _this = this;
      var eff_classs = document.querySelectorAll('[data-eff="gsapintro_svg"]');
      if (eff_classs.length <= 0) return;
      //  svg機能をセットした大枠グループ
      eff_classs.forEach(function (tar) {
        var objs = tar.querySelectorAll('.l-intro__idealp');
        //  大枠内のグループアイテム1個
        objs.forEach(function (tar) {
          //  グループ内spanの文字列を全て分割
          _this.common.splitTarget_span(tar, "", false);
          var objctrl = tar;
          var objp1span = tar.querySelectorAll('span');
          var path_txt = "";
          var tl_delay = 0.1;
          gsap.set(objp1span, {
            opacity: 0
          });
          var tl = gsap.timeline();
          //  指定data-indexによってパスを作成
          switch (objctrl.dataset["index"]) {
            case "1":
              path_txt = [{
                x: 0,
                y: 0
              }, {
                x: -100,
                y: 0
              }, {
                x: -200,
                y: 0
              }, {
                x: -300,
                y: -100
              }];
              tl_delay = 0;
              break;
            //  上から
            case "2":
              path_txt = [{
                x: 0,
                y: 0
              }, {
                x: -100,
                y: 0
              }, {
                x: -200,
                y: 0
              }, {
                x: -300,
                y: 100
              }];
              tl_delay = 0.5;
              break;
            //  下から
            default:
              break;
          }
          tl.to(objp1span, {
            scrollTrigger: {
              trigger: tar,
              start: 'top bottom',
              //スクロールイベントの開始地点
              end: 'bottom top',
              //スクロールイベントの終了地点
              // 以下、onイベント
              onEnter: function onEnter() {
                tl.play();
              },
              onEnterBack: function onEnterBack() {
                tl.play();
              },
              onLeaveBack: function onLeaveBack() {
                tl.pause();
              },
              onLeave: function onLeave() {
                tl.pause();
              }
            }
          }).to(objp1span, {
            duration: 2,
            opacity: 1,
            delay: tl_delay,
            stagger: {
              each: 0.1,
              from: "end"
            },
            motionPath: {
              path: path_txt,
              autoRotate: true,
              curviness: 1,
              start: 1,
              end: 0
            },
            ease: "power1.easeOut"
          });
          //  範囲に入るまでタイムライン全体を停止
          tl.pause();
        }); // objs.forEach((tar)
      }); // eff_classs.forEach((tar)
    }

    //----------------------------------------
    //  ポートフォリオ : intro : マーカー
    //----------------------------------------
  }, {
    key: "registanim__intro__txtmarker",
    value: function registanim__intro__txtmarker() {
      var eff_classs = document.querySelectorAll('[data-eff="gsapintro_txtmarker"]');
      if (eff_classs.length <= 0) return;
      //  svg機能をセットした大枠グループ
      eff_classs.forEach(function (target) {
        var tar = target;
        gsap.set(tar, {
          opacity: 1
        });
        var tl = gsap.timeline();
        tl.to(tar, {
          scrollTrigger: {
            trigger: tar,
            start: 'top bottom-=35%',
            //スクロールイベントの開始地点
            end: 'bottom top',
            //スクロールイベントの終了地点
            once: true,
            // 以下、onイベント
            onEnter: function onEnter() {
              tl.play();
              tar.dataset["disp"] = "true";
            },
            onEnterBack: function onEnterBack() {
              tl.play();
              tar.dataset["disp"] = "true";
            }
          }
        });
        //  範囲に入るまでタイムライン全体を停止
        tl.pause();
      }); // eff_classs.forEach((tar)
    } // registanim__intro__txtmarker()

    //================================================
    //  パーティクル作成 PC
    //----------------------------------------
  }, {
    key: "registanim__mv__particle_maketl_pc",
    value: function registanim__mv__particle_maketl_pc(i_ang, i_vx, i_vy, i_target) {
      var tar = i_target;
      var tl = gsap.timeline().fromTo(tar, {
        x: i_vx * 20 + "vw",
        y: i_vy * 0 + "vw",
        transformOrigin: '50% 50%',
        scale: 1,
        duration: 0
      }, {
        duration: 0.5 + Math.random() * 0.5,
        ease: "Power1.easeOut",
        x: i_vx * 40 + "vw",
        y: i_vy * 200 + "px",
        scale: 0,
        opacity: 1
      });
      return tl;
    }
    //----------------------------------------
    //  パーティクル作成 SP
    //----------------------------------------
  }, {
    key: "registanim__mv__particle_maketl_sp",
    value: function registanim__mv__particle_maketl_sp(i_ang, i_vx, i_vy, i_target) {
      var tar = i_target;
      var tl = gsap.timeline().fromTo(tar, {
        x: i_vx * 20 + "vw",
        y: i_vy * 0 + "px",
        transformOrigin: '50% 50%',
        scale: 1,
        duration: 0
      }, {
        duration: 0.5 + Math.random() * 0.5,
        ease: "Power1.easeOut",
        x: i_vx * 70 + "vw",
        y: i_vy * 100 + "px",
        scale: 0,
        opacity: 1
      });
      return tl;
    }

    //----------------------------------------
    //  ポートフォリオ : mv : パーティクル
    //----------------------------------------
  }, {
    key: "registanim__mv__particle",
    value: function registanim__mv__particle() {
      var _this2 = this;
      var eff_classs = document.querySelectorAll('[data-eff="mv_particle"]');
      if (eff_classs.length <= 0) return;
      var parstl = [];
      var parstlsp = [];
      var btntl = null;
      var maxcount = 20;
      var angleone = 360 / 20;
      //  svg機能をセットした大枠グループ
      eff_classs.forEach(function (tar) {
        // たくさんの矩形を配置
        for (var i = 0; i < maxcount; i++) {
          var par = document.createElement("div");
          par.classList.add("particle");
          tar.appendChild(par);
        }
        var pars = tar.querySelectorAll('.particle');
        var cnt = 0;
        pars.forEach(function (tar) {
          cnt++;
          var ang = cnt * angleone + Math.floor(Math.random() * angleone);
          if (ang < 0) ang += 360;
          if (360 <= ang) ang -= 360;
          //  角度からベクトル計算
          var vx = Math.sin(ang * Math.PI / 180);
          var vy = Math.cos(ang * Math.PI / 180);
          var tl = gsap.timeline();
          var tlsp = gsap.timeline();
          parstl[parstl.length] = tl;
          parstlsp[parstlsp.length] = tlsp;
          tl.add(_this2.registanim__mv__particle_maketl_pc(ang, vx, vy, tar));
          tlsp.add(_this2.registanim__mv__particle_maketl_sp(ang, vx, vy, tar));
          //  終わらせておく事で非表示
          tl.progress(1);
          tlsp.progress(1);
        });
      }); // eff_classs.forEach((tar)
      //  タイトル取得
      var obj_btn = _toConsumableArray(document.querySelectorAll('.l-hero__heading'));
      var obj_btndivs = null;
      var obj_btndiv = null;
      if (0 < obj_btn.length) {
        obj_btndivs = _toConsumableArray(obj_btn[0].querySelectorAll('div'));
      }
      if (0 < obj_btndivs.length) {
        obj_btndiv = obj_btndivs[0];
        //  タイトルのホバー : CSSで設定してもGSAPの設定の方が強く残ってしまうため
        obj_btndiv.addEventListener("mouseover", function () {
          if (btntl && btntl.isActive()) {
            return;
          }
          gsap.set(obj_btndiv, {
            scale: 1.00
          });
        });
        obj_btndiv.addEventListener("mouseleave", function () {
          if (btntl && btntl.isActive()) {
            return;
          }
          gsap.set(obj_btndiv, {
            scale: 1.00
          });
        });
        //  タイトルのクリック
        obj_btndiv.addEventListener("click", function () {
          //  アニメーション群をcommonで管理して、タイムラインが終わっているのかを確認したい
          //  タイトルアニメが終わっていればクリック可能にする
          //  自分のアニメが実行中ならクリック処理しない
          if (parstl[0].isActive() || parstlsp[0].isActive()) {
            return;
          }
          var ww = window.outerWidth;
          //  SP以下
          if (ww < 768) {
            for (var i = 0; i < parstlsp.length; i++) {
              parstlsp[i].play(0);
            }
            //  タブ以上
          } else {
            // パーティクル全て実行
            for (var i = 0; i < parstl.length; i++) {
              parstl[i].play(0);
            }
          }
          //  ボタン本体に対するアニメーション
          gsap.set(obj_btndiv, {
            scale: 1
          });
          var tl = gsap.timeline();
          btntl = tl;
          tl.to(obj_btndiv, {
            duration: 0.05,
            ease: "power1.inOut",
            scale: 0.9
          }).to(obj_btndiv, {
            duration: 0.2,
            ease: "power1.inOut",
            scale: 1.0
          });
        });
      }
    } // registanim__intro__txtmarker()
  }]);
  return eegsap;
}(); //class eegsap


/***/ }),

/***/ "./src/js/mylib/gsap/eegsap_scrollbutton.js":
/*!**************************************************!*\
  !*** ./src/js/mylib/gsap/eegsap_scrollbutton.js ***!
  \**************************************************/
/***/ (function() {

//----------------------------------------
//  scollbutton : 「繰り返し」
//----------------------------------------
{
  var eff_classs = document.querySelectorAll('.js-gsap__scrollbutton');
  eff_classs.forEach(function (target) {
    var divs = target.querySelectorAll('.icon span');
    //console.log("[target]" + target);
    for (var i = 0; i < divs.length; i++) {
      var iy = i * 0.5;
      var bar = divs[i];
      //console.log("[i]" + i + "[len]" + divs.length + "[bar]" + bar);

      gsap.set(bar, {
        opacity: 0,
        y: 0,
        rotate: 45
      });
      var tl = gsap.timeline();
      tl.to(bar, {
        delay: iy,
        duration: 0
      }).to(bar, {
        opacity: 1,
        duration: 0
      }).to(bar, {
        y: 40,
        rotate: 45,
        opacity: 0,
        duration: 1,
        repeat: -1
      });
    }
  });
}

/***/ }),

/***/ "./src/js/mylib/gsap/eegsap_surface.js":
/*!*********************************************!*\
  !*** ./src/js/mylib/gsap/eegsap_surface.js ***!
  \*********************************************/
/***/ (function() {

//----------------------------------------
//  surface : 「ふわっと出る」
//----------------------------------------
// gsapは恐らくtransitionと干渉する。
{
  var eff_classs = document.querySelectorAll('.js-surface__up');
  eff_classs.forEach(function (target) {
    var st_start = "top center";
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
    gsap.fromTo(target, {
      autoAlpha: 0,
      rotate: 0,
      scale: 1,
      y: 100
    }, {
      y: 0,
      autoAlpha: 1,
      rotate: 0,
      scale: 1,
      duration: 1,
      scrollTrigger: {
        trigger: target,
        start: st_start
      }
    });
  });
}
//----------------------------------------
//  surface : 「ふわっと出る」グループ
//----------------------------------------
{
  var _eff_classs = document.querySelectorAll('.js-surface__upgroup');
  _eff_classs.forEach(function (target) {
    var divs = target.querySelectorAll('div');
    gsap.fromTo(divs, {
      autoAlpha: 0,
      rotate: 0,
      scale: 0.9,
      y: 20
    }, {
      y: 0,
      autoAlpha: 1,
      rotate: 0,
      scale: 1,
      duration: 1,
      scrollTrigger: {
        trigger: target,
        start: 'top center+=50%'
      },
      stagger: {
        amount: 1,
        //アニメーション間隔の合計時間
        from: "start",
        // 動作を始める要素を指定
        ease: "sine.in"
      }
    });
  });
}

//----------------------------------------
//  surface : 「中央集合」
//----------------------------------------
{
  var _eff_classs2 = document.querySelectorAll('.js-surface__gather-center');
  _eff_classs2.forEach(function (target) {
    var divs = target.querySelectorAll('div');
    gsap.fromTo(divs, {
      rotate: 0,
      scale: 0.9,
      x: -1000
    }, {
      x: 0,
      rotate: 0,
      scale: 1,
      duration: 1,
      scrollTrigger: {
        trigger: target,
        start: 'top center+=50%'
      }
    });
  });
}

//----------------------------------------
//  surface : 「左から右」
//----------------------------------------
{
  var _eff_classs3 = document.querySelectorAll('.js-surface__ltor');
  _eff_classs3.forEach(function (target) {
    gsap.fromTo(target, {
      autoAlpha: 0,
      rotate: -45,
      scale: 0.9,
      x: -1000
    }, {
      x: 0,
      autoAlpha: 1,
      rotate: 0,
      scale: 1,
      duration: 1,
      scrollTrigger: {
        trigger: target,
        start: 'top center+=50%'
      }
    });
  });
}

//----------------------------------------
//  surface : 「左から右」
//----------------------------------------
{
  var _eff_classs4 = document.querySelectorAll('.js-surface__rtol');
  _eff_classs4.forEach(function (target) {
    gsap.fromTo(target, {
      autoAlpha: 0,
      rotate: 45,
      scale: 0.9,
      x: 1000
    }, {
      x: 0,
      autoAlpha: 1,
      rotate: 0,
      scale: 1,
      duration: 1,
      scrollTrigger: {
        trigger: target,
        start: 'top center+=50%'
      }
    });
  });
}

//----------------------------------------
//  surface : ゲーム文字列
//----------------------------------------
{
  var _eff_classs5 = document.querySelectorAll('.js-surface__gametext');
  //文字列（テキスト）を分割しspanで囲む
  _eff_classs5.forEach(function (target) {
    var newText = '';
    var text = target.innerHTML; //  タグあり
    var result_br = text.split('<br>');
    for (var j = 0; j < result_br.length; j++) {
      var result = result_br[j].split('');
      for (var i = 0; i < result.length; i++) {
        newText += '<b>' + result[i] + '</b>';
      }
      newText += '<br>';
    }
    target.innerHTML = newText;
  });
  _eff_classs5.forEach(function (target) {
    var spans = target.querySelectorAll('b');
    gsap.fromTo(spans, {
      autoAlpha: 0,
      rotate: 0,
      scale: 1,
      y: 100
    }, {
      y: 0,
      autoAlpha: 1,
      rotate: 0,
      scale: 1,
      duration: 1,
      scrollTrigger: {
        trigger: target,
        start: 'top center+=50%'
      },
      stagger: {
        amount: 2,
        //アニメーション間隔の合計時間
        from: "start",
        // 動作を始める要素を指定
        ease: "sine.in"
      }
    });
  });
}

//----------------------------------------
//  surface : ヒーローセクション専用 : 2 演出含む
//----------------------------------------
{
  var _eff_classs6 = document.querySelectorAll('.js-surface__heroheading2');
  _eff_classs6.forEach(function (target) {
    var divs = target.querySelectorAll('div');
    //  要素内文字をspanで分割
    var newText = "";
    var spanText = divs[0].innerHTML;
    //  文字列からタグ(要素付き)を取り除く
    spanText.split('').forEach(function (char) {
      newText += '<span>' + char + '</span>';
      //  、があったら強引にSP用<br?導入
      if (char == "、") {
        newText += '<br class="u-display__sp">';
      }
    });
    divs[0].innerHTML = newText;
    divs.forEach(function (item) {
      gsap.set(item, {
        opacity: 0,
        marginTop: "10px"
      });
    });
    var spans = divs[0].querySelectorAll('span');
    gsap.to(spans, {
      duration: 0.5,
      autoAlpha: 1,
      rotateY: '0deg',
      stagger: {
        each: 0.1
      },
      scrollTrigger: {
        trigger: divs[0],
        start: 'bottom bottom'
      }
    });
    gsap.set(divs[0], {
      opacity: 0,
      marginTop: "10px",
      rotate: 0
    }); //  想像をカタチに
    var tl = gsap.timeline();
    tl.to(divs[0], {
      marginTop: "10px",
      duration: 1,
      opacity: 1
    }).to(divs[0], {
      marginTop: "0px",
      backgroundColor: "rgba(144,238,144,1)",
      padding: "0px 40px",
      duration: 1
    });
  });
}

/***/ }),

/***/ "./src/js/mylib/myexternallinks.js":
/*!*****************************************!*\
  !*** ./src/js/mylib/myexternallinks.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ myExternalLinks; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
//----------------------------------------
//
//  WP External Linksの代わり
//  全a hrefにチェックを入れ、外部なら外部ページ処理する
//
//
//----------------------------------------
var myExternalLinks = /*#__PURE__*/function () {
  function myExternalLinks() {
    _classCallCheck(this, myExternalLinks);
    //  全てのa hrefを取得
    this.hrefs = document.querySelectorAll('a');
  }

  //  外部リンクの修正
  _createClass(myExternalLinks, [{
    key: "fixingExternalLinks",
    value: function fixingExternalLinks() {
      this.hrefs.forEach(function (target) {
        var url = target.href;
        var reg = new RegExp("^(http?:)?\/\/" + location.hostname);
        var regs = new RegExp("^(https?:)?\/\/" + location.hostname);
        //console.log("[External]" + url  + " [ reg ] :  " + reg );
        if (url.match(reg) || url.match(regs) || url.charAt(0) === "/" || url.charAt(0) === "#") {
          //  内部リンク時の処理
          //console.log("内部 : " + url);
        }
        //  外部リンクである
        else {
          var fexception = false;
          //  例外判定
          if (url.indexOf('twitter.com/etienu352') !== -1) {
            fexception = true;
            //    console.log("例外 : " + url);
          }

          if (!fexception) {
            //    console.log("外部 : " + url);
            var acls = "c-link__exicon";
            if (target.classList.contains("exi-xs")) {
              acls += " c-link__exicon--xs";
            } else if (target.classList.contains("exi-md")) {
              acls += " c-link__exicon--md";
            }

            //属性追加
            target.setAttribute("rel", "noopener noreferrer");
            target.setAttribute("target", "_blank");
            //  fontawesome軽量型
            if (true) {
              var ne = document.createElement('i');
              ne.setAttribute("class", "fa-solid fa-external-link-alt");
              target.appendChild(ne);
            }
            //  object式 - 色変更ができない
            if (false) { var _ne; }
          }
        }
      });
    }
  }]);
  return myExternalLinks;
}();


/***/ }),

/***/ "./src/js/mylib/slide.js":
/*!*******************************!*\
  !*** ./src/js/mylib/slide.js ***!
  \*******************************/
/***/ (function() {

//--------------------------------------------------------
// slideUp
//--------------------------------------------------------
var slideUp = function slideUp(el) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  el.style.height = el.offsetHeight + "px";
  el.offsetHeight;
  el.style.transitionProperty = "height, margin, padding";
  el.style.transitionDuration = duration + "ms";
  el.style.transitionTimingFunction = "ease";
  el.style.overflow = "hidden";
  el.style.height = 0;
  el.style.paddingTop = 0;
  el.style.paddingBottom = 0;
  el.style.marginTop = 0;
  el.style.marginBottom = 0;
  setTimeout(function () {
    el.style.display = "none";
    el.style.removeProperty("height");
    el.style.removeProperty("padding-top");
    el.style.removeProperty("padding-bottom");
    el.style.removeProperty("margin-top");
    el.style.removeProperty("margin-bottom");
    el.style.removeProperty("overflow");
    el.style.removeProperty("transition-duration");
    el.style.removeProperty("transition-property");
    el.style.removeProperty("transition-timing-function");
  }, duration);
};

//--------------------------------------------------------
// slideDown
//--------------------------------------------------------
var slideDown = function slideDown(el) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  el.style.removeProperty("display");
  var display = window.getComputedStyle(el).display;
  if (display === "none") {
    display = "block";
  }
  el.style.display = display;
  var height = el.offsetHeight;
  el.style.overflow = "hidden";
  el.style.height = 0;
  el.style.paddingTop = 0;
  el.style.paddingBottom = 0;
  el.style.marginTop = 0;
  el.style.marginBottom = 0;
  el.offsetHeight;
  el.style.transitionProperty = "height, margin, padding";
  el.style.transitionDuration = duration + "ms";
  el.style.transitionTimingFunction = "ease";
  el.style.height = height + "px";
  el.style.removeProperty("padding-top");
  el.style.removeProperty("padding-bottom");
  el.style.removeProperty("margin-top");
  el.style.removeProperty("margin-bottom");
  setTimeout(function () {
    el.style.removeProperty("height");
    el.style.removeProperty("overflow");
    el.style.removeProperty("transition-duration");
    el.style.removeProperty("transition-property");
    el.style.removeProperty("transition-timing-function");
  }, duration);
};

//--------------------------------------------------------
// slideToggle
//--------------------------------------------------------
var slideToggle = function slideToggle(el) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  if (window.getComputedStyle(el).display === "none") {
    return slideDown(el, duration);
  } else {
    return slideUp(el, duration);
  }
};

/***/ }),

/***/ "./src/js/mylib/smoothscroll.js":
/*!**************************************!*\
  !*** ./src/js/mylib/smoothscroll.js ***!
  \**************************************/
/***/ (function() {

var pHeader = document.querySelector('header');
var headerHeight = pHeader ? pHeader.offsetHeight : 0;
var adjustHeader = 0;
var smoothScrollSpeed = 500;
//  全てのa href="#"を取得
var alinks = document.querySelectorAll('a[href^="#"]');
//  全てのaにクリックイベント設定
alinks.forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    // クリックされたときのデフォルトの挙動を防ぐ
    e.preventDefault();
    var href = anchor.getAttribute("href");
    //console.log('[a]:' + href);

    // href属性の#を取り除いた部分と一致するIDを取得
    var target = document.getElementById(href.replace('#', ''));

    //取得した要素の位置を取得するために、getBoundingClientRect()を呼び出し、ページ上の位置を計算。
    //headerの高さを引いて、スクロール位置がヘッダーの下になるように調整します。
    var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

    // window.scrollTo()を呼び出して、スクロール位置を設定します。behaviorオプションをsmoothに設定することで、スムーズなスクロールを実現します。
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});

/***/ }),

/***/ "./src/js/mylib/swiper-setting.js":
/*!****************************************!*\
  !*** ./src/js/mylib/swiper-setting.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ swiperGroup; }
/* harmony export */ });


//----------------------------------------
//  swiperグループ
//----------------------------------------
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var swiperGroup = /*#__PURE__*/function () {
  function swiperGroup() {
    _classCallCheck(this, swiperGroup);
    this.swipers = [];
  }

  //----------------------------------------
  //  個別 : WORKS
  //----------------------------------------
  _createClass(swiperGroup, [{
    key: "make_works",
    value: function make_works(i_swiper, i_name) {
      this.swipers[i_name] = new Swiper(i_swiper, {
        initialSlide: 2,
        loop: false,
        allowTouchMove: false,
        //  ドラッグ無効
        //  ページネーション
        centeredSlides: false,
        //アクティブなスライドを中央に表示
        speed: 500,
        effect: "fade",
        spaceBetween: 0,
        //スライド間の距離
        slidesPerView: 1,
        //スライダーのコンテナ上に同時表示する枚数
        breakpoints: {
          //小さい順に設定する
          599: {
            slidesPerView: 1
          },
          1024: {
            slidesPerView: 1
          }
        },
        updateOnWindowResize: true,
        //  ウインドウサイズ変更時自動再計算
        autoplay: false
      });
    }

    //----------------------------------------
    //  個別 : SKILL
    //----------------------------------------
  }, {
    key: "make_skill",
    value: function make_skill(i_swiper, i_name) {
      // swiperslider
      this.swipers[i_name] = new Swiper(i_swiper, {
        loop: false,
        allowTouchMove: false,
        //  ドラッグ無効
        //  ページネーション
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: "clickable"
        },
        centeredSlides: true,
        //アクティブなスライドを中央に表示
        spaceBetween: 16,
        //スライド間の距離を16pxに
        slidesPerView: 1,
        //スライダーのコンテナ上に2枚同時に表示
        autoplay: false,
        breakpoints: {
          //小さい順に設定する
          // 599px以上の場合
          599: {
            slidesPerView: 1 //スライドを2枚表示
          },

          // 1024px以上の場合
          1024: {
            slidesPerView: 1 //スライドを3枚表示
          }
        }
      });
    }

    //----------------------------------------
    //  swiperの作成
    //----------------------------------------
  }, {
    key: "registSwiper",
    value: function registSwiper(i_swiper, i_name) {
      switch (i_name) {
        case "skill":
          this.make_skill(i_swiper, i_name);
          break;
        case "works":
          this.make_works(i_swiper, i_name);
          break;
      }
    }

    //----------------------------------------
    //  各種イベントの登録
    //----------------------------------------
  }, {
    key: "eventRegistration",
    value: function eventRegistration() {
      var _this = this;
      //  .swiper : swiperを全て取得
      var swipergroup = document.querySelectorAll('.swiper');
      //  swiperの数だけループ
      swipergroup.forEach(function (swiper) {
        var name = swiper.dataset.name;
        //  swiperの識別名称を取得
        if (name) _this.registSwiper(swiper, name);
      });
    }
  }]);
  return swiperGroup;
}();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!**********************************!*\
  !*** ./src/js/mylib/_myindex.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slide */ "./src/js/mylib/slide.js");
/* harmony import */ var _slide__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_slide__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _smoothscroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./smoothscroll */ "./src/js/mylib/smoothscroll.js");
/* harmony import */ var _smoothscroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_smoothscroll__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _content_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content/common */ "./src/js/mylib/content/common.js");
/* harmony import */ var _content_btn_gototop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content/btn_gototop */ "./src/js/mylib/content/btn_gototop.js");
/* harmony import */ var _content_btn_humburger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content/btn_humburger */ "./src/js/mylib/content/btn_humburger.js");
/* harmony import */ var _content_tabgroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content/tabgroup */ "./src/js/mylib/content/tabgroup.js");
/* harmony import */ var _content_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./content/header */ "./src/js/mylib/content/header.js");
/* harmony import */ var _content_disp_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./content/disp_loader */ "./src/js/mylib/content/disp_loader.js");
/* harmony import */ var _content_contactform__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./content/contactform */ "./src/js/mylib/content/contactform.js");
/* harmony import */ var _content_pagebackground__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./content/pagebackground */ "./src/js/mylib/content/pagebackground.js");
/* harmony import */ var _content_oscheck__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./content/oscheck */ "./src/js/mylib/content/oscheck.js");
/* harmony import */ var _adjustviewport__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./adjustviewport */ "./src/js/mylib/adjustviewport.js");
/* harmony import */ var _myexternallinks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./myexternallinks */ "./src/js/mylib/myexternallinks.js");
/* harmony import */ var _content_accordion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./content/accordion */ "./src/js/mylib/content/accordion.js");
/* harmony import */ var _content_delayloader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./content/delayloader */ "./src/js/mylib/content/delayloader.js");
/* harmony import */ var _content_itemCounters__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./content/itemCounters */ "./src/js/mylib/content/itemCounters.js");
/* harmony import */ var _content_consolejoke__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./content/consolejoke */ "./src/js/mylib/content/consolejoke.js");
/* harmony import */ var _gsap_eegsap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./gsap/eegsap */ "./src/js/mylib/gsap/eegsap.js");
/* harmony import */ var _gsap_eegsap_surface__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./gsap/eegsap_surface */ "./src/js/mylib/gsap/eegsap_surface.js");
/* harmony import */ var _gsap_eegsap_surface__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_gsap_eegsap_surface__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _gsap_eegsap_scrollbutton__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./gsap/eegsap_scrollbutton */ "./src/js/mylib/gsap/eegsap_scrollbutton.js");
/* harmony import */ var _gsap_eegsap_scrollbutton__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_gsap_eegsap_scrollbutton__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _swiper_setting__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./swiper-setting */ "./src/js/mylib/swiper-setting.js");
 //  jQueryのtoggle再現
 //  スムーススクロール
 //  共有変数の入れ物
 //  トップに戻るボタン
 //  ハンバーガー
 //  タブグループ
 //  ヘッダー
 //  ローディング画面
 //  コンタクトフォーム
 //  背景処理
 //  OSの判別
 //  ビューポート調整
 //  外部リンク
 //  アコーディオン
 //  遅延読み込み

 //  WordPress アイテムカウンター
 //  コンソールジョーク

//  GSAPアニメーション

//  ヒーローのアニメーション

//  ヒーローページのSCROLL

//  swiper設定
//  サイト個別の記述をするのでコンテンツに移動予定


// ブレイクポイント
var bp = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280
};
var varcommon = new _content_common__WEBPACK_IMPORTED_MODULE_2__["default"]();
var btnGotoTop = new _content_btn_gototop__WEBPACK_IMPORTED_MODULE_3__["default"]('.js-gotoTop', 80);
var btnHumburger = new _content_btn_humburger__WEBPACK_IMPORTED_MODULE_4__["default"]('.p-hamburger', ".l-header", ".p-spmenu");
var tabgroup = new _content_tabgroup__WEBPACK_IMPORTED_MODULE_5__["default"]();
var pHeader = new _content_header__WEBPACK_IMPORTED_MODULE_6__["default"](".l-header");
var dispLoader = new _content_disp_loader__WEBPACK_IMPORTED_MODULE_7__["default"]();
var contactform = new _content_contactform__WEBPACK_IMPORTED_MODULE_8__["default"]();
var pbg = new _content_pagebackground__WEBPACK_IMPORTED_MODULE_9__["default"]();
var oscheck = new _content_oscheck__WEBPACK_IMPORTED_MODULE_10__["default"]();
var adjustviewport = new _adjustviewport__WEBPACK_IMPORTED_MODULE_11__["default"]();
var myexternallinks = new _myexternallinks__WEBPACK_IMPORTED_MODULE_12__["default"]();
var eegsap = new _gsap_eegsap__WEBPACK_IMPORTED_MODULE_17__["default"]();
var swipergroup = new _swiper_setting__WEBPACK_IMPORTED_MODULE_20__["default"]();
var accordions = new _content_accordion__WEBPACK_IMPORTED_MODULE_13__["default"]();
var delayloader = new _content_delayloader__WEBPACK_IMPORTED_MODULE_14__["default"]();
var consolejoke = new _content_consolejoke__WEBPACK_IMPORTED_MODULE_16__["default"]();
var itemcounters = new _content_itemCounters__WEBPACK_IMPORTED_MODULE_15__["default"]();

//----------------------------------------------------
//  ロード時初期化
//----------------------------------------------------
var init = function init() {
  //console.log("[テンプレート確認]" + wp_template);

  //  スワイパー
  swipergroup.eventRegistration();
  varcommon.swipers = swipergroup.swipers;

  //  トップに戻るの設定
  btnGotoTop.eventRegistration();
  //  ヘッダーハンバーガーの設定
  btnHumburger.eventRegistration('.p-spmenu__inner', 'ul li a', '.l-header__buttonswrapper a');
  //  タブグループ
  tabgroup.eventRegistration(varcommon);
  //  アコーディオン設定
  accordions.eventRegistration();

  //  トップページのみローディング画面設定
  dispLoader.init();
  if (varcommon.wp_template == "front-page.php" || varcommon.wp_template == "home.php") {
    dispLoader.eventRegistration();
  }
  //  コンタクトフォームのページのみ設定
  if (varcommon.wp_template == "page-contact.php") {
    contactform.eventRegistration(varcommon);
  }
  //  トップページ背景
  pbg.taskLoad();

  //  OSの判別
  //  oscheck.dispUserAgent('.disp__userAgent'); //  指定クラスに出力
  oscheck.markBody(); //  bodyにクラス付け(iOS Machintosh 等)

  //  ビューポートの調整
  adjustviewport.set();

  //  外部リンクの処理
  myexternallinks.fixingExternalLinks();
  //  GSAPアニメ登録
  eegsap.eventRegistration(varcommon);
  //  WordPress用 アイテムカウンター
  itemcounters.eventRegistration(varcommon);

  //
  consolejoke.eventRegistration(varcommon);

  //
  delayloader.eventRegistration(varcommon);
};

//----------------------------------------------------
//  イベント : ロード
//----------------------------------------------------
window.addEventListener('DOMContentLoaded', function () {
  init();
});

//----------------------------------------------------
//  イベント : スクロール
//----------------------------------------------------
window.addEventListener('scroll', function () {
  btnGotoTop.task(); //  トップに戻るのスクロール時処理
  pHeader.scrollTask(); //  ヘッダーのスクロール時処理
  pbg.taskScroll(); //  トップページ背景スクロール処理
});

//----------------------------------------------------
//  イベント : リサイズ
//----------------------------------------------------
window.addEventListener("resize", function () {
  //  ビューポートの調整
  adjustviewport.task();
  //  SP→TAB・PCに切り替わった際
  btnHumburger.isPC_close();
});
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map