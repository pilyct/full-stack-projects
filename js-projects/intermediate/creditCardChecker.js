
/*
Challenge Project: Credit Card Checker

Context: The company that you work for suspects that credit card distributors have been mailing out cards that have invalid numbers. 
In this project, you have the role of a clerk who checks if credit cards are valid. Every other clerk currently checks using pencil and paper, 
but you’ll be optimising the verification process using your knowledge of functions and loops to handle multiple credit cards at a time. 
Unlike the other clerks, you can spend the rest of your time relaxing!
*/

// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:

// (1) func: VALIDATE CREDIT CARD

const validateCred = card => {
  let sum = 0; // variable to sum up all the elements' digits.

  // loop through all the elements starting from the last position and removing the last element (card.length - 1)
  for (let i = card.length - 1; i >= 0; i--) {
    let currElement = card[i]; // variable to define each element of the array to apply later calculations.

    /* 
		if the modulo (by 2) of the length of my card, 
		minus 1 (meaning, the array starts being counted from the right - reverse order) 
		and minus the first/current element the loop starts with, 
		equals 1 (meaning, it is not an odd number), 
		multiply the current element per 2. 
		(*) More info about this condition below. 
		*/
    if ((card.length - 1 - i) % 2 === 1) {
      currElement *= 2;

      // Additionally, if the multiplication of this current element is bigger than 9, subtract 9 from its value.
      if (currElement > 9) {
        currElement -= 9;
      }
    }
    // sum up all elements from the given card
    sum += currElement;
  }
  // return a boolean answer whether the modulo (by 10) of this sum is equal to 0 or not. If the answer is True, the card is valid. But if the answer is False, the card is invalid.
  return sum % 10 === 0;
}

// TEST
console.log(validateCred(valid1)); // prints true
console.log(validateCred(invalid1)); // prints false



/*
Now, create another function, `findInvalidCards()` that has one parameter for a nested array of credit card numbers. 
The role of `findInvalidCards()` is to check through the nested array for which numbers are invalid, and return another nested array of invalid cards.
*/

// (2) func: FIND INVALID CREDIT CARDS
// Use the same data from the last function.

const findInvalidCards = cards => {
  // new array with the list of cards that are invalid.
  const invalidCards = []; 

  // loop through the nested array.
  for (let i = 0; i < cards.length; i++) {
    let currCard = cards[i]; // this variable stands for each element (or array) from the array. Also, it will be used to apply the validateCred() function later.

    // If the value of the currCard is False (!), we push this value to the new array declared at the beginning. 
    if (!validateCred(currCard)) {
      invalidCards.push(currCard);
    }
  }
  // After, return this new array with the list of invalid cards
  return invalidCards;
}

// TEST
console.log(findInvalidCards(batch));
/*
prints a nested array with the digits of the invalid cards:
[ [ 4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5 ],
  [ 5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3 ],
  [ 3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4 ],
  [ 6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5 ],
  [ 5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4 ],
  [ 3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4 ],
  [ 6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3 ],
  [ 4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3 ] ]
*/

/*
After finding all the invalid credit card numbers, it’s also necessary to identify the credit card companies that have possibly issued these faulty numbers. 
Create a function, `idInvalidCardCompanies()` that has one parameter for a nested array of invalid numbers and returns an array of companies.
Currently, there are 4 accepted companies which each have unique first digits. The following table shows which digit is unique to which company:

| First Digit | Company |
| --- | --- |
| 3 | Amex (American Express) |
| 4 | Visa |
| 5 | Mastercard |
| 6 | Discover |

If the number doesn’t start with any of the numbers listed, print out a message like: “Company not found”.
`idInvalidCardCompanies()` should return an array of companies that have mailed out cards with invalid numbers. 
This array should NOT contain duplicates, i.e. even if there are two invalid Visa cards, `"Visa"` should only appear once in the array.
*/

// (3) func: FIND INVALID CARD COMPANIES
const idInvalidCardCompanies = cards => {
  const companies = [];
  for (let i = 0; i < cards.length; i++) {
    // cards[i][0] because we only want to check the first digit
    switch (cards[i][0]) {
      case 3:
      // **(*)** the -1 in these conditions is used to check if the Company's value is not found in the companies array.
        if (companies.indexOf('Amex') === -1) {
          companies.push('Amex');
        }
        break
      case 4:
        if (companies.indexOf('Visa') === -1) {
          companies.push('Visa');
        }
        break
      case 5:
        if (companies.indexOf('Mastercard') === -1) {
          companies.push('Mastercard');
        }
        break
      case 6:
        if (companies.indexOf('Discover') === -1) {
          companies.push('Discover');
        }
        break
      default:
        console.log('Company not found');
    }
  }
  return companies;
}

// TEST
console.log(idInvalidCardCompanies(batch)); // prints [ 'Visa', 'Mastercard', 'Amex', 'Discover' ]
console.log(idInvalidCardCompanies([mystery5])); // prints [ 'Visa' ]
