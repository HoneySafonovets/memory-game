export default async function getData() {
  const response = await fetch('./data/animals.json');
  const data = await response.json();

  return data;
}