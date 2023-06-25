/*
Have the function simpleAdding(num) add up all the numbers from 1 to num. 
For example: if the input is 4 then your program should return 10 because 1 + 2 + 3 + 4 = 10. 
For the test cases, the parameter num will be any number from 1 to 1000.

Examples
Input: 12 ⇒ Output: 78
Input: 140 ⇒ Output 9870
*/

const simpleAdding = num => num * (num + 1) / 2;

console.log(simpleAdding(12)); // prints 78
console.log(simpleAdding(3)); // prints 6