export default async function getData() {
  const response = await fetch('../data/animal.json');
  const data = await response.json();

  return data;
}