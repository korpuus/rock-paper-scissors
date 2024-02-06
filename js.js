//function to get random choice from computer

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

//function that takes choice from player


//then function for single round of game

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

// function playGame() {
//   let win = 0;
//   let lose = 0;
//   let tie = 0;
//   let score = ``;
  

//   for (i = 0; i < 5; i++) {
//     const round = playRound();

//     if (round === 'You win. Rock beats scissors!' || round === 'You win. Paper beats rock!' || round === 'You win. Scissors beats paper!') {
//       win++;
//     }
//     else if (round === 'You lose. Paper beats rock!' || round === 'You lose. Scissors beats paper!' || round === 'You lose. Rock beats scissors!') {
//       lose++;
//     }
//     else {
//       tie++;
//     }
//     const updatedScore = `Won: ${win}, Lost: ${lose}, Tied: ${tie}`;
//     score = updatedScore;
//     console.log(score);
//     console.log(round);
//   }
// }

//console.log(playGame());

let rockButton = document.getElementById('rock-button');
rockButton.addEventListener('click', () => {
  let playerSelection = 'rock';
  let computerSelection = getComputerChoice();
  let result = playRound(playerSelection, computerSelection);
  console.log(result);
});

let paperButton = document.getElementById('paper-button');
paperButton.addEventListener('click', () => {
  let playerSelection = 'paper';
  let computerSelection = getComputerChoice();
  let result = playRound(playerSelection, computerSelection);
  console.log(result);
});

let scissorsButton = document.getElementById('scissors-button');
scissorsButton.addEventListener('click', () => {
  let playerSelection = 'scissors';
  let computerSelection = getComputerChoice();
  let result = playRound(playerSelection, computerSelection);
  console.log(result);
});