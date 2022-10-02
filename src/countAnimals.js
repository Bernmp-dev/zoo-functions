const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return Object.fromEntries(species.map((curr) => [curr.name, curr.residents.length]));
  }
  if (Object.keys(animal).length === 1) {
    return species.find((curr) => animal.specie.includes(curr.name))
      .residents.length;
  }
  return species.find((curr) => curr.name.includes(animal.specie))
    .residents.filter((curr2) => curr2.sex === animal.sex).length;
}

console.log(countAnimals({ specie: 'elephants', sex: 'female' }));

module.exports = countAnimals;
