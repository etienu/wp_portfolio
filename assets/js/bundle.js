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
  _createClass(adjustViewport, [{
    key: "set",
    value: function set(_executeWindowWidth) {
      var executeWindowWidth = _executeWindowWidth || 375;
      //console.log(executeWindowWidth);
      var elmViewport = document.querySelector('meta[name="viewport"]');
      //console.log("[inner]" + window.innerWidth + "< [execute]" + executeWindowWidth);
      var valueViewport = window.innerWidth < executeWindowWidth ? "width=".concat(executeWindowWidth, ", user-scalable=no, target-densitydpi=device-dpi") : 'width=device-width, initial-scale=1';
      //console.log("[txt]" + valueViewport);
      //console.log("[elem]" + elmViewport);
      elmViewport.setAttribute('content', valueViewport);
      return;
    }
  }]);
  return adjustViewport;
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
      //console.log("きてますよ" + this.checkOver());
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

    //  ハンバーガー開く
  }, {
    key: "open",
    value: function open() {
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
  }, {
    key: "close",
    value: function close() {
      this.btn.classList.remove("open");
      this.spmenu.classList.remove("open");
      this.header.classList.remove("open");
      // スクロール解除
      this.removeScrollStop();
    }

    //  各種イベントの登録
  }, {
    key: "eventRegistration",
    value: function eventRegistration(i_inner, i_ullia, i_contact) {
      var _this = this;
      //  元
      //let spmenu_li_a = document.querySelectorAll('.p-spmenu__inner ul li a');
      //let spmenu_contact = document.querySelectorAll('.p-spmenu__inner .l-header__buttonswrapper a');

      //  クリックイベントセット
      this.btn.addEventListener("click", function () {
        _this.open();
      });
      //  ul liのメニューがクリックされたら閉じる
      var str_ullia = i_inner + " " + i_ullia;
      //console.log(str_ullia);
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
    _defineProperty(this, "eventRegistration", function () {
      //console.log("きてはいるが・・");
      if (!_this.pfcf_form) return;
      //console.log(this.pfcf_form);
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
    });
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
        //            inp.css('border', '1px solid #2F2F2F');
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
      //        inp.css('border', '1px solid red');
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
          //    console.log("[cfi_email] OK:" + inp.val());
          inp.classList.add("c-form__border-normal");
          inp.classList.remove("c-form__border-required");
          //  inp.css('border', '1px solid #2F2F2F');
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
      //        inp.css('border', '1px solid red');
      req1.style.display = 'none';
      // 空入力
      if (inp.value === "") {
        req1.style.display = 'block'; // 警告「必須項目です」
        return this.enableYourSubmit(false);
        // なんらかの入力あり
      } else {
        inp.classList.add("c-form__border-normal");
        inp.classList.remove("c-form__border-required");
        //            inp.css('border', '1px solid #2F2F2F');
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
  }]);
  return contactForm;
}(); //--------------------------------------------------
//      google reCAPTCHA
//--------------------------------------------------
//reCAPTCHA認証APIを実行して返ってきたトークンをフォームに設置する関数

