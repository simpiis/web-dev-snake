let lastRenderTime = 0;
const SNAKE_SPEED = 2; // move X times per second

//game loop
function main(currentTime) {
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return; // game loop speed check

  window.requestAnimationFrame(main);
  lastRenderTime = currentTime;

  // logically update snake values like length position and food position
  update();
  //draw the changed values from update to the screen
  draw();
}

// start loop first time
window.requestAnimationFrame(main);

function update() {
  
}

function draw() {
  
}