<?php
/*--------------------------------------------------------
//  Layout Combo - ワードプレスレイアウトの組み合わせ
//
//----------------------------------------
//  [PHP] 相対パスで多重include(require)でエラー
//      https://amidagamine.com/notes/48
--------------------------------------------------------*/
?>
<?php
    //   assets/php/template-parts/layout/combo
    //  ↓assets/php/
    //  ↓assets/php/function
    include (dirname(__FILE__) ."/../../../function/common-functions.php");
//    include (dirname(__FILE__) ."/../../../function/single-functions.php");
//    include (dirname(__FILE__) ."/../../../function/post-functions.php");

//twitterCardの<meta>設定
 setting_twittercard();

 // ヘッダー : <head></head>
 get_header();
?>

