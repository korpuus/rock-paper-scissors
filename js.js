function getComputerChoice () {
  if (Math.random() < 1/3) {
    return 'rock';
  }
  else if (Math.random() > 1/3 && Math.random() < 2/3) {
    return 'paper';
  }
  else {
    return 'scissors';
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 'Tie!';
  }

  if (playerSelection === 'rock') {
    if (computerSelection === 'scissors') {
      return 'You win. Rock beats scissors!';
    }
    else if (computerSelection === 'paper') {
      return 'You lose. Paper beats rock!';
    }
  }

  if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      return 'You win. Paper beats rock!';
    }
    else if (computerSelection === 'scissors') {
      return 'You lose. Scissors beats paper!';
    }
  }

  if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      return 'You lose. Rock beats scissors!';
    }
    else if (computerSelection === 'paper') {
      return 'You win. Scissors beats paper!';
    }
  }
}

//playGame function with loop and score

function score() {
  let win = 0;
  let lose = 0;
  let tie = 0;
  let score = ``;  
  const round = playRound();

  if (round === 'You win. Rock beats scissors!' || round === 'You win. Paper beats rock!' || round === 'You win. Scissors beats paper!') {
    win++;
  }
  else if (round === 'You lose. Paper beats rock!' || round === 'You lose. Scissors beats paper!' || round === 'You lose. Rock beats scissors!') {
    lose++;
  }
  else {
    tie++;
  }
  score = `Won: ${win}, Lost: ${lose}, Tied: ${tie}`;
  

}

document.addEventListener('DOMContentLoaded', function() {
  let resultElement = document.getElementById('result');
  let playerScoreElement = document.getElementById('player-score');
  let computerScoreElement = document.getElementById('computer-score');

  let playerScore = 0;
  let computerScore = 0;

  document.querySelectorAll('button').forEach(button => {
      button.addEventListener('click', function handleGameRound() {
          let playerSelection = button.textContent.toLowerCase();
          let computerSelection = getComputerChoice();
          let result = playRound(playerSelection, computerSelection);
          displayResult(result);
          updateScore(result);
      });
  });
  


  function displayResult(result) {
      resultElement.textContent = result;
  }

  function updateScore(result) {
    if (result.includes('win')) {
      playerScore++;
    } else if (result.includes('lose')) {
      computerScore++;
    }
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;

    if (playerScore === 5 || computerScore === 5) {
        if (playerScore === 5) {
            playerScoreElement.textContent = 'Game Over. You win!';
        } else {
            computerScoreElement.textContent = 'Game Over! You lose.';
        }
        
        playerScore = 0;
        computerScore = 0;
    }
  }
});
