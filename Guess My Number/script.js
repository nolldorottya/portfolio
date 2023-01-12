'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if (!guess || guess <= 0) {
        displayMessage('No correct answer!');
        score--;
        document.querySelector('.score').textContent = score;
    } else if (guess === secretNumber) {
        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        displayMessage('Correct answer!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347'; 
    } else if (guess > secretNumber) {
        if(score > 1) {
            displayMessage('Too high!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    } else if (guess < secretNumber && guess > 0) {
        if(score > 1) {
            displayMessage('Too low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    displayMessage('Start guessing...');
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.highscore').textContent = highscore;
});

