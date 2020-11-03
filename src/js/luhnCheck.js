export default function luhnCheck(num) {
  const number = num.toString();

  let sum = parseInt(number.charAt(number.length - 1), 10);

  for (let i = 0; i < number.length - 1; i += 1) {
    let value = parseInt(number.charAt(i), 10);

    if (i % 2 === 0) {
      value *= 2;
    }

    if (value > 9) {
      value -= 9;
    }

    sum += value;
  }

  return sum % 10 === 0;
}
