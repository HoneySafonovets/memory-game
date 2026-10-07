export default function leaderShow() {
  document.body.classList.add('no-scroll');
  const modalOverlay = document.createElement('div');
  const modal = document.createElement('div');
  const title = document.createElement('h1');
  const leadBody = document.createElement('div');
  const closeBtn = document.createElement('div');

  // Add class for modalOverlay
  modalOverlay.classList.add('modal__overlay-active');
  modal.classList.add('modal');
  title.classList.add('modal__title');
  leadBody.classList.add('modal__lead-body');
  closeBtn.classList.add('modal__close');

  // Add element on page
  document.body.append(modalOverlay);
  modalOverlay.append(modal);
  modal.append(title, leadBody, closeBtn);

  // Add text
  title.textContent = 'Leaderboard';
  closeBtn.textContent = 'Close';

  // Event Listener on Btn
  closeBtn.addEventListener('click', () => {
    modalOverlay.remove();
    document.body.classList.remove('no-scroll');
  });
}