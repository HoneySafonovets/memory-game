export default async function getData() {
  const response = await fetch('./data/animals.json');
  const data = await response.json();

  function mix(data) {
    for (let i = data.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [data[i], data[j]] = [data[j], data[i]];
    }
    return data;
  }

  mix(data);
  
  return data;
}