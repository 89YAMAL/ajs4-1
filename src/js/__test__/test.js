import getHealth from '../game';

test.each([
  { name: 'Маг', health: 100, expected: 'healthy' },
  { name: 'Маг', health: 75, expected: 'healthy' },
  { name: 'Маг', health: 50, expected: 'wounded' },
  { name: 'Маг', health: 30, expected: 'wounded' },
  { name: 'Маг', health: 14, expected: 'critical' },
  { name: 'Маг', health: 5, expected: 'critical' },
])('testing healht function', ({ name, health, expected }) => {
  const result = getHealth({ name, health });
  expect(result).toBe(expected);
});
