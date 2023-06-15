/*
Have the function letterCountI(str) take the str parameter being passed and return the first word with the greatest number of repeated letters. 
For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. 
If there are no words with repeating letters return -1. Words will be separated by spaces.

Examples
Input: "Hello apple pie" ⇒ Output: Hello
Input: "No words" ⇒ Output: -1
*/


const letterCountI = str => {
    const words = str.split(' ');
  
    let maxRepeatedLetters = 0;
    let wordWithMaxRepeatedLetters = '';
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const sortedWord = word.toLowerCase().split('').sort().join('');
  
      let count = 0;
      let prevChar = '';
  
      for (let j = 0; j < sortedWord.length; j++) {
        const currentChar = sortedWord[j];
  
        if (currentChar === prevChar) {
          count++;
        } else {
          count = 1;
        }
  
        if (count > maxRepeatedLetters) {
          maxRepeatedLetters = count;
          wordWithMaxRepeatedLetters = word;
        }
  
        prevChar = currentChar;
      }
    }
  
    if (maxRepeatedLetters > 1) {
      return wordWithMaxRepeatedLetters;
    } else {
      return -1;
    }
  }

console.log(letterCountI('Hello apple pie')) // prints hello
console.log(letterCountI('murcielagoo zzepelin manojjjo')) // prints manojjjo