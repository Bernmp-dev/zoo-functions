const data = require('../data/zoo_data');

const isManager = (id) => data.employees
  .some((selected) => selected.managers.includes(id));

const getRelatedEmployees = (managerId) => {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return data.employees.filter((selected) => selected.managers
    .includes(managerId)).map((current) => `${current.firstName} ${current.lastName}`);
};

module.exports = { isManager, getRelatedEmployees };
