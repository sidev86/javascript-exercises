console.log("Hello World");

function getComputerChoice() {
  const moves = ["Rock", "Paper", "Scissor"];
  let choice = Math.floor(Math.random() * 3);
  return moves[choice];
}

console.log("Computer chose", getComputerChoice());
