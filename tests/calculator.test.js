const calculator = require("../functions/calculator");

test("Check addition", () => {
  expect(calculator.add(5, 6)).toBe(11);
});

test("Check subtraction", () => {
  expect(calculator.subtract(10, 4)).toBe(6);
});

test("Check division", () => {
  expect(calculator.divide(25, 5)).toBe(5);
});

test("Check multiplication", () => {
  expect(calculator.multiply(10, 11)).toBe(110);
});
