// const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => data.species.find((element) =>
  (animal.includes(element.name))).residents.every((media) => media.age > age);

module.exports = getAnimalsOlderThan;

console.log(getAnimalsOlderThan('tigers', 19));
