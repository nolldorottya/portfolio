"use strict";

const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  const arrows = question.querySelector(".arrow");
  const answer = question.querySelector(".answer");
  const questionText = question.querySelector(".question__text");
  const questionRow = question.querySelector(".question_row");
  questionRow.addEventListener("click", () => {
    questionText.classList.toggle("font_weight");
    arrows.classList.toggle("rotate");
    answer.classList.toggle("display");
  });
});
