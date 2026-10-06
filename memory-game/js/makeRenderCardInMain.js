import getData from './getData.js';
import resetCards from './resetCards.js';
import movesCount from './movesCount.js';
import pairsCount from './pairsCount.js';
import modalWin from './modalWin.js';

export default async function makeRenderCardImMain() {
  const main = document.querySelector('.main');
  const data = await getData();

  let count = 0;
  let pairs = 0;

  // console.log(data)
  let firstCard = null;
  let secondCard = null;

  let isLocked = false;

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
    if (isLocked) {
      return;
    }

    // Active card unclicked
    if (target.closest('.card') === firstCard) {
      return;
    }

    // Actived card unclicked
    if (target.closest('.card').classList.contains('card-active')) {
      return;
    }

    // First Card
    if (!firstCard) {
      firstCard = target.closest('.card');
      firstCard.classList.add('card-active');
      return;
    }

    // Second card 
    secondCard = target.closest('.card');
    secondCard.classList.add('card-active');

    // Blocked cards
    isLocked = true;

    // Check cards on ===
    if (firstCard.dataset.name === secondCard.dataset.name) {
      movesCount(count);
      pairsCount(pairs);
      // 
      count = movesCount(count);
      pairs = pairsCount(pairs);

      
      setTimeout(() => {
        firstCard = null;
        secondCard = null;
        isLocked = false;
        document.querySelector('.main').classList.remove('main-inactive');
        if (Number(pairs) === 2) {
          modalWin();
        };
        return;
      }, 900);
    } else {
      movesCount(count);
      count = movesCount(count);
      document.querySelector('.main').classList.add('main-inactive');
      setTimeout(() => {
        firstCard.classList.remove('card-active');
        secondCard.classList.remove('card-active');
        firstCard = null;
        secondCard = null;
        isLocked = false;
        document.querySelector('.main').classList.remove('main-inactive');
        return;
      }, 900)
    }
  }
  
  // Main Event Listener for CLICK
  main.addEventListener('click', cardShowImage);
}