const playerScoreEl = document.getElementById('player-score');
const computerScoreEl = document.getElementById('computer-score');
const playerHandEl = document.getElementById('player-hand');
const computerHandEl = document.getElementById('computer-hand');
const playerHandimg = playerHandEl.querySelector('img');
const computerHandimg = computerHandEl.querySelector('img');
const resultText = document.querySelector('.result p');
const optionButtons = document.querySelectorAll('.options .choice-btn');
const gameContainer = document.querySelector('.game-container');

let playerScore = 0;
let computerScore = 0;
const choices = ['rock', 'paper', 'scissors', 'hand', 'gun', 'rpg', 'throwing knife'];

optionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.dataset.choice;
        playRound(playerChoice)
    });
});

function playRound(playerChoice){
    console.log("?")
    togglebuttons(true);

    resultText.textContent = "Rock, Paper, Scissors...";

    playerHandEl.classList.add('shake');
    computerHandEl.classList.add('shake');

    setTimeout(() => {
        playerHandEl.classList.remove('shake');
        computerHandEl.classList.remove('shake');

    
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];

        playerHandimg.src = `images/${playerChoice}.png`;
        computerHandimg.src = `images/${computerChoice}.png`;

        const winner = determineWinner(playerChoice, computerChoice);

        updateScoreboard(winner);

        togglebuttons(false);
    }, 1600)
}

    function determineWinner(player, computer){
        if (player === computer) {
            return 'tie'
        }
        if(
            (player === 'rock' && computer === 'scissors') ||
            (player === 'rock' && computer === 'hand') ||
            (player === 'rock' && computer === 'gun') ||
            (player === 'paper' && computer === 'rock') ||
            (player === 'scissors' && computer === 'hand') ||
            (player === 'scissors' && computer === 'paper') ||
            (player === 'hand' && computer === 'paper') ||
            (player === 'gun' && computer === 'paper') ||
            (player === 'gun' && computer === 'hand') ||
            (player === 'gun' && computer === 'scissors') ||
            (player === 'gun' && computer === 'throwing knife') ||
            (player === 'rpg' && computer === 'rock') ||
            (player === 'rpg' && computer === 'paper') ||
            (player === 'rpg' && computer === 'scissors') ||
            (player === 'rpg' && computer === 'hand') ||
            (player === 'rpg' && computer === 'gun') ||
            (player === 'rpg' && computer === 'throwing knife') ||
            (player === 'throwing knife' && computer === 'rock') ||
            (player === 'throwing knife' && computer === 'paper') ||
            (player === 'throwing knife' && computer === 'scissors') ||
            (player === 'throwing knife' && computer === 'hand')
        ){
            return 'player';
        }
        return 'computer';

}

function updateScoreboard(winner){
    gameContainer.classList.remove('player-wins-tramform');
    if (winner === 'player') {
        resultText.textContent = "you win";
        playerScore++;
        playerScoreEl.textContent = playerScore;

        playerScoreEl.classList.add('score-updated');
        gameContainer.classList.add('player-wins-tramform');
    } else if (winner == 'computer'){
        resultText.textContent = "you Lose";
        computerScore++;
        computerScoreEl.textContent = computerScore;

        computerHandEl.classList.add('score-updated');
    } else{
        resultText.textContent = "it's a tie";
    }

    setTimeout(() => {
        playerHandEl.classList.remove('score-updated');
        computerHandEl.classList.remove('score-update');
    }, 500);

    setTimeout(() => {
        gameContainer.classList.remove('player-wins-transform');
    }, 600);
}    

function togglebuttons(disabled){
    optionButtons.forEach(button => {
        button.disabled = disabled;
    });
}