function grc_sendFormData(e) {
  //console.log("[きてない]");
  //console.log("[e]" + e);
  //  PHPから渡していたが、キーがHTML内に出力されてしまうのはよくないので
  //  とりあえず直接書いておく
  //  PHPからjsの受け渡しはどうしてもHTML出力になってしまうのでは？
  //  解決策求む。
  var reCAPTCHA_site_key = "6Ld-v70lAAAAAH-rR-4E3UJISYwe2Kd7ihL7FM20";
  //元のsubmitをいったんキャンセル
  if (e) e.preventDefault();
  //if (this) this.preventDefault();
  //console.log("[key]" + reCAPTCHA_site_key);
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

//上で作成した関数をフォームデータ送信時に実行されるように設定
var form_id_contact = document.getElementById("id_contact");
if (form_id_contact) {
  //console.log("[登録はしてる]");

  form_id_contact.addEventListener('submit', function (e) {
    //console.log("[あああああああ]");
    //console.log(e);
    //if (e) e.preventDefault();
    grc_sendFormData(e);
  });
}

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
  //export default (displayLoader) => {
  //const self = this;

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
      //console.log(this);
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
//  とりあえず現在使っているのは
//  指定位置超えたらヘッダー浮かすという処理のみ
//----------------------------------------
var partsHeader = /*#__PURE__*/function () {
  function partsHeader(i_header) {
    _classCallCheck(this, partsHeader);
    //  this.btn = document.querySelector(i_id);
    this.lheader = document.querySelector(i_header);
    this.body = document.querySelector("body");
    this.set = 200; //ウインドウ上部からどれぐら
    this.dispPosition = 0; // 120;    //  ヘッダーの位置による

    this.boxTop = new Array();
    this.current = -1;
    //各要素の位置
    //position-nowは場所を取得したい対象の要素に付ける
    //        let pnows = document.querySelectorAll('.position-now');
    //        let cnt = 0;
    //  
    //        pnows.forEach((i) => {
    //            this.boxTop[cnt] = i.offsetTop;
    //            cnt ++;
    //        });
    //最初の要素にclass="position-now"をつける
    //        changeBox(0);
    this.taskFloat();
  }
  _createClass(partsHeader, [{
    key: "scrollTask",
    value: function scrollTask() {
      //var scroll = document.documentElement.scrollTop;
      //  ヘッダーのfloat表示
      this.taskFloat();
      /*
      //  各セクションの高さを超えたらメニューのアクティブ演出
      for (var i = boxTop.length - 1; i >= 0; i--) {
          if ($(window).scrollTop() > boxTop[i] - set) {
              changeBox(i);
              break;
          }
      };*/
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
      //  こんなのは配列処理にすべき
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
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
//----------------------------------------
//
//  コンテンツの処理
//  背景
//
//----------------------------------------
var pageBackGround = /*#__PURE__*/function () {
  function pageBackGround() {
    _classCallCheck(this, pageBackGround);
    this.herobg = document.querySelector('.l-hero__background');
    //        this.hide_herobg_position = 3000; //  スマホでPC時1000では足りない
  }
  _createClass(pageBackGround, [{
    key: "taskScroll",
    value: function taskScroll() {
      if (!this.herobg) return;
      var scroll = document.documentElement.scrollTop;
      if (scroll > this.hidePosition) {
        this.herobg.classList.add("hide");
      } else {
        this.herobg.classList.remove("hide");
      }
    }

    //  読み込み時の処理
  }, {
    key: "taskLoad",
    value: function taskLoad() {
      if (!this.herobg) return;
      var scroll = document.documentElement.scrollTop;
      if (scroll > this.hidePosition) {
        this.herobg.classList.remove("hide");
      }
    }
  }]);
  return pageBackGround;
}();
_defineProperty(pageBackGround, "hidePosition", 3000);


/***/ }),

/***/ "./src/js/mylib/eeparallax/eeparallax.js":
/*!***********************************************!*\
  !*** ./src/js/mylib/eeparallax/eeparallax.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ eeParallaxEngine; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
//================================================
//
//  えちえぬパララックス
//
//--------------------------------------------------
//--------------------------------------------------
//  アイテム
//--------------------------------------------------
var eeParallax = /*#__PURE__*/function () {
  function eeParallax(i_target, i_speed) {
    _classCallCheck(this, eeParallax);
    this.target = i_target;
    //        this.targetClass = document.querySelector(i_targetClass); //$("." + i_targetClass);
    this.speed = i_speed;
    this.beforerect = this.target.getBoundingClientRect(); //  初期の矩形を保存しておく
    this.beforepos = {
      x: 0,
      y: 0,
      z: 0
    };
    this.adjust = {
      x: 0,
      y: 0,
      z: 0
    };
    this.scale = 1.0;
    this.setBeforePos();
    //console.log("[eParallax] new : ", this.targetClass);
  }
  _createClass(eeParallax, [{
    key: "getTarget",
    value: function getTarget() {
      return this.target;
    }
  }, {
    key: "setSpeed",
    value: function setSpeed(i_speed) {
      this.speed = i_speed;
    }
  }, {
    key: "setAdjust",
    value: function setAdjust(i_X, i_Y, i_Z) {
      this.adjust.x = i_X;
      this.adjust.y = i_Y;
      this.adjust.z = i_Z;
    }
  }, {
    key: "setScale",
    value: function setScale(i_scale) {
      this.scale = i_scale;
    }
  }, {
    key: "setBeforePos",
    value: function setBeforePos() {
      var rect = this.target.getBoundingClientRect();
      this.beforepos.y = rect.bottom;
    }
  }]);
  return eeParallax;
}(); //--------------------------------------------------
//  エンジン
//--------------------------------------------------
var eeParallaxEngine = /*#__PURE__*/function () {
  // パララックスアイテム
  function eeParallaxEngine() {
    _classCallCheck(this, eeParallaxEngine);
    this.items = [];
    this.scroll = 0;
  }

  //  アイテムの追加
  _createClass(eeParallaxEngine, [{
    key: "add",
    value: function add(i_item) {
      this.items.push(i_item);
    }
  }, {
    key: "setScroll",
    value: function setScroll(i_scroll) {
      this.scroll = i_scroll;
    }

    //  処理
  }, {
    key: "task",
    value: function task() {
      this.scroll = window.pageYOffset;
      for (var i = 0; i < this.items.length; i++) {
        var itm = this.items[i];
        //console.log("[eeParallaxEngine::task()][%d/%d][item]", i, this.items.length, itm);
        this.taskItem(itm);
      }
    }

    //  個別アイテム処理
  }, {
    key: "taskItem",
    value: function taskItem(i_Item) {
      var itm = i_Item.getTarget();
      //  指定のclassを操作

      // 画面の高さ取得
      var windowHeight = document.documentElement.clientHeight;
      // ウインドウの中心計算 + スクロール量
      var windowCenter = windowHeight / 2 + this.scroll;
      //  保存した矩形を利用( transformの影響を受ける為 )
      var rect = i_Item.beforerect; //getBoundingClientRect(); // レンダリングサイズなのでscaleを使う場合影響受ける
      // scaleで拡大された分の相殺倍率
      var sper = 1.0 / i_Item.scale;
      // 拡大率を兼ねたアイテムのセンター
      var itemCenter = rect.top * sper + (rect.bottom * sper - rect.top * sper) / 2;
      //var itemCenter = itm.offsetTop + ((itm.offsetHeight) / 2);

      // ウインドウの中心とアイテムの芯の差
      var parallaxY = windowCenter - itemCenter;
      // 実際に移動する量 : 差に対して速度倍率をかける
      parallaxY = Number(i_Item.adjust.y) + parallaxY * i_Item.speed;
      //console.log(i_Item.adjust.y);
      //console.log(i_Item.speed);
      //console.log(parallaxY);

      //  ・移動量に対してfilterでblurかけてもいい
      //  ・画像が表示されたら

      //console.log("[rect][top:%d/bottom:%d][sper:%d]", rect.top, rect.bottom, sper);
      //console.log("[wc:%d]-[itemcenter:%d]=[py:%d]", windowCenter, itemCenter, parallaxY);

      //  Y
      var tscale = "scale(" + i_Item.scale + ") ";
      var tajx = "translate3d(" + i_Item.adjust.x + "px, ";
      var tajy = parallaxY + "px, ";
      var tajz = i_Item.adjust.z + "px)";
      //        console.log("[tajy:%f]-[parallaxY:%f]", tajy, parallaxY);

      var txt = tscale + tajx + tajy + tajz;
      //  transformを設定
      itm.style.transform = txt;
      //console.log("[css]" + txt);
    }

    //  指定クラスがあれば全部登録
  }, {
    key: "eventRegistration",
    value: function eventRegistration() {
      var _this = this;
      var eeps = document.querySelectorAll('.js-eeparallax');
      eeps.forEach(function (target) {
        //    let yspd = target.getAttribute('data-spd') || 0.1;
        //    let scale = target.getAttribute('data-scale') || 1.2;
        //    let adjusty = target.getAttribute('data-adjusty') || 0;
        var yspd = target.dataset['spd'] || 0.1;
        var scale = target.dataset['scale'] || 1.2;
        var adjusty = target.dataset['adjusty'] || 0;
        //yspd = yspd / 10;
        //scale = scale / 10;
        //console.log("えちえぬパララックス:[spd:%f][scale:%f][adjusty:%d]", yspd, scale, adjusty, target);
        var eepi = new eeParallax(target, yspd);
        eepi.setScale(scale);
        eepi.setAdjust(0, adjusty, 0);
        _this.add(eepi);
      });
    }
  }]);
  return eeParallaxEngine;
}();


/***/ }),

/***/ "./src/js/mylib/gsap/eegsap.js":
/*!*************************************!*\
  !*** ./src/js/mylib/gsap/eegsap.js ***!
  \*************************************/
/***/ (function() {

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
var textWrappers = document.querySelectorAll('.c-title__bg__modan');
textWrappers.forEach(function (textWrapper) {
  //配列
  var bgcl = textWrapper.querySelector('span i'); //  左上角
  var bgcr = textWrapper.querySelector('span u'); //  右下角
  var bg = textWrapper.querySelector('span b');
  var text = textWrapper.querySelector('span p');
  var title = textWrapper.querySelector('.js__title');
  //gsap.to(text, 1, { y: 50, repeat: -1 });
  //    gsap.fromTo(text, 2, { x: -100 }, { rotate: 0, x: 100, backgroundColor: '#f00', ease: 'Power4.easeOut', repeat: -1, });
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
      start: 'top center+=50%'
    }
  });
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
      start: 'top center+=50%'
    }
  });

  //  背景
  gsap.fromTo(bg, {
    autoAlpha: 0,
    x: '10%'
  }, {
    autoAlpha: 1,
    duration: 3,
    x: 0,
    ease: 'Power4.easeOut',
    scrollTrigger: {
      trigger: bg,
      start: 'top center+=50%'
    }
  });
  gsap.fromTo(text, {
    x: '-110%'
  }, {
    rotate: 0,
    x: 0,
    ease: 'Power4.easeOut',
    duration: 2,
    scrollTrigger: {
      trigger: text,
      //アニメーションが始まるトリガーとなる要素
      start: 'top center+=20%',
      //アニメーションが始まる位置を指定
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
});

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
  var li_a_i = h_lia.querySelector('i'); //  左上角
  var li_a_u = h_lia.querySelector('u'); //  右下角
  var li_a_span = h_lia.querySelector('span'); //  aの下の文字列格納span
  var li_a_spans = li_a_span.querySelectorAll('span'); //  spanの下の分割されたspan

  //console.log(h_lia);
  //console.log(li_a_i);
  //console.log(li_a_u);

  //    const jsDot = '.js-dot-wrap > span'; // ドットを取得
  //    const jsBg = '.js-dot-bg'; // 黒い背景を取得
  //    const jsText = '.js-title span'; // テキストを取得

  // 初期の状態(取ってきたドット・テキストは最初は非表示)
  // ドットとテキストを非表示
  gsap.set([li_a_i, li_a_u], {
    opacity: 0
  });
  //gsap.set([li_a_spans], { color: "white" });
  // ドットの最初の位置を上40pxに配置
  //gsap.set(jsDot, {      y: -40    });
  // テキストの最初の位置を下40pxに配置
  //gsap.set(li_a_spans, { y: 30 });
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
    // 0.1秒かけてアニメーション
    //delay: 0.3, // 0.3秒後に起動
    //x: '100%', //右に100%移動させて画面の外に出す
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

/***/ }),

