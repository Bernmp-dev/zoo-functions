const data = require('../data/zoo_data');

const getEmployeeByName = (...employeeName) =>
  ((employeeName.length === 0) ? {} : data.employees.find((selected) =>
    employeeName.includes(selected.lastName) || employeeName.includes(selected.firstName)));

console.log(getEmployeeByName('Nigel'));

module.exports = getEmployeeByName;
