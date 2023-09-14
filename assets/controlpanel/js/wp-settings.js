//----------------------------------------------------------------
//
//  ワードプレス管理画面用js
//  独自管理ページのボタンに対するphp実行処理
//
//----------------------------------------------------------------
//  読み込み時の処理
document.addEventListener("DOMContentLoaded",()=>{
    //console.log( "まず読まれているか？" );
    const wpdir = "../wp-content/themes/eec/assets/controlpanel";

    //----------------------------------------------------
    //  管理画面にあるidを取得して、なければ管理画面ではないので終了
    //----------------------------------------------------
    const post = document.querySelector("#wpcontent");
    if( !post ){
        console.log( "管理画面ではありません" );
        return;
    }

    //================================================
    //  管理画面追加ページ : 「テーマ設定」
    //================================================
    //----------------------------------------
    // ボタンの処理
    //----------------------------------------
    const btnms_vr = document.querySelector("#my-wp-setting-viewreset");
    if( btnms_vr )
        btnms_vr.addEventListener("click", () => {
            //console.log( "ボタン押せてますか？" );
            //  確かに管理画面の話なのでテーマより上にあるべきだが
            //  wp-migration一発で終わらせたい事を考えるとテーマ下で管理したいとも思う
            runPHP( wpdir+"/php/wp-setting-viewreset.php" );
        });

    //----------------------------------------
    //  PHPの実行
    //----------------------------------------
    const runPHP = ( i_fileName ) => {
        console.log( ">>> runPHP <<<" );
        // (1)XMLHttpRequestオブジェクトを作成
        var xhr = new XMLHttpRequest();

        // (2)onreadystatechangeイベントで処理の状況変化を監視
        xhr.onreadystatechange = function(data) {
            if(this.readyState == 4 && this.status == 200){
                console.log( this.responseText );
            }
            //console.log("[status]" + status);
            //console.log(data);
            //console.log('ファイル['+i_fileName+']読み込み成功');
            //  リロードする
            location.reload();
        }
        // (3)HTTPのGETメソッドとアクセスする場所を指定
        xhr.open('GET', i_fileName, true );
        // (4)HTTPリクエストを送信
        xhr.send();
    }

});