/***/ "./src/js/mylib/gsap/eegsap_parallax.js":
/*!**********************************************!*\
  !*** ./src/js/mylib/gsap/eegsap_parallax.js ***!
  \**********************************************/
/***/ (function() {

gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray('.js-parallax').forEach(function (wrap) {
  var y = wrap.getAttribute('data-y') || -100;
  //console.log("きてる？ん");
  gsap.to(wrap, {
    y: y,
    scrollTrigger: {
      trigger: wrap,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 0.5
      //markers: true
    }
  });
});

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
        y: 0
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
    //let opt = null;
    //opt = target.querySelectorAll('.c50');
    //console.log(target.getAttribute('class'));
    //console.log(target.getAttribute('class'));
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
      //autoAlpha: 1,
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
    //let divs = target.querySelectorAll('div');
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
    //let divs = target.querySelectorAll('div');
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
    //        const text = target.textContent;  //  文字列のみ
    //const text = target.innerText;    //  改行のみ
    var text = target.innerHTML; //  タグあり
    //console.log(text);
    var result_br = text.split('<br>');
    for (var j = 0; j < result_br.length; j++) {
      //console.log("[j]" + j + " [text]" + result_br[j]);
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
        amount: 4,
        //アニメーション間隔の合計時間
        from: "start",
        // 動作を始める要素を指定
        ease: "sine.in"
      }
    });
  });
}

