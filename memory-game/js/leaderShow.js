export default function modalWin() {
  // 
  document.querySelector('.header__right-btn').addEventListener('click', () => {
    modalOverlay.classList.add('modal__overlay-active');
  });
}