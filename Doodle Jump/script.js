const gameWidth = 400;
const gameHeight = 600;

let player = {
    x: 175,
    y: 450,
    width: 50,
    height: 50,
    velocityY: 0,
    jumpPower: -15
}

let score = 0;
let gameRunning = false;
let platforms = [];

let camera = 0;

let moveLeft = false;
let moveRight = false;

const playerElement = document.getElementById('player');
const scoreElement = document.getElementById('score');
const gameOver = document.getElementById('gameOver');
const finalScoreElement = document.getElementById('finalScore');
const startScreenElement = document.getElementById('startScreen');
const gameContainer = document.getElementById('gameContainer');

function createPlatform(x, y) {
    const isBreakable = Math.random() < 0.2;
    const isBouncy = Math.random() < 0.15;
    const platform = {
        x: x,
        y:y,
        width: Math.random() * 80 + 20,
        height: 15,
        element: null,
        isBreakable: isBreakable,
        isBroken: false,
        isBouncy: isBouncy
    };

    const platformElement = document.createElement('div');
    platformElement.className = 'platform';

    if (platform.isBreakable) {
        platformElement.classList.add('breaking-platform');
    }
    if (platform.isBouncy) {
        platformElement.classList.add('bouncy-platform');
    }
    platformElement.style.left = platform.x + 'px';
    platformElement.style.top = platform.y + 'px';
    platformElement.style.width = platform.width + 'px';
    gameContainer.appendChild(platformElement);
    return platform;
}

function initializePlatforms() {
    platforms = [];
    for (let  i = 0; i < 7; i++) {
        const x = Math.random() * (gameWidth - 70);
        const y = i * 90 + 50;
        platforms.push(createPlatform(x, y));
    }

    platforms.push(createPlatform(player.x - 10, player.y + player.height));
}

playerElement.style.left = player.x + 'px';
playerElement.style.top = player.y + 'px';
initializePlatforms();