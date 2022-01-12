function fixedGlobalNav() {
  //id名(js-global-nav__list)を代入
  const trigger_nav = document.getElementById('js-global-nav__list');
  //垂直方向のスクロール量の取得
  const scrollY = window.pageYOffset;
  //id名(js-global-nav)を代入
  const trigger = document.getElementById('js-global-nav');
  //trigger(js-global-nav)の表示領域の左上を(0, 0)として、そこからの相対位置で表示
  const triggerClientRect = trigger.getBoundingClientRect().top;
  // //基準のスクロール値を取得(絶対位置:値は固定)
  const triggerY = scrollY + triggerClientRect;

  //scrollYが基準より大きい場合
  if(scrollY > triggerY) {
    //class(fixed)を追加
    trigger_nav.classList.add('fixed');
    //scrollYが基準より小さい場合
  } else {
    //class(fixed)を削除
    trigger_nav.classList.remove('fixed');
  }
}
// スクロールした時にfixedGlobalNavを実行
window.addEventListener('scroll', fixedGlobalNav);


