document.addEventListener('DOMContentLoaded', function () {
  let compScore = 0;
  let playerScore = 0;

  function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return "Draw";
    }

    if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      playerScore++;
      return 'You win';
    } else {
      compScore++;
      return 'Computer win!';
    }
  }

  function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    document.getElementById('game-result').textContent = result;
    document.getElementById('player-choice-emoji').textContent = getEmoji(playerChoice);
    document.getElementById('computer-choice-emoji').textContent = getEmoji(computerChoice);
    updateScoreboard();
  }

  function getEmoji(choice) {
    switch (choice) {
      case 'rock':
        return '✊';
      case 'paper':
        return '✋';
      case 'scissors':
        return '✌️';
      default:
        return '';
    }
  }

  function updateScoreboard() {
    document.getElementById('score-board').textContent = `Computer ${compScore} - ${playerScore} Player`;
  }

  document.getElementById('rock-choice').addEventListener('click', function () {
    playGame('rock');
  });

  document.getElementById('paper-choice').addEventListener('click', function () {
    playGame('paper');
  });

  document.getElementById('scissors-choice').addEventListener('click', function () {
    playGame('scissors');
  });
});
