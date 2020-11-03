import CheckCard from './CheckCard';
import luhnCard from './luhnCheck';

const clickVal = document.querySelector('button.click');
const inputCard = document.querySelector('input.numbers-card');
const luhn = document.querySelector('div.luhnAlgorithm');
const imageCard = document.querySelectorAll('div.image');

clickVal.addEventListener('click', (e) => {
  e.preventDefault();
  if (luhnCard(inputCard.value)) {
    luhn.innerHTML = '<span class="luhn-novalid" data-id="valid">VALID</span>';
  } else {
    luhn.innerHTML = '<span class="luhn-novalid" data-id="novalid">NOVALID</span>';
  }
});

const arrInputCard = [...imageCard];

inputCard.addEventListener('input', (e) => {
  arrInputCard.forEach((el) => {
    if (!el.classList.contains('dark')) {
      el.classList.add('dark');
    }
  });

  e.preventDefault();
  const check = CheckCard(Number(e.target.value));
  if (check) {
    const inputCheckCard = document.querySelector(`img.${check}`);
    inputCheckCard.parentElement.classList.remove('dark');
  }
});
