let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};
updateScoreElement();
/*
if (!score) { // if (score === null)
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  };
}
*/

function pickComputerMove() {
  const randomNum = Math.random();
  let computerMove = '';

  if (randomNum >= 0 && randomNum < 1 / 3) {
    computerMove = 'rock'
  } else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
    computerMove = 'paper'
  } else if (randomNum >= 2 / 3 && randomNum < 1) {
    computerMove = 'scissors'
  }
  return computerMove;
}


function playGamePick(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';

  if (playerMove === 'rock') { // for rock
    if (computerMove === 'rock')
      result = 'Tie.';
    else if (computerMove === 'paper')
      result = 'You Lose.';
    else if (computerMove === 'scissors')
      result = 'You Win.';
  }

  else if (playerMove === 'paper') { // for paper
    if (computerMove === 'rock')
      result = 'You Win.';
    else if (computerMove === 'paper')
      result = 'Tie.';
    else if (computerMove === 'scissors')
      result = 'You Lose.';
  }

  else if (playerMove === 'scissors') { // for scissors
    if (computerMove === 'rock')
      result = 'You Lose.';
    else if (computerMove === 'paper')
      result = 'You Win.';
    else if (computerMove === 'scissors')
      result = 'Tie.';
  }

  if (result === 'You Win.') {
    score.wins += 1;
  } else if (result === 'You Lose.') {
    score.losses += 1;
  } else {
    score.ties += 1;
  }
  document.querySelector('.js-result').innerHTML = `${result}`;
  document.querySelector('.js-moves').innerHTML = `You:<img src="img/${playerMove}.png"><img src="img/${computerMove}.png">:Computer`;
  updateScoreElement();
  localStorage.setItem('score', JSON.stringify(score));
}


function updateScoreElement() {
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}