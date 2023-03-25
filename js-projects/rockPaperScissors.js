//----- JS Introduction: Functions

//----- Define a function based on the user choice
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput;
    } else {
      console.log('Error message: Sorry, try again.');
    }
  }
  
  //console.log(getUserChoice('ROCK'));
  
  
  
  //----- Define a function based on the computer choice. Choose any of the options
  
  // FIRST option (with Switch statement)
  const getComputerChoice = () => {
    let number = Math.floor(Math.random() * 3);
    switch (number) {
      case 0:
      return 'rock';
      break;
      case 1:
      return 'paper';
      break;
      case 2:
      return 'scissors';
      break;
    }
  }
  
  
  
  // SECOND option (with Tornary Operator)
  const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    return randomNumber === 0 ? 'rock' : (randomNumber === 1 ? 'paper' : 'scissors');
  }
  
  
  
  //----- Define function to determine who is the winner. Choose any of the options
  // FIRST option (with IF ... ELSE)
  const determineWinner = (userChoice, computerChoice) => {
      if (userChoice === 'bomb') {
          return 'You won!';
      }
  
    if (userChoice === computerChoice) {
      return 'The game ended in a tie';
    }
    
    if (userChoice === 'rock') {
      if(computerChoice === 'paper') {
        return 'You lost!';
      } else {
        return 'You won!';
      }
    }
  
    if (userChoice === 'paper') {
      if(computerChoice === 'scissors') {
        return 'You lost!';
      } else {
        return 'You won!';
      }
    }
  
    if (userChoice === 'scissors') {
      if(computerChoice === 'rock') {
        return 'You lost!';
      } else {
        return 'You won!';
      }
    }
  }
  
  // SECOND option (with Tornary Operator)
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb') {
      return 'You won!'
    }
  
    if (userChoice === computerChoice) {
      return 'The game ended in a tie.';
    }
    
    if (userChoice === 'rock') {
      return (computerChoice === 'paper') ? 'You lost.': 'You won!';
    }
  
    if (userChoice === 'paper') {
      return (computerChoice === 'scissors') ? 'You lost.': 'You won!';
    }
  
    if (userChoice === 'scissors') {
      return (computerChoice === 'rock') ? 'You lost.': 'You won!';
    }
  }
  
  
  
  
  //----- Define function to play the game: you vs. the computer
  const playGame = () => {
    let userChoice = getUserChoice('bomb'); // Here it is where you add your choice
    let computerChoice = getComputerChoice();
    console.log(`You played ${userChoice} and the computer played ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
  } 
  
  
  playGame();