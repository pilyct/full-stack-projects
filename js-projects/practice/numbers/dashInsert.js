/*
Have the function dashInsert(str) insert dashes ('-') between each two odd numbers in str. 
For example: if str is 454793 the output should be 4547-9-3. Don't count zero as an odd number.

Examples
Input: 99946 ⇒ Output: 9-9-946
Input: 56730 ⇒ Output: 567-30
*/

const dashInsert = str => {
    let arr = str.split('')

    for (let i = 0; i < arr.length; i++){
       if (arr[i] % 2 !== 0 && arr[i+1] % 2 !== 0) {
        arr[i] = arr[i] + '-'; 
       } 
    }
    return arr.join('');
}

console.log(dashInsert('99946')); // prints 9-9-946
console.log(dashInsert('7589932146')); // prints 7-589-9-32146