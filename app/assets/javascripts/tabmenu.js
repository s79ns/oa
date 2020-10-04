const tabs = document.querySelectorAll(".tabmenu-container__tabs li a");
const contents = document.querySelectorAll(".tabmenu-container__contents li");

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function () {
    for (let j = 0; j < tabs.length; j++) {
      tabs[j].classList.remove("active");
      contents[j].classList.remove("active");
    }
    this.classList.add("active");
    contents[i].classList.add("active");
  });
}

// タブをクリックすると、一旦activeクラスを削除し、クリックしたタブ及び、対象のコンテンツにactiveクラスを付与する
// aタグにhref属性がある場合は
// tabs[i].addEventListener("click", function (e) {
// e.preventDefault(); と入力する事で、タブをクリックした時に、ブラウザがリロードされるのを防ぐ
