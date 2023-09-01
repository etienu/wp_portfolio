<?php
//echo "XXXXXX eeTableOfContent.php : START XXXXXX<br>";

//--------------------------------------------------------
//
//  疑似プラグイン
//  eti enu ワードプレス 目次
//  関数、ショートコード登録
//
//--------------------------------------------------------
//
//  ショートコード一覧
//
//--------------------------------------------
//
//      パス取得関数
//
//--------------------------------------------
function eetoc__get_Plugin_URL() {
    //  1.テーマのURLを取得する
    //  http://xxxxx/wp-content/themes/テーマ名
    $fpath = get_template_directory_uri();
    //  2.テーマ名を取得する
    $ftm   = basename( $fpath );
    //  3.このディレクトリ名を取得する
    $fpos = strrpos(__DIR__, $ftm);
    //  4.ディレクトリ名からテーマ名より下の位置を切り出しカットする
    $plugindir = substr( __DIR__, $fpos + strlen($ftm)+1 );
    //  5.テーマURL+プラグインパスを返す
    return $fpath."/".$plugindir;
}
//--------------------------------------------
//
//  ヘッダー中でcssを読み込む
//
//--------------------------------------------
add_action('wp_head','eetoc__insert_css');
function eetoc__insert_css() {
//    global $post;

    if (is_page() || is_single()) {
        if (have_posts()) :
            echo '<link rel="stylesheet" href="'.eetoc__get_Plugin_URL().'/eeTableOfContents.css" />';
        endif;
        rewind_posts();
    }
}
    

//--------------------------------------------------------
//
//  JavaScriptの記述
//
//--------------------------------------------------------
if ( !function_exists( 'eetoc__insert_js' ) ):
    //  javascript element版
    function eetoc__ael_insert_js() {
        $fpath = eetoc__get_Plugin_URL();
        //echo '<script type="text/javascript" src="'.$fpath.'/eeTableOfContents.js"></script>';
    }
    // jQuery版
    function eetoc__jq_insert_js() {
        $fpath = eetoc__get_Plugin_URL();
        echo '<script type="text/javascript" src="'.$fpath.'/eeTableOfContents.js"></script>';
    }
    //  フッターへ記述する
    add_action( 'wp_print_footer_scripts', 'eetoc__jq_insert_js' );
//    add_action( 'wp_print_footer_scripts', 'jq_yesno_chart' );
endif;


//  固定の文言は変数にして一か所で修正可能にする

//--------------------------------------------------------
//
//  eeTableOfContents 自動処理
//  ヘッダーに差し込み
//
//--------------------------------------------------------
/*
<div class="eeTOCs">
    <div class="eeTOC__wrapper">
        <p class="eeTOC__Title">
            Contents
            <span class="eeTOC__toggle">
                <span class="eeTOC__brackets">[</span>
                <span class="eeTOC__hide">hide</span>
                <span class="eeTOC__brackets">]</span>
            </span>
        </p>
        <ul class="eeTOC__list">
            <li><a href="id"><span class="eeTOC__number eeTOC__depth__1">あ</span></a></li>
        </ul>
    </div>
</div>
*/
function eeTableOfContent_insert_task(){
    eeTableOfContent_insert_task_side();
    return eeTableOfContent_insert_task_main();
}

