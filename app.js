let humanScore = 0;
let computerScore = 0;
let inputPrompt = prompt("batu/gunting/kertas?");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  if (getRandomInt(3) === 0) {
    return "conputer = rock";
  } else if (getRandomInt(3) === 1) {
    return "computer = paper";
  } else {
    return "computer = scissors";
  }
}

console.log(getComputerChoice());

console.log(inputPrompt);

function getHumanChoice() {
  if (inputPrompt.toLowerCase() === "batu") {
    return "rock";
  } else if (inputPrompt.toLowerCase() === "gunting") {
    return "scissors";
  } else {
    return "paper";
  }
}

console.log(getHumanChoice());
