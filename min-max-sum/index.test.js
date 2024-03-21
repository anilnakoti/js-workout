const { miniMaxSum, exceptionError } = require("./index");

describe("min max sum function", () => {
  test("for [1,3,5,7,9] array", () => {
    expect(miniMaxSum([1, 3, 5, 7, 9])).toBe(`${16} ${24}`);
  });

  test("for [0,2,4,6,8] array", () => {
    expect(miniMaxSum([0, 2, 4, 6, 8])).toBe(`${12} ${20}`);
  });

  test("for [7,69,2,221,8974] array", () => {
    expect(miniMaxSum([7, 69, 2, 221, 8974])).toBe(`${299} ${9271}`);
  });

  test("exception if arr is [0,1,2,3] length less than 5", () => {
    expect(() => miniMaxSum([0, 1, 2])).toThrow(Error);
  });

  test("exception if arr is [0,1,2,3,6,7,8,9] length greater than 5", () => {
    expect(() => miniMaxSum([0, 1, 2, 3, 6, 7, 8, 9])).toThrow(Error);
  });
});
