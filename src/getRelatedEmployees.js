const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function isManager(id) {
  // que será responsável por verificar se uma pessoa colaboradora é gerente ou não. O retorno dessa função deve ser um booleano: true ou false;
  const ehGerente = employees.find((elem) => elem.managers.includes(id));
  if (ehGerente) {
    return true;
  } return false;
}

function getRelatedEmployees(managerId) {
// se for uma pessoa colaboradora gerente, deve retornar um array contendo os nomes das pessoas colaboradoras que ela é responsável;
  const arr = [];
  const ehGerente = employees.filter((el) => el.managers.includes(managerId));
  ehGerente.forEach((nome) => {
    arr.push(`${nome.firstName} ${nome.lastName}`);
  });
  return arr;
  // se não for uma pessoa colaboradora gerente, deverá ser lançado um erro gerado com a função construtora Error da biblioteca padrão do JavaScript com a mensagem "O id inserido não é de uma pessoa colaboradora gerente!".

}

// console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));
// console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
