const analyze = require("../functions/analyze");

test("results expected from a standard array", () => {
  expect(analyze([1, 2, 3, 4, 5])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
});

test("individual tests of each function", () => {
  expect(analyze([1, 2, 3, 4, 5]).average).toBe(3);
  expect(analyze([1, 2, 3, 4, 5]).min).toBe(1);
  expect(analyze([1, 2, 3, 4, 5]).max).toBe(5);
  expect(analyze([1, 2, 3, 4, 5]).length).toBe(5);
});

test("minimum array", () => {
  expect(analyze([1])).toEqual({
    average: 1,
    min: 1,
    max: 1,
    length: 1,
  });
});

test("zero array", () => {
  expect(analyze([0])).toEqual({
    average: 0,
    min: 0,
    max: 0,
    length: 1,
  });
});

test("decimal numbers in array", () => {
  expect(analyze([1.5, 2.5, 3.3])).toEqual({
    average: (1.5 + 2.5 + 3.3) / 3,
    min: 1.5,
    max: 3.3,
    length: 3,
  });
});

test("null array should throw an error", () => {
  expect(() => analyze([])).toThrow(Error);
});
