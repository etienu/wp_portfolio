//----------------------------------------
//
//  WP External Linksの代わり
//  全a hrefにチェックを入れ、外部なら外部ページ処理する
//
//
//----------------------------------------
export default class myExternalLinks {
    constructor() {
        //  全てのa hrefを取得
        this.hrefs = document.querySelectorAll('a');
        //console.log("きてる？" + this.hrefs.length);
    }

    //  外部リンクの修正
    fixingExternalLinks() {
        //console.log("現在: " + wp_path);
        this.hrefs.forEach((target) => {
            let url = target.href;
            var reg = new RegExp("^(https?:)?\/\/" + location.hostname);
            if (url.match(reg) || url.charAt(0) === "/") {
                //  内部リンク時の処理
                //    console.log("内部 : " + url);
            }
            //  外部リンクである
            else {
                let fexception = false;
                //  例外判定
                if (url.indexOf('twitter.com/etienu352') !== -1) {
                    fexception = true;
                    //    console.log("例外 : " + url);
                }
                if (!fexception) {
                    //    console.log("外部！ : " + url);
                    let acls = "c-link__exicon";
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
                        let ne = document.createElement('i');
                        ne.setAttribute("class", "fa-solid fa-external-link-alt");
                        target.appendChild(ne);
                    }
                    //  object式 - 色変更ができない
                    if (false) {
                        let ne = document.createElement('object');
                        //ne.setAttribute("type", "image/svg+xml");
                        //ne.setAttribute("width", "20");
                        //ne.setAttribute("height", "12");
                        ne.setAttribute("class", acls);
                        ne.setAttribute("data", wp_imgpath + "common/external-link-alt-solid.svg");
                        target.appendChild(ne);
                        //aの後ろに要素を追加
                        //let parent = target.parentElement;
                        //parent.insertBefore(ne, target.nextSibling);
                        //let svg_doc = ne.contentDocument;
                        //let svg = svg_doc.querySelector('svg');
                        //console.log(svg_doc);
                        //svg.setAttribute("class", "exicon");
                    }
                }
            }
        });
    }
}