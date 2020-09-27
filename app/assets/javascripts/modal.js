(function () {
  const modalOpen = document.getElementById("modalOpen");
  const modalClose = document.getElementById("modalClose");
  const mask = document.getElementById("mask");
  const toggle = [modalOpen, modalClose, mask];

  for (let i = 0, len = toggle.length; i < len; i++) {
    toggle[i].addEventListener(
      "click",
      function () {
        modal.classList.toggle("active");
        mask.classList.toggle("active");
      },
      false
    );
  }
})();

// 即時関数 関数定義と同時実行し、関数範囲内のスコープを汚さずに新しいスコープを作ること。関数名は不要で、再利用しない一連の処理で使われる。
// 変数 const(再代入・再定義不可) > let(再代入のみ可) > var(再代入・再定義可)
// for (let i = 0, len = 変数.length; i < len; i++){} 配列の長さを変数にキャッシュし、配列の長さの取得を省略する。
// toggle 指定したクラスの有無を識別し、クラスの追加及び削除を行う。