function eeTableOfContent_insert_task_main(){
    //  現在のページがpage、singleの場合
    $rettoc = "";   //  目次を作る
    $retcont = "";  //  本文を格納しながら改造
    $codetoc = '';
    $codeidprev = "";
    $codeidnext = "";
    $cnth2 = 0; //  H2の回数
    $cnth3 = 0; //  H3の回数
    $cnth4 = 0; //  H4の回数
    $cnth2max = 0; 
    $cnth3max = 0;
    if (is_page() || is_single()) {
        if (have_posts()) :
            //  本文を取得
            $content = get_the_content();
            //  "<"で文字列を区切り配列に分割
            $array = explode("<", $content);
            if( $array ){
                $codetoc = '<div class="eeTOC" id="eeTOC">';
                $codetoc .= '<div class="eeTOC__inner">';
                $codetoc .= '<p class="eeTOC__Title">';
                $codetoc .= "目次";
                $codetoc .= '<span class="eeTOC__toggle" class="abc">';
                $codetoc .= '    <span class="eeTOC__brackets">[</span>';
                $codetoc .= '    <span class="eeTOC__hidebutton">隠す</span>';
                $codetoc .= '    <span class="eeTOC__brackets">]</span>';
                $codetoc .= '</span>';
                $codetoc .= "</p>";

                //$rettoc .= '<pre style="text-align:left">';
                //  配列の数繰り返す
                $codetoc .= '<ul class="eeTOC__list">';
                $codetoc .='<hr class="eeTOC__hr">';
                //  一度タグの個数を計測する
                foreach ( $array as $ary ) {
                    if (strpos($ary, "h2 ") !== false) {
                        $cnth2max ++;
                    }
                    else if (strpos($ary, "h3 ") !== false) {
                        $cnth3max ++;
                    }
                }
                //  再度分析する
                foreach ( $array as $ary ) {
                    //  この配列にh2が含まれる
                    if (strpos($ary, "h2 ") !== false) { 
                        //  ">"前後を分離[0]タグ [1]見出し
                        $aryex = explode(">",$ary);
                        //  見出し
                        $hstr = $aryex[1];
                        $cnth2 ++;
                        $cnth3 = 0; //  H3回数初期化
                        //  id名設定
                        $codeid = 'eetoc'.$cnth2;
                        $codeidprev = 'eetoc'.($cnth2-1);
                        $codeidnext = 'eetoc'.($cnth2+1);
                        //  目次追記
                        //if( 1 < $cnth2 ) $codetoc .='<hr class="eeTOC__hr">';
                        $codetoc .= '<li><a href="#'.$codeid.'"><span class="eeTOC__depth__1">';
                        $codetoc .= '<div class="eeTOC__number">'.$cnth2.' '.'</div>';
                        $codetoc .= $hstr.'</span></a></li>';
                        //  H2下に<span id="">H2名</span>を追記して書き換えたものを返す
                        //$retcont .= '<'.$aryex[0].'>'.'<span id="'.$codeid.'">'.$aryex[1].'</span>';
                        //ジャンプ用のIDと見出しは分離する
                        $retcont .= '<'.$aryex[0].'>'.'<span class="eeTOC__anchor" id="'.$codeid.'"></span>';
//                        $retcont .= $aryex[1];
                        $retcont .= '<span class="eeTOC__headtext">'.$aryex[1].'</span>';
                        //  コントロールボタンの追加
                        $retcont .= '<span class="eeTOC__ctrlbtn__wrapper">';
                        if( 1 < $cnth2 ){
                            $retcont .= '<a class="eeTOC__ctrlbtn" href="#'.$codeidprev.'"><i class="fas fa-arrow-up"></i></a>';
                        //  $retcont .= '<a class="eeTOC__ctrlbtn" href="#'.$codeidprev.'">▲</a>';
                        }
                        if( $cnth2 < $cnth2max ){
                            $retcont .= '<a class="eeTOC__ctrlbtn" href="#'.$codeidnext.'"><i class="fas fa-arrow-down"></i></a>';
                        //  $retcont .= '<a class="eeTOC__ctrlbtn" href="#'.$codeidnext.'">▼</a>';
                        }
                        
                        $retcont .= '<a class="eeTOC__ctrlbtn" href="#eeTOC"><i class="fas fa-list"></i></a>';
                        //$retcont .= '<a class="eeTOC__ctrlbtn" href="#eeTOC"><i class="fa-sharp fa-light fa-square-list"></i></a>';
                        //$retcont .= '<a class="eeTOC__ctrlbtn" href="#eeTOC">■</a>';
                        $retcont .= '</span>';
                        
                    }                    
                    //  この配列にh3が含まれる
                    else if (strpos($ary, "h3 ") !== false) { 
                        //  ">"前後を分離[0]タグ [1]見出し
                        $aryex = explode(">",$ary);
                        $cnth3 ++;
                        //  見出し
                        $hstr = $aryex[1];
                        //  id名設定
                        $codeid = 'eetoc'.$cnth2."-".$cnth3;
                        //  目次追記
                        $codetoc .= '<li><a href="#'.$codeid.'"><span class="eeTOC__depth__2">';
                        $codetoc .= '<div class="eeTOC__number">'.$cnth2.'.'.$cnth3.' </div>';
                        $codetoc .= $hstr.'</span></a></li>';
                        //  H3にspan追記
                        $retcont .= '<'.$aryex[0].'>'.'<span id="'.$codeid.'">'.$aryex[1].'</span>';
                    }
                    else{
                        if( $ary )
                            $retcont .= "<".$ary;
                    }

                }

                $codetoc .= '</ul">';
                $codetoc .= '</div>';
                $codetoc .= '</div>';             
            }
        endif;
        rewind_posts();
    }
    //  目次の描画
    print $codetoc;
    //  改変した本文
    return $retcont;
}
//  サイドバーの処理
function eeTableOfContent_insert_task_side(){
/*    
    $html = file_get_contents($target); //読み込む
    $doc = new DOMDocument();
    $doc->formatOutput = true;
    $doc->preserveWhiteSpace = false;
    $doc->documentEncoding = 'UTF-8';
    @$doc->loadHTML($html);
    $xpath = new DOMXPath($doc);    

    foreach ($xpath->query('//div[@class="eeTOC__side"]') as $node) {
        $node->nodeValue = "PHPからサイド!!";
}
*/
  }

