const playerScoreE1 = document.getElementById('player-score');
const computerScoreE1 = document.getElementById('bot-score');
const playerHandEl = document.getElementById('player-hand');
const botHandEl = document.getElementById('bot-hand');
const playerHandImg = botHandEl.querySelector('img');
const computerHandImg = computerHandEl.querySelector('.result p');
const optionButtons = document.querySelectorAll('.options .choice-btn');
const gameContainer = document.querySelector('.game-container');

let playerScore = 0;
let botScore = 0;
const choices = ['rock', 'paper', 'scissors'];

optionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.dataset.choice;
        playRound(playerChoice)
    })
})

function playRound(playerChoice){

}

function determineWinner(player, bot){

}

function updateScoreboard(winner){

}

function toggleButtons(disabled){
    optionButtons.forEach(button => {
        button.disabled = disabled;
    })
}