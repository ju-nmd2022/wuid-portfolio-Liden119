let hide = document.getElementById("hide");
let show = document.getElementById("show");
let circle = document.getElementById("circle");

hide.addEventListener("click", function (event) {
  circle.style.visibility = "hidden";
  hide.style.background = "#dfb9118e";
  show.style.background = "#dfb911";
});

show.addEventListener("click", function (event) {
  circle.style.visibility = "visible";
  show.style.background = "#dfb9118e";
  hide.style.background = "#dfb911";
});
