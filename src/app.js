/* eslint-disable */
import "bootstrap";
import "./style.css";

const simbol = ["♦", "♥", "♠", "♣"];
const numbers = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];

window.onload = function() {
  //write your code here
  let randomSimbol = Math.floor(Math.random() * simbol.length);

  let randomNumber = Math.floor(Math.random() * numbers.length);

  let simbolUp = document.querySelector(".simbol-up");
  simbolUp.innerHTML = simbol[randomSimbol];

  let simbolDown = document.querySelector(".simbol-down");
  simbolDown.innerHTML = simbol[randomSimbol];

  let cardValue = document.querySelector(".number");
  cardValue.innerHTML = numbers[randomNumber];

  if (randomSimbol <= 1) {
    simbolUp.style.color = "red";
    simbolDown.style.color = "red";
    cardValue.style.color = "red";
  }

  const button = document.querySelector("#button");
  function reload() {
    reload = location.reload();
  }

  button.addEventListener("click", reload, false);

  setTimeout(reload, 2500);
};
