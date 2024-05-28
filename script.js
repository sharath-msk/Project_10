function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      console.log('Error! Please choose either rock, paper, or scissors.');
    }
  }
  
  function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  }
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return 'The game is a tie!';
    }
    if (userChoice === 'rock') {
      return computerChoice === 'paper' ? 'Computer wins!' : 'You win!';
    }
    if (userChoice === 'paper') {
      return computerChoice === 'scissors' ? 'Computer wins!' : 'You win!';
    }
    if (userChoice === 'scissors') {
      return computerChoice === 'rock' ? 'Computer wins!' : 'You win!';
    }
    if (userChoice === 'bomb') {
      return 'You win!';
    }
  }
  
  function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    console.log('User choice:', userChoice);
    console.log('Computer choice:', computerChoice);
    const result = determineWinner(userChoice, computerChoice);
    document.getElementById('result').textContent = result;
  }
  