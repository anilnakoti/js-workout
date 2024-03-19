/**
 * using javascript free functions(.split().reverse().join())
 * time complexity: O(n)
 * explanation: This solution splits the string into an array of characters, reverses the array, and then joins it back into a string. All these operations iterate over the characters of the string once, resulting in a time complexity proportional to the length of the string, which is O(n)
 */

// function reverseString(stringParam) {
//   return stringParam.split("").reverse().join("");
// }

/**
 * using a for loop in descending order (backward iteration)
 * time complexity: O(n)
 * explanation: In this solution, a for loop iterates through the string in descending order (i starts from stringParam.length - 1 and decrements to 0). It iterates over each character of the string once, resulting in a time complexity proportional to the length of the string, which is O(n).
 */
// function reverseString(stringParam) {
//   let reverseString = "";
//   for (let i = stringParam.length - 1; i >= 0; i--) {
//     reverseString += stringParam[i];
//   }
//   return reverseString;
// }

/**
 * using for loop in asecnding order (forward iteration)
 * time complexity: O(n^2)
 * explanation: This solution iterates through the string in ascending order (i starts from 0 and increments to stringParam.length - 1). However, in each iteration, it concatenates the current character to the beginning of the reverseString. Since string concatenation in JavaScript creates a new string each time, and the length of reverseString grows with each iteration, the time complexity becomes quadratic, resulting in O(n^2).
 */
// function reverseString(stringParam) {
//   let reverseString = "";
//   for (i = 0; i <= stringParam.length - 1; i++) {
//     reverseString = stringParam[i] + reverseString;
//   }
//   return reverseString;
// }

/**
 * using for of loop (ES6)
 * time complexity: O(n^2)
 * explanation: Similar to the previous solution, this one also iterates over each character of the string. However, concatenating the current character to the beginning of reverseString inside the loop leads to quadratic time complexity due to the same reasons as explained earlier.
 */
// function reverseString(stringParam) {
//   let reverseString = "";
//   for (let char of stringParam) {
//     reverseString = char + reverseString;
//   }
//   return reverseString;
// }

/**
 * using high order method for each loop
 * time complexity: O(n^2)
 * explanation: While this solution also iterates over each character using forEach, it suffers from the same issue of quadratic time complexity because concatenating characters to the beginning of reverseString within the callback function is inefficient.
 */
// function reverseString(stringParam) {
//   let reverseString = "";
//   stringParam
//     .split("")
//     .forEach((char) => (reverseString = char + reverseString));
//   return reverseString;
// }

/**
 * using high order array method reduce()
 * time complexity: O(n)
 * explanation: This solution utilizes the reduce higher-order function to iterate over the characters of the string and accumulate the reversed string. Since reduce iterates over the array only once and the accumulation of characters is done efficiently without creating unnecessary intermediate strings, the time complexity remains linear, which is O(n).
 */

function reverseString(stringParam) {
  return stringParam
    .split("")
    .reduce((reverseString, char) => char + reverseString, "");
}

/**
 *  Return a string in reverse
 *  eg: hello ==>  olleh
 */
const result = reverseString("hello");
console.log(result);
