/* eslint-disable */

import "./style.css";

const numberArray = ["1", "2", "3", "4", "5"];
const suitArray = ["&spades;", "&clubs;", "&hearts;", "&diams;"];

function random(array) {
  return Math.floor(Math.random() * array.length);
}

//const numberIndex = random(numberArray);
//const suitIndex = random(suitArray);

// const numberValue = numberArray[numberIndex];

const numberValue = numberArray[random(numberArray)];
const suitValue = suitArray[random(suitArray)];

window.onload = function() {
  //write your code here
  document.querySelector(".number").innerHTML = numberValue;
  document.querySelector(".top").innerHTML = suitValue;
  document.querySelector(".bottom").innerHTML = suitValue;
};

if (suitValue == "&hearts;" || suitValue == "&diams;") {
  const color = document.getElementsByClassName("top");
  color[0].style.color = "red";
}
if (suitValue == "&hearts;" || suitValue == "&diams;") {
  const color2 = document.getElementsByClassName("bottom");
  color2[0].style.color = "red";
}
