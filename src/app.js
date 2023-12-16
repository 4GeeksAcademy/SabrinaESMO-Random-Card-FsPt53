/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
};

let logo = ["♦", "♥", "♠", "♣"];
let number = ["A", "1", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];

let randomLogo = Math.floor(Math.random() * logo.length);
let randomNumber = Math.floor(Math.random() * number.length);

let showLogo = logo[randomLogo];
let showNumber = number[randomNumber];

document.querySelector(".icon-top").innerHTML = showLogo;
document.querySelector(".number").innerHTML = showNumber;
document.querySelector(".icon-bottom").innerHTML = showLogo;

let element1 = document.querySelector(".icon-top");
if (showLogo == "♦" || showLogo == "♥") {
  element1.classList.add("red");
} else {
  element1.classList.add("black");
}

let element2 = document.querySelector(".icon-bottom");
if (showLogo == "♦" || showLogo == "♥") {
  element2.classList.add("red-down");
} else {
  element2.classList.add("black-down");
}
