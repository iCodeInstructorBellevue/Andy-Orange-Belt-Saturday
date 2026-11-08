const playerScoreE1 = document.getElementById('player-score');
const botScoreEl = document.getElementById('bot-score');
const playerHandEl = document.getElementById('player-hand');
const botHandEl = document.getElementById('bot-hand');
const playerHandImg = botHandEl.querySelector('img');
const botHandImg = botHandEl.querySelector('img');
const resultText = document.querySelector('.result p')
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
    toggleButtons(true);

    resultText.textContent = "Rock, Paper, Scissors";

    playerHandEl.classList.add('shake');
    botHandEl.classList.add('shake');

    setTimeout(() => {
        playerHandEl.classList.remove('shake');
        botHandEl.classList.remove('shake');

        const botChoice = choices[Math.floor(Math.random() * choices.length)];

            playerHandImg.src = `images/${playerChoice}.png`;
            botHandImg.src = `images/${botChoice}.png`;

            const winner = determineWinner(playerChoice, botChoice);

            updateScoreboard(winner);

            toggleButtons(false);
    }, 1600)
}

function determineWinner(player, bot){
    if (player === bot) {
        return 'tie';
    }
    if (
        (player === 'rock' && bot === 'scissors') ||
        (player === 'paper' && bot === 'rock') ||
        (player === 'scissors' && bot === 'paper')
    ) {
        return 'player';
    }
    return 'bot';
}

function updateScoreboard(winner){
    gameContainer.classList.remove('player-wins-transform');

    if (winner === 'player') {
        resultText.textContent = "You Win! 🎉";
        playerScore++;
        playerScoreEl.textContent = playerScore;

        playerScoreEl.classList.add('score-updated');
        gameContainer.classList.add('player-wins-transform')
    } else if (winner === 'bot') {
        resultText.textContent = "You Lose! 😢";
        botScore++;
        botScoreEl.textContent = botScore;

        botScoreEl.classList.add('score-updated');
    } else{
        resultText.textContent = "It's a tie! 🤝";
    }
}

function toggleButtons(disabled){
    optionButtons.forEach(button => {
        button.disabled = disabled;
    })
}