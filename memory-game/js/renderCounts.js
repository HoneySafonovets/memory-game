export default function renderCounts() {
  const stepCount = document.createElement('div');
  const pairСounter = document.createElement('div');

  // Add class
  stepCount.classList.add('footer__item', 'footer__item-left');
  pairСounter.classList.add('footer__item', 'footer__item-right');

  // Add text to buttons
  stepCount.textContent = 'Number of moves: 0';
  pairСounter.textContent = '0 out of 8 pairs';

  document.querySelector('.footer').append(stepCount);
  document.querySelector('.footer').append(pairСounter);
}