const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  const myObj = {};
  if (!animal) {
    species.forEach((elem) => {
      myObj[elem.name] = elem.residents.length;// forma de add chave e valor no obj
    });
    return myObj;
  }
  const returnTotal = species.filter((el) => el.name.includes(animal.specie)); // retorna obj inteiro
  if (animal.specie && animal.sex) {
    const returnSex = returnTotal[0].residents.filter((elem) => elem.sex === animal.sex);
    return returnSex.length;
  }
  if (animal.specie) {
    const totalAnimais = returnTotal[0].residents.length;
    return totalAnimais;
  }
}
module.exports = countAnimals;
