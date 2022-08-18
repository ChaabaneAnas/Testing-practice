const reverseString = require('./reverseString');
test('ErorrNotReversedCorrectly', () => {
  expect(reverseString('hello')).toBe('olleh');
})

