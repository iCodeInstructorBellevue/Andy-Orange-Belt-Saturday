const gameWidth = 400;
const gameHeight = 600;

let player = {
    x: 175,
    y: 450,
    width: 50,
    height: 50,
    velocityX: 5,
    velocityY: 0,
    jumpPower: -15,
};

let score = 0;
let gameRunning = false;
let platforms = [];
let camera = 0;

let moveLeft = false;
let moveRight = false;

const playerElement = document.getElementById('player');
const scoreElement = document.getElementById('score');
const gameOverElement = document.getElementById('gameOver');
const finalScoerElement = document.getElementById('finalScore');
const finaltextelement = document.getElementById('finalScoreText')
const respawnelement = document.getElementById('respawn')
const gamebuttonelement = document.getElementById('gamebutton')
const BACKTOTHEMAINMENUelement = document.getElementById('BACK-TO-THE-MAIN-MENU')
const mainmenuelement = document.getElementById('main-menu')
const startScreenElement = document.getElementById('startScreen');
const gameContainer = document.getElementById('gameContainer');

document.addEventListener('keydown', function (e) {
    const key = e.key
    if (!gameRunning) return;

    if (e.key === 'ArrowLeft' || e.key === 'a') {
        moveLeft = true;
    } else if (e.key === 'ArrowRight' || e.key === 'd') {
        moveRight = true;
    }
});

document.addEventListener('keyup', function (e){
    const key = e.key
    if (!gameRunning) return;

    if (e.key === 'ArrowLeft' || e.key === 'a') {
        moveLeft = false;
    } else if (e.key === 'ArrowRight' || e.key === 'd') {
        moveRight = false;
    }
});

function updatePlayer() {
    player.velocityY += 0.6;
    player.y += player.velocityY;

    if (moveLeft) {
        player.x -= player.velocityX;
    }
    if (moveRight) {
        player.x += player.velocityX;
    }

    if (player.x < -player.width) {
        player.x = gameWidth;
    } else if (player.x > gameWidth) {
        player.x = -player.width;
    } 
    CheckCollisions();
    updateCamera();
    checkGameOver();
    playerElement.style.left = player.x + 'px';
    playerElement.style.top = player.y + 'px';
}

function CheckCollisions() {
    if (player.velocityY <= 0) return;

    for (let i = platforms.length - 1; i >=0; i--) {
        let platform = platforms[i];
        
        if (player.x < platform.x + platform.width &&
            player.x + player.width > platform.x &&
            player.y + player.height > platform.y &&
            player.y + player.height < platform.y + platform.height + 10) {
                
                player.velocityY = player.jumpPower;

                score += 1;
                scoreElement.textContent = 'score:  ' + score;

            if  (platform.isBreakable && !platform.isbroken) {
                platform.isbroken = true;
                platform.element.classList.add('breaking');
              
                platforms.slice(i, 1);

              if (platform.isSpeedBoost){
                player.velocityX = 8;
                setTimeout(() => {
                    player.velocityX = 5;
                }, 3000);
              }

              if(platform.isbouncy){
                player.velocityY = player.jumpPower * 2;
              }else{
                player.velocityY = player.jumpPower;
              }
              
              if(platform.isBreakable && !platform.isbroken){
                    score += 10;
              }else{
                    score += 1;
              }
              scoreElement.textContent = 'score: ' + score;
            }
        }
    }
}

function creatPlatform(x, y) {
    const isBreakable = Math.random() < 0.2;
    const plantform = {
        x: x,
        y: y,
        width: 70,
        height: 15,
        Element: null,
        isBreakable: true,
        isbroken: false,
        isSpeedBoost: false,
        isbouncy: false,
    };
    const platformElement = document.createElement('div');
    platformElement.className = 'platform';
    if (plantform.isBreakable) {
        platformElement.classList.add('breaking-platform');
    }
    if (Math.random() < 0.10) {
        platformElement.classList.add('speed-platform');
        plantform.isSpeedBoost = true;
    }
    if (Math.random() < 0.10   ) {
        platformElement.classList.add('bouncy-platform');
        plantform.isbouncy = true;
    }
    platformElement.style.left = plantform.x + 'px';
    platformElement.style.top = plantform.y + 'px';
    gameContainer.appendChild(platformElement);


    plantform.element = platformElement;
    return plantform;
}

function initializeplatforms() {
    platforms = [];

    for (let i = 0; i < 7; i++) {
        const x = Math.random() * (gameWidth - 70);
        const y = i * 90 + 50;
        platforms.push(creatPlatform(x, y));
    }

    platforms.push(creatPlatform(player.x - 10, player.y + player.height));
}

function updateCamera() {

    if (player.y < 200) {
        const scrollAmount = 200 - player.y;
        player.y = 200;
        camera += scrollAmount;

        for (let i = platforms.length - 1; i >= 0; i--) {
            platforms[i].y += scrollAmount;
            platforms[i].element.style.top = platforms[i].y + 'px';

            if (platforms[i].y > gameHeight) {
                platforms[i].element.remove();
                platforms.splice(i, 1);

                const newX = Math.random() * (gameWidth - 70);
                const newY = -10;
                platforms.push(creatPlatform(newX, newY));
            }
        }
    }
}

function checkGameOver() {

    if (player.y > gameHeight) {
        gameOver();
    }
}


function gameOver() {
    gameRunning = false;
    // finalScoerElement.textContent = score;
    finaltextelement.textContent = score;
    gameOverElement.style.display = 'block';
    finalScoerElement.style.top = '0';
}
respawnelement.addEventListener("click", function(event){
    finalScoerElement.style.top = "-100vh";
    for (let platform of platforms) {
        platform.element.remove();
    }
    platforms = [];

    score = 0;
    camera = 0;
    player.x = 175;
    player.y = 450;
    finaltextelement.textContent = "";
    player.velocityY = 0;
    playerElement.style.left = 175;
    playerElement.style.top = 450;
    playerElement.style.left = player.x + 'px';
    playerElement.style.top = player.y + 'px';
    moveLeft = false;
    moveRight = false;

    initializeplatforms();

    gameRunning = true;
});
BACKTOTHEMAINMENUelement.addEventListener("click", function(event) {
     finalScoerElement.style.top = "-100vh";
    for (let platform of platforms) {
        platform.element.remove();
    }
    platforms = [];

    score = 0;
    camera = 0;
    player.x = 175;
    player.y = 450;
    finaltextelement.textContent = "";
    player.velocityY = 0;
    playerElement.style.left = 175;
    playerElement.style.top = 450;
    playerElement.style.left = player.x + 'px';
    playerElement.style.top = player.y + 'px';
    moveLeft = false;
    moveRight = false;

    initializeplatforms();

    gameRunning = true;

    gameContainer.style.top = "-100vh";
    mainmenuelement.style.top = "40vh"
});
gamebuttonelement.addEventListener("click", function(event) {
    gameContainer.style.top = "0vh";
    mainmenuelement.style.top = "-100vh"
});
playerElement.style.top = player.y + "px";
playerElement.style.left = player.x + "px";

initializeplatforms()

gameRunning = true;

setInterval(updatePlayer, 33);