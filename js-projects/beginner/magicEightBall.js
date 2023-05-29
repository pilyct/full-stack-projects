//----- JS Introduction: Conditionals

// Define variables
let userName = 'Pily';
let userQuestion = 'Will I win the lottery?';

let randomNumber = Math.floor(Math.random() * 9);
/*
Math.random() returns a value between 0 (inclusive) and 1 (exclusive).
In order to make this set of numbers range from 0 (inclusive) to 9 (exclusive) we can multiply the returned value by 9.
Finally, to ensure we only have whole numbers from 0 to 8 we can round down using Math.floor().
 */

let eightBall = '';

// Check whether the user added a name or not
userName ? console.log(`Hello ${userName}!`) : console.log('Hello!');


// Log user question 
console.log(userQuestion);

// Define randomNumber conditions
// with SWITCH
switch (randomNumber) {
  case 1:
  eightBall = 'It is decidedly so';
  break;
  case 2:
  eightBall = 'Reply hazy try again';
  break;
  case 3:
  eightBall = 'Cannot predict now';
  break;
  case 4:
  eightBall = 'Do not count on it';
  break;
  case 5:
  eightBall = 'My sources say no';
  break;
  case 6:
  eightBall = 'Outlook not so good';
  break;
  case 7:
  eightBall = 'Signs point to yes';
  break;
  case 8:
  eightBall = 'Well, you still need to pay';
  break;
  default:
  eightBall = 'It is certain';
  break;
}


// with IF ... ELSE
if (randomNumber === 1) {
  eightBall = 'It is decidedly so';
} else if (randomNumber === 2) {
  eightBall = 'Reply hazy try again';
} else if (randomNumber === 3) {
  eightBall = 'Cannot predict now';
} else if (randomNumber === 4) {
  eightBall = 'Do not count on it';
} else if (randomNumber === 5) {
  eightBall = 'My sources say no';
} else if (randomNumber === 6) {
  eightBall = 'Outlook not so good';
} else if (randomNumber === 7) {
  eightBall = 'Signs point to yes';
} else if (randomNumber === 8) {
  eightBall = 'Well, you still need to pay';
} else {
  eightBall = 'It is certain';
}
  
// Log Answer
console.log(eightBall);