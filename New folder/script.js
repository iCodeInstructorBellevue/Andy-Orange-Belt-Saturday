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