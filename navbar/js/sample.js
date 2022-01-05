/*グローバルナビのクローンを生成*/
function setCloneNav() {
  //body要素を代入
  const body = document.body;
  //id名(js-global-nav)を代入
  const globalNav = document.getElementById('js-global-nav');
  //要素がない場合それ以降の処理を止める
  if(!globalNav) return;
  //globalNavを複製,trueにするとノードの子も複製
  const cloneNav = globalNav.cloneNode(true);

  //複製されたcloneNavにidを付ける
  cloneNav.id = 'js-clone-nav';
  //複製されたcloneNavにclassを付ける
  cloneNav.classList.add('clone-nav');
  //body.firstChildにの前にcloneNavを挿入
  body.insertBefore(cloneNav, body.firstChild);
}
//setCloneNavを実行
setCloneNav();

/* グローバルナビのクローンをページ上部に移動・固定*/
function fixedGlobalNav() {
  //垂直方向のスクロール量の取得
  const scrollY = window.pageYOffset;
  //id名(js-global-nav)を代入
  const trigger = document.getElementById('js-global-nav');
  //id名(js-clone-nav)を代入
  const cloneNav = document.getElementById('js-clone-nav');
//要素がない場合それ以降の処理を止める
  if(!cloneNav || !trigger) return;

  //trigger(js-global-nav)の表示領域の左上を(0, 0)として、そこからの相対位置で表示
  const triggerClientRect = trigger.getBoundingClientRect().top;
  //基準のスクロール値を取得(絶対位置:値は固定)
  const triggerY = scrollY + triggerClientRect;
  //scrollYが基準より大きい場合
  if(scrollY > triggerY) {
    //class(is-fixed-nav)を追加
    cloneNav.classList.add('is-fixed-nav');
    //scrollYが基準より小さい場合
  } else {
    //class(is-fixed-nav)を削除
    cloneNav.classList.remove('is-fixed-nav');
  }
}
// スクロールした時にfixedGlobalNavを実行
window.addEventListener('scroll', fixedGlobalNav);