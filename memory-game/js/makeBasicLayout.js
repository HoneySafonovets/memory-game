export default function makeBasicLayout() {
  const footer = document.createElement('footer');
  const main = document.createElement('main');
  const header = document.createElement('header');

  // Add class
  footer.classList.add('footer');
  main.classList.add('main');
  header.classList.add('header');

  document.body.prepend(footer);
  document.body.prepend(main);
  document.body.prepend(header);
}