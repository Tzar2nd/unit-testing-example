const capitalize = require("../functions/capitalize");

test("a lower case name becomes an upper case name", () => {
  expect(capitalize("benjamin")).toBe("Benjamin");
});

test("Blank string returns nothing", () => {
  expect(capitalize("")).toBe(undefined);
});

test("Long string returns only first letter capitalized", () => {
  expect(capitalize("the fox jumps over the cat")).toBe(
    "The fox jumps over the cat"
  );
});

test("1 character string returns capitalized", () => {
  expect(capitalize("b")).toBe("B");
});
