// JS - Recursion Functions
/* 
- Video: https://www.youtube.com/watch?v=51aNw5ShvmQ
- Source: https://www.w3resource.com/javascript-exercises/javascript-recursion-functions-exercises.php#EDITOR
*/

// Example 1.: Reverse String
// with for ... loop
const _reverseStr = input => {
    let outputStr = '';
    for (let i = input.length -1; i >= 0; i--){
        outputStr += input[i];
    }
    return outputStr;
}

console.log('\nEXERCISE 1: Reverse String');
console.log('For ... loop:');
console.log('-------------');
console.log(_reverseStr('morning'));

// with recursion - split solution into different subproblems
// logic: reverse(rest_of_the_part) + get_first_char
const reverseStr = input => {
    if (input === ''){
        return '';
    }
    // substring(1) = 'orning'
    // charAt(0) = 'm'
    // logic: reverse everything from index 1 and concatenate it with the first character (0)
    // = reverse('orning') + 'm'
    // = reverse('rning') + 'o' + 'm'
    // ...
    // = reverse('') + 'g' + 'n' + 'i' + 'n' + 'r' + 'o' + 'm'
    // and so on, until the end of the input ('') => when '' the function has nothing to call meaning its end
    return reverseStr(input.substring(1)) + input.charAt(0); 
}

console.log('\n');
console.log('Recursion:');
console.log('-------------');
console.log(reverseStr('morning'));

console.log('\nEXERCISE 2: Number Countdown');
// Example 2.: Number Cutdown
// with for ... loop
const _countDownFrom = n => {
    for (let i = n; i >= 1; i--) {
        console.log(i);
    }
}


console.log('For ... loop:');
console.log('-------------');
_countDownFrom(10);


// with recursion
const countDownFrom = n => {
    if (n <= 0){
        return;
    }

    console.log(n);
    countDownFrom(n-1);
}


console.log('\n');
console.log('Recursion:');
console.log('----------');
countDownFrom(10);


// OTHER EXAMPLES where Recursion can be applied
// Factorial of a Number
// Fibanocci Series
// Sum of Digits in a Number
// etc.


// Example 3.: Calculate Factorial of a Number.
// For instances, 5! = 5 x 4 x 3 x 2 x 1 = 120
const factorialNum = n => {
    if (n === 0) {
        return 1; 
    }
    return n * factorialNum(n - 1);
}

console.log('\nEXERCISE 3: Factorial of a Number');
console.log('Recursion:');
console.log('----------');
console.log(factorialNum(5));

/* Example 4.: Write a recursive function that, given a number n, adds all the even numbers up to that number.
Example: addEvens(8) -> 20 */

const addEvens = n => {
    if (n === 0) return 0;
    if (n % 2 === 0) {
        return n + addEvens(n - 1);
    } else {
        return addEvens(n - 1);
    }
}

console.log('\nEXERCISE 4: Add Evens to the given Number');
console.log('Recursion:');
console.log('----------');
console.log(addEvens(8));

/* Example 5.: Find the greatest common divisor (GCD) of two positive numbers.
Example: gcd(20,30) -> 10 */

// For this case, we'll use the Euclidean algorithm
const _gcd = (n1, n2) => {
    while (n1 != n2) {
        if (n1 > n2) {
            n1 -= n2;
        } else {
            n2 -= n1;
        }
    }
    return n1;

}

// with recursion
const gcd = (n1, n2) => {
    if (!n2) {
        return n1;
    }
    return gcd(n2, n1 % n2);
}

console.log('\nEXERCISE 5: Find the GCD');
console.log('Recursion:');
console.log('----------');
console.log(gcd(20,30));


/* Example 6.: Write a JS program to get integers in the range (x, y) using recursion.
Example: range(2,9) -> [3, 4, 5, 6, 7, 8] */
const range = (x, y) => {
    if (y - x === 2) {
        return [x + 1];
    } else {
        let list = range(x, y - 1);
        list.push(y - 1);
        return list
    }
}

console.log('\nEXERCISE 6: Find Range');
console.log('Recursion:');
console.log('----------');
console.log(range(2,9));

/* Example 7.: Write a JS program to compute the sum of an array of integers. 
Example: let array = [1, 2, 3, 4, 5, 6] -> 21 */
const sumArray = arr => {
    if (arr.length === 1) {
        return arr[0];
    } else {
        return arr.pop() + sumArray(arr);
    }
}

console.log('\nEXERCISE 7: Sum of an Array');
console.log('Recursion:');
console.log('----------');
console.log(sumArray([1, 2, 3, 4, 5, 6]));

/* Example 8.: Write a JS program to compute the exponent of a number.  
Note : The exponent of a number says how many times the base number is used as a factor.
Example: 8^2 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent. */
const exponentNum = (num, exp) => {
    if (exp === 0) {
        return 1;
    } else {
        return num * exponentNum(num, exp - 1);
    }
}

console.log('\nEXERCISE 8: Exponent of a Number');
console.log('Recursion:');
console.log('----------');
console.log(exponentNum(8, 2));
console.log(exponentNum(2, 4));

/* Example 9.: Write a JS program to get the first n Fibonacci numbers.  
Note : The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . 
Each subsequent number is the sum of the previous two. */
const fibonacciNum = n => {
    if (n === 1) {
        return [0, 1];
    } else {
        let sum = fibonacciNum(n - 1);
        sum.push(sum[sum.length - 1] + sum[sum.length - 2]);
        return sum;
    }
}

console.log('\nEXERCISE 9: Fibonacci Numbers');
console.log('Recursion:');
console.log('----------');
console.log(fibonacciNum(8));


/* Example 10.: Write a recursive function that, given a number n, adds all the numbers up to that number.
Example: addNumbers(8) -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 = 36) */

const addNumbers = n => {
    if  (n === 0) {
        return 0;
    } else {
        return n + addNumbers(n - 1);
    }
}

console.log('\nEXERCISE 10: Add Numbers');
console.log('Recursion:');
console.log('----------');
console.log(addNumbers(8));

/* Example 11.: Write a recursive function that, given a string, prints the same string without the last character. 
Example: pizza 
-> pizza
pizz
piz
pi
p
*/
function eatLetters(str) {
    console.log(str);
    str = str.slice(0, str.length - 1);
    if (str) eatLetters(str);
  }
  
  
  console.log('\nEXERCISE 11: Eat Letters');
  console.log('Recursion:');
  console.log('----------');
  console.log(eatLetters('pizza'));


