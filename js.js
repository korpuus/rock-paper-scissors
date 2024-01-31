//random output of rock, paper or scissors
function getComputerChoice () {
  if (Math.random() < 1/3) {
    let rock = 'Rock';
    return rock;
  }
  else if (Math.random() >= 1/3 && Math.random() <= 2/3) {
    let paper = 'Paper';
    return paper;
  }
  else {
    let scissors = 'Scissors';
    return scissors;
  }
}

console.log(getComputerChoice());

//Single round of game. Takes2 parameters ---> playerSelection and computerSelection 