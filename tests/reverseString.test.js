const reverseString = require('../functions/reverseString');

test('Reverse a single word', () => {
    expect(reverseString('Reverse')).toBe('esreveR');
})

test('Reverse a single backwards word to be frontwards', () => {
    expect(reverseString('esreveR')).toBe('Reverse');
})

test('Reverse a sentence', () => {
    expect(reverseString('Hello how are you')).toBe('uoy era woh olleH');
})

test('Reverse a string of numbers', () => {
    expect(reverseString('123456789')).toBe('987654321');
})