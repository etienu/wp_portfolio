//---------------------------------------------
//
//  iPhone以下の画面サイズへの対応
//  ViewPortを書き換え縮小させる
//
//---------------------------------------------
export default class adjustViewport {
    constructor() {}

    set(_executeWindowWidth) {
        const executeWindowWidth = _executeWindowWidth || 375;
        //console.log(executeWindowWidth);
        const elmViewport = document.querySelector('meta[name="viewport"]');
        //console.log("[inner]" + window.innerWidth + "< [execute]" + executeWindowWidth);
        const valueViewport =
            window.innerWidth < executeWindowWidth ?
            `width=${executeWindowWidth}, user-scalable=no, target-densitydpi=device-dpi` :
            'width=device-width, initial-scale=1';
        //console.log("[txt]" + valueViewport);
        //console.log("[elem]" + elmViewport);
        elmViewport.setAttribute('content', valueViewport);
        return;
    }
}