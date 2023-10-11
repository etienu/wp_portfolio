//----------------------------------------
//  共有変数グループ
//----------------------------------------
export default class Common {
    constructor() {
        //header.phpで受け渡しているワードプレス画像のパス
        this.wp_imagePath = wp_imgpath;
        //header.phpで受け渡しているワードプレスのテンプレートファイル名
        this.wp_template = wp_template;
        //  recaptchaのキー
        this.reCAPTCHA_site_key = "6Ld-v70lAAAAAH-rR-4E3UJISYwe2Kd7ihL7FM20";
    }

    //----------------------------------------
    //  各種イベントの登録
    //----------------------------------------
    eventRegistration() {

    }
}