const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // Esta função, a partir do nome de uma espécie e uma idade mínima, verifica se todos os animais daquela espécie possuem a idade mínima especificada
  // dica: filter para buscar a especie e every para verificar as idades
  const especie = species.filter((name) => animal.includes(name.name));
  const myObj = Object.assign({}, ...especie);
  const idade = myObj.residents.every((elem) => elem.age >= age);
  return idade;// deve retornar um valor booleano
}
console.log(getAnimalsOlderThan('otters', 7));
module.exports = getAnimalsOlderThan;
