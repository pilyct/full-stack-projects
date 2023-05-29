//----- JS Introduction: Built-in methods and variables

// Define myAge
const myAge = 29;

// Define earlyYears variable 
let earlyYears = 2;

// Reassign earlyYears as dog years
earlyYears *= 10.5;

// Define laterYears variable since we already accounted for the first two years
let laterYears = myAge - 2;

// Reassign laterYears. Multiply variable by 4 to calculate the number of dog years accounted for by your later years.
laterYears *= 4;

// Add earlyYears and laterYears and define new variable myAgeInDogYears

let myAgeInDogYears = earlyYears + laterYears

// Define myName
const myName = 'Pily'.toLowerCase()

// Check Results
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);

/*console.log(`earlyYears: ${earlyYears}`);
console.log(`laterYears: ${laterYears}`);*/