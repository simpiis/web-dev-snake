export const SNAKE_SPEED = 2;
const snakeBody = [{ x: 11, y: 11 }]  // start the snake center screen


export function update() {
  console.log("update snake")
}

export function draw(gameBoard) {
  // go through each "square" of the snake
  snakeBody.forEach(segment => {
    const snakeElement = document.createElement('div');
    snakeElement.style.gridRowStart = segment.x;
    snakeElement.style.gridColumnStart = segment.y;
    snakeElement.classList.add('snake');
    gameBoard.appendChild(snakeElement);
  });
}