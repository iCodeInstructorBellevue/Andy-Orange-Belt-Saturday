const gameWidth = 400;
const gameHeight = 600;
let player = {
    x:175,
    y:450,
    width: 50,
    height: 50,
    velocityX: 5,
    velocityY:0,
    jumpPower:-15

};

let score=0;
let gameRunning = false;
let platforms =[];
let camera = 0;

let moveLeft=false;
let moveRight=false;

const playerElement = document.getElementById('player')
const scoreElement = document.getElementById('score')
const gameOverElement = document.getElementById('gameOver')
const finalScoreElement = document.getElementById('finalScore')
const startScreenElements = document.getElementById('startScreen')
const gameContainer = document.getElementById('gameContainer')

function createPlatform(x, y) {
 const isBreakble = Math.random() < 0.2; 
  const isBouncy = Math.random() < 0.15; 
    const isSpeed = Math.random() < 0.10; 
 const platform = {
    x: x,
    y: y,
    width: 70*Math.random(),
    height: 15,
    element: null,
    isBreakble: isBreakble,
     isBouncy: isBouncy, 
     isSpeed: isSpeed ,
    isBroken: false
 };
    const platformElement = document.createElement('div');
    platformElement.className = 'platform';
    if (platform.isBreakble) {
        platformElement.classList.add('breaking-platform');
    }
      if (platform.isBouncy) {
        platformElement.classList.add('bouncy-platform');
    }
    if (platform.isSpeed) {
        platformElement.classList.add('speed-platform');
    }
    platformElement.style.left = platform.x + 'px';
    platformElement.style.top = platform.y + 'px';
      platformElement.style.width = platform.width + 'px';
    gameContainer.appendChild(platformElement);

    platform.element = platformElement;
    return platform;
}




function initalizePlatform() {
    platforms = [];


    for (let i = 0; i < 7; i++) {
        const x = Math.random() * (gameWidth - 70);
        const y = i * 90 + 50;
        platforms.push(createPlatform(x, y));
    }

    platforms.push(createPlatform(player.x - 10, player.y + player.height));
}



document.addEventListener("keydown", function(e){
const key = e.key
if(!gameRunning) return;

if(e.key ==  'ArrowLeft' || e.key == 'a'){
    moveLeft=true
} else if(e.key == 'ArrowRight' || e.key == 'd'){
    moveRight=true
}
})

document.addEventListener('keyup', function(e){
const key= e.key

if(e.key ===  'ArrowLeft' || e.key === 'a'){
    moveLeft=false
} else if(e.key === 'ArrowRight' || e.key === 'd'){
    moveRight=false
}
})

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
   } else if(player.x > gameWidth) {
        player.x = -player.width
    }

    checkCollisions()

playerElement.style.left = player.x + 'px';
playerElement.style.top = player.y + 'px';

}

function checkCollisions(){

    if(player.velocityY <= 0) return;

    for (let i = platforms.length - 1; i >= 0; i--){
        let platform = platforms[i];


        if (player.x < platform.x + platform.width &&
            player.x + player.width > platform.x &&
            player.y + player.height > platform.y &&
            player.y + player.height < platform.y + platform.height + 10


        ) {
            player.velocityY = player.jumpPower;

            if(platform.isBreakable && !platform.isBroken) {
                score += 10;

            } else {
                score += 1;
            }
          
            scoreElement.textContent = 'score:' + score;

            if (platform.isBreakable && !platform.isBroken) {
                platform.isBroken = true
                platform.element.classList.add("breaking")
                platforms.splice(i, 1);


                setTimeout(()=>{
                    platform.element.remove();
                }, 300)
            }

            if(platform.isBouncy){
                player.velocityY = player.jumpPower * 1.8;
            } else {
                player.velocityY = player.jumpPower;
            }
            if(platform.isSpeed){
                player.velocityX = 8;
                setTimeout(()=>{
                    player.velocityX = 5
                })
            }
        }
    }
}
function updateCamera(){
    
   if (player.y < 200) {
const scrollAmount = 200 - player.y
player.y = 200
camera+= scrollAmount
for (let i = platform.length - 1; i >= 0; i--){
    platforms[i].y+=scrollAmount
    platforms[i].element.style.top = platform[i].y + 'px';
}
   }

}



   playerElement.style.top = player.y + 'px';
   playerElement.style.left = player.x + 'px';
initalizePlatform();
gameRunning = true;
setInterval(updatePlayer, 33)