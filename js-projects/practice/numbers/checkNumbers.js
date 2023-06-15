/*
Have the function checkNums(num1,num2) take both parameters being passed and 
return the string true if num2 is greater than num1, otherwise return the string false. 
If the parameter values are equal to each other then return the string -1.

Examples 
Input: 3 & num2 = 122 ⇒ Output: true
Input: 67 & num2 = 67 ⇒ Output: -1
*/

const checkNums = (num1, num2) => (num2 > num1) ? true : (num2 === num1 ? -1 : false);

console.log(checkNums(8,8)); // prints -1
console.log(checkNums(3,5)); // prints true
console.log(checkNums(7,2)); // prints false