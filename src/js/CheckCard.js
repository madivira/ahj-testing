import firstNumberCard from './firstNumberCard';

export default function CheckCard(numberCard) {
  for (const card in firstNumberCard) {
    if (Object.prototype.hasOwnProperty.call(firstNumberCard, card)) {
      for (let i = 0; i < firstNumberCard[card].length; i += 1) {
        const num = firstNumberCard[card][i];
        const numStr = String(numberCard);
        if (num === Number(numStr.slice(0, 2)) || num === Number(numStr.slice(0, 1))) {
          return card;
        }
      }
    }
  }
  return 0;
}
