const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  const adult = entrants.filter((curr) => curr.age >= 18 && curr.age < 50).length;
  const senior = entrants.filter((curr) => curr.age >= 50).length;
  const child = entrants.filter((curr) => curr.age < 18).length;
  return { adult, senior, child };
}
function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const peopleAmount = countEntrants(entrants);
  return Object.values(peopleAmount).reduce((acc, curr, i) =>
    acc + curr * Object.values(prices)[i], 0);
}

module.exports = { calculateEntry, countEntrants };
