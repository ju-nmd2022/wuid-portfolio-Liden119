let value = 5;
let randomNumber;
let oldNumber = 5;
let points = 0;

const numberElement = document.getElementById("number");
const higher = document.getElementById("higher");
const lower = document.getElementById("lower");
const score = document.getElementById("score");

numberElement.innerText = value;

higher.addEventListener("click", function (event) {
  //saves the old value
  oldNumber = value;

  // new value
  value = Math.floor(Math.random() * 11);
  numberElement.innerText = value;

  // If new value higher than old number add 1 point
  if (value > oldNumber) {
    points++;
    score.innerText = points;
    numberElement.style.backgroundColor = "#00FF00";
  }

  // If value lower then old value reset points to 0
  else if (value < oldNumber) {
    points = 0;
    score.innerText = points;
    numberElement.style.backgroundColor = "#FF0000";
  }

  // if value is the same
  else if (value === oldNumber) {
    numberElement.style.backgroundColor = "#b9c4c3";
  }
});

lower.addEventListener("click", function (event) {
  //saves the old value
  oldNumber = value;

  // new value
  value = Math.floor(Math.random() * 10);
  numberElement.innerText = value;

  // If new value is lower than old number add 1 point
  if (value < oldNumber) {
    points++;
    score.innerText = points;
    numberElement.style.backgroundColor = "#00FF00";
  }

  // If value higher then old value reset points to 0
  else if (value > oldNumber) {
    points = 0;
    score.innerText = points;
    numberElement.style.backgroundColor = "#FF0000";
  }

  // if value is the same
  else if (value === oldNumber) {
    numberElement.style.backgroundColor = "##b9c4c3";
  }
});
