import getData from './getData.js';

export default async function makeRenderCardImMain() {
  const main = document.querySelector('.main');
  const data = await getData();
  // console.log(data)

  function renderCard(index) {
    const card = document.createElement('div');
    const cardBlank = document.createElement('div');

    card.classList.add('card');
    const img = document.createElement('img');

    // Add class for Cards item
    cardBlank.classList.add('card__blank');
    img.classList.add('card__img');
    img.src = `${data[0].img}`;


    // Add 
    main.append(card);

    // Set dataset
    card.dataset.name = `${index}`;
    card.append(img);
    card.append(cardBlank);
  }

  for (let i = 0; i < 16; i++) {
    renderCard(i);
  }

  main.addEventListener('click', (e) => {
    const target = e.target;

    if (!target.closest('.card')) return;

    if (target.closest('.card')) {
      target.closest('.card').classList.add('card-active');
    }
  })
}