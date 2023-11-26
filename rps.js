
let userWins = 0;
let cpuWins = 0;
let gameActive = true;
let winsToWinGame = 0;

function startGame() {
    winsToWinGame = parseInt(prompt("Enter the number of wins required to end the game (between 5 and 100):"));

    if (isNaN(winsToWinGame) || winsToWinGame < 5 || winsToWinGame > 100) {
        alert("Please enter a valid number between 5 and 100.");
        startGame(); // Ask again for a valid input
    } else {
        // Start the game
        displayGameInfo(); // Display game information
        // You can add any additional setup logic here if needed
    }
}

function displayGameInfo() {
    const gameInfo = document.getElementById('game-info');
    gameInfo.textContent = `First to ${winsToWinGame} wins!`; // Display the game info
}

// Function to start the game initially
startGame();


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


