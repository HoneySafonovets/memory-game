import resetCards from './resetCards.js';
import makeRenderCardImMain from './makeRenderCardInMain.js';

export default function modalWin(number) {
  const modalOverlay = document.createElement('div');
  const modal = document.createElement('div');
  const title = document.createElement('h1');
  const subtitle = document.createElement('h2');
  const newGameBtn = document.createElement('div');
  const closeBtn = document.createElement('div');

  // Add class for modalOverlay
  modalOverlay.classList.add('modal__overlay-active');
  modal.classList.add('modal');
  title.classList.add('modal__title');
  subtitle.classList.add('modal__subtitle');
  closeBtn.classList.add('modal__close');
  newGameBtn.classList.add('modal__new-btn');

  document.body.append(modalOverlay);
  modalOverlay.append(modal);
  modal.append(title, subtitle, newGameBtn, closeBtn);

  // Add text
  title.textContent = 'You win!';
  subtitle.textContent = 'Your points: ' + document.querySelector('.footer__item-left-span').textContent;
  newGameBtn.textContent = 'New Game';
  closeBtn.textContent = 'Close';

  // Event Listener on Btn
  closeBtn.addEventListener('click', () => {
    modalOverlay.remove();
  });

  newGameBtn.addEventListener('click', () => {
    modalOverlay.remove();
    resetCards();
    makeRenderCardImMain();
  });
}