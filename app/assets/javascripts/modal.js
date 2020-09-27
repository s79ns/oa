// document.getElementById("modalOpen").addEventListener("click", function () {
//   document.getElementById("modal").classList.add("active");
//   document.getElementById("mask").classList.add("active");
// });

// document.getElementById("modalClose").addEventListener("click", function () {
//   document.getElementById("modal").classList.remove("active");
//   document.getElementById("mask").classList.remove("active");
// });

// document.getElementById("mask").addEventListener("click", function () {
//   document.getElementById("modal").classList.remove("active");
//   document.getElementById("mask").classList.remove("active");
// });

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
