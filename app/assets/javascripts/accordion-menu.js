const accordionmenu = document.querySelectorAll(".accordion-menu > li > a");
for (let i = 0; i < accordionmenu.length; i++) {
  accordionmenu[i].addEventListener("click", function (e) {
    e.preventDefault();
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("active");
  });
}

// 5行目 クリックした要素にactiveクラスを付与し、CSSで矢印を回転させる
// nextElementSibling イベントが起こっている兄弟要素（今回で言うと、親メニュー配下のul,li,a）を取得する
// tabs[i].addEventListener("click", function (e) {
// e.preventDefault(); と入力する事で、リンクをクリックした時に、ブラウザがリロードされるのを防ぐ
