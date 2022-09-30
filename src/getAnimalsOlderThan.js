// const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => data.species.find((element) =>
  (element.name.includes(animal))).residents.every((media) => media.age > age);

module.exports = getAnimalsOlderThan;

console.log(getAnimalsOlderThan('tigers', 19));
