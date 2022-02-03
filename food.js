import { onSnake, expandSnake } from './snake.js';
import { randomGridPos } from './game.js';


let food = randomFoodPosition();

const EXPANSION_RATE = 1; // X new squares per food

export function update() {
    if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);
    food = randomFoodPosition();
  }
  
}

export function draw(gameBoard) {
  const foodElement = document.createElement('div');
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add('food');
  gameBoard.appendChild(foodElement);
  
}

function randomFoodPosition() {
  let newPos;
  while (newPos == null || onSnake(newPos)) {
    newPos = randomGridPos();
  }
  return newPos;
}
