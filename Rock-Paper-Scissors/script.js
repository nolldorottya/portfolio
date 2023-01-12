"use strict";

let yourChoice = document.querySelector(".yourChoice");
let compChoice = document.querySelector(".compChoice");
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let score1 = document.querySelector(".score1");
let score2 = document.querySelector(".score2");
let score1Mobile = document.querySelector(".score1Mobile");
let score2Mobile = document.querySelector(".score2Mobile");
let pic = document.querySelector(".picture");
let pic2 = document.querySelector(".picture2");
let secondSection = document.querySelector(".second");
let battleSection = document.querySelector(".battle");
let battleResultText = document.querySelector(".battle_result_text");
let battleResult = document.querySelector(".battle_result");
let btn = document.querySelector(".retry");
let firework = document.querySelector(".firework");
let triangle = document.querySelector(".triangle");
let scoreCounter = document.querySelector(".scoreCounter");
let scoreCounterHeartsYou = document.querySelector(".scoreCounterHeartsYou");
let scoreCounterHeartsYouMobile = document.querySelector(
  ".scoreCounterHeartsYouMobile"
);
let scoreCounterHeartsComp = document.querySelector(".scoreCounterHeartsComp");
let scoreCounterHeartsCompMobile = document.querySelector(
  ".scoreCounterHeartsCompMobile"
);
let finalResult = document.querySelector(".finalResult");
let finalResultText = document.querySelector(".finalResultText");
let overlay = document.querySelector(".overlay");
let playAgain = document.querySelector(".playAgain");
let startHeartsYou = document.querySelector(".startHeartsYou");
let startHeartsComp = document.querySelector(".startHeartsComp");
let startHeartsYouMobile = document.querySelector(".startHeartsYouMobile");
let startHeartsCompMobile = document.querySelector(".startHeartsCompMobile");
score1.textContent = 0;
score2.textContent = 0;
score1Mobile.textContent = 0;
score2Mobile.textContent = 0;
let arrayOfHands = [rock, paper, scissors];

const winSound = new Audio("images/tada-fanfare-a-6313.mp3");
const loseSound = new Audio("images/wah-wah-sad-trombone-6347.mp3");
const drawSound = new Audio("images/failure-drum-sound-effect-2-7184.mp3");
const drumSound = new Audio("images/drum-roll-sound-effect (mp3cut.net).mp3");

const loading = () => {
  pic2.src = `images/icon-scissors.svg`;

  const szamlalo = setInterval(() => {
    setTimeout(() => {
      pic2.src = `images/icon-rock.svg`;
    }, 150);
    setTimeout(() => {
      pic2.src = `images/icon-paper.svg`;
    }, 350);
    setTimeout(() => {
      pic2.src = `images/icon-scissors.svg`;
    }, 550);
  }, 550);
  setTimeout(() => {
    clearInterval(szamlalo);
  }, 1550);
};

const gameOver = () => {
  setTimeout(
    () => (
      overlay.classList.toggle("hidden"),
      finalResult.classList.toggle("hidden"),
      (finalResultText.textContent = "Game Over! :("),
      score2.textContent++,
      score2Mobile.textContent++
    ),
    1900
  );
};

const finalWin = () => {
  setTimeout(
    () => (
      firework.classList.toggle("hidden"),
      overlay.classList.toggle("hidden"),
      finalResult.classList.toggle("hidden"),
      (finalResultText.textContent = "YOU WIN!"),
      score1.textContent++,
      score1Mobile.textContent++
    ),
    1900
  );
};

playAgain.addEventListener("click", () => {
  startHeartsYou.innerHTML = "";
  startHeartsComp.innerHTML = "";
  startHeartsYou.insertAdjacentHTML(
    "beforeend",
    '<div class="award"><i class="fa-solid fa-heart"></i></div><div class="award"><i class="fa-solid fa-heart"></i></div><div class="award"><i class="fa-solid fa-heart"></i></div>'
  );
  startHeartsComp.insertAdjacentHTML(
    "beforeend",
    '<div class="award"><i class="fa-solid fa-heart"></i></div><div class="award"><i class="fa-solid fa-heart"></i></div><div class="award"><i class="fa-solid fa-heart"></i></div>'
  );
  startHeartsYouMobile.innerHTML = "";
  startHeartsCompMobile.innerHTML = "";
  startHeartsYouMobile.insertAdjacentHTML(
    "beforeend",
    '<div class="award"><i class="fa-solid fa-heart"></i></div><div class="award"><i class="fa-solid fa-heart"></i></div><div class="award"><i class="fa-solid fa-heart"></i></div>'
  );
  startHeartsCompMobile.insertAdjacentHTML(
    "beforeend",
    '<div class="award"><i class="fa-solid fa-heart"></i></div><div class="award"><i class="fa-solid fa-heart"></i></div><div class="award"><i class="fa-solid fa-heart"></i></div>'
  );
  finalResult.classList.add("hidden");
  overlay.classList.add("hidden");
  firework.classList.add("hidden");
  btn.classList.toggle("hidden");
  secondSection.classList.toggle("hidden");
  battleSection.classList.toggle("hidden");
  battleResultText.classList.toggle("hidden");
  battleResult.classList.toggle("hidden");
  triangle.classList.remove("hidden");
  yourChoice.style.outline = "15px solid";
  compChoice.style.outline = "15px solid";
});

