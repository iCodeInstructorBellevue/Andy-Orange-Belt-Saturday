const gameWidth = 400;
const gameHeight = 600;

let player = {
    x: 175,
    y: 450,
    width: 50,
    height: 50,
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

if (Math.random() < 0.10) {
    platformElement.classList.add('speed-platform');
    platforms.isSpeedBoost = true;
}

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
        player.x -= 5;
    }
    if (moveRight) {
        player.x += 5;
    }

    if (player.x < -player.width) {
        player.x = gameWidth;
    } else if (player.x > gameWidth) {
        player.x = -player.width;
    } 

    playerElement.style.left = player.x + 'px';
    playerElement.style.top = player.y + 'px';
}

Function CheckCollisions() {
    if (player.velocityY <= 0) return;

    for (let i = platforms.length - 1; i >=0; i--) {
        
        if (player.x < platforms.x + platforms.width &&
            player.x + player.width > platforms.x &&
            player.y + player.height > platforms.y &&
            player.y + player.height < platforms.y + platforms.height + 10) {
                
                player.velocityY = player.jumpPower;

                score += 1;
                scoreElement.textContent = 'score:  ' + score;

            if  (platforms.isBreakable && !platforms.isbroken) {
                platforms.isbroken = true;
                platforms.element.classList.add('breaking');
              } 
                platforms.slice(i, 1);

              if (platforms.isSpeedBoost){
                player.velocityX = 8;
                setTimeout(() => {
                    player.velocityX = 5;
                }, 3000);
              }

              if(platforms.isbouncy){
                player.velocityY = player.jumpPower * 1.8;
              }else{
                player.velocityY = player.jumpPower;
              }
              
              if(platforms.isBreakable && !platforms.isbroken){
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
        isBreakable: isBreakable,
        isbroken: false,
    };
    const platformElement = document.createElement('div');
    platformElement.className = 'platform';
    if (plantform.isBreakable) {
        platformElement.classList.add('breaking-platform');
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

playerElement.style.top = player.y + "px";
playerElement.style.left = player.x + "px";

initializeplatforms()