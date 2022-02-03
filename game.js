import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from './snake.js';
import { update as updateFood, draw as drawFood } from './food.js';

let lastRenderTime = 0;
const gameBoard = document.getElementById('game-board');

//game loop
function main(currentTime) {

  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return; // game loop speed check

  
  
  lastRenderTime = currentTime;

  // logically update snake values like length position and food position
  update();
  //draw the changed values from update to the screen
  draw();
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

export function randomGridPos() {

  return { x: Math.floor(Math.random() * 21) + 1, y: Math.floor(Math.random() * 21) + 1}
  
}