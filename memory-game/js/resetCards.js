export default function resetCards() { 
  document.querySelector('.main').textContent = '';
  document.querySelector('.footer__item-left-span').textContent = '0';
  document.querySelector('.footer__item-right-span').textContent = '0';
};