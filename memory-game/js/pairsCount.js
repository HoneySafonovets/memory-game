export default function pairsCount(count) {
  count += 1;
  document.querySelector('.footer__item-right-span').textContent = '' + count;
  return count;
};