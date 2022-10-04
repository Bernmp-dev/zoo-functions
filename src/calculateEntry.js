const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const entrantsAgain = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

function countEntrants(entrants) {
  const adult = entrants.filter((curr) => curr.age >= 18 && curr.age < 50).length;
  const senior = entrants.filter((curr) => curr.age >= 50).length;
  const child = entrants.filter((curr) => curr.age < 18).length;
  const people = { adult, senior, child };
  return people;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;

  const peopleAmount = countEntrants(entrants);

  const result = (peopleAmount.adult * prices.adult)
  + (peopleAmount.child * prices.child)
  + (peopleAmount.senior * prices.senior);

  return result;
}

// console.log(countEntrants(entrantsAgain));
console.log(calculateEntry(entrantsAgain));

module.exports = { calculateEntry, countEntrants };
