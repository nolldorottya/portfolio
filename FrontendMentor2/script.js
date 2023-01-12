"use strict";

const numbers = document.querySelectorAll(".num");
const button = document.querySelector(".button");
const question = document.querySelector(".first");
const thanks = document.querySelector(".second");
const selected = document.querySelector(".selected");

let rate;

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    numbers.forEach((num) => num.classList.remove("num_color"));
    number.classList.toggle("num_color");
    rate = number.textContent;
  });
});

button.addEventListener("click", () => {
  question.classList.add("display_none");
  thanks.classList.add("display_block");
  selected.innerHTML = `You selected ${rate} out of 5`;
});
