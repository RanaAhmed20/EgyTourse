let menuToggle = document.querySelector("#menuToggle");
let navMenu = document.getElementById("menu");
// function showMenu() {
//   if (navMenu.style.display === "none") {
//     navMenu.style.display = "block";
//   } else {
//     navMenu.style.display = "none";
//   }
//   if (navMenu.style.display === "block") {
//     navMenu.classList.add("menuLis");
//   }
// }

$(document).ready(function () {
  $("#menuToggle").click(function () {
    $(".menu").toggle();
  });
});
