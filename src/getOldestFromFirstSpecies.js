const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const animalId = employees.find((curr) => curr.id
    .includes(id)).responsibleFor[0];

  return Object.values(species.find((curr) => curr.id.includes(animalId))
    .residents.reduce((acc, curr) => ((curr.age < acc.age) ? acc : curr)));
}

module.exports = getOldestFromFirstSpecies;