add_action('the_content','eeTableOfContent_insert_task');



/*
//--------------------------------------------------------
//
//  ショートコード登録
//
//--------------------------------------------------------
//--------------------------------------------------------
//
//  eeTableOfContents 設置
//
//--------------------------------------------------------
function eeTableOfContent_Frame( $atts, $content = null ){
    extract( shortcode_atts( array(
        'tag' => '',
        'title' => '',
        'ex' => '',
    ), $atts ) );

    ob_start();
    echo '<div class="yn-chart">';
    //  引数が空ではない
    if( !empty($atts) ){
        if( array_key_exists( 'tag'  , $atts ) ) echo '<p class="yn-chart__add">'.$atts['tag'].'</p>';
        if( array_key_exists( 'title', $atts ) ) echo '<p class="yn-chart__title">'.$atts['title'].'</p>';
        if( array_key_exists( 'ex'   , $atts ) ) echo '<p class="yn-chart__ex">'.$atts['ex'].'</p>';
    }
    do_shortcode( $content );
    echo '</div>';
    
    return ob_get_clean();
}

add_shortcode('eeTableOfContent', 'eeTableOfContent_Frame');
*/
/*
//--------------------------------------------------------
//
//  YesNoChart Img 画像の出力
//
//--------------------------------------------------------
function func_YesNoChart_Img( $atts ){
    extract( shortcode_atts( array( 'img' => '','imgu' => '','imgt' => '','i' => '',), $atts ) );
    //  img
    //  コンテンツのフォルダ
    if( array_key_exists( 'img'  , $atts ) ){
        echo '<figure class="wp-block-image ync-aligncenter size-full"><img src="'.content_url().'/'.$atts['img'].'" alt=""></figure>';
    //  メディアライブラリ(uploads)のフォルダ
    }else if( array_key_exists( 'imgu'  , $atts ) ){
        echo '<figure class="wp-block-image ync-aligncenter size-full"><img src="'.wp_upload_dir()['baseurl'].'/'.$atts['imgu'].'" alt=""></figure>';
    //  親テーマのフォルダ
    }else if( array_key_exists( 'imgt'  , $atts ) ){
        echo '<figure class="wp-block-image ync-aligncenter size-full"><img src="'.get_template_directory_uri().'/'.$atts['imgt'].'" alt=""></figure>';
    //  フォルダ直下
    }else if( array_key_exists( 'i' , $atts ) ){
        $nowdir = get_Plugin_URL();
//        $nowdir = get_template_directory_uri()."/".basename(dirname(__FILE__));
        echo '<figure class="wp-block-image ync-aligncenter size-full"><img src="'.$nowdir."/".$atts['i'].'" alt=""></figure>';
    }
}

//--------------------------------------------------------
//  YesNoChart Question
//
//  id   : a hrefに対応するID
//  title: 問題文
//
//  画像を表示する場合のパス
//  img  : wp-contentまで省略( http://～/wp-content/)以降を入力。自由なフォルダを指定可能
//  imgu : メディアライブラリまで省略( http://～/wp-content/upload/)以降を入力。ワードプレスで完結可能
//  imgt : テーマまで省略( http://～/wp-content/themes/現在のテーマ/)以降を入力。大量にある場合の直接指定に便利
//--------------------------------------------------------
function func_YesNoChart_Q( $i_first = false, $atts, $content = null ){
    extract( shortcode_atts( array( 'id' => '', 'title' => '', 'img' => '','imgu' => '','imgt' => '','i' => '',), $atts ) );

    //  "Q1"指定された場合、一個目の表示クラスを指定
    if( $i_first ){
        echo '<div id="'.$atts['id'].'" class="yn-chart__display">';
    }else{
        echo '<div id="'.$atts['id'].'">';
    }
    //  画像
    func_YesNoChart_Img( $atts );
    //  タイトル
    echo '<p>'.$atts['title'].'</p>';
    //  選択肢
    echo '<ul>';
    do_shortcode( $content );
    echo '</ul>';
    echo '</div>';
    
    return;
}

//--------------------------------------------------------
//
//  YesNoChart Q 最初の問題( 初めに表示される問題にクラスが付与される )
//
//--------------------------------------------------------
function YesNoChart_Q1( $atts, $content = null ){
    func_YesNoChart_Q( true, $atts, $content );
    return;
}

//--------------------------------------------------------
//
//  YesNoChart Q 以降の問題
//
//--------------------------------------------------------
function YesNoChart_Q( $atts, $content = null ){
    func_YesNoChart_Q( false, $atts, $content );
    return;
}


add_shortcode('YesNo-Q1', 'YesNoChart_Q1');
add_shortcode('YesNo-Q', 'YesNoChart_Q');

//--------------------------------------------------------
//
//  YesNoChart Answer
//
//--------------------------------------------------------
function YesNoChart_Answer( $atts, $content = null ){
    extract( shortcode_atts( array( 'href' => '', 'text' => '',), $atts ) );
    if( $atts['href'] ){
        echo '<li><a href="'.$atts['href'].'">'.$atts['text'].'</a></li>';
    }
    return;
}

add_shortcode('YesNo-A', 'YesNoChart_Answer');


//--------------------------------------------------------
//
//  YesNoChart Result
//
//--------------------------------------------------------
function YesNoChart_Result( $atts, $content = null ){
    extract( shortcode_atts( array( 'id' => '',
        'img' => '','imgu' => '','imgt' => '','i' => '',
        'title' => '', 'btnhref' => '', 'btntxt' => '',), $atts ) );
    
    echo '<div id="'.$atts['id'].'">';
    //  画像
    func_YesNoChart_Img( $atts );

    echo '<div class="yn-chart__result">';
    echo '<p class="yn-chart__result-title">'.$atts['title'].'</p>';
    echo '<p>'.$content.'</p>';
    echo '</div>';

    //  ボタンの処理
    //  ID指定がある場合
    if( array_key_exists( 'btnhref', $atts )){
        if( array_key_exists( 'btntext', $atts ) ){
            echo '<p class="p-check-btn"><a href="'.$atts['btnhref'].'">'.$atts['btntxt'].'</a></p>';
        }else{
            echo '<p class="p-check-btn"><a href="'.$atts['btnhref'].'">もう一度診断する</a></p>';
        }
    //  指定がない場合
    }else{
        echo '<p class="p-check-btn"><a href="#q1">もう一度診断する</a></p>';
    }
    echo '</div>';
    
    return;
}

add_shortcode('YesNo-R', 'YesNoChart_Result');
*/

//  PHP END
?>
