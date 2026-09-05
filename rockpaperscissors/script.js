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
    const winner = determineWinner(playerChoice, cpuChoice);

    updateScoreboard(winner);


    toggleButtons(false);
}, 1600)

playerHandEl.classList.add('shake');
cpuHandEl.classList.add('shake');
}

function determineWinner(player, cpu){
    if (player === cpu) {
        return 'tie';
    }

    if (
        (player === 'rock' && cpu === 'scissors')||  
        (player === 'paper' && cpu === 'rock')||
        (player === 'scissors' && cpu === 'paper') 
    ) {
        return 'player';
    }
    return 'cpu';
}

function updateScoreboard(winner){
  gameContainer.classList.remove('player-wins-transform');

  if (winner==="player"){
    resultText.textContent = "You Win!";
    playerScore++;
    playerScoreEl.textContent = playerScore;  



    playerScoreEl.classList.add('score-updated');
    gameContainer.classList.add('player-wins-transform')
  }else if (winner==="cpu"){
    resultText.textContent = "You Lose!";
    cpuScore++;
    cpuScoreEl.textContent = cpuScore;
    cpuScoreEl.classList.add('score-updated');
  }else {
    resultText.textContent = "It's a Tie!";
  }


  setTimeout(() => {
    playerScoreEl.classList.remove('score-updated');
    cpuScoreEl.classList.remove('score-updated');
  }, 500);

  setTimeout(() => {
        gameContainer.classList.remove('player-wins-transform');
  }, 600);
}

function toggleButtons(disabled){
    optionButtons.forEach(button => {
        button.disabled = disabled;
    })
}