let userWins = 0;
let cpuWins = 0;
let gameActive = true;
let winsToWinGame = 10;

function playerChoice(playerSelection) {
    if (!gameActive) {
        return; // Do nothing if the game has already ended
    }

    const choices = ['rock', 'paper', 'scissors'];
    const computerSelection = choices[Math.floor(Math.random() * choices.length)];

    const result = determineWinner(playerSelection, computerSelection);

    displayResult(playerSelection, computerSelection, result);

    // Check win conditions after each round
    checkWinConditions();
}

function determineWinner(player, computer) {
    if (player === computer) {
        return 'It\'s a tie!';
    } else if ((player === 'rock' && computer === 'scissors') ||
               (player === 'paper' && computer === 'rock') ||
               (player === 'scissors' && computer === 'paper')) {
        userWins += 1;
        return 'You win!';
    } else {
        cpuWins += 1;
        return 'Computer wins!';
    }
}

function displayResult(player, computer, result) {
    const resultText = document.getElementById('result-text');
    resultText.textContent = `Computer chose ${computer}. ${result}`;
    
    const userWinsText = document.getElementById('wins-text');
    userWinsText.textContent = `Wins: ${userWins}`;

    const cpuWinsText = document.getElementById('losses-text');
    cpuWinsText.textContent = `Losses: ${cpuWins}`;

    
}

function checkWinConditions() {
    if (userWins === winsToWinGame) {
        alert("Congratulations! You win!");
        gameActive = false; // Set the game as ended
    }

    if (cpuWins === winsToWinGame) {
        alert("You lost! Reload the page to try again!");
        gameActive = false; // Set the game as ended
    }
}


