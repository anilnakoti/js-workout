const plusMinus = require("./index");

test("plus-minus calculate proportions correctly for [-1, -1, 0, 1, 1]", () => {
  const mockConsoleLog = jest.fn();
  console.log = mockConsoleLog;
  const arr = [-1, -1, 0, 1, 1];
  plusMinus(arr);
  expect(mockConsoleLog.mock.calls[0][0]).toBeCloseTo(0.4);
  expect(mockConsoleLog.mock.calls[1][0]).toBeCloseTo(0.4);
  expect(mockConsoleLog.mock.calls[2][0]).toBeCloseTo(0.2);
});

test("plus-minus calculate proportions correctly for [-4, 3, -9, 0, 4, 1]", () => {
  const mockConsoleLog = jest.fn();
  console.log = mockConsoleLog;
  const arr = [-4, 3, -9, 0, 4, 1];
  plusMinus(arr);
  expect(mockConsoleLog.mock.calls[0][0]).toBeCloseTo(0.5);
  expect(mockConsoleLog.mock.calls[1][0]).toBeCloseTo(0.33333);
  expect(mockConsoleLog.mock.calls[2][0]).toBeCloseTo(0.16666);
});

test("plus-minus calculate proportions correctly for [1, 2, 3, -1, -2, -3, 0, 0]", () => {
  const mockConsoleLog = jest.fn();
  console.log = mockConsoleLog;
  const arr = [1, 2, 3, -1, -2, -3, 0, 0];
  plusMinus(arr);
  expect(mockConsoleLog.mock.calls[0][0]).toBeCloseTo(0.375000);
  expect(mockConsoleLog.mock.calls[1][0]).toBeCloseTo(0.375000);
  expect(mockConsoleLog.mock.calls[2][0]).toBeCloseTo(0.25000);
});
