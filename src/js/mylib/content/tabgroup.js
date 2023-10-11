//----------------------------------------
//
//  タブグループ
//
//----------------------------------------
export default class tabGroup {
    constructor() {
        this.tabgroup = [];
        this.common = null;
    }

    //----------------------------------------
    //  タブ全体閉じる
    //----------------------------------------
    tabdisableall( i_group ) {
        //  タブの取得
        let tabs = i_group.querySelectorAll('[data-js="tabitem"]');
        //  全タブのstate削除
        tabs.forEach((tab) => {
            delete tab.dataset.state;
        });
        
    }

    //----------------------------------------
    //  タブをアクティブに
    //----------------------------------------
    tabactive( i_tab ){
        i_tab.dataset['state'] = "open";
    }

    //----------------------------------------
    //  タブの設定
    //----------------------------------------
    registTab( i_tab ) {
        //  タブのクリック設定
        i_tab.addEventListener("click", () => {
            //  親(グループ)を取得する
            let parent = i_tab.parentNode;
            //  グループの全てを非アクティブにする
            this.tabdisableall( parent );
            //  グループの自分のタブをアクティブにする
            this.tabactive( i_tab );
            //--------------------------------
            //  タブごとの固有処理( data-key指定 )
            let key = i_tab.dataset['key'];
            //  swiperの取得
            let swi = this.common.swipers['skill'];
            switch( key ){
            case 'skillswiper1' : swi.slideTo(0); break;
            case 'skillswiper2' : swi.slideTo(1); break;
            default : break;
            }
        });
    }

    //----------------------------------------
    //  タブグループの設定
    //  グループ内のタブしか検索しないのでグループ名は不要
    //----------------------------------------
    registGroup( i_group ) {
        //  開いているタブ番号を設定
        i_group.dataset['tabindex'] = 0;

        //  タブの取得
        let tabs = i_group.querySelectorAll('[data-js="tabitem"]');
        tabs.forEach((tab) => {
            this.registTab( tab );
        });
    }

    //----------------------------------------
    //  各種イベントの登録
    //----------------------------------------
    eventRegistration( i_common ) {
        //  共有変数クラスの確保
        this.common = i_common;
        //  data-js : タブグループの取得
        let tabgroup = document.querySelectorAll('[data-js="tabgroup"]');
        //  タブグループの数だけループ
        tabgroup.forEach((tgroup) => {
            this.registGroup( tgroup );
        });
    }
}