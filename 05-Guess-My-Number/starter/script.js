'use strict';


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);

    // When there is no input
    if (!guess) {
        displayMessage('⛔️ No Number!');
    // When player wins
    } else if (guess === secretNumber) {  
        displayMessage('✅ Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highScore) {
            highScore = score
            document.querySelector('.highscore').textContent = highScore;
        }

    } else if (guess != secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '⬆️ Your number is too high!' : '⬇️ Your number is too low!'); 
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('❌ Game Over');
            document.querySelector('.score').textContent = 0;
        } 
    }
});

document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
});


// Aixliary functions
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message; 
}
