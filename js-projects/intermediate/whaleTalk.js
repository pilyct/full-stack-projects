/*
Project: Whale Talk

Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.
There are a few simple rules for translating text to whale language:

1. There are no consonants. Only vowels excluding “y”.
2. The `u`‘s and `e`‘s are extra long, so we must double them in our program.

Once we have converted text to the whale language, the result is sung slowly, as is a custom in the ocean.
To accomplish this translation, we can use our knowledge of loops. Let’s get started!
*/

// This variable will contain the text you want to translate in “whale talk”.
//const input = 'vísteme despacio que tengo prisa';
const input = 'turpentine and turtles';

// This array will not be updated.
const vowels = ['a', 'e', 'i', 'o', 'u'];

// This will serve as a place to store the vowels from the input string.
const resultArray = [];

// Create a loop to iterate through each letter of the input variable text.
/*for (let i = 0; i < input.length; i++) {
  console.log('i is '+ i);
  //console.log(input.length); // This prints '32' 32 times 
  //console.log(input[i]); // This prints each character separately
}*/

/* Create a nested for loop inside of the for loop you just wrote. Make the inner loop iterate through the vowels array each time the outer loop runs.
This will enable you to check each letter of input against all the vowels elements during each iteration.*/

for (let i = 0; i < input.length; i++) {
  //console.log('i is '+ i)
  if (input[i] === 'e' || input[i] === 'u' ) {
    resultArray.push(input[i]);
  } // (+)

  for (let j = 0; j < vowels.length; j++) {
    //console.log('j is '+ j);
    if (input[i] === vowels[j]) {
      //console.log(input[i]);
      resultArray.push(input[i]);
    }  
  }
}

console.log(resultArray); // Check results outside the loop

/*
(+) Whales double their e‘s and the u‘s in their language.
Write an if statement that checks if each letter in the input string is equal to 'e'. 
If so, use the .push() method to add input[i] to the resultArray.
Note: This statement belongs before the inner for loop block inside the outer for loop. This is because you only want to perform this check once for every letter in the input.
*/

// Capitalise the array elements and put them together as one string. Declare a variable resultString that joins our resultArray into a single string and capitalizes all of its letters.
let resultString = resultArray.join('').toUpperCase();

console.log(resultString);
