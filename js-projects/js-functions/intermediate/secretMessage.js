/*
Project: Secret Message

Using array methods, you will transform an array of strings into a secret message!
You should consult the [Mozilla Developer Network (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) for reference on any method with which you are not familiar.
*/


let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out', '-2015', 'Chris', 'Pine', 'Learn', 'JavaScript'];
console.log(secretMessage);
console.log(secretMessage.length);

// 1. request: Remove last string from the secretMessage
secretMessage.pop();

// 2. request: Check result from first request
console.log(secretMessage.length);

// 3. request: Add 2 more strings at the end of the array
secretMessage.push('to', 'Program');
console.log(secretMessage.length);

// 4. request: Change/Mutate item from the array
secretMessage[7] = 'right'
console.log(secretMessage);

// 5. request: Remove first string from array
secretMessage.shift();
console.log(secretMessage);

// 6. request: Add new item at the beginning of the array
secretMessage.unshift('Programming');
console.log(secretMessage);

// 7. request: Remove multiple items -> via range
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
secretMessage.splice(6,5,'know');
// solution: array.splice(indexToStart, numberOfIndices, 'stringToAdd')
console.log(secretMessage);

// 8. request: Join all the items from the array and log the secret message
console.log(secretMessage.join(' ')); // add space btw each item/string/word