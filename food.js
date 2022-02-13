import { onSnake, expandSnake } from './snake.js';


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

function randomGridPos() {
  // random number between 1 and 21 since the grid is not 0 indexed
  return {
    x: Math.floor(Math.random() * 21) + 1,
    y: Math.floor(Math.random() * 21) + 1
  }

}

function randomFoodPosition() {
  let newPos;
  while (newPos == null || onSnake(newPos)) {
    newPos = randomGridPos();
  }
  return newPos;
}