const win = (choice, computerChoice) => {
  loading();
  battleResult.classList.toggle("hidden");
  battleResultText.classList.toggle("hidden");
  battleResultText.textContent = "Wait for it...";
  secondSection.classList.toggle("hidden");
  battleSection.classList.toggle("hidden");

  pic.src = `images/icon-${choice.classList}.svg`;
  setTimeout(
    () => (
      (pic2.src = `images/icon-${computerChoice.classList}.svg`),
      (battleResultText.textContent = "You win!"),
      btn.classList.toggle("hidden"),
      scoreCounterHeartsComp.removeChild(
        scoreCounterHeartsComp.lastElementChild
      ),
      scoreCounterHeartsCompMobile.removeChild(
        scoreCounterHeartsCompMobile.lastElementChild
      ),
      (yourChoice.style.outlineColor = "rgb(101, 241, 72)"),
      (yourChoice.style.outlineStyle = "dashed")
      // winSound.play()
    ),
    1900
  );
};
const lose = (choice, computerChoice) => {
  battleResult.classList.toggle("hidden");

  battleResultText.classList.toggle("hidden");
  battleResultText.textContent = "Wait for it...";

  secondSection.classList.toggle("hidden");
  battleSection.classList.toggle("hidden");
  pic.src = `images/icon-${choice.classList}.svg`;

  setTimeout(
    () => (
      (pic2.src = `images/icon-${computerChoice.classList}.svg`),
      (battleResultText.textContent = "Computer win!"),
      btn.classList.toggle("hidden"),
      scoreCounterHeartsYou.removeChild(scoreCounterHeartsYou.lastElementChild),
      scoreCounterHeartsYouMobile.removeChild(
        scoreCounterHeartsYouMobile.lastElementChild
      ),
      (compChoice.style.outlineColor = "rgb(101, 241, 72)"),
      (compChoice.style.outlineStyle = "dashed")
      // loseSound.play()
    ),
    1900
  );
};

const draw = (choice, computerChoice) => {
  battleResult.classList.toggle("hidden");

  battleResultText.classList.toggle("hidden");
  battleResultText.textContent = "Wait for it...";

  secondSection.classList.toggle("hidden");
  battleSection.classList.toggle("hidden");
  pic.src = `images/icon-${choice.classList}.svg`;
  setTimeout(
    () => (
      (pic2.src = `images/icon-${computerChoice.classList}.svg`),
      (battleResultText.textContent = "It's a draw!"),
      btn.classList.toggle("hidden"),
      (yourChoice.style.outline = "15px solid hsl(261, 73%, 60%)"),
      (compChoice.style.outline = "15px solid hsl(261, 73%, 60%)")
      // drawSound.play()
    ),
    1900
  );
};

const battle = (choice) => {
  triangle.classList.add("hidden");
  let computerChoice = arrayOfHands[Math.trunc(Math.random() * 3)];

  if (computerChoice === choice) {
    loading();
    draw(choice, computerChoice);
  }
  if (computerChoice === rock && choice === paper) {
    loading();
    win(choice, computerChoice);
  }
  if (
    computerChoice === rock &&
    choice === paper &&
    scoreCounterHeartsComp.childElementCount === 1
  )
    finalWin();
  if (computerChoice === paper && choice === rock) {
    loading();
    lose(choice, computerChoice);
  }
  if (
    computerChoice === paper &&
    choice === rock &&
    scoreCounterHeartsYou.childElementCount === 1
  )
    gameOver();
  if (computerChoice === scissors && choice === rock) {
    loading();
    win(choice, computerChoice);
  }
  if (
    computerChoice === scissors &&
    choice === rock &&
    scoreCounterHeartsComp.childElementCount === 1
  )
    finalWin();
  if (computerChoice === paper && choice === scissors) {
    loading();
    win(choice, computerChoice);
  }
  if (
    computerChoice === paper &&
    choice === scissors &&
    scoreCounterHeartsComp.childElementCount === 1
  )
    finalWin();
  if (computerChoice === rock && choice === scissors) {
    loading();
    lose(choice, computerChoice);
  }
  if (
    computerChoice === rock &&
    choice === scissors &&
    scoreCounterHeartsYou.childElementCount === 1
  )
    gameOver();
  if (computerChoice === scissors && choice === paper) {
    loading();
    lose(choice, computerChoice);
  }
  if (
    computerChoice === scissors &&
    choice === paper &&
    scoreCounterHeartsYou.childElementCount === 1
  )
    gameOver();
};

rock.addEventListener("click", function (e) {
  e.preventDefault();
  // drumSound.play();
  battle(rock);
});

paper.addEventListener("click", function (e) {
  e.preventDefault();
  // drumSound.play();
  battle(paper);
});

scissors.addEventListener("click", function (e) {
  e.preventDefault();
  // drumSound.play();
  battle(scissors);
});

btn.addEventListener("click", () => {
  triangle.classList.remove("hidden");

  compChoice.style.outlineColor = "rgb(162, 162, 162)";
  compChoice.style.outlineStyle = "none";
  yourChoice.style.outlineColor = "rgb(162, 162, 162)";
  yourChoice.style.outlineStyle = "none";
  btn.classList.toggle("hidden");
  secondSection.classList.toggle("hidden");
  battleSection.classList.toggle("hidden");
  battleResultText.classList.toggle("hidden");
  battleResult.classList.toggle("hidden");
});
