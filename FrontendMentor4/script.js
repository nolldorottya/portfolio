"use strict";

const menu = document.querySelector(".fa-bars");
const mobileMenu = document.querySelector(".mobile__menu");
const menuEsc = document.querySelector(".fa-xmark");

menu.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  mobileMenu.style.animation = "moveLeft 1s ease-out";
});

menuEsc.addEventListener("click", () => {
  setTimeout(() => {
    mobileMenu.classList.toggle("hidden");
  }, 1000);
  mobileMenu.style.animation = "moveRight 1s ease-out";
});
