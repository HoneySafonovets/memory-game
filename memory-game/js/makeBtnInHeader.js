import resetCards from './resetCards.js';
import makeRenderCardImMain from './makeRenderCardInMain.js';
import getData from './getData.js';
import leaderShow from './leaderShow.js';

export default function makeBtnInHeader() {
  const leftBtn = document.createElement('div');
  const rightBtn = document.createElement('div');

  // Add class
  leftBtn.classList.add('header__btn', 'header__left-btn');
  rightBtn.classList.add('header__btn', 'header__right-btn');

  // Add text to buttons
  leftBtn.textContent = 'New game';
  rightBtn.textContent = 'Leaderboard';


  document.querySelector('.header').append(leftBtn);
  document.querySelector('.header').append(rightBtn);

  // Add events listeners
  leftBtn.addEventListener('click', () => {
    resetCards();
    makeRenderCardImMain();
  });

  // Leader board
  rightBtn.addEventListener('click', () => {
    leaderShow();
  });
};