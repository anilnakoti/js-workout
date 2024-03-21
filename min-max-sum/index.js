/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

const miniMaxSum = (arr) => {
  // sort the arr in ascending order
  if (arr.length !== 5) {
    exceptionError();
  }

  arr.sort((a, b) => a - b);

  const totalSum = arr.reduce((acc, currentValue) => acc + currentValue, 0);
  const minimum = totalSum - arr[arr.length - 1];
  const maximum = totalSum - arr[0];

  return `${minimum} ${maximum}`;
};

const exceptionError = () => {
  throw new Error("Array length should be 5 integers long");
};

// console.log(miniMaxSum([1, 3, 5, 9]));

module.exports = { miniMaxSum, exceptionError };
