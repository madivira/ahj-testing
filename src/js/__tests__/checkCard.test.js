import CheckCard from '../CheckCard';

test.each([
  ['visa', 4, 'visa'],
  ['discover', 60, 'discover'],
  ['american_express', 34, 'american_express'],
  ['american_express', 37, 'american_express'],
  ['mastercard', 51, 'mastercard'],
  ['mastercard', 52, 'mastercard'],
  ['mastercard', 53, 'mastercard'],
  ['mastercard', 54, 'mastercard'],
  ['mastercard', 55, 'mastercard'],
  ['maestro', 50, 'maestro'],
  ['maestro', 56, 'maestro'],
  ['maestro', 57, 'maestro'],
  ['maestro', 58, 'maestro'],
  ['maestro', 63, 'maestro'],
  ['maestro', 67, 'maestro'],
  ['mir', 2, 'mir'],
  ['jcb', 31, 'jcb'],
  ['jcb', 35, 'jcb'],
  ['none', 1, 0],
])('testing', (name, input, expected) => {
  expect(CheckCard(input)).toBe(expected);
});
