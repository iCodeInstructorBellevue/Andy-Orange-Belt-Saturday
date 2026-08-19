const playerScoreEl = document.getElementById('player-score');
const cpuScoreEl = document.getElementById('cpu-score');
const playerHandEl = document.getElementById('player-hand');
const cpuHandEl = document.getElementById('cpu-hand');
const playerHandImg = playerHandEl.querySelector('img');
const cpuHandImg = cpuHandEl.querySelector('img');
const result = document.querySelector('.result p');
const optionButtons = document.querySelectorAll('.options .choice-btn');
const gameContainer = document.querySelector('.game-container');



let playerScore = 0;
let cpuScore = 0;
const choices = ['rock', 'paper', 'scissors'];


optionsButtons.forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.dataset.choice;
        playRound(playerChoice);
    });
});

function playRound(playerChoice){
toggleButtons(true);
}

function determineWinner(player, cpu){

}

function updateScoreboard(winner){

}

function toggleButtons(disabled){
    optionButtons.forEach(button => {
        button.disabled = disabled;
    })
}