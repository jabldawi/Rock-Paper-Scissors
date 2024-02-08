// Initializing array with rock, paper and scissors values
const rockPaperScissors = [`Rock`, `Paper`, `Scissors`];


// Game logic
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log(`%cIt's a tie, you both chose ${playerSelection}`, `background-color: yellow`);
    }
    else if (
        (playerSelection === `Rock`) && (computerSelection === `Paper`) ||
        (playerSelection === `Paper`) && (computerSelection === `Scissors`) ||
        (playerSelection === `Scissors`) && (computerSelection === `Rock`)
    ) {
        computerScore++;
        console.log(`%cYou lose this round! ${computerSelection} beats your ${playerSelection}`, `background-color: orange`);
    }
    else {
        userScore++;
        console.log(`%cYou win this round! Your ${playerSelection} beats ${computerSelection}`, `background-color: #66FF99`);
    }
}

// Create variables for user and computer score
let userScore = 0;
let computerScore = 0;

// Play rounds until one hits the score of 5
function playGame() {
    while ((userScore < 5) && (computerScore < 5)) {

        // Computer chooses random Rock, Paper or Scissors from the array
        const computerSelection = rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];

        // Asks user to input Rock, Paper or Scissors
        let playerSelection = prompt(`Pick Rock, Paper or Scissors`);
        // Capitalize first letter of the input while the rest is converted to lower case
        playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();

        // Play 1 round
        playRound(playerSelection, computerSelection);
    };

    // Print winner and scores
    if (userScore > computerScore) {
        console.log(`You won ${userScore} to ${computerScore}`);
    }
    else if (userScore < computerScore) {
        console.log(`You lost ${userScore} to ${computerScore}`);
    }
}
