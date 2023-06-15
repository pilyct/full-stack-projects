/*
Have the function simpleEvens(num) check whether every single number in the passed in parameter is even. 
If so, return the string true, otherwise return the string false. 
For example: if num is 4602225 your program should return the string false because 5 is not an even number.

Examples
Input: 2222220222 ⇒ Output: true
Input: 20864646452 ⇒ Output: false
*/

const simpleEvens = num =>  (num.toString().split('').every(i => !(i % 2))) ? true : false;

console.log(simpleEvens(20864646452)); // prints false
console.log(simpleEvens(20864646442)); // prints true