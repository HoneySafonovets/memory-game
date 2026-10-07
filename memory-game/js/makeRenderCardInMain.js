import getData from './getData.js';
import resetCards from './resetCards.js';
import movesCount from './movesCount.js';
import pairsCount from './pairsCount.js';
import modalWin from './modalWin.js';
import { resetState, state } from './stateParametrs.js';

export default async function makeRenderCardImMain() {
  const main = document.querySelector('.main');
  const data = await getData();

  

  let count = state.count;
  let pairs = state.pairs;

  // console.log(data)
  let firstCard = state.firstCard;
  let secondCard = state.secondCard;

  let isLocked = state.isLocked;

  // Check
  // if (count > 0) {
  //   count = 0;
  //   pairs = 0;
  //   firstCard = null;
  //   secondCard = null;
  //   isLocked = false;
  // }

  // Function for render CARDS
  function renderCard(index) {
    const card = document.createElement('div');
    const cardBlank = document.createElement('div');

    card.classList.add('card');
    const img = document.createElement('img');

    // Add class for Cards item
    cardBlank.classList.add('card__blank');
    img.classList.add('card__img');

    // Add CARD to main
    main.append(card);
    
    // Set dataset
    // card.dataset.name = `${index}`;
    card.append(img);
    card.append(cardBlank);
  }

  // Add cards in MAIN
  for (let i = 0; i < 16; i++) {
    renderCard(i);
  }

  // Add image in each card
  document.querySelectorAll('.card__img').forEach((e, index) => {
    e.src = `${data[index].img}`;
    e.closest('.card').dataset.name = `${data[index].name}`;
  });

  // Check cards
  function cardShowImage(e) {
    const target = e.target;

    // If dont card
    if (!target.closest('.card')) return;

    // Locked
    if (state.isLocked) {
      return;
    }

    // Active card unclicked
    if (target.closest('.card') === state.firstCard) {
      return;
    }

    // Actived card unclicked
    if (target.closest('.card').classList.contains('card-active')) {
      return;
    }

    // First Card
    if (!state.firstCard) {
      state.firstCard = target.closest('.card');
      state.firstCard.classList.add('card-active');
      return;
    }

    // Second card 
    state.secondCard = target.closest('.card');
    state.secondCard.classList.add('card-active');

    // Blocked cards
    state.isLocked = true;

    // Check cards on ===
    if (state.firstCard.dataset.name === state.secondCard.dataset.name) {
      movesCount(state.count);
      pairsCount(state.pairs);
      // 
      state.count = movesCount(state.count);
      state.pairs = pairsCount(state.pairs);

      
      setTimeout(() => {
        state.firstCard = null;
        state.secondCard = null;
        state.isLocked = false;
        document.querySelector('.main').classList.remove('main-inactive');
        if (Number(state.pairs) === 8) {
          modalWin();
        };
        return;
      }, 900);
    } else {
      movesCount(state.count);
      state.count = movesCount(state.count);
      document.querySelector('.main').classList.add('main-inactive');
      setTimeout(() => {
        state.firstCard.classList.remove('card-active');
        state.secondCard.classList.remove('card-active');
        state.firstCard = null;
        state.secondCard = null;
        state.isLocked = false;
        document.querySelector('.main').classList.remove('main-inactive');
        return;
      }, 900)
    }
  }
  
  // Main Event Listener for CLICK
  main.addEventListener('click', cardShowImage);
}