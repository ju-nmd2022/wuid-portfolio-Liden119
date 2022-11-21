// All the elements used and affected in js
let hide = document.getElementById("hide");
let show = document.getElementById("show");
let circle = document.getElementById("circle");
let snow1 = document.getElementById("snow1");
let snow2 = document.getElementById("snow2");
let snow3 = document.getElementById("snow3");
let snow4 = document.getElementById("snow4");
let snow5 = document.getElementById("snow5");
let snow6 = document.getElementById("snow6");
let snow7 = document.getElementById("snow7");
let snow8 = document.getElementById("snow8");
let snow9 = document.getElementById("snow9");
let snow10 = document.getElementById("snow10");

// So everything hides when you click at hide
// every snow 1.. 2.. 3 etc are every "snowflake"
//cicle is the "circle/box" at top
hide.addEventListener("click", function (event) {
  circle.style.visibility = "hidden";
  snow1.style.visibility = "hidden";
  snow2.style.visibility = "hidden";
  snow3.style.visibility = "hidden";
  snow4.style.visibility = "hidden";
  snow5.style.visibility = "hidden";
  snow6.style.visibility = "hidden";
  snow7.style.visibility = "hidden";
  snow8.style.visibility = "hidden";
  snow9.style.visibility = "hidden";
  snow10.style.visibility = "hidden";
  hide.style.background = "#dfb9118e";
  show.style.background = "#dfb911";
});

//so everything shows when you click at show
// every snow 1.. 2.. 3 etc are every "snowflake"
//cicle is the "circle/box" at top
show.addEventListener("click", function (event) {
  circle.style.visibility = "visible";
  snow1.style.visibility = "visible";
  snow2.style.visibility = "visible";
  snow3.style.visibility = "visible";
  snow4.style.visibility = "visible";
  snow5.style.visibility = "visible";
  snow6.style.visibility = "visible";
  snow7.style.visibility = "visible";
  snow8.style.visibility = "visible";
  snow9.style.visibility = "visible";
  snow10.style.visibility = "visible";
  show.style.background = "#dfb9118e";
  hide.style.background = "#dfb911";
});
