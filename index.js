const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
  
    if (userInput === 'rock' || userInput === 'paper') {
      return userInput;
    } else if (userInput==='scissors') {
      return userInput;
    } else if (userInput === 'bomb'){
      return userInput;
    } else {
      console.log("Please only enter 'rock', 'paper', or 'scissors'");
    }
  };
  
  const getComputerChoice = () => {
    let computerInput = Math.floor(Math.random()*3);
    if (computerInput === 0) {
      return 'rock';
    } else if (computerInput === 1) {
      return 'paper';
    } else if (computerInput === 2) {
      return 'scissors';
    }
  };
  
  const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === computerChoice) {
      return "It's a tie! Please try again."
    } else if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
          return 'Paper covers rock. Computer wins!';
        } else {
          return 'Rock crushes scissors. You win!';
        }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'rock') {
          return 'Paper covers rock. You win!';
        } else {
          return 'Scissors cut paper. Computer wins!';
          }
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'paper') {
            return 'Scissors cut paper. You win!';
        } else {
            return 'Rock crushes scissors. Computer wins!';
          }
    } else if (userChoice === 'bomb') {
      return "You da bomb. You win!"
    }
  };
  
  const playGame = (userChoice) => {
    userChoice = getUserChoice(userChoice);
    let computerChoice = getComputerChoice();
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame('BOMB');