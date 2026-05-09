const gameWidth = 400;
const gameHeight = 600;

let player = {
    x: 175,
    y = 450,
    width: 50,
    height: 50,
    velocityY: 0,
    jumpPower: -15
}

let score = 0;
let gameRunning = false;
let platforms = [];

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
    const platform = {
        x: x,
        y:y,
        width: 70,
        height: 15,
        element: null,
        isBreakable: isBreakable,
        isBroken: false
    };

    const platformElement = document.createElement('div');
    platformElement.className = 'platform';

    const platformElement = document.createElement('div');
    platformElement.className = 'platform';
    if (platform.isBreakable) {
        platformElement.classList.add('breaking-platform');
    }
}