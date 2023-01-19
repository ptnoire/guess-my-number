'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1
let score = 20;
let highScore = 0;
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    if (!guess){
        displayMessage('No Number!');
    } else if (guess === secretNumber) {
        displayMessage('Correct Number!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = secretNumber;
        if (score > highScore) {
            document.querySelector('.highscore').textContent = score;
            highScore = score;
        }
    } else {
        if (score > 1){
            score--;
            document.querySelector('.score').textContent = score;
            if (guess > secretNumber) {
            displayMessage('Too High!');
            }else if (guess < secretNumber) {
            displayMessage('Too Low!');
            }
        }else {
            displayMessage('Game Over!');
        }
    }
})

document.querySelector('.again').addEventListener('click', function(){
    secretNumber = Math.trunc(Math.random()*20)+1
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    displayMessage('Start guessing...');
})