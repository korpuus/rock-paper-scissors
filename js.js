//function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play.

function getComputerChoice () {
  if (Math.random() < 1/3) {
    const rock = 'Rock';
    return rock;
  }
  else if (Math.random() >= 1/3 && Math.random() <= 2/3) {
    const paper = 'Paper';
    return paper;
  }
  else {
    const scissors = 'Scissors';
    return scissors;
  }
}



//Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner or tie of the round like so: "You Lose! Paper beats Rock"

function getPlayerChoice() {
  const playerChoice = prompt('Pick Rock, Paper or Scissors: ');
   
  if (playerChoice.toLocaleLowerCase() === 'rock') {
    const rock = 'Rock';
    return rock;
  }
  else if (playerChoice.toLocaleLowerCase() === 'paper') {
    const paper = 'Paper';
    return paper;
  }
  else if (playerChoice.toLocaleLowerCase() === 'scissors') {
    const scissors = 'Scissors';
    return scissors;
  }
  else {
    const invalidEntry = 'Invalid entry, try again';
    return invalidEntry;
  }
}

console.log(getPlayerChoice());