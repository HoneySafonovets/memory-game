export default function movesCount(count) {
  count += 1;
  document.querySelector('.footer__item-left-span').textContent = '' + count;
  return count;
}