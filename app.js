let humanScore = 0;
let computerScore = 0;
let inputPrompt = prompt("batu/gunting/kertas?");

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
  if (inputPrompt.toLowerCase() === "batu") {
    return "rock";
  } else if (inputPrompt.toLowerCase() === "gunting") {
    return "scissors";
  } else {
    return "paper";
  }
}

let humanSelection = getHumanChoice();
let compuSelection = getComputerChoice();

playRound(humanSelection, compuSelection);

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