//----------------------------------------
//  surface : ヒーローセクション専用
//----------------------------------------
{
  var _eff_classs6 = document.querySelectorAll('.js-surface__heroheading');
  _eff_classs6.forEach(function (target) {
    var divs = target.querySelectorAll('div');
    console.log(divs);
    gsap.set([divs[0], divs[1], divs[2], divs[3]], {
      opacity: 0
    });
    gsap.set(divs[0], {
      y: 160
    });
    gsap.set(divs[1], {
      y: 120
    });
    gsap.set(divs[2], {
      y: 80
    });
    gsap.set(divs[3], {
      y: 40
    });
    var tl = gsap.timeline();
    tl.to(divs[0], {
      rotate: 0,
      duration: 0.5,
      opacity: 1
    }).to(divs[0], {
      y: 0
    }).to(divs[1], {
      duration: 0.5,
      opacity: 1
    }, '+=0.5').to(divs[1], {
      y: 0
    }).to(divs[2], {
      duration: 0.5,
      opacity: 1
    }, '+=0.5').to(divs[2], {
      y: 0
    }).to(divs[3], {
      duration: 0.5,
      opacity: 1
    }, '+=0.5').to(divs[3], {
      y: 0
    }, '+=0.5');
  });
}

//----------------------------------------
//  surface : ヒーローセクション専用 : 2 演出含む
//----------------------------------------
{
  var _eff_classs7 = document.querySelectorAll('.js-surface__heroheading2');
  _eff_classs7.forEach(function (target) {
    var divs = target.querySelectorAll('div');
    //console.log(divs);

    divs.forEach(function (item) {
      gsap.set(item, {
        opacity: 0,
        y: 40
      });
    });

    //        gsap.set([divs[0], divs[1], divs[2], divs[3]], { opacity: 0 });
    gsap.set(divs[0], {
      opacity: 0,
      y: 40,
      rotate: 30
    });
    var tl = gsap.timeline();
    //  指のサイズ
    var handSize = 3;
    //        if (checkUA() == isSP) {
    //            handSize = 2;
    //        }
    //  ！
    tl.to(divs[0], {
      y: 0,
      rotate: 0,
      x: -15,
      duration: 0.5,
      opacity: 1
    }).to(divs[0], {
      rotate: -5,
      y: -15,
      scale: 1.5,
      duration: 1
    }).to(divs[0], {
      rotate: -15,
      y: -40,
      x: -20,
      scale: 2,
      color: "#FF0000",
      opacity: 0,
      duration: 1
    }
    //  わかりやすい
    ).to(divs[1], {
      y: 0,
      duration: 1,
      opacity: 1
    }).to(divs[1], {
      y: -15,
      color: "#00FF66",
      duration: 1
    }).to(divs[1], {
      y: -40,
      duration: 1,
      opacity: 0
    }
    //  👍
    ).to(divs[2], {
      y: 0,
      scale: handSize,
      opacity: 1,
      duration: 0.5
    }).to(divs[2], {
      y: -15,
      duration: 0.5
    }).to(divs[2], {
      y: -40,
      opacity: 0,
      duration: 0.1
    }
    //  使いやすい
    ).to(divs[3], {
      y: 0,
      duration: 0.5,
      opacity: 1
    }).to(divs[3], {
      y: -15,
      duration: 1
    }).to(divs[3], {
      y: -80,
      opacity: 0,
      duration: 1
    }
    //  ■
    ).to(divs[4], {
      y: 0,
      rotate: 360,
      scale: 1.2,
      duration: 0.5,
      opacity: 1
    }).to(divs[4], {
      y: -20,
      rotate: 720,
      scale: 1.5,
      color: "#FFFF00",
      duration: 0.5
    }).to(divs[4], {
      y: -40,
      rotate: 0,
      scale: 1.8,
      opacity: 0,
      duration: 1
    }
    //  心地よい
    ).to(divs[5], {
      y: 0,
      duration: 1,
      opacity: 1
    }).to(divs[5], {
      y: -15,
      duration: 1
    }).to(divs[5], {
      y: -80,
      opacity: 0,
      duration: 1
    }
    //  サイト作ります
    ).to(divs[6], {
      y: 0,
      duration: 1,
      opacity: 1
    }).to(
    //    divs[6], { y: -15, backgroundColor: "rgba(102,240,50)", duration: 1 },
    divs[6], {
      y: -15,
      backgroundColor: "#90ee90",
      duration: 1
    }
    //        ).to(
    //            divs[6], { y: -80, opacity: 0, duration: 1 },
    );
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
    //console.log("きてる？" + this.hrefs.length);
  }

  //  外部リンクの修正
  _createClass(myExternalLinks, [{
    key: "fixingExternalLinks",
    value: function fixingExternalLinks() {
      //console.log("現在: " + wp_path);
      this.hrefs.forEach(function (target) {
        var url = target.href;
        var reg = new RegExp("^(https?:)?\/\/" + location.hostname);
        if (url.match(reg) || url.charAt(0) === "/") {
          //  内部リンク時の処理
          //    console.log("内部 : " + url);
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
            //    console.log("外部！ : " + url);
            var acls = "c-link__exicon";
            //console.log(target.classList);
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
/***/ (function() {

"use strict";


// swiperslider
var swiper = new Swiper(".swiper-container", {
  //loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  //  ページネーション
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: "clickable"
  },
  //  スクロールバー
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
    draggable: false
  },
  centeredSlides: true,
  //アクティブなスライドを中央に表示
  //speed: 2000,
  //effect: "slide",
  //effect: "fade",
  //effect: "cube",
  effect: "coverflow",
  //effect: "flip",
  //effect: "cards",
  //effect: "creative",

  spaceBetween: 16,
  //スライド間の距離を16pxに
  slidesPerView: 1,
  //スライダーのコンテナ上に2枚同時に表示
  breakpoints: {
    //小さい順に設定する
    // 599px以上の場合
    599: {
      slidesPerView: 2 //スライドを2枚表示
    },

    // 1024px以上の場合
    1024: {
      slidesPerView: 3 //スライドを3枚表示
    }
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  }
});

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
/* harmony import */ var _content_btn_gototop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content/btn_gototop */ "./src/js/mylib/content/btn_gototop.js");
/* harmony import */ var _content_btn_humburger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content/btn_humburger */ "./src/js/mylib/content/btn_humburger.js");
/* harmony import */ var _content_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content/header */ "./src/js/mylib/content/header.js");
/* harmony import */ var _content_disp_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content/disp_loader */ "./src/js/mylib/content/disp_loader.js");
/* harmony import */ var _content_contactform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./content/contactform */ "./src/js/mylib/content/contactform.js");
/* harmony import */ var _content_pagebackground__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./content/pagebackground */ "./src/js/mylib/content/pagebackground.js");
/* harmony import */ var _content_oscheck__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./content/oscheck */ "./src/js/mylib/content/oscheck.js");
/* harmony import */ var _adjustviewport__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./adjustviewport */ "./src/js/mylib/adjustviewport.js");
/* harmony import */ var _myexternallinks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./myexternallinks */ "./src/js/mylib/myexternallinks.js");
/* harmony import */ var _eeparallax_eeparallax__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./eeparallax/eeparallax */ "./src/js/mylib/eeparallax/eeparallax.js");
/* harmony import */ var _gsap_eegsap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./gsap/eegsap */ "./src/js/mylib/gsap/eegsap.js");
/* harmony import */ var _gsap_eegsap__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_gsap_eegsap__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _gsap_eegsap_surface__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./gsap/eegsap_surface */ "./src/js/mylib/gsap/eegsap_surface.js");
/* harmony import */ var _gsap_eegsap_surface__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_gsap_eegsap_surface__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _gsap_eegsap_scrollbutton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./gsap/eegsap_scrollbutton */ "./src/js/mylib/gsap/eegsap_scrollbutton.js");
/* harmony import */ var _gsap_eegsap_scrollbutton__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_gsap_eegsap_scrollbutton__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _gsap_eegsap_parallax__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./gsap/eegsap_parallax */ "./src/js/mylib/gsap/eegsap_parallax.js");
/* harmony import */ var _gsap_eegsap_parallax__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_gsap_eegsap_parallax__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _swiper_setting__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./swiper-setting */ "./src/js/mylib/swiper-setting.js");
/* harmony import */ var _swiper_setting__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_swiper_setting__WEBPACK_IMPORTED_MODULE_16__);
 //  jQueryのtoggle再現
 //  スムーススクロール
 //  トップに戻るボタン
 //  ハンバーガー
 //  ヘッダー
 //  ローディング画面
 //  コンタクトフォーム
 //  背景処理
 //  OSの判別
 //  ビューポート調整
 //  外部リンク
 //  パララックス
