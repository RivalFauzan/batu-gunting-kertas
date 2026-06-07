function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let round = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log("draw both are : " + humanChoice);
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "rock")
    ) {
      console.log("You win! " + humanChoice + " beats " + computerChoice);
      humanScore++;
    } else {
      console.log("You lose " + computerChoice + " beats " + humanChoice);
      computerScore++;
    }
  }
  let humanSelection = getHumanChoice();
  let computerSelection = getComputerChoice();

  playRound(humanSelection, computerSelection);
}

//loops untuk 5 ronde
for (i = 1; i <= 5; i++) {
  playGame();
}

//function mengambil input random
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  let randomNumber = getRandomInt(3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "scissors";
  } else {
    return "paper";
  }
}

function getHumanChoice() {
  let inputPrompt = prompt("batu/gunting/kertas?");
  if (inputPrompt.toLowerCase() === "batu") {
    return "rock";
  } else if (inputPrompt.toLowerCase() === "gunting") {
    return "scissors";
  } else {
    return "paper";
  }
}
