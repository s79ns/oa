// $(function () {
//   $("#panel-btn").click(function () {
//     $("#panel").slideToggle(200);
//     $("#panel-btn-icon").toggleClass("close");
//     return false;
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("menuButton").addEventListener("click", function () {
    this.classList.toggle("active");
  });
});
