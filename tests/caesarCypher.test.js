const caesarCipher = require("../functions/caesarCypher");

test("no shift in cypher", () => {
  expect(caesarCipher("Hail Caeser", 0)).toBe("Hail Caeser");
});

test("shift one forwards", () => {
  expect(caesarCipher("Hello", 1)).toBe("Ifmmp");
});

test("shift one backwards", () => {
  expect(caesarCipher("Hello", -1)).toBe("Gdkkn");
});

test("shift ten backwards", () => {
  expect(caesarCipher("Ben", -10)).toBe("Rud");
});

test("all caps forwards", () => {
  expect(caesarCipher("WHY HELLO THERE", 3)).toBe("ZKB KHOOR WKHUH");
});

test("all caps, unscramble backwards", () => {
  expect(caesarCipher("ZKB KHOOR WKHUH", -3)).toBe("WHY HELLO THERE");
});

test("unscramble with two full alphabet shifts forwards", () => {
  expect(caesarCipher("Hello", 27)).toBe("Ifmmp");
});

test("Special characters remain unchanged", () => {
  expect(caesarCipher("What!!!! On!?@! Earth##", 1)).toBe(
    "Xibu!!!! Po!?@! Fbsui##"
  );
});
