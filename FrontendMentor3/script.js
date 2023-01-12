"use strict";

const triangle = document.querySelector(".triangle");
const shareIcons = document.querySelector(".share_window");
const share = document.querySelector(".share");

share.addEventListener("click", () => {
  triangle.classList.toggle("display_none");
  shareIcons.classList.toggle("display_none");
});
