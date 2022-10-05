const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const findAnimal = (target) => species.find(({ name }) => name.includes(target)).availability;

const animalDays = (target) => Object.values(species
  .filter(({ availability }) => availability.includes(target))).map((curr) => curr.name);

const weekDays = {
  Tuesday: { officeHour: 'Open from 8am until 6pm', exhibition: animalDays('Tuesday') },
  Wednesday: { officeHour: 'Open from 8am until 6pm', exhibition: animalDays('Wednesday') },
  Thursday: { officeHour: 'Open from 10am until 8pm', exhibition: animalDays('Thursday') },
  Friday: { officeHour: 'Open from 10am until 8pm', exhibition: animalDays('Friday') },
  Saturday: { officeHour: 'Open from 8am until 10pm', exhibition: animalDays('Saturday') },
  Sunday: { officeHour: 'Open from 8am until 8pm', exhibition: animalDays('Sunday') },
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
};

const filterByDay = (target) => Object.entries(weekDays)
  .find((curr) => target === curr[0]).reduce((a, v) => ({ ...a, [target]: v }), 0);

function getSchedule(target) {
  const allSpecies = species.map((curr) => curr.name);
  const allDays = Object.keys(weekDays);

  if (allDays.includes(target)) {
    return filterByDay(target);
  }
  if (allSpecies.includes(target)) {
    return findAnimal(target);
  }
  if (target === 'Monday') {
    return { Monday: weekDays.Monday };
  }
  return { ...weekDays };
}

console.log(getSchedule('Friday'));

module.exports = getSchedule;
