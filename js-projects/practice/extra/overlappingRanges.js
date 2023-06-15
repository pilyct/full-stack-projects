/*
Have the function overlappingRanges(arr) take the array of numbers stored in arr which will contain 5 positive integers, 
the first two representing a range of numbers (a to b), the next 2 also representing another range of integers (c to d), 
and a final 5th element (x) which will also be a positive integer, and return the string true if both sets of ranges overlap by at least x numbers. 
For example: if arr is [4, 10, 2, 6, 3] then your program should return the string true. 
The first range of numbers are 4, 5, 6, 7, 8, 9, 10 and the second range of numbers are 2, 3, 4, 5, 6. 
The last element in the array is 3, and there are 3 numbers that overlap between both ranges: 4, 5, and 6. 
If both ranges do not overlap by at least x numbers, then your program should return the string false.

Examples
Input: [5,11,1,5,1] ⇒ Output: true
Input: [1,8,2,4,4] ⇒ Output: false
*/

const overlappingRanges = arr => {
    let a = arr[0];
    let b = arr[1];
    let c = arr[2];
    let d = arr[3];
    let x = arr[4];

    let count = 0; // number of times a number is overlapped

    for (let i = a; i < b; i++){
        if (i >= c && i <= d){
            count++;
        }
    }
    return (count >= x) ? true : false;
}

console.log(overlappingRanges([5,11,1,5,1])); // prints true
console.log(overlappingRanges([1,8,2,4,4])); // prints false