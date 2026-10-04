import getData from './getData.js';

export default function makeRenderCardImMain() {
  const main = document.querySelector('.main');
  console.log(getData());

  function renderCard(index) {
    const card = document.createElement('div');
    const cardBlank = document.createElement('div');

    card.classList.add('card');
    const img = document.createElement('img');


    cardBlank.classList.add('card__blank')
    // Обратная сторона (изображение)
    // const cardFront = document.createElement('div');
    // cardFront.classList.add('card__front');
    // const img = document.createElement('img');
    // img.src = ''; // путь к картинке
    // img.alt = 'card';
    // cardFront.append(img);


    main.append(card);

    // Set dataset
    card.dataset.name = `${index}`;
    card.append(img);
    card.append(cardBlank);
  }

  for (let i = 0; i < 16; i++) {
    renderCard(i);
  }
}