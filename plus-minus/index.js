/**
 * Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.
 */

/**
 * using reduce method
 */

// const plusMinus = (arr) => {
//   const counts = arr.reduce(
//     (acc, curentNumber) => {
//       acc[
//         curentNumber > 0 ? "positive" : curentNumber < 0 ? "negative" : "zero"
//       ]++;
//       return acc;
//     },
//     { positive: 0, negative: 0, zero: 0 }
//   );

//   const length = arr.length;
//   console.log(counts.positive / length);
//   console.log(counts.negative / length);
//   console.log(counts.zero / length);
// };

/**
 * using Map
 */

// const plusMinus = (arr) => {
//   const counts = new Map();
//   counts.set("positive", 0);
//   counts.set("negative", 0);
//   counts.set("zero", 0);

//   for (let num of arr) {
//     const sign = num > 0 ? "positive" : num < 0 ? "negative" : "zero";
//     counts.set(sign, counts.get(sign) + 1);
//   }

//   const length = arr.length;
//   console.log(counts.get("positive") / length);
//   console.log(counts.get("negative") / length);
//   console.log(counts.get("zero") / length);
// };

/**
 *
 * using for loop
 */
const plusMinus = (arr) => {
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) positiveCount++;
    else if (arr[i] < 0) negativeCount++;
    else zeroCount++;
  }

  console.log(positiveCount / arr.length);
  console.log(negativeCount / arr.length);
  console.log(zeroCount / arr.length);
};

// plusMinus([1, 2, 3, -1, -2, -3, 0, 0]);

module.exports = plusMinus;
