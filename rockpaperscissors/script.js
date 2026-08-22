const playerScoreEl = document.getElementById('player-score');
const cpuScoreEl = document.getElementById('cpu-score');
const playerHandEl = document.getElementById('player-hand');
const cpuHandEl = document.getElementById('cpu-hand');
const playerHandImg = playerHandEl.querySelector('img');
const cpuHandImg = cpuHandEl.querySelector('img');
const resultText = document.querySelector('.result p');
const optionButtons = document.querySelectorAll('.options .choice-btn');
const gameContainer = document.querySelector('.game-container');



let playerScore = 0;
let cpuScore = 0;
const choices = ['rock', 'paper', 'scissors'];


optionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.dataset.choice;
        playRound(playerChoice);
    });
});

function playRound(playerChoice){
toggleButtons(true);

resultText.textContent = "Rock, Paper, Scissors Shoot!";


playerHandImg.src = 'images/logo.png';
cpuHandImg.src = 'images/logo.png';

setTimeout(() => {
    playerHandEl.classList.remove('shake');
    cpuHandEl.classList.remove('shake');
    const cpuChoice = choices[Math.floor(Math.random() * choices.length)];
    playerHandImg.src = `images/${playerChoice}.png`;
    cpuHandImg.src = `images/${cpuChoice}.png`;
}, 1600)

playerHandEl.classList.add('shake');
cpuHandEl.classList.add('shake');
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