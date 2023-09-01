/**
 * ウィンドウサイズが任意の値を下回ったら、表示比率を縮小する（metaのviewportで調整）
 * 実装イメージ: https://liginc.co.jp/451892
 * @param {Number} _executeWindowWidth ウィンドウサイズが何px下回ったら実行するか
 */
export default (_executeWindowWidth) => {
  const executeWindowWidth = _executeWindowWidth || 375;
  const elmViewport = document.querySelector('meta[name="viewport"]');
  const valueViewport =
    window.innerWidth < executeWindowWidth
      ? `width=${executeWindowWidth}, user-scalable=no, target-densitydpi=device-dpi`
      : 'width=device-width, initial-scale=1';
  elmViewport.setAttribute('content', valueViewport);
  return;
};
