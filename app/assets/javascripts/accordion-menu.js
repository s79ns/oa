const accordionmenu = document.querySelectorAll(".accordion-menu > li > a");
for (let i = 0; i < accordionmenu.length; i++) {
  accordionmenu[i].addEventListener("click", function () {
    this.nextElementSibling.classList.toggle("active");
  });
}

// nextElementSibling イベントが起こっている兄弟要素（今回で言うと、親メニュー配下のul,li,a）を取得する
