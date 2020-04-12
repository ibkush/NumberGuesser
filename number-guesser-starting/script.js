let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
} 

const compareGuesses = (userGuess, computerGuess, targetNumber) => {
if (Math.abs(targetNumber - userGuess) > Math.abs(targetNumber - computerGuess)) {
    return false;
} else if (Math.abs(targetNumber - userGuess) < Math.abs(targetNumber - computerGuess)) {
    return true;
} else if (Math.abs(targetNumber - userGuess) === Math.abs(targetNumber - computerGuess)) {
    return true;
}
}

const updateScore = winner => {
if (winner === 'human') {
    humanScore += 1;
} else if (winner === 'computer') {
    computerScore += 1;
}
}

const advanceRound = () => currentRoundNumber++