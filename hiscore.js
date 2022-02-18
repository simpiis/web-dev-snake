

 export function main(score) {
  document.getElementById('game-board').style.display = 'none'
  document.getElementById('game-over').style.display = 'inline'
  document.getElementById('score-field').innerText = "Your score: " + score;
  document.getElementById('submit-score-button').addEventListener("click", submitScore);

}


function submitScore() {
  let username = document.getElementById('username-text-field').value;
  let scoreListDiv = document.getElementById('score');

  document.getElementById('score-form').display = 'none';
  document.getElementById('score-form').innerHTML = " ";
  console.log(username);

}