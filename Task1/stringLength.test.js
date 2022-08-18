const stringlength = require('./stringLength');

test('ErorrWrongSize', () => {
  expect(stringlength('anas')).toBe(4);
})

test('ErorrLessThan1', () => {
  expect(stringlength('')).toBe('invalid');
});

test('ErorrMoreThan10', () => {
  expect(stringlength('aaaaaaaaaaaaaa')).toBe('invalid');
});

