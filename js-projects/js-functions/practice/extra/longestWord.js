/*
Have the function longestWord(sen) take the sen parameter being passed and return the longest word in the string. 
If there are two or more words that are the same length, return the first word from the string with that length. 
Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"

Examples
Input: "fun&!! time" ⇒ Output: time
Input: "I love dogs" ⇒ Output: love
*/

const longestWord = sen => {
    let longestWord = sen.replace(/[^a-zA-Z\s]/g, '').split(' ').reduce((longest, currWord) => currWord.length > longest.length ? currWord : longest);

    return longestWord;

}

console.log(longestWord('fun&!! time')); // prints time
console.log(longestWord('pies time')); // prints pies