function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3);
  if (randomNum  === 0) {
    return "rock";
  } else if (randomNum  === 1) {
    return "paper";
  } else
    return "scissors";
}

function getHumanChoice() {
  let choice = prompt("Enter rock, paper or scissors:");
  return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    console.log(`It is a draw.`)
  } else if ((humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'scissors' && computerChoice === 'paper') || (humanChoice ===  'paper' && computerChoice === 'rock')) {
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}`)
  } else {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playGame() {
  for (let i = 0; i < 5; i++) {
    console.log(`Round ${i + 1}`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection)
  } 
  
  if (humanScore > computerScore) {
    console.log(`You win the game`);
  } else if (computerScore > humanScore) {
    console.log(`You lose the game`);
  } else {
    console.log(`It is a draw`);
  }
}

playGame();