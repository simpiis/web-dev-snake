let totalScore = 0;

 export function main(score) {
  document.getElementById('game-board').style.display = 'none'
  document.getElementById('game-over').style.display = 'inline'
  totalScore = score;
  document.getElementById('score-field').innerText = "Your score: " + score;
  document.getElementById('submit-score-button').addEventListener("click", submitScore);
  document.getElementById('restart-game-button').addEventListener("click", restartGame)
}


function restartGame() {
  document.location.reload(true);
}

async function submitScore() {
  let username = document.getElementById('username-text-field').value;
  
  document.getElementById('score-form').innerHTML = '';
  


 

  sortScores(username)
  printScores();

  

}
  

 
function printScores() {


  let scoreArr = JSON.parse(localStorage.getItem('scores'));
  

  



  let html = '';

  for (let hiScore of scoreArr) {
    
    html += `
    <article>
    <p>${hiScore.username} - ${hiScore.score}</p>
    </article>`;
  }

  document.getElementById('display-json').innerHTML = html;
  document.getElementById('display-json').style.display = 'inline';

  
}


function sortScores(username) {
  
  const scores = (() => {
    const value = localStorage.getItem('scores');
    return value === null ? [] : JSON.parse(value);
  })();

  scores.push({ username: username, score: totalScore });

  scores.sort(function (a, b) {
    return b.score - a.score;
  });

  while (scores.length > 5) {
    scores.pop();
  }


  

  

  

  localStorage.setItem('scores', JSON.stringify(scores));


  console.log(localStorage.getItem('scores'));





}
