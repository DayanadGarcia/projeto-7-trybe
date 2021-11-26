const { employees } = require('../data/zoo_data');
const { species } = require('../data/zoo_data');
// A função busca por informações do animal mais velho da primeira espécie gerenciada pela pessoa colaboradora do parâmetro.
// Passado o id de um funcionário, encontra a primeira espécie de animal gerenciado pelo funcionário, e retorna um array com nome, sexo e idade do animal mais velho dessa espécie.
function getOldestFromFirstSpecies(id) {
  const funcionario = employees.filter((elem) => elem.id.includes(id));// acessa pessoa
  const animal = funcionario[0].responsibleFor[0];// acessa animal
  const especie = species.find((elem) => elem.id.includes(animal));// acessa especie principal
  const populaty = especie.residents;// acessa os animais residentes da especie
  const maisVelho = populaty.sort((a, b) => b.age - a.age)[0];// ordena do maior pro menor e acessa o primeiro, ou seja, o mais velho
  return Object.values(maisVelho);// retorna os valores do objeto
}
module.exports = getOldestFromFirstSpecies;
