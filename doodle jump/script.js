gameOverElement.addEventListener("click", function(event) {
    for (let platform of platforms) {
        platform.element.remove();
    }
    platforms = [];

    score = 0;
    camera = 0;
    player.x = 175;
    player.y = 450;
    finalScoreElement.textContent = null;
    playerElement.style.left = player.x + 'px';
    playerElement.style.top = player.y + 'px';
    initializePlatforms();

    gameRunning = true;
});

function checkGameOver() {
    if (player.y > gameHeight) {
        gameOver();
    }
}

function gameOver() {
    gameRunning = false;
    finalScoreElement.textContent = score;
    gameOverElement.style.display = 'block';
}