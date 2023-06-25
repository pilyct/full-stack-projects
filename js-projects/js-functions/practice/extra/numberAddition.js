/*
Have the function numberAddition(str) take the str parameter, search for all the numbers in the string, add them together, then return that final number. 
For example: if str is "88Hello 3World!" the output should be 91. You will have to differentiate between single digit numbers and multiple digit numbers 
like in the example above. So "55Hello" and "5Hello 5" should return two different answers. Each string will contain at least one letter or symbol.

Examples
Input: "75Number9" ⇒ Output: 84
Input: "10 2One Number*1*" ⇒ Output: 13
*/

const numberAddition = str => {
    let arr = str.replace(/[^0-9]/g,' ').split(' ').map(Number).reduce((a, b) => a + b, 0)
    return arr;
}

console.log(numberAddition('10 2One Number*1*')); // prints 13
console.log(numberAddition('75Number9')); // prints 84
console.log(numberAddition('55HolaCaracola3 4!!!*')); // prints 62