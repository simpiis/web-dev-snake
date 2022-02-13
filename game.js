import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersect} from './snake.js';
import { update as updateFood, draw as drawFood } from './food.js';

let lastRenderTime = 0;
const gameBoard = document.getElementById('game-board');

let gameOver = false;
let score = 0;

//game loop
function main(currentTime) {
  if (gameOver) {
    // reload to reset game
    if (confirm("Game over. Press OK to restart")) {
      window.location = '/';
    }
    return
  }

  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return; // game loop speed check

  
  
  lastRenderTime = currentTime;

  // logically update snake values like length position and food position
  update();
  //draw the changed values from update to the screen
  draw();
  // if snake is on top of itself or out of bounds it dies
  checkDeath();

  
}



// start loop first time
window.requestAnimationFrame(main);

function update() {
  updateSnake();
  updateFood();
}

function draw() {
  gameBoard.innerHTML = '';
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function checkDeath() {
  gameOver = (outsideGrid(getSnakeHead()) || snakeIntersect())
}


function outsideGrid(position) {
  return (position.x < 1 || position.x > 21 || position.y < 1 || position.y > 21)
}