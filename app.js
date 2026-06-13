let humanScore = 0;
let computerScore = 0;
let round = 0;
let draw = 0;

function playRound(humanChoice) {
  let computerChoice = getComputerChoice();
  if (humanChoice === computerChoice) {
    console.log("draw both are : " + humanChoice);
    draw++;
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
  score.textContent = `human score:  ${humanScore} computer score: ${computerScore} draw: ${draw}`;
  if (humanScore === 5) {
    score.textContent = "selamat anda menang 5 ronde";
    resetScore();
  } else if (computerScore === 5) {
    score.textContent = "maaf anda kalah 5 ronde";
    resetScore();
  } else if (draw === 5) {
    score.textContent = "anda seri 5 ronde";
    resetScore();
  }
}

function resetScore() {
  humanScore = 0;
  computerScore = 0;
  round = 0;
  draw = 0;
}
//loops untuk 5 ronde
// for (i = 1; i <= 5; i++) {
//   playGame();
// }

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

// function getHumanChoice() {
//   // let inputPrompt = prompt("batu/gunting/kertas?");
//   // if (inputPrompt.toLowerCase() === "batu") {
//   //   return "rock";
//   // } else if (inputPrompt.toLowerCase() === "gunting") {
//   //   return "scissors";
//   // } else {
//   //   return "paper";
//   // }
//   if ()
// }

const batu = document.querySelector(".batuBtn");
const gunting = document.querySelector(".guntingBtn");
const kertas = document.querySelector(".kertasBtn");
let score = document.querySelector(".score");

batu.addEventListener("click", () => playRound("rock"));
gunting.addEventListener("click", () => playRound("scissors"));
kertas.addEventListener("click", () => playRound("paper"));
