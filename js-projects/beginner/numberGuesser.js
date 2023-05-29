
//----- JS Introduction: Challenge Project - Number Guesser

let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

/* The purpose of this function is to be called at the start of each new round in order to generate the new secret target number.*/
const generateTarget = () => Math.floor(Math.random() * 10)
//console.log(generateTarget()); // Prints random number from 0-9


//------ Extension 1
/* You probably calculated the distance from the computer guess to the target and from the human guess to the target. Move this into a separate getAbsoluteDistance() function that takes two numbers and returns the distance, and then use that inside your compareGuesses() function.
*/
const getAbsoluteDistance = (number1, number2) => {
  let distance = Math.abs(number1 - number2);
  return distance;
}
//console.log(getAbsoluteDistance(3,5));
//------ Extension 1

/* The purpose of this function is to be called each round to determine which guess is closest to the target number.*/
/*const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
  switch (true) {
    case (humanGuess === computerGuess): return true;
    case (Math.abs(secretTarget - humanGuess) < Math.abs(secretTarget - computerGuess)): return true;
    default: return false;
  }
}*/

/*const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
  switch (true) {
    case (humanGuess === computerGuess): return true;
    case (getAbsoluteDistance(secretTarget, humanGuess) < getAbsoluteDistance(secretTarget, computerGuess)): return true;
    default: return false;
  }
}*/

//------ Extension 2
/* Add functionality to check whether the user guess is between 0 and 9 and alert() the user that their number is out of range. It’s not possible to set a number outside this range with the + and = buttons, but users can do so by typing directly in the input field.
*/


//------ Extension 2

//console.log(compareGuesses(10,5,5)); // Prints 'false'

/* The purpose of this function is to be used to correctly increase the winner’s score after each round.*/
const updateScore = winner => {
  switch (winner){
    case 'human': return humanScore++;
    case 'computer': return computerScore++;
    default: return 'Sorry, use a valid user name';
  }
}

/*
console.log(updateScore('human'));
console.log(updateScore('human'));
console.log(updateScore('human'));
*/

/* The purpose of this function is to be used to update the round number after each round.*/
/*const advanceRound = () => {
  console.log(currentRoundNumber);
  currentRoundNumber++;
}*/

const advanceRound = () => currentRoundNumber++;