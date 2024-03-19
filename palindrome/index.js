/**
 *  solution one using two pointer approach
 *  time complexity: O(n)
 *  explaination: This approach uses two pointers starting from the beginning and end of the string, moving towards each other. It compares characters at corresponding positions. If any mismatch occurs, it returns false; otherwise, it continues until the pointers meet or cross each other, indicating that the string is a palindrome.
 */
// function isPalindrome(stringParam) {
//   let left = 0;
//   let right = stringParam.length - 1;

//   while (left < right) {
//     if (stringParam[left] !== stringParam[right]) return false;
//     left++;
//     right--;
//   }
//   return true;
// }

/**
 *  solution two using reverse and compare
 *  time complexity: O(n)
 *  explanation: This approach reverses the input string and compares it with the original string. If they are equal, the input string is a palindrome. This method is straightforward but involves creating a new string, which consumes additional space.
 */
// function isPalindrome(originalString) {
//   const reverseString = originalString.split("").reverse().join("");

//   return originalString === reverseString;
// }

/**
 * solution three using recursive approach
 * time complexity: O(n)
 * explanation: This solution checks if the first and last characters of the string match. If they do, it recursively checks the substring without the first and last characters until the length becomes 1 or less. If all comparisons are successful, it returns true, indicating a palindrome.
 */

// function isPalindrome(stringParam) {
//   if (stringParam.length <= 1) return true;
//   if (stringParam[0] !== stringParam[stringParam.length - 1]) return false;
//   return isPalindrome(stringParam.slice(1, -1));
// }

/**
 * solution four using iterative approach with array
 * time complexity: O(n)
 *  explanation: This method converts the string into an array of characters. It then continuously removes characters from the beginning and end of the array, comparing them until either the array is empty or only one character is left. If any mismatch occurs, it returns false; otherwise, it returns true.
 */

// function isPalindrome(stringParam) {
//   const chars = stringParam.split("");
//   while (chars.length >= 1) {
//     if (chars.shift() !== chars.pop()) return false;
//   }
//   return true;
// }

/**
 * solution five using recursion with pointers
 * time complexity: O(n)
 * expanation: This is a recursive solution that utilizes pointers to check characters from both ends of the string. It compares characters at positions indicated by the left and right pointers. If they match, it recursively calls itself with updated pointers until either the pointers cross each other or the entire string is traversed.
 */

function isPalindrome(stringParam, start = 0, end = stringParam.length - 1) {
  if (start >= end) return true;
  if (stringParam[start] !== stringParam[end]) return false;
  return isPalindrome(stringParam, ++start, --end);
}

/**
 *  Challenge to validate given string isPalindrome
 *  eg: "hello" ==> false is not palindrome
 *  eg: "racecar" ==> true is palindrome
 */
const result = isPalindrome("redivider");
console.log(result);
