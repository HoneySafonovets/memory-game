export default function renderCounts() {
  const stepCount = document.createElement('div');
  const pairСounter = document.createElement('div');
  // Span in parent Element
  const stepCountSpan = document.createElement('span');
  const pairСounterSpan = document.createElement('span');

  // Add class
  stepCount.classList.add('footer__item', 'footer__item-left');
  pairСounter.classList.add('footer__item', 'footer__item-right');
  // Spans
  stepCountSpan.classList.add('footer__item-left-span');
  pairСounterSpan.classList.add('footer__item-right-span');

  // Add text to buttons
  stepCount.textContent = 'Moves: ';
  pairСounter.textContent = ` out of 8 pairs`;
  // Spans
  stepCountSpan.textContent = ' 0';
  pairСounterSpan.textContent = '0 ';

  document.querySelector('.footer').append(stepCount);
  document.querySelector('.footer').append(pairСounter);
  // Spans
  stepCount.append(stepCountSpan);
  pairСounter.prepend(pairСounterSpan);
}