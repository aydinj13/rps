let userWins = 0;
let cpuWins = 0;
let gameActive = true;
let winsToWinGame = 10; // Default value for number of wins to win the game

document.getElementById('winCountForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior
    
    // Get input value and update winsToWinGame
    const inputWinCount = document.getElementById('winCount');
    winsToWinGame = parseInt(inputWinCount.getAttribute('value'));
    
    if (isNaN(winsToWinGame) || winsToWinGame < 5 || winsToWinGame > 100) {
        alert("Please enter a valid number between 5 and 100.");
        inputWinCount.getAttribute('value') = 10; // Reset the input to the default value
    } else {
        displayGameInfo(); // Update the game info based on the new win count
    }
});

function checkWinConditions() {
    if (userWins >= winsToWinGame) {
        alert("Congratulations! You win!");
        resetGame();
    }

    if (cpuWins >= winsToWinGame) {
        alert("You lost! Reload the page to try again!");
        resetGame();
    }
}

function resetGame() {
    userWins = 0;
    cpuWins = 0;
    gameActive = true;
    // Other reset logic if needed

    document.getElementById('wins-text').textContent = 'Wins: 0';
    document.getElementById('losses-text').textContent = 'Losses: 0';
    displayGameInfo(); // Update the game info based on the new win count
}

function displayGameInfo() {
    const gameInfo = document.getElementById('game-info');
    gameInfo.textContent = `First to ${winsToWinGame} wins!`; // Display the game info
}

function playerChoice(playerSelection) {
    if (!gameActive) {
        return; // Do nothing if the game has already ended
    }

    const choices = ['rock', 'paper', 'scissors'];
    const computerSelection = choices[Math.floor(Math.random() * choices.length)];

    const result = determineWinner(playerSelection, computerSelection);

    displayResult(playerSelection, computerSelection, result);

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


// Function to display game information based on winsToWinGame
function displayGameInfo() {
    const gameInfo = document.getElementById('game-info');
    gameInfo.textContent = `First to ${winsToWinGame} wins!`; // Display the game info

}

// Initial call to display game information
displayGameInfo();