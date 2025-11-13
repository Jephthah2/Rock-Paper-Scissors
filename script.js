const humanResult = document.getElementById('human-score');
const computerResult = document.getElementById('computer-score');
const roundResult = document.getElementById('round-result');
const finalResult = document.getElementById('final-result');

let humanScore = 0;
let computerScore = 0;

humanResult.textContent = `Human Score: ${humanScore}`;
computerResult.textContent = `Computer Score: ${computerScore}`;

// Get Computer Choice
function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3);
  if (randomNum  === 0) {
    return "rock";
  } else if (randomNum  === 1) {
    return "paper";
  } else
    return "scissors";
}

// Play one round
function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    roundResult.textContent = `It is a draw.`;
  } else if ((humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'scissors' && computerChoice === 'paper') || (humanChoice ===  'paper' && computerChoice === 'rock')) {
    humanScore++;
    roundResult.textContent =`You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    roundResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
  }

//Scores
humanResult.textContent = `Human Score: ${humanScore}`;
computerResult.textContent = `Computer Score: ${computerScore}`;

// Check winner
if (humanScore === 5 || computerScore === 5) {
  finalResult.textContent =
  humanScore > computerScore 
  ? "You won the game!"
  : "Computer wins the game!";
  const buttons = document.querySelectorAll('button');
  buttons.forEach(btn => btn.disabled = true);
  }
}

//Add event listeners
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const humanChoice = button.id;
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  });
});