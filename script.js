// Initializing array with rock, paper scissors values
const rockPaperScissors = [`Rock`, `Paper`, `Scissors`];

// Computer choosing random string within the array and storing it in variable computerSelection
const computerSelection = rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];

// Ask user to pick rock, paper or scissors and store it in playerSelection variable
let playerSelection = prompt(`Pick Rock, Paper or Scissors`);
playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
console.log(playerSelection);

function playGame(computerSelection, playerSelection) {
    if (
        (playerSelection === `Rock`) && (computerSelection === `Paper`) ||
        (playerSelection === `Paper`) && (computerSelection === `Scissors`) ||
        (playerSelection === `Scissors`) && (computerSelection === `Rock`)
    ) {
        return `You lose!`;
    }
    else if (
        (playerSelection === `Rock`) && (computerSelection === `Scissors`) ||
        (playerSelection === `Paper`) && (computerSelection === `Rock`) ||
        (playerSelection === `Scissors`) && (computerSelection === `Paper`)
    ) {
        return `You win!`;
    }
    else {
        return `It's a tie!`;
    }
}

console.log(playGame(computerSelection, playerSelection));