//
//gsap
//import '../lib/gsap/gsap.min.js'; //  本体
//import '../lib/gsap/scrolltrigger.min.js'; //  スクロールトリガー
//swiper
//import '../lib/swiper/swiper-bundle.min.js'; //  本体

//
//  練習兼、見出し背景、

//  wowの真似事、up,upgroupなどふわっと出る演出
//  ヒーローのアニメーション

//  ヒーローページのSCROLL

//  パララックス

//  swiper設定
 //  ページにswiperがないと

// ブレイクポイント
var bp = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280
};
var btnGotoTop = new _content_btn_gototop__WEBPACK_IMPORTED_MODULE_2__["default"]('.js-gotoTop', 80);
var btnHumburger = new _content_btn_humburger__WEBPACK_IMPORTED_MODULE_3__["default"]('.p-hamburger', ".l-header", ".p-spmenu");
var pHeader = new _content_header__WEBPACK_IMPORTED_MODULE_4__["default"](".l-header");
var dispLoader = new _content_disp_loader__WEBPACK_IMPORTED_MODULE_5__["default"]();
var contactform = new _content_contactform__WEBPACK_IMPORTED_MODULE_6__["default"]();
var pbg = new _content_pagebackground__WEBPACK_IMPORTED_MODULE_7__["default"]();
var oscheck = new _content_oscheck__WEBPACK_IMPORTED_MODULE_8__["default"]();
var adjustviewport = new _adjustviewport__WEBPACK_IMPORTED_MODULE_9__["default"]();
var myexternallinks = new _myexternallinks__WEBPACK_IMPORTED_MODULE_10__["default"]();
var eeparallax = new _eeparallax_eeparallax__WEBPACK_IMPORTED_MODULE_11__["default"]();

//----------------------------------------------------
//  ロード時初期化
//----------------------------------------------------
var init = function init() {
  //console.log("[テンプレート確認]" + wp_template);

  //  トップに戻るの設定
  btnGotoTop.eventRegistration();
  //  ヘッダーハンバーガーの設定
  btnHumburger.eventRegistration('.p-spmenu__inner', 'ul li a', '.l-header__buttonswrapper a');

  //  トップページのみローディング画面設定
  dispLoader.init();
  if (wp_template == "front-page.php" || wp_template == "home.php") {
    dispLoader.eventRegistration();
  }
  //  コンタクトフォームのページのみ設定
  if (wp_template == "page-contact.php") {
    contactform.eventRegistration();
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
  //  パララックス
  eeparallax.eventRegistration();
  eeparallax.task();

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
  eeparallax.task();
});

//----------------------------------------------------
//  イベント : リサイズ
//----------------------------------------------------
window.addEventListener("resize", function () {
  //    console.log("resize");
  eeparallax.task();
});
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map