const sum = require('./sum');

test("add", () => {
  expect(sum(1, 2)).toBe(3);
});