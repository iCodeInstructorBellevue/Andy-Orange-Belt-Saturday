const gameWidth = 400;
const gameWidth = 600;
let player = {
    x:175,
    y:450,
    width: 50,
    height: 50,
    velocityY:0,
    jumpPower:-15

};

let score=0;
let gameRunning = false;
let platforms =[];
let camera = 0;

let moveLeft=false;
let moveRight=false;

