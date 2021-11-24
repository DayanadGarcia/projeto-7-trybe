const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

// Esta função é responsável pela busca das pessoas colaboradoras através do primeiro ou do último nome delas

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const funcionario = employees.filter(({
    firstName,
    lastName,
  }) => firstName.includes(employeeName[0]) || lastName.includes(employeeName[1]));

  return Object.assign({}, ...funcionario);
}

console.log(getEmployeeByName('Emery'));
module.exports = getEmployeeByName;
