const { employees } = require('../data/zoo_data');

function isManager(id) {
  // será responsável por verificar se uma pessoa colaboradora é gerente ou não. O retorno dessa função deve ser um booleano;
  const employee = employees.find((elem) => elem.managers.includes(id));
  if (employee) {
    return true;
  }
  return false;
}

function getRelatedEmployees(managerId) {
  // se for uma pessoa colaboradora gerente, deve retornar um array contendo os nomes das pessoas colaboradoras que ela é responsável;
  if (isManager(managerId)) {
    const colaborator = employees.filter((el) => el.managers.includes(managerId));
    const name = colaborator.map((nome) => (`${nome.firstName} ${nome.lastName}`));
    return name;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
module.exports = { isManager, getRelatedEmployees };
