let totalScore = 0;

 export function main(score) {
  document.getElementById('game-board').style.display = 'none'
  document.getElementById('game-over').style.display = 'inline'
  totalScore = score;
  document.getElementById('score-field').innerText = "Your score: " + score;
  document.getElementById('submit-score-button').addEventListener("click", submitScore);

}


async function submitScore() {
  let username = document.getElementById('username-text-field').value;
  
  document.getElementById('score-form').innerHTML = '';
  console.log("USERNAME: " + username);
  
   await readHiScores();
  

}


async function readHiScores() {
  let rawData = await fetch('./hiScore.json');
  let hiScores = await rawData.json();

  let html = '';

  console.log(hiScores);

  for (let hiScore of hiScores) {
    console.log(hiScore);
    html += `
    <article>
    <p>${hiScore.username}       ${hiScore.score}</p>
    </article>`;
  }
  
 document.getElementById('display-json').innerHTML = html;
  document.getElementById('display-json').style.display = 'inline';
 

  

}