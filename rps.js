function playerChoice(playerSelection) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerSelection = choices[Math.floor(Math.random() * choices.length)];

    const result = determineWinner(playerSelection, computerSelection);

    displayResult(playerSelection, computerSelection, result);
}

function determineWinner(player, computer) {
    if (player === computer) {
        return 'It\'s a tie!';
    } else if ((player === 'rock' && computer === 'scissors') ||
               (player === 'paper' && computer === 'rock') ||
               (player === 'scissors' && computer === 'paper')) {
        return 'You win!';
    } else {
        return 'Computer wins!';
    }
}

function displayResult(player, computer, result) {
    const resultText = document.getElementById('result-text');
    resultText.textContent = `You chose ${player}. Computer chose ${computer}. ${result}`;
